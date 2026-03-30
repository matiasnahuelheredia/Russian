/**
 * add-tts.mjs
 * Automatically injects SpeakableText into every Exercise component that
 * renders Russian text but doesn't yet import SpeakableText.
 *
 * Russian text detection strategy:
 *   - Properties named `.ru`, `.ruso` are always Russian text.
 *   - Properties named `.forma`, `.nom`, `.masc`, `.fem`, `.neutro`, `.pl`,
 *     `.yo`, `.tu`, `.el`, `.singular`, `.plural`, `.inf`, `.infinitivo`
 *     are Russian word forms in conjugation/declension tables.
 *   - Only replaces JSX *children* (not attribute values like title={x.ru}).
 *
 * Run with: node scripts/add-tts.mjs
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';

const COMPONENTS_DIR = 'src/components';
const IMPORT_LINE = "import SpeakableText from './SpeakableText';";

// JSX attribute names where we must NOT wrap (the value goes to a prop, not rendered)
const SKIP_ATTRS = new Set([
  'title', 'text', 'value', 'placeholder', 'alt', 'key',
  'aria-label', 'data-text', 'correctAnswer', 'correct', 'correcta',
]);

// Object property names that hold Russian text to be rendered as JSX children
const RUSSIAN_PROPS = new Set([
  'ru', 'ruso',
  'forma', 'nom', 'masc', 'fem', 'neutro', 'pl', 'singular', 'plural',
  'yo', 'tu', 'el', 'inf', 'infinitivo',
  // some files use these for CyrillicAlphabet - skip 'upper'/'lower' since
  // VerbBeA1Exercise handles them with useTTS directly
]);

// Skip files that don't need modification or are infrastructure
const SKIP_FILES = new Set([
  'SpeakableText.jsx', 'TTSLoadingBar.jsx', 'ExerciseView.jsx',
  'ExamView.jsx', 'ExamView2.jsx', 'ExamView3.jsx', 'ExamView4.jsx',
  'ExamView5.jsx', 'ExamView6.jsx', 'ExamViewC1.jsx',
  'Layout.jsx', 'Sidebar.jsx', 'Introduction.jsx', 'SuccessModal.jsx',
  'EmailWritingB1.jsx', 'EmailWritingB2.jsx',
  // VerbBeA1Exercise uses useTTS directly for the alphabet grid — keep as-is
  'VerbBeA1Exercise.jsx',
]);

// ─── helpers ────────────────────────────────────────────────────────────────

function alreadyHasSpeakable(code) {
  return code.includes('SpeakableText');
}

function addImport(code) {
  // Insert after the last import line
  const lines = code.split('\n');
  let lastImport = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImport = i;
  }
  lines.splice(lastImport + 1, 0, IMPORT_LINE);
  return lines.join('\n');
}

/**
 * Replace JSX child expressions like {x.ru} or {x.ruso} with
 * <SpeakableText text={x.ru} /> — but only when they appear as JSX children,
 * not inside attribute values.
 *
 * We detect attribute context by checking whether the expression is preceded
 * on its line by `=` with no intervening `>` (a crude but effective heuristic
 * for JSX attribute syntax like title={x.ru}).
 */
function transformCode(code) {
  // Build a regex matching {VAR.PROP} for every russian prop
  const propsPattern = [...RUSSIAN_PROPS].join('|');
  // Matches: {anything.prop} possibly with whitespace
  const regex = new RegExp(`\\{([a-zA-Z_$][a-zA-Z0-9_$]*)\\.(${propsPattern})\\}`, 'g');

  const result = code.replace(regex, (match, varName, prop, offset) => {
    // Get the portion of the current line before this match
    const lineStart = code.lastIndexOf('\n', offset) + 1;
    const before = code.slice(lineStart, offset);

    // If there's an `=` before us on this line (and no `>` between `=` and us),
    // we're likely inside an attribute value — skip
    const lastEq = before.lastIndexOf('=');
    const lastGt = before.lastIndexOf('>');
    if (lastEq !== -1 && lastEq > lastGt) {
      return match; // inside attr, leave alone
    }

    // Also skip if we're inside a string (template literal, etc.) — simple check:
    // count unescaped backticks before us on this line
    const backticks = (before.match(/`/g) || []).length;
    if (backticks % 2 === 1) return match;

    return `<SpeakableText text={${varName}.${prop}} />`;
  });

  return result;
}

// ─── main ───────────────────────────────────────────────────────────────────

const files = readdirSync(COMPONENTS_DIR)
  .filter((f) => f.endsWith('.jsx') && !SKIP_FILES.has(f));

let modified = 0;
let skipped = 0;

for (const file of files) {
  const filePath = join(COMPONENTS_DIR, file);
  let code = readFileSync(filePath, 'utf8');

  // Check if there's any Russian text to wrap
  const propsPattern = [...RUSSIAN_PROPS].join('|');
  const hasRussian = new RegExp(`\\{[a-zA-Z_$][a-zA-Z0-9_$]*\\.(${propsPattern})\\}`).test(code);

  if (!hasRussian) {
    skipped++;
    continue;
  }

  if (alreadyHasSpeakable(code)) {
    // Already has SpeakableText — still transform any remaining unwrapped ones
    const transformed = transformCode(code);
    if (transformed !== code) {
      writeFileSync(filePath, transformed, 'utf8');
      console.log(`[updated] ${file}`);
      modified++;
    } else {
      skipped++;
    }
    continue;
  }

  // Add import + transform
  code = addImport(code);
  code = transformCode(code);

  writeFileSync(filePath, code, 'utf8');
  console.log(`[+import +transform] ${file}`);
  modified++;
}

console.log(`\nDone: ${modified} files modified, ${skipped} skipped.`);
