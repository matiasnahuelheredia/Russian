/**
 * add-tts.mjs  (v2)
 * Injects <SpeakableText text={...} /> into every Exercise component that
 * renders Russian text but doesn't use SpeakableText yet.
 *
 * Detection strategy:
 *   A) Object-property JSX children: {x.ru}, {x.ruso}, {x.verbo}, {x.ej} …
 *   B) Inline Cyrillic string literals between JSX tags: >Привет<
 *
 * Run: node scripts/add-tts.mjs
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const COMPONENTS_DIR = 'src/components';
const IMPORT_LINE = "import SpeakableText from './SpeakableText';";

const RUSSIAN_PROPS = new Set([
  'ru', 'ruso',
  'forma', 'verbo', 'conjugacion', 'infinitivo', 'inf',
  'perf', 'imp', 'asp',
  'yo', 'tu', 'el', 'nos', 'vos', 'ellos',
  'nom', 'masc', 'fem', 'neutro', 'pl', 'singular', 'plural',
  'participio', 'gerundio',
  'ej', 'form', 'w', 'd', 'e', 'patron',
]);

const SKIP_FILES = new Set([
  'SpeakableText.jsx','TTSLoadingBar.jsx','ExerciseView.jsx',
  'ExamView.jsx','ExamView2.jsx','ExamView3.jsx','ExamView4.jsx','ExamView5.jsx','ExamView6.jsx','ExamViewC1.jsx',
  'Layout.jsx','Sidebar.jsx','Introduction.jsx','SuccessModal.jsx',
  'EmailWritingB1.jsx','EmailWritingB2.jsx','VerbBeA1Exercise.jsx',
  // Pure English exercises
  'AnimalIssuesC1Exercise.jsx','AnimalsBirdsInsectsC1Exercise.jsx',
  'CleftSentencesC1Exercise.jsx','CompoundPossessiveNounsC1Exercise.jsx',
  'ConflictWarfareExercise.jsx','ConfusingAdverbsExercise.jsx',
  'DiscourseMarkersC1Exercise.jsx','DistancingC1Exercise.jsx',
  'EllipsisC1Exercise.jsx','FuturePlansC1Exercise.jsx',
  'GerundsInfinitivesC1Exercise.jsx','GetVerbC1Exercise.jsx',
  'HaveHadC1Exercise.jsx','IdiomsC1Exercise.jsx','InversionC1Exercise.jsx',
  'JobInterviewB2.jsx','JobInterviewCSharp.jsx',
  'LinkersC1Exercise.jsx','LinkingWordsB2.jsx',
  'ManagerialReportsExercise.jsx','MatchExercise.jsx',
  'MoneyVocabularyC1Exercise.jsx','NegativePrefixesC1Exercise.jsx',
  'PermissionObligationC1Exercise.jsx','PersonalQuestionsB2.jsx',
  'PhonesTechnologyC1Exercise.jsx','PhonesTechnologyExercise.jsx',
  'PhrasalVerbsC1Exercise.jsx','PictureDescriptionB2.jsx',
  'PrefixesMeaningsC1Exercise.jsx','RelativeClausesC1Exercise.jsx',
  'SentenceAdverbsExercise.jsx','SoundsVoiceC1Exercise.jsx',
  'SpeculationDeductionC1Exercise.jsx','StoryTellingB2.jsx',
  'TalkAboutYourselfB2.jsx','TimeExpressionsC1Exercise.jsx',
  'UnrealPastTensesC1Exercise.jsx','VerbObjectInfinitiveGerundC1Exercise.jsx',
  'VerbSensesC1Exercise.jsx','VerbsSensesC1Exercise.jsx',
  'WorkVocabularyC1Exercise.jsx','ExpressionsIdiomsC1Exercise.jsx',
  'UtensilsC1Exercise.jsx','AdjectivesC1Exercise.jsx','AdjectivesExercise.jsx',
]);

const CYRILLIC_RE = /[\u0400-\u04FF]/;

function addImport(code) {
  if (code.includes(IMPORT_LINE)) return code;
  const lines = code.split('\n');
  let lastImport = 0;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImport = i;
  }
  lines.splice(lastImport + 1, 0, IMPORT_LINE);
  return lines.join('\n');
}

function transformProps(code) {
  const propsPattern = [...RUSSIAN_PROPS].join('|');
  const regex = new RegExp(`\\{([a-zA-Z_$][a-zA-Z0-9_$]*)\\.(${propsPattern})\\}`, 'g');
  return code.replace(regex, (match, varName, prop, offset) => {
    const lineStart = code.lastIndexOf('\n', offset) + 1;
    const before = code.slice(lineStart, offset);
    const lastEq = before.lastIndexOf('=');
    const lastGt = before.lastIndexOf('>');
    if (lastEq !== -1 && lastEq > lastGt) return match;
    const backticks = (before.match(/`/g) || []).length;
    if (backticks % 2 === 1) return match;
    return `<SpeakableText text={${varName}.${prop}} />`;
  });
}

function transformInlineCyrillic(code) {
  const lines = code.split('\n');
  return lines.map((line) => {
    if (!CYRILLIC_RE.test(line)) return line;
    const trimmed = line.trimStart();
    // Skip data lines, comments, already-wrapped
    if (
      trimmed.startsWith('//') || trimmed.startsWith('*') || trimmed.startsWith('/*') ||
      trimmed.includes('SpeakableText') ||
      /^\s+[a-zA-Z_$][a-zA-Z0-9_$]*\s*[=:]/.test(line)
    ) return line;

    // Replace Cyrillic text between > and < (JSX children only)
    return line.replace(/(>)(\s*)([^<>{}"'`]+?)(\s*)(<)/g, (full, gt, wsL, text, wsR, lt) => {
      if (!CYRILLIC_RE.test(text)) return full;
      const t = text.trim();
      if (!t) return full;
      return `${gt}${wsL}<SpeakableText text="${t}" />${wsR}${lt}`;
    });
  }).join('\n');
}

const files = readdirSync(COMPONENTS_DIR).filter((f) => f.endsWith('.jsx') && !SKIP_FILES.has(f));
let modified = 0, skipped = 0;

for (const file of files) {
  const filePath = join(COMPONENTS_DIR, file);
  let code = readFileSync(filePath, 'utf8');
  const original = code;
  code = transformProps(code);
  code = transformInlineCyrillic(code);
  if (code === original) { skipped++; continue; }
  code = addImport(code);
  writeFileSync(filePath, code, 'utf8');
  console.log(`[✓] ${file}`);
  modified++;
}

console.log(`\nDone: ${modified} modified, ${skipped} skipped.`);
