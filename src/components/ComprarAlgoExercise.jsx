import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const ComprarAlgoExercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const phrases = [
    {
      ruso: 'Сколько стоит?',
      translit: 'Skolʼko stoit?',
      espanol: '¿Cuánto cuesta?',
    },
    {
      ruso: 'Я хочу купить...',
      translit: 'Ya khochu kupitʼ...',
      espanol: 'Quiero comprar...',
    },
    {
      ruso: 'Дайте мне, пожалуйста...',
      translit: 'Dayte mne, pozhaluysta...',
      espanol: 'Deme, por favor...',
    },
    { ruso: 'Это дорого', translit: 'Eto dorogo', espanol: 'Está caro' },
    { ruso: 'Это дёшево', translit: 'Eto dyoshevo', espanol: 'Está barato' },
    {
      ruso: 'Какой размер?',
      translit: 'Kakoy razmer?',
      espanol: '¿Qué talla/tamaño?',
    },
    {
      ruso: 'Можно примерить?',
      translit: 'Mozhno primeritʼ?',
      espanol: '¿Puedo probármelo?',
    },
    { ruso: 'Я возьму это', translit: 'Ya vozʼmu eto', espanol: 'Me lo llevo' },
    {
      ruso: 'У вас есть...?',
      translit: 'U vas yestʼ...?',
      espanol: '¿Tienen...?',
    },
    {
      ruso: 'Где касса?',
      translit: 'Gde kassa?',
      espanol: '¿Dónde está la caja?',
    },
    {
      ruso: 'Можно заплатить картой?',
      translit: 'Mozhno zaplatitʼ kartoy?',
      espanol: '¿Puedo pagar con tarjeta?',
    },
    {
      ruso: 'Покажите, пожалуйста',
      translit: 'Pokazhite, pozhaluysta',
      espanol: 'Muéstreme, por favor',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo preguntas el precio en ruso?',
      opciones: ['Это дорого', 'Сколько стоит?', 'Я возьму это', 'Где касса?'],
      correcta: 'Сколько стоит?',
    },
    {
      id: 'q2',
      pregunta: '"Это дорого" significa:',
      opciones: ['Está barato', 'Está caro', 'Me lo llevo', 'Está bien'],
      correcta: 'Está caro',
    },
    {
      id: 'q3',
      pregunta: '¿Cómo dices "Me lo llevo" en ruso?',
      opciones: ['Я хочу купить', 'Я возьму это', 'Дайте мне', 'Это моё'],
      correcta: 'Я возьму это',
    },
    {
      id: 'q4',
      pregunta: '"Можно примерить?" significa:',
      opciones: [
        '¿Qué talla?',
        '¿Cuánto cuesta?',
        '¿Puedo probármelo?',
        '¿Tienen esto?',
      ],
      correcta: '¿Puedo probármelo?',
    },
    {
      id: 'q5',
      pregunta: 'Para preguntar "¿Tienen...?" usas:',
      opciones: [
        'Сколько стоит...?',
        'У вас есть...?',
        'Дайте мне...',
        'Я хочу...',
      ],
      correcta: 'У вас есть...?',
    },
    {
      id: 'q6',
      pregunta: '"Где касса?" significa:',
      opciones: [
        '¿Dónde está la salida?',
        '¿Dónde está la caja?',
        '¿Dónde están los probadores?',
        '¿Dónde está la tienda?',
      ],
      correcta: '¿Dónde está la caja?',
    },
    {
      id: 'q7',
      pregunta: '"Это дёшево" significa:',
      opciones: ['Está caro', 'Está sucio', 'Está barato', 'Está roto'],
      correcta: 'Está barato',
    },
    {
      id: 'q8',
      pregunta: '¿Cómo pides que te muestren algo?',
      opciones: [
        'Сколько стоит?',
        'Покажите, пожалуйста',
        'Дайте мне',
        'Я возьму это',
      ],
      correcta: 'Покажите, пожалуйста',
    },
    {
      id: 'q9',
      pregunta: '"Можно заплатить картой?" significa:',
      opciones: [
        '¿Puedo pagar en efectivo?',
        '¿Puedo pagar con tarjeta?',
        '¿Tienen tarjeta regalo?',
        '¿Puedo devolver esto?',
      ],
      correcta: '¿Puedo pagar con tarjeta?',
    },
    {
      id: 'q10',
      pregunta: '"Какой размер?" se usa para preguntar:',
      opciones: ['El color', 'El precio', 'La talla o el tamaño', 'La marca'],
      correcta: 'La talla o el tamaño',
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
          🛍️ Comprar Algo en Ruso
        </h2>
        <p className="text-htb-text-dim">
          Aprende a ir de compras y regatear en ruso.
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
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-htb-green text-htb-bg' : 'bg-htb-card text-htb-text-dim hover:text-white border border-gray-700'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'referencia' && (
        <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
          <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
            <h3 className="text-htb-green font-semibold">
              Frases para ir de compras
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
                    className={`border-b border-gray-800 hover:bg-htb-sidebar/50 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
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

export default ComprarAlgoExercise;
