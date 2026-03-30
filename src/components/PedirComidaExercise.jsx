import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const PedirComidaExercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const phrases = [
    {
      ruso: 'Столик на двоих, пожалуйста',
      translit: 'Stolik na dvoikh, pozhaluysta',
      espanol: 'Una mesa para dos, por favor',
    },
    {
      ruso: 'Можно меню, пожалуйста?',
      translit: 'Mozhno menyu, pozhaluysta?',
      espanol: '¿Me puede traer el menú, por favor?',
    },
    {
      ruso: 'Что вы рекомендуете?',
      translit: 'Shto vy rekomenduete?',
      espanol: '¿Qué recomienda?',
    },
    { ruso: 'Я хочу...', translit: 'Ya khochu...', espanol: 'Quiero...' },
    {
      ruso: 'Мне, пожалуйста,...',
      translit: 'Mne, pozhaluysta,...',
      espanol: 'Para mí, por favor,...',
    },
    { ruso: 'Это вкусно', translit: 'Eto vkusno', espanol: 'Está delicioso' },
    {
      ruso: 'Счёт, пожалуйста',
      translit: 'Schyot, pozhaluysta',
      espanol: 'La cuenta, por favor',
    },
    { ruso: 'Без мяса', translit: 'Bez myasa', espanol: 'Sin carne' },
    {
      ruso: 'У вас есть...?',
      translit: 'U vas yestʼ...?',
      espanol: '¿Tienen...?',
    },
    {
      ruso: 'Принесите, пожалуйста',
      translit: 'Prinesite, pozhaluysta',
      espanol: 'Tráigame, por favor',
    },
    {
      ruso: 'Очень вкусно!',
      translit: 'Ochenʼ vkusno!',
      espanol: '¡Muy rico!',
    },
    {
      ruso: 'Мне не нравится',
      translit: 'Mne ne nravitsya',
      espanol: 'No me gusta',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo pides la carta en ruso?',
      opciones: [
        'Счёт, пожалуйста',
        'Можно меню, пожалуйста?',
        'Что вы рекомендуете?',
        'Принесите, пожалуйста',
      ],
      correcta: 'Можно меню, пожалуйста?',
    },
    {
      id: 'q2',
      pregunta: '¿Qué significa "Счёт, пожалуйста"?',
      opciones: [
        'El menú, por favor',
        'La cuenta, por favor',
        'Una mesa, por favor',
        'Está delicioso',
      ],
      correcta: 'La cuenta, por favor',
    },
    {
      id: 'q3',
      pregunta: '¿Cómo dices "Una mesa para dos" en ruso?',
      opciones: ['Столик на двоих', 'Два стола', 'Столик для двух', 'Мы двое'],
      correcta: 'Столик на двоих',
    },
    {
      id: 'q4',
      pregunta: '"Это вкусно" significa:',
      opciones: ['Está frío', 'Está delicioso', 'Está caro', 'No me gusta'],
      correcta: 'Está delicioso',
    },
    {
      id: 'q5',
      pregunta: 'Para decir "Sin carne" en ruso usas:',
      opciones: ['С мясом', 'Без мяса', 'Только мясо', 'Мясо, пожалуйста'],
      correcta: 'Без мяса',
    },
    {
      id: 'q6',
      pregunta: '¿Qué significa "Что вы рекомендуете?"?',
      opciones: [
        '¿Qué tienen?',
        '¿Qué recomienda?',
        '¿Cuánto cuesta?',
        '¿Dónde está la cocina?',
      ],
      correcta: '¿Qué recomienda?',
    },
    {
      id: 'q7',
      pregunta: '"У вас есть...?" significa:',
      opciones: [
        '¿Cuánto cuesta...?',
        '¿Qué es...?',
        '¿Tienen...?',
        '¿Dónde está...?',
      ],
      correcta: '¿Tienen...?',
    },
    {
      id: 'q8',
      pregunta: 'Para pedir algo para ti usas:',
      opciones: ['Я хочу', 'Мне, пожалуйста', 'Принесите', 'Можно'],
      correcta: 'Мне, пожалуйста',
    },
    {
      id: 'q9',
      pregunta: '"Очень вкусно!" significa:',
      opciones: ['¡Muy caro!', '¡Muy frío!', '¡Muy rico!', '¡Muy poco!'],
      correcta: '¡Muy rico!',
    },
    {
      id: 'q10',
      pregunta: '"Мне не нравится" significa:',
      opciones: ['Me gusta mucho', 'No me gusta', 'No entiendo', 'No quiero'],
      correcta: 'No me gusta',
    },
  ];

  const handleAnswer = (id, value) => {
    setQuizAnswers((prev) => ({ ...prev, [id]: value }));
    setShowResults(false);
  };

  const calcScore = () => {
    let c = 0;
    questions.forEach((q) => {
      if (quizAnswers[q.id] === q.correcta) c++;
    });
    setScore(c);
    setShowResults(true);
    setShowAnswers(false);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setShowResults(false);
    setScore(0);
    setShowAnswers(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-htb-card rounded-lg border border-gray-800 p-6 mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">
          🍽️ Pedir Comida en Ruso
        </h2>
        <p className="text-htb-text-dim">
          Aprende a pedir en restaurantes y hablar de comida en ruso.
        </p>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {[
          { id: 'referencia', label: '📚 Referencia' },
          { id: 'flashcards', label: '🃏 Flashcards' },
          { id: 'ejercicio', label: '✏️ Ejercicio' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-htb-green text-htb-bg'
                : 'bg-htb-card text-htb-text-dim hover:text-white border border-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'referencia' && (
        <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
          <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
            <h3 className="text-htb-green font-semibold">
              Frases en el restaurante
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                  <th className="text-left py-3 px-4 text-htb-green text-sm">
                    Ruso
                  </th>
                  <th className="text-left py-3 px-4 text-htb-text-dim text-sm">
                    Transliteración
                  </th>
                  <th className="text-left py-3 px-4 text-white text-sm">
                    Español
                  </th>
                </tr>
              </thead>
              <tbody>
                {phrases.map((p, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 hover:bg-htb-sidebar/50 transition-colors ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-3 px-4 text-htb-green font-medium">
                      <SpeakableText text={p.ruso} />
                    </td>
                    <td className="py-3 px-4 text-htb-text-dim italic text-sm">
                      {p.translit}
                    </td>
                    <td className="py-3 px-4 text-white">{p.espanol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'flashcards' && (
        <div className="bg-htb-card rounded-lg border border-gray-800 p-6">
          <div
            onClick={() => setFlashcardFlipped(!flashcardFlipped)}
            className="cursor-pointer bg-htb-sidebar rounded-lg border-2 border-htb-green/30 hover:border-htb-green p-8 mb-6 min-h-[200px] flex flex-col items-center justify-center transition-all"
          >
            {flashcardFlipped ? (
              <>
                <p className="text-3xl text-htb-green font-bold mb-3 text-center">
                  {phrases[flashcardIndex].ruso}
                </p>
                <p className="text-htb-text-dim italic">
                  {phrases[flashcardIndex].translit}
                </p>
              </>
            ) : (
              <p className="text-2xl text-white text-center">
                {phrases[flashcardIndex].espanol}
              </p>
            )}
          </div>
          <p className="text-center text-htb-text-dim text-sm mb-4">
            {flashcardFlipped
              ? '🇷🇺 Ruso'
              : '🇪🇸 Español — haz clic para ver en ruso'}
          </p>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => {
                setFlashcardIndex((i) => Math.max(0, i - 1));
                setFlashcardFlipped(false);
              }}
              disabled={flashcardIndex === 0}
              className="px-4 py-2 bg-htb-sidebar border border-gray-700 rounded-lg text-white hover:border-htb-green disabled:opacity-40"
            >
              ← Anterior
            </button>
            <span className="text-htb-text-dim">
              {flashcardIndex + 1} / {phrases.length}
            </span>
            <button
              onClick={() => {
                setFlashcardIndex((i) => Math.min(phrases.length - 1, i + 1));
                setFlashcardFlipped(false);
              }}
              disabled={flashcardIndex === phrases.length - 1}
              className="px-4 py-2 bg-htb-sidebar border border-gray-700 rounded-lg text-white hover:border-htb-green disabled:opacity-40"
            >
              Siguiente →
            </button>
          </div>
        </div>
      )}

      {activeTab === 'ejercicio' && (
        <div className="bg-htb-card rounded-lg border border-gray-800 p-6">
          {showResults ? (
            <div className="text-center">
              <div
                className={`text-6xl font-bold mb-4 ${score >= 8 ? 'text-htb-green' : score >= 5 ? 'text-yellow-400' : 'text-red-400'}`}
              >
                {score}/{questions.length}
              </div>
              <p className="text-white text-xl mb-6">
                {score === questions.length
                  ? '¡Perfecto! 🎉'
                  : score >= 8
                    ? '¡Muy bien! 👍'
                    : score >= 5
                      ? 'Bien, sigue practicando 💪'
                      : 'Sigue repasando 📚'}
              </p>
              {showAnswers && (
                <div className="space-y-3 text-left mb-6">
                  {questions.map((q) => (
                    <div
                      key={q.id}
                      className={`p-3 rounded-lg border ${quizAnswers[q.id] === q.correcta ? 'border-htb-green bg-htb-green/10' : 'border-red-500 bg-red-500/10'}`}
                    >
                      <p className="text-white text-sm mb-1">{q.pregunta}</p>
                      <p
                        className={`text-sm font-medium ${quizAnswers[q.id] === q.correcta ? 'text-htb-green' : 'text-red-400'}`}
                      >
                        Tu respuesta: {quizAnswers[q.id] || '(sin responder)'}
                      </p>
                      {quizAnswers[q.id] !== q.correcta && (
                        <p className="text-htb-green text-sm">
                          Correcta: {q.correcta}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={resetQuiz}
                  className="bg-htb-green text-htb-bg px-6 py-3 rounded-lg font-semibold"
                >
                  🔄 Repetir
                </button>
                {!showAnswers && (
                  <button
                    onClick={() => setShowAnswers(true)}
                    className="bg-htb-card border border-gray-700 text-white px-6 py-3 rounded-lg hover:border-htb-green"
                  >
                    👁️ Ver respuestas
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div>
              <p className="text-htb-text-dim text-sm mb-6">
                Responde todas las preguntas y pulsa &quot;Comprobar&quot;.
              </p>
              <div className="space-y-4">
                {questions.map((q, i) => (
                  <div
                    key={q.id}
                    className="bg-htb-sidebar rounded-lg p-4 border border-gray-800"
                  >
                    <p className="text-white font-medium mb-3">
                      {i + 1}. {q.pregunta}
                    </p>
                    <select
                      value={quizAnswers[q.id] || ''}
                      onChange={(e) => handleAnswer(q.id, e.target.value)}
                      className="w-full bg-htb-bg border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-htb-green"
                    >
                      <option value="">-- Elige una respuesta --</option>
                      {q.opciones.map((o, idx) => (
                        <option key={idx} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={calcScore}
                  className="bg-htb-green text-htb-bg px-8 py-3 rounded-lg font-semibold"
                >
                  ✅ Comprobar
                </button>
                <button
                  onClick={resetQuiz}
                  className="bg-htb-card border border-gray-700 text-white px-6 py-3 rounded-lg hover:border-htb-green"
                >
                  🔄 Reiniciar
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PedirComidaExercise;
