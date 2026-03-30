import React, { useState } from 'react';
import { useTTS } from '../context/TTSContext';

// `spoken` = Russian letter name used for TTS (single letters are hard for the
// model; letter names give a much cleaner pronunciation)
const alphabet = [
  { upper: 'А', lower: 'а', translit: 'a', sound: 'a (padre)', spoken: 'а' },
  { upper: 'Б', lower: 'б', translit: 'b', sound: 'b (barco)', spoken: 'бэ' },
  { upper: 'В', lower: 'в', translit: 'v', sound: 'v (vino)', spoken: 'вэ' },
  { upper: 'Г', lower: 'г', translit: 'g', sound: 'g (gato)', spoken: 'гэ' },
  { upper: 'Д', lower: 'д', translit: 'd', sound: 'd (dado)', spoken: 'дэ' },
  { upper: 'Е', lower: 'е', translit: 'ye', sound: 'ye (yes)', spoken: 'е' },
  { upper: 'Ё', lower: 'ё', translit: 'yo', sound: 'yo (yogur)', spoken: 'ё' },
  {
    upper: 'Ж',
    lower: 'ж',
    translit: 'zh',
    sound: 'zh (like French j)',
    spoken: 'жэ',
  },
  { upper: 'З', lower: 'з', translit: 'z', sound: 'z (zapato)', spoken: 'зэ' },
  { upper: 'И', lower: 'и', translit: 'i', sound: 'i (isla)', spoken: 'и' },
  {
    upper: 'Й',
    lower: 'й',
    translit: 'y',
    sound: 'y (yate)',
    spoken: 'и краткое',
  },
  { upper: 'К', lower: 'к', translit: 'k', sound: 'k (kilo)', spoken: 'ка' },
  { upper: 'Л', lower: 'л', translit: 'l', sound: 'l (luna)', spoken: 'эл' },
  { upper: 'М', lower: 'м', translit: 'm', sound: 'm (mar)', spoken: 'эм' },
  { upper: 'Н', lower: 'н', translit: 'n', sound: 'n (noche)', spoken: 'эн' },
  { upper: 'О', lower: 'о', translit: 'o', sound: 'o (boca)', spoken: 'о' },
  { upper: 'П', lower: 'п', translit: 'p', sound: 'p (paso)', spoken: 'пэ' },
  { upper: 'Р', lower: 'р', translit: 'r', sound: 'r (pero)', spoken: 'эр' },
  { upper: 'С', lower: 'с', translit: 's', sound: 's (sol)', spoken: 'эс' },
  { upper: 'Т', lower: 'т', translit: 't', sound: 't (toro)', spoken: 'тэ' },
  { upper: 'У', lower: 'у', translit: 'u', sound: 'u (uva)', spoken: 'у' },
  { upper: 'Ф', lower: 'ф', translit: 'f', sound: 'f (foto)', spoken: 'эф' },
  { upper: 'Х', lower: 'х', translit: 'kh', sound: 'j (jota)', spoken: 'ха' },
  { upper: 'Ц', lower: 'ц', translit: 'ts', sound: 'ts (tsar)', spoken: 'цэ' },
  { upper: 'Ч', lower: 'ч', translit: 'ch', sound: 'ch (chico)', spoken: 'чэ' },
  { upper: 'Ш', lower: 'ш', translit: 'sh', sound: 'sh (show)', spoken: 'ша' },
  {
    upper: 'Щ',
    lower: 'щ',
    translit: 'shch',
    sound: 'shch (más suave)',
    spoken: 'ща',
  },
  {
    upper: 'Ъ',
    lower: 'ъ',
    translit: 'ʺ',
    sound: 'signo duro (silent)',
    spoken: 'твёрдый знак',
  },
  {
    upper: 'Ы',
    lower: 'ы',
    translit: 'y',
    sound: 'sonido gutural',
    spoken: 'ы',
  },
  {
    upper: 'Ь',
    lower: 'ь',
    translit: 'ʹ',
    sound: 'signo blando (silent)',
    spoken: 'мягкий знак',
  },
  { upper: 'Э', lower: 'э', translit: 'e', sound: 'e (mesa)', spoken: 'э' },
  { upper: 'Ю', lower: 'ю', translit: 'yu', sound: 'yu (yugo)', spoken: 'ю' },
  { upper: 'Я', lower: 'я', translit: 'ya', sound: 'ya (ya)', spoken: 'я' },
];

const CyrillicAlphabetExercise = () => {
  const { speak, isReady, status, currentText } = useTTS();

  const [answers, setAnswers] = useState({
    question01: '',
    question02: '',
    question03: '',
    question04: '',
    question05: '',
    question06: '',
  });

  const [showResults, setShowResults] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const questions = [
    {
      id: 'question01',
      text: 'Здравствуйте significa',
      options: ['...', 'Hola (formal)', 'Adiós', 'Gracias'],
      correctAnswer: 'Hola (formal)',
    },
    {
      id: 'question02',
      text: 'La letra "Я" se pronuncia como',
      options: ['...', 'ia', 'ra', 'na'],
      correctAnswer: 'ia',
    },
    {
      id: 'question03',
      text: 'Спасибо significa',
      options: ['...', 'Por favor', 'Gracias', 'Perdón'],
      correctAnswer: 'Gracias',
    },
    {
      id: 'question04',
      text: 'La letra "Ж" se pronuncia como',
      options: ['...', 'sh', 'zh', 'ch'],
      correctAnswer: 'zh',
    },
    {
      id: 'question05',
      text: '¿Cuántas letras tiene el alfabeto cirílico?',
      options: ['...', '26', '30', '33'],
      correctAnswer: '33',
    },
    {
      id: 'question06',
      text: 'До свидания significa',
      options: ['...', 'Hola', 'Buenos días', 'Adiós'],
      correctAnswer: 'Adiós',
    },
  ];

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
    setShowResults(false);
    setShowAnswers(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const handleScore = () => {
    setShowResults(true);
    setShowAnswers(false);
  };

  const handleStartAgain = () => {
    setAnswers({
      question01: '',
      question02: '',
      question03: '',
      question04: '',
      question05: '',
      question06: '',
    });
    setShowResults(false);
    setShowAnswers(false);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    setShowResults(false);
  };

  const getAnswerStatus = (questionId) => {
    if (showAnswers) return 'show-answer';
    if (!showResults) return '';
    return answers[questionId] ===
      questions.find((q) => q.id === questionId).correctAnswer
      ? 'correct'
      : 'incorrect';
  };

  const score = showResults ? calculateScore() : null;

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4">
      {/* ── Alphabet reference cards ── */}
      <div className="bg-htb-card rounded-lg border border-gray-800 p-4 sm:p-6 mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
          Alfabeto Cirílico –{' '}
          <em className="text-htb-green">Русский алфавит</em>
        </h2>
        <p className="text-sm text-htb-text-dim mb-4">
          33 letras ·{' '}
          {isReady ? '🔈 clic para escuchar' : '⏳ cargando voz IA…'}
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-2">
          {alphabet.map((letter) => {
            const isThisActive =
              (status === 'speaking' || status === 'synthesizing') &&
              currentText === letter.spoken;
            return (
              <div
                key={letter.upper}
                role={isReady ? 'button' : undefined}
                tabIndex={isReady ? 0 : undefined}
                title={
                  isReady
                    ? `${letter.sound} · clic para escuchar`
                    : letter.sound
                }
                onClick={() => isReady && speak(letter.spoken)}
                onKeyDown={(e) =>
                  (e.key === 'Enter' || e.key === ' ') &&
                  isReady &&
                  speak(letter.spoken)
                }
                className={[
                  'group relative flex flex-col items-center justify-center',
                  'bg-htb-sidebar border rounded-lg p-2 transition-all duration-150',
                  isThisActive
                    ? 'border-htb-green bg-htb-green/20 scale-105 shadow-lg shadow-htb-green/20'
                    : isReady
                      ? 'border-gray-700 hover:border-htb-green hover:bg-htb-green/10 cursor-pointer'
                      : 'border-gray-700 cursor-default opacity-70',
                ].join(' ')}
              >
                <span
                  className={`text-2xl font-bold leading-none ${
                    isThisActive ? 'text-htb-green' : 'text-white'
                  }`}
                >
                  {letter.upper}
                </span>
                <span className="text-lg text-htb-text-dim leading-none">
                  {letter.lower}
                </span>
                <span className="text-xs text-htb-green font-mono mt-1">
                  {letter.translit}
                </span>
                {/* Speaker icon shown on hover or while active */}
                {isReady && (
                  <span
                    className={`absolute top-0.5 right-1 text-[9px] transition-opacity ${
                      isThisActive
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-60'
                    }`}
                  >
                    {isThisActive ? '🔊' : '🔈'}
                  </span>
                )}
                {/* Tooltip */}
                <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 z-10 hidden group-hover:block bg-gray-900 border border-htb-green/50 rounded px-2 py-1 whitespace-nowrap text-xs text-white shadow-lg pointer-events-none">
                  {letter.sound}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Exercise card ── */}
      <div className="bg-htb-card rounded-lg border border-gray-800 p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Alfabeto Cirílico -{' '}
              <em className="text-htb-green">Introducción</em>
            </h2>
            <p className="text-sm sm:text-base text-htb-text-dim">
              Elige la respuesta correcta.
            </p>
          </div>
        </div>

        {showResults && (
          <div className="mb-6 p-4 rounded-lg bg-htb-sidebar border-2 border-htb-green">
            <p className="text-xl font-semibold text-white mb-2">
              Puntuación: {score}/6
            </p>
            <ul className="list-disc list-inside text-htb-text">
              <li>0-3 Sigue practicando</li>
              <li>4-5 ¡Muy bien!</li>
              <li>6/6 - ¡Excelente!</li>
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
                    id={question.id}
                    value={
                      shouldShowAnswer
                        ? question.correctAnswer
                        : answers[question.id]
                    }
                    onChange={(e) =>
                      handleAnswerChange(question.id, e.target.value)
                    }
                    disabled={showAnswers}
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
                    <span className="text-htb-green font-bold">✓ Correcto</span>
                  )}
                  {isIncorrect && (
                    <span className="text-red-500 font-bold">✗ Incorrecto</span>
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
    </div>
  );
};

export default CyrillicAlphabetExercise;
