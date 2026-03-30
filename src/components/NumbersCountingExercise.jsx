import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const NumbersCountingExercise = () => {
  const [activeTab, setActiveTab] = useState('reference');
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showAnswersFull, setShowAnswersFull] = useState(false);

  // ── Reference data ────────────────────────────────────────────────────────
  const cardinals0_20 = [
    { num: 0, ru: 'ноль', translit: 'nolʼ' },
    { num: 1, ru: 'один / одна', translit: 'odin / odná' },
    { num: 2, ru: 'два / две', translit: 'dva / dvye' },
    { num: 3, ru: 'три', translit: 'tri' },
    { num: 4, ru: 'четыре', translit: 'chetyré' },
    { num: 5, ru: 'пять', translit: 'pyatʼ' },
    { num: 6, ru: 'шесть', translit: 'shestʼ' },
    { num: 7, ru: 'семь', translit: 'semʼ' },
    { num: 8, ru: 'восемь', translit: 'vósemʼ' },
    { num: 9, ru: 'девять', translit: 'dyévyatʼ' },
    { num: 10, ru: 'десять', translit: 'dyésyatʼ' },
    { num: 11, ru: 'одиннадцать', translit: 'odínnadtsatʼ' },
    { num: 12, ru: 'двенадцать', translit: 'dvenádtsatʼ' },
    { num: 13, ru: 'тринадцать', translit: 'trinádtsatʼ' },
    { num: 14, ru: 'четырнадцать', translit: 'chetyrnádtsatʼ' },
    { num: 15, ru: 'пятнадцать', translit: 'pyatnádtsatʼ' },
    { num: 16, ru: 'шестнадцать', translit: 'shestnádtsatʼ' },
    { num: 17, ru: 'семнадцать', translit: 'semnadtsatʼ' },
    { num: 18, ru: 'восемнадцать', translit: 'vosemnadtsatʼ' },
    { num: 19, ru: 'девятнадцать', translit: 'devyatnadtsatʼ' },
    { num: 20, ru: 'двадцать', translit: 'dvádtsatʼ' },
  ];

  const tens = [
    { num: 10, ru: 'десять', translit: 'dyésyatʼ' },
    { num: 20, ru: 'двадцать', translit: 'dvádtsatʼ' },
    { num: 30, ru: 'тридцать', translit: 'trídtsatʼ' },
    { num: 40, ru: 'сорок', translit: 'sórok' },
    { num: 50, ru: 'пятьдесят', translit: 'pyatʼdesyát' },
    { num: 60, ru: 'шестьдесят', translit: 'shestʼdesyát' },
    { num: 70, ru: 'семьдесят', translit: 'sémʼdesyat' },
    { num: 80, ru: 'восемьдесят', translit: 'vósemʼdesyat' },
    { num: 90, ru: 'девяносто', translit: 'devyanósto' },
    { num: 100, ru: 'сто', translit: 'sto' },
  ];

  const hundreds = [
    { num: 100, ru: 'сто', translit: 'sto' },
    { num: 200, ru: 'двести', translit: 'dvyésti' },
    { num: 300, ru: 'триста', translit: 'trísta' },
    { num: 400, ru: 'четыреста', translit: 'chetyrésta' },
    { num: 500, ru: 'пятьсот', translit: 'pyatʼsót' },
    { num: 600, ru: 'шестьсот', translit: 'shestʼsót' },
    { num: 700, ru: 'семьсот', translit: 'semʼsót' },
    { num: 800, ru: 'восемьсот', translit: 'vosemʼsót' },
    { num: 900, ru: 'девятьсот', translit: 'devyatʼsót' },
    { num: 1000, ru: 'тысяча', translit: 'týsyacha' },
  ];

  const ordinals = [
    { num: '1º', ru: 'первый / первая', translit: 'pérvyj / pérvaya' },
    { num: '2º', ru: 'второй / вторая', translit: 'vtoróy / vtoráya' },
    { num: '3º', ru: 'третий / третья', translit: 'tryétij / tryétʼya' },
    {
      num: '4º',
      ru: 'четвёртый / четвёртая',
      translit: 'chetvyórtyj / chetvyórtaya',
    },
    { num: '5º', ru: 'пятый / пятая', translit: 'pyátyj / pyátaya' },
    { num: '6º', ru: 'шестой / шестая', translit: 'shestóy / shestáya' },
    { num: '7º', ru: 'седьмой / седьмая', translit: 'sedʼmóy / sedʼmáya' },
    { num: '8º', ru: 'восьмой / восьмая', translit: 'vosʼmóy / vosʼmáya' },
    { num: '9º', ru: 'девятый / девятая', translit: 'devyátyj / devyátaya' },
    { num: '10º', ru: 'десятый / десятая', translit: 'desyátyj / desyátaya' },
  ];

  // ── Quiz questions ────────────────────────────────────────────────────────
  const questions = [
    {
      id: 'q01',
      text: '¿Cómo se dice "5" en ruso?',
      options: ['...', 'четыре', 'пять', 'шесть', 'семь'],
      correctAnswer: 'пять',
    },
    {
      id: 'q02',
      text: '¿Qué número representa "двадцать"?',
      options: ['...', '12', '20', '22', '30'],
      correctAnswer: '20',
    },
    {
      id: 'q03',
      text: '¿Cómo se dice "11" en ruso?',
      options: [
        '...',
        'десять-один',
        'одиннадцать',
        'двенадцать',
        'тринадцать',
      ],
      correctAnswer: 'одиннадцать',
    },
    {
      id: 'q04',
      text: '¿Qué número representa "сорок"?',
      options: ['...', '30', '14', '40', '44'],
      correctAnswer: '40',
    },
    {
      id: 'q05',
      text: '¿Cómo se dice "100" en ruso?',
      options: ['...', 'тысяча', 'двести', 'сто', 'сотня'],
      correctAnswer: 'сто',
    },
    {
      id: 'q06',
      text: '"Первый" significa:',
      options: ['...', 'primero', 'segundo', 'tercero', 'uno'],
      correctAnswer: 'primero',
    },
    {
      id: 'q07',
      text: '¿Cómo se dice "1000" en ruso?',
      options: ['...', 'миллион', 'сто', 'тысяча', 'девятьсот'],
      correctAnswer: 'тысяча',
    },
    {
      id: 'q08',
      text: '¿Qué número representa "восемь"?',
      options: ['...', '6', '7', '8', '9'],
      correctAnswer: '8',
    },
    {
      id: 'q09',
      text: '¿Cómo se dice "90" en ruso?',
      options: ['...', 'девять', 'девятьсот', 'девяносто', 'семьдесят'],
      correctAnswer: 'девяносто',
    },
    {
      id: 'q10',
      text: '¿Cómo se dice "3" en ruso?',
      options: ['...', 'два', 'три', 'четыре', 'тридцать'],
      correctAnswer: 'три',
    },
    {
      id: 'q11',
      text: '¿Cuál es la forma femenina del número 2?',
      options: ['...', 'два', 'двое', 'две', 'второй'],
      correctAnswer: 'две',
    },
    {
      id: 'q12',
      text: '"Третий" significa:',
      options: ['...', 'primero', 'segundo', 'tercero', 'tres'],
      correctAnswer: 'tercero',
    },
  ];

  const totalQuestions = questions.length;

  // ── Handlers ──────────────────────────────────────────────────────────────
  const handleAnswerChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setShowResults(false);
    setShowAnswersFull(false);
  };

  const calculateScore = () =>
    questions.filter((q) => answers[q.id] === q.correctAnswer).length;

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

  const getAnswerStatus = (questionId) => {
    if (showAnswersFull) return 'show-answer';
    if (!showResults) return '';
    const q = questions.find((q) => q.id === questionId);
    return answers[questionId] === q.correctAnswer ? 'correct' : 'incorrect';
  };

  const score = showResults ? calculateScore() : null;

  // ── Reference table renderer ──────────────────────────────────────────────
  const ReferenceTable = ({ title, data, note }) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-htb-green mb-3">{title}</h3>
      {note && <p className="text-htb-text-dim text-sm mb-3">{note}</p>}
      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-htb-sidebar border-b border-gray-700">
              <th className="px-4 py-2 text-left text-htb-green font-semibold w-16">
                Nº
              </th>
              <th className="px-4 py-2 text-left text-htb-green font-semibold">
                Ruso
              </th>
              <th className="px-4 py-2 text-left text-htb-green font-semibold">
                Transliteración
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-800 ${i % 2 === 0 ? 'bg-htb-bg' : 'bg-htb-sidebar/40'} hover:bg-htb-green/10 transition-colors`}
              >
                <td className="px-4 py-2 text-htb-text-dim font-mono">
                  {row.num}
                </td>
                <td className="px-4 py-2 text-white font-medium text-base">
                  <SpeakableText text={row.ru} />
                </td>
                <td className="px-4 py-2 text-htb-text-dim italic">
                  {row.translit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4">
      <div className="bg-htb-card rounded-lg border border-gray-800 p-4 sm:p-6 mb-4 sm:mb-6">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Números en Ruso – <em className="text-htb-green">Числа</em>
          </h2>
          <p className="text-sm sm:text-base text-htb-text-dim">
            Aprende a contar en ruso: cardinales, ordinales y cientos.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-700">
          {[
            { key: 'reference', label: '📖 Referencia' },
            { key: 'quiz', label: '✏️ Ejercicio' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors focus:outline-none ${
                activeTab === tab.key
                  ? 'text-htb-green border-b-2 border-htb-green bg-htb-sidebar'
                  : 'text-htb-text-dim hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ─── REFERENCE TAB ─── */}
        {activeTab === 'reference' && (
          <div>
            <ReferenceTable title="0 – 20 (Cardinales)" data={cardinals0_20} />
            <ReferenceTable title="Decenas (10 – 1000)" data={tens} />
            <ReferenceTable title="Centenas (100 – 1000)" data={hundreds} />
            <ReferenceTable
              title="Números Ordinales (1º – 10º)"
              data={ordinals}
              note="Los ordinales concuerdan en género con el sustantivo al que acompañan (masculino / femenino)."
            />

            {/* Grammar note */}
            <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-4 mt-2">
              <p className="text-htb-green font-semibold mb-2">
                📌 Regla de concordancia numeral
              </p>
              <ul className="list-disc list-inside text-htb-text space-y-1 text-sm">
                <li>
                  <strong>1</strong> → Nominativo singular —{' '}
                  <span className="text-white">один стол</span> (una mesa)
                </li>
                <li>
                  <strong>2, 3, 4</strong> → Genitivo singular —{' '}
                  <span className="text-white">два стола</span> (dos mesas)
                </li>
                <li>
                  <strong>5 – 20</strong> → Genitivo plural —{' '}
                  <span className="text-white">пять столов</span> (cinco mesas)
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* ─── QUIZ TAB ─── */}
        {activeTab === 'quiz' && (
          <div>
            <p className="text-htb-text-dim text-sm mb-4">
              Elige la respuesta correcta para cada pregunta.
            </p>

            {showResults && (
              <div className="mb-6 p-4 rounded-lg bg-htb-sidebar border-2 border-htb-green">
                <p className="text-xl font-semibold text-white mb-2">
                  Puntuación: {score}/{totalQuestions}
                </p>
                <ul className="list-disc list-inside text-htb-text text-sm">
                  <li>0–4 Sigue practicando 💪</li>
                  <li>5–8 ¡Bien hecho! 👍</li>
                  <li>9–11 ¡Muy bien! 🌟</li>
                  <li>12/12 ¡Excelente! 🏆</li>
                </ul>
              </div>
            )}

            <div className="space-y-4 mb-6">
              {questions.map((question, index) => {
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
                      <span className="text-white text-lg flex-1">
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
                        className={`w-full max-w-md px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-htb-green bg-htb-bg text-white transition-colors ${
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

export default NumbersCountingExercise;
