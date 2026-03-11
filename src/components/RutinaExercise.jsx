import React, { useState } from 'react';

const RutinaExercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const phrases = [
    {
      ruso: 'Я встаю в семь часов',
      translit: 'Ya vstayo v semʼ chasov',
      espanol: 'Me levanto a las siete',
    },
    { ruso: 'Я завтракаю', translit: 'Ya zavtrakaju', espanol: 'Desayuno' },
    {
      ruso: 'Я иду на работу',
      translit: 'Ya idu na rabotu',
      espanol: 'Voy al trabajo',
    },
    { ruso: 'Я обедаю', translit: 'Ya obedayu', espanol: 'Como (al mediodía)' },
    { ruso: 'Я ужинаю', translit: 'Ya uzhinayu', espanol: 'Ceno' },
    {
      ruso: 'Я ложусь спать',
      translit: 'Ya lozhuʼsʼ spatʼ',
      espanol: 'Me voy a dormir',
    },
    { ruso: 'Утром', translit: 'Utrom', espanol: 'Por la mañana' },
    { ruso: 'Днём', translit: 'Dnyom', espanol: 'Por la tarde (mediodía)' },
    { ruso: 'Вечером', translit: 'Vecherom', espanol: 'Por la tarde/noche' },
    { ruso: 'Ночью', translit: 'Nochʼyu', espanol: 'Por la noche / De noche' },
    { ruso: 'Всегда', translit: 'Vsegda', espanol: 'Siempre' },
    { ruso: 'Иногда', translit: 'Inogda', espanol: 'A veces' },
    { ruso: 'Никогда', translit: 'Nikogda', espanol: 'Nunca' },
    {
      ruso: 'Обычно',
      translit: 'Obychno',
      espanol: 'Normalmente / Generalmente',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '"Я встаю" significa:',
      opciones: ['Me acuesto', 'Me levanto', 'Me ducho', 'Me visto'],
      correcta: 'Me levanto',
    },
    {
      id: 'q2',
      pregunta: '¿Cómo dices "Desayuno" en ruso?',
      opciones: ['Я обедаю', 'Я ужинаю', 'Я завтракаю', 'Я готовлю'],
      correcta: 'Я завтракаю',
    },
    {
      id: 'q3',
      pregunta: '"Я ложусь спать" significa:',
      opciones: [
        'Me ducho',
        'Me voy a trabajar',
        'Me voy a dormir',
        'Me levanto',
      ],
      correcta: 'Me voy a dormir',
    },
    {
      id: 'q4',
      pregunta: '"Утром" significa:',
      opciones: [
        'Por la noche',
        'Por la tarde',
        'Por la mañana',
        'Al mediodía',
      ],
      correcta: 'Por la mañana',
    },
    {
      id: 'q5',
      pregunta: '"Вечером" significa:',
      opciones: [
        'Por la mañana',
        'Al mediodía',
        'Por la tarde/noche',
        'A medianoche',
      ],
      correcta: 'Por la tarde/noche',
    },
    {
      id: 'q6',
      pregunta: '¿Cómo dices "Siempre" en ruso?',
      opciones: ['Никогда', 'Иногда', 'Обычно', 'Всегда'],
      correcta: 'Всегда',
    },
    {
      id: 'q7',
      pregunta: '"Никогда" significa:',
      opciones: ['Siempre', 'Nunca', 'A veces', 'Normalmente'],
      correcta: 'Nunca',
    },
    {
      id: 'q8',
      pregunta: '"Я обедаю" significa:',
      opciones: ['Desayuno', 'Ceno', 'Como al mediodía', 'Bebo'],
      correcta: 'Como al mediodía',
    },
    {
      id: 'q9',
      pregunta: '"Иногда" significa:',
      opciones: ['Siempre', 'Nunca', 'A veces', 'De repente'],
      correcta: 'A veces',
    },
    {
      id: 'q10',
      pregunta: '"Ночью" significa:',
      opciones: [
        'Por la mañana',
        'Por la tarde',
        'Al mediodía',
        'Por la noche / De noche',
      ],
      correcta: 'Por la noche / De noche',
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
          🌅 Rutina Diaria en Ruso
        </h2>
        <p className="text-htb-text-dim">
          Aprende a describir tu rutina diaria y hablar del tiempo en ruso.
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
        <div className="space-y-4">
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Verbos de la rutina diaria
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
                        {p.ruso}
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
          <div className="bg-htb-card rounded-lg border border-gray-800 p-4">
            <h3 className="text-htb-green font-semibold mb-3">
              ⏰ Partes del día
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { ruso: 'Утро', esp: 'Mañana (sustantivo)' },
                { ruso: 'День', esp: 'Tarde/Día' },
                { ruso: 'Вечер', esp: 'Tarde/Noche' },
                { ruso: 'Ночь', esp: 'Noche' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-htb-sidebar rounded-lg p-3 border border-gray-800 text-center"
                >
                  <p className="text-htb-green font-bold text-lg">
                    {item.ruso}
                  </p>
                  <p className="text-htb-text-dim text-sm">{item.esp}</p>
                </div>
              ))}
            </div>
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

export default RutinaExercise;
