import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const vowels = [
  {
    letter: 'А а',
    translit: 'a',
    sound: 'Como la "a" en "padre"',
    pair: 'Я я',
    pairNote: 'versión suavizada: "ya"',
    example: 'мама (mama)',
  },
  {
    letter: 'О о',
    translit: 'o',
    sound: 'Como la "o" en "boca" (solo cuando es tónica)',
    pair: 'Ё ё',
    pairNote: 'versión suavizada: "yo"',
    example: 'окно (okno) – ventana',
  },
  {
    letter: 'У у',
    translit: 'u',
    sound: 'Como la "u" en "uva"',
    pair: 'Ю ю',
    pairNote: 'versión suavizada: "yu"',
    example: 'улица (ulitsa) – calle',
  },
  {
    letter: 'Э э',
    translit: 'e',
    sound: 'Como la "e" en "mesa"',
    pair: 'Е е',
    pairNote: 'versión suavizada: "ye"',
    example: 'это (eto) – esto',
  },
  {
    letter: 'Ы ы',
    translit: 'y',
    sound: 'Sonido gutural sin equivalente en español. Entre "i" y "u"',
    pair: 'И и',
    pairNote: 'versión suavizada: "i"',
    example: 'ты (ty) – tú',
  },
];

const consonantGroups = [
  {
    title: 'Siempre duras',
    letters: [
      {
        letter: 'Ж ж',
        sound: 'zh',
        note: 'Como la "j" francesa, nunca se suaviza',
      },
      { letter: 'Ш ш', sound: 'sh', note: 'Como "sh" en inglés, siempre dura' },
      { letter: 'Ц ц', sound: 'ts', note: 'Como "ts" en "tsar"' },
    ],
  },
  {
    title: 'Siempre suaves',
    letters: [
      {
        letter: 'Ч ч',
        sound: 'ch',
        note: 'Como "ch" en "chico", siempre suave',
      },
      {
        letter: 'Щ щ',
        sound: 'shch',
        note: 'Más suave que Ш, sonido prolongado "sh"',
      },
      { letter: 'Й й', sound: 'y', note: 'Como la "y" en "yate", semivocal' },
    ],
  },
  {
    title: 'Pares sordas / sonoras',
    letters: [
      {
        letter: 'П п / Б б',
        sound: 'p / b',
        note: 'Al final de palabra, Б → suena como П',
      },
      {
        letter: 'Т т / Д д',
        sound: 't / d',
        note: 'Al final de palabra, Д → suena como Т',
      },
      {
        letter: 'К к / Г г',
        sound: 'k / g',
        note: 'Al final de palabra, Г → suena como К',
      },
      {
        letter: 'Ф ф / В в',
        sound: 'f / v',
        note: 'Al final de palabra, В → suena como Ф',
      },
      {
        letter: 'С с / З з',
        sound: 's / z',
        note: 'Al final de palabra, З → suena como С',
      },
      {
        letter: 'Ш ш / Ж ж',
        sound: 'sh / zh',
        note: 'Al final de palabra, Ж → suena como Ш',
      },
    ],
  },
];

const specialLetters = [
  {
    letter: 'Ъ',
    name: 'Signo duro',
    icon: '🔒',
    description:
      'Separa una consonante de una vocal suavizada (е, ё, ю, я). Indica que la consonante anterior NO se suaviza.',
    example: 'объект (ob-yekt) – objeto',
  },
  {
    letter: 'Ь',
    name: 'Signo blando',
    icon: '🌿',
    description:
      'Suaviza la consonante anterior. No tiene sonido propio, pero cambia el sonido de la consonante que le precede.',
    example: 'день (denʼ) – día',
  },
];

const reductionRules = [
  {
    rule: 'О átona → suena como "a"',
    example: 'молоко → [malakó]',
    note: 'La o no acentuada se reduce a "a"',
  },
  {
    rule: 'Е átona → suena como "i"',
    example: 'река → [riká]',
    note: 'La e no acentuada se reduce',
  },
  {
    rule: 'Я átona → suena como "i"',
    example: 'язык → [izyk]',
    note: 'La ya no acentuada se reduce',
  },
  {
    rule: 'Consonante final sonora → ensordece',
    example: 'хлеб → [khlyep]',
    note: 'La б final suena como п',
  },
];

const quizQuestions = [
  {
    id: 'pq01',
    text: '¿Cómo suena la letra "Ж"?',
    options: ['...', 'sh (show)', 'zh (j francesa)', 'ch (chico)', 'ts (tsar)'],
    correctAnswer: 'zh (j francesa)',
  },
  {
    id: 'pq02',
    text: '¿Qué hace el signo blando (Ь)?',
    options: [
      '...',
      'Suaviza la consonante anterior',
      'Endurece la consonante anterior',
      'Es una vocal',
      'No tiene ningún efecto',
    ],
    correctAnswer: 'Suaviza la consonante anterior',
  },
  {
    id: 'pq03',
    text: 'La "О" no acentuada (átona) suena como:',
    options: ['...', 'o', 'u', 'a', 'e'],
    correctAnswer: 'a',
  },
  {
    id: 'pq04',
    text: '¿Cuál es la versión suavizada de "А а"?',
    options: ['...', 'Е е', 'Я я', 'Ё ё', 'Ю ю'],
    correctAnswer: 'Я я',
  },
  {
    id: 'pq05',
    text: '"Щ" se pronuncia como:',
    options: ['...', 'ts', 'ch duro', 'sh/ch prolongado y suave', 'zh'],
    correctAnswer: 'sh/ch prolongado y suave',
  },
  {
    id: 'pq06',
    text: '¿Qué ocurre con las consonantes sonoras al final de palabra?',
    options: [
      '...',
      'Se alargan',
      'Se omiten',
      'Se ensordecen (suenan como su par sordo)',
      'No cambian',
    ],
    correctAnswer: 'Se ensordecen (suenan como su par sordo)',
  },
  {
    id: 'pq07',
    text: '¿Qué hace el signo duro (Ъ)?',
    options: [
      '...',
      'Suaviza la consonante anterior',
      'Separa consonante de vocal suavizada sin suavizar la consonante',
      'Indica pausa',
      'Es una vocal',
    ],
    correctAnswer:
      'Separa consonante de vocal suavizada sin suavizar la consonante',
  },
  {
    id: 'pq08',
    text: '¿Cómo suena "Ы"?',
    options: [
      '...',
      'Como la "i" española normal',
      'Sonido gutural entre "i" y "u"',
      'Como la "y" en "yate"',
      'Como la "u" española',
    ],
    correctAnswer: 'Sonido gutural entre "i" y "u"',
  },
  {
    id: 'pq09',
    text: 'La letra "Б" al final de la palabra "хлеб" suena como:',
    options: ['...', 'б (b)', 'п (p)', 'в (v)', 'ф (f)'],
    correctAnswer: 'п (p)',
  },
  {
    id: 'pq10',
    text: '"Й" se comporta como:',
    options: [
      '...',
      'vocal',
      'semivocal (como "y" en yate)',
      'consonante dura',
      'signo mudo',
    ],
    correctAnswer: 'semivocal (como "y" en yate)',
  },
];

const PronunciationExercise = () => {
  const [activeTab, setActiveTab] = useState('vowels');
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showAnswersFull, setShowAnswersFull] = useState(false);

  const handleAnswerChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setShowResults(false);
    setShowAnswersFull(false);
  };

  const calculateScore = () =>
    quizQuestions.filter((q) => answers[q.id] === q.correctAnswer).length;

  const handleScore = () => {
    setShowResults(true);
    setShowAnswersFull(false);
  };
  const handleStartAgain = () => {
    setAnswers({});
    setShowResults(false);
    setShowAnswersFull(false);
  };
  const handleShowAnswers = () => {
    setShowAnswersFull(true);
    setShowResults(false);
  };

  const getAnswerStatus = (id) => {
    if (showAnswersFull) return 'show-answer';
    if (!showResults) return '';
    const q = quizQuestions.find((q) => q.id === id);
    return answers[id] === q.correctAnswer ? 'correct' : 'incorrect';
  };

  const score = showResults ? calculateScore() : null;

  const tabs = [
    { key: 'vowels', label: '🔤 Vocales' },
    { key: 'consonants', label: '🔊 Consonantes' },
    { key: 'special', label: '✨ Signos especiales' },
    { key: 'reduction', label: '📉 Reducción' },
    { key: 'quiz', label: '✏️ Ejercicio' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4">
      <div className="bg-htb-card rounded-lg border border-gray-800 p-4 sm:p-6 mb-4 sm:mb-6">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Pronunciación Rusa –{' '}
            <em className="text-htb-green"><SpeakableText text="Произношение" /></em>
          </h2>
          <p className="text-sm sm:text-base text-htb-text-dim">
            Vocales, consonantes, signos mudos y reglas de reducción.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-1 mb-6 border-b border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-2 text-sm font-medium rounded-t-lg transition-colors focus:outline-none ${
                activeTab === tab.key
                  ? 'text-htb-green border-b-2 border-htb-green bg-htb-sidebar'
                  : 'text-htb-text-dim hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ─── VOWELS ─── */}
        {activeTab === 'vowels' && (
          <div>
            <p className="text-htb-text-dim text-sm mb-5">
              El ruso tiene <strong className="text-white">10 vocales</strong> —
              5 "duras" y 5 "suaves". Las vocales suaves indican que la
              consonante anterior se suaviza.
            </p>
            <div className="space-y-3">
              {vowels.map((v, i) => (
                <div
                  key={i}
                  className="bg-htb-sidebar rounded-lg border border-gray-700 p-4"
                >
                  <div className="flex flex-wrap items-start gap-4">
                    <div className="flex gap-3 items-center min-w-fit">
                      <span className="text-3xl font-bold text-white w-12 text-center">
                        {v.letter}
                      </span>
                      <span className="text-htb-green font-mono text-lg">
                        →
                      </span>
                      <span className="text-3xl font-bold text-htb-green w-12 text-center">
                        {v.pair}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium">{v.sound}</p>
                      <p className="text-htb-text-dim text-sm">
                        Par suavizado (
                        <span className="text-htb-green">{v.pair}</span>):{' '}
                        {v.pairNote}
                      </p>
                      <p className="text-htb-text-dim text-xs mt-1 italic">
                        Ej: {v.example}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-htb-sidebar border border-htb-green/30 rounded-lg p-4">
              <p className="text-htb-green font-semibold mb-1">
                💡 Regla clave
              </p>
              <p className="text-htb-text text-sm">
                Las vocales{' '}
                <span className="text-white font-medium"><SpeakableText text="Я, Е, Ё, Ю, И" /></span>{' '}
                indican que la consonante anterior es <em>suave</em>. Las
                vocales{' '}
                <span className="text-white font-medium"><SpeakableText text="А, О, У, Э, Ы" /></span>{' '}
                indican que la consonante es <em>dura</em>.
              </p>
            </div>
          </div>
        )}

        {/* ─── CONSONANTS ─── */}
        {activeTab === 'consonants' && (
          <div className="space-y-6">
            {consonantGroups.map((group, gi) => (
              <div key={gi}>
                <h3 className="text-htb-green font-semibold text-base mb-3">
                  {group.title}
                </h3>
                <div className="overflow-x-auto rounded-lg border border-gray-700">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-htb-sidebar border-b border-gray-700">
                        <th className="px-4 py-2 text-left text-htb-green font-semibold">
                          Letra
                        </th>
                        <th className="px-4 py-2 text-left text-htb-green font-semibold">
                          Translit.
                        </th>
                        <th className="px-4 py-2 text-left text-htb-green font-semibold">
                          Nota
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.letters.map((l, i) => (
                        <tr
                          key={i}
                          className={`border-b border-gray-800 ${i % 2 === 0 ? 'bg-htb-bg' : 'bg-htb-sidebar/40'} hover:bg-htb-green/10 transition-colors`}
                        >
                          <td className="px-4 py-3 text-white font-bold text-xl">
                            {l.letter}
                          </td>
                          <td className="px-4 py-3 text-htb-green font-mono">
                            {l.sound}
                          </td>
                          <td className="px-4 py-3 text-htb-text text-sm">
                            {l.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ─── SPECIAL LETTERS ─── */}
        {activeTab === 'special' && (
          <div className="space-y-4">
            {specialLetters.map((s, i) => (
              <div
                key={i}
                className="bg-htb-sidebar rounded-lg border border-gray-700 p-5"
              >
                <div className="flex items-start gap-5">
                  <div className="flex flex-col items-center min-w-fit">
                    <span className="text-5xl font-bold text-htb-green">
                      {s.letter}
                    </span>
                    <span className="text-2xl mt-1">{s.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {s.name}
                    </h3>
                    <p className="text-htb-text text-sm mb-2">
                      {s.description}
                    </p>
                    <p className="text-htb-text-dim text-xs italic">
                      Ejemplo: {s.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-4">
              <p className="text-htb-green font-semibold mb-2">
                📌 Diferencia clave
              </p>
              <ul className="text-htb-text text-sm space-y-1 list-disc list-inside">
                <li>
                  <strong className="text-white"><SpeakableText text="Ь (blando)" /></strong> — suaviza
                  la consonante que lo precede
                </li>
                <li>
                  <strong className="text-white"><SpeakableText text="Ъ (duro)" /></strong> — separa sin
                  suavizar (raro, aparece tras prefijos)
                </li>
                <li>
                  Ambos son <strong className="text-white">mudos</strong>: no
                  tienen sonido propio
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* ─── REDUCTION ─── */}
        {activeTab === 'reduction' && (
          <div>
            <p className="text-htb-text-dim text-sm mb-5">
              En ruso, las vocales átonas (no acentuadas){' '}
              <strong className="text-white">cambian de sonido</strong>. Esto se
              llama{' '}
              <span className="text-htb-green font-medium">
                reducción vocálica
              </span>
              .
            </p>
            <div className="space-y-3 mb-6">
              {reductionRules.map((r, i) => (
                <div
                  key={i}
                  className="bg-htb-sidebar rounded-lg border border-gray-700 p-4 flex flex-wrap gap-4 items-start"
                >
                  <div className="flex-1 min-w-[180px]">
                    <p className="text-white font-semibold">{r.rule}</p>
                    <p className="text-htb-text-dim text-sm mt-1">{r.note}</p>
                  </div>
                  <div className="bg-htb-bg rounded px-3 py-2 border border-gray-700 font-mono text-htb-green text-sm whitespace-nowrap">
                    {r.example}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-4">
              <p className="text-htb-green font-semibold mb-2">
                🔑 Por qué es importante
              </p>
              <p className="text-htb-text text-sm">
                El acento en ruso no está marcado en los textos normales, pero
                determina completamente cómo suena una palabra. Por ejemplo,{' '}
                <span className="text-white font-medium"><SpeakableText text="замок" /></span> significa{' '}
                <em>castillo</em> o <em>cerradura</em> dependiendo de qué sílaba
                se acentúa.
              </p>
            </div>
          </div>
        )}

        {/* ─── QUIZ ─── */}
        {activeTab === 'quiz' && (
          <div>
            <p className="text-htb-text-dim text-sm mb-4">
              Elige la respuesta correcta para cada pregunta.
            </p>

            {showResults && (
              <div className="mb-6 p-4 rounded-lg bg-htb-sidebar border-2 border-htb-green">
                <p className="text-xl font-semibold text-white mb-2">
                  Puntuación: {score}/{quizQuestions.length}
                </p>
                <ul className="list-disc list-inside text-htb-text text-sm">
                  <li>0–3 Sigue repasando 💪</li>
                  <li>4–6 ¡Buena base! 👍</li>
                  <li>7–9 ¡Muy bien! 🌟</li>
                  <li>10/10 ¡Perfecto! 🏆</li>
                </ul>
              </div>
            )}

            <div className="space-y-4 mb-6">
              {quizQuestions.map((question, index) => {
                const status = getAnswerStatus(question.id);
                const isCorrect = status === 'correct';
                const isIncorrect = status === 'incorrect';
                const shouldShowAnswer = status === 'show-answer';

                return (
                  <div
                    key={question.id}
                    className="bg-htb-sidebar p-4 rounded-lg border border-gray-800"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-htb-green font-bold text-lg">
                        {index + 1}.
                      </span>
                      <span className="text-white text-base flex-1">
                        {question.text}
                      </span>
                    </div>
                    <div className="ml-7 flex items-center gap-3">
                      <select
                        value={
                          shouldShowAnswer
                            ? question.correctAnswer
                            : answers[question.id] || ''
                        }
                        onChange={(e) =>
                          handleAnswerChange(question.id, e.target.value)
                        }
                        disabled={showAnswersFull}
                        className={`w-full max-w-lg px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-htb-green bg-htb-bg text-white transition-colors ${
                          isCorrect
                            ? 'border-htb-green bg-htb-green/20'
                            : isIncorrect
                              ? 'border-red-500 bg-red-500/20'
                              : shouldShowAnswer
                                ? 'border-htb-green bg-htb-green/20'
                                : 'border-gray-700 hover:border-htb-green/50'
                        }`}
                      >
                        {question.options.map((option, idx) => (
                          <option
                            key={idx}
                            value={option === '...' ? '' : option}
                            className="bg-htb-bg text-white"
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                      {isCorrect && (
                        <span className="text-htb-green font-bold whitespace-nowrap">
                          ✓ Correcto
                        </span>
                      )}
                      {isIncorrect && (
                        <span className="text-red-500 font-bold whitespace-nowrap">
                          ✗ Incorrecto
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleScore}
                className="px-6 py-2 bg-htb-green text-htb-bg rounded-lg font-medium hover:bg-htb-green/90 transition-colors focus:outline-none focus:ring-2 focus:ring-htb-green focus:ring-offset-2 focus:ring-offset-htb-bg"
              >
                Ver Puntuación
              </button>
              <button
                onClick={handleStartAgain}
                className="px-6 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-htb-bg border border-gray-600"
              >
                Reiniciar
              </button>
              <button
                onClick={handleShowAnswers}
                className="px-6 py-2 bg-htb-sidebar text-htb-green rounded-lg font-medium hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-htb-green focus:ring-offset-2 focus:ring-offset-htb-bg border border-htb-green/30"
              >
                Ver Respuestas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PronunciationExercise;
