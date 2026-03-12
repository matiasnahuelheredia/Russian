import React, { useState } from 'react';

const PedirAyudaA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const frases = [
    {
      ruso: 'Повторите, пожалуйста.',
      translit: 'Povtorite, pozhaluysta.',
      espanol: 'Repita, por favor.',
    },
    {
      ruso: 'Говорите медленнее.',
      translit: 'Govorite medlenneye.',
      espanol: 'Hable más despacio.',
    },
    {
      ruso: 'Я не понимаю.',
      translit: 'Ya ne ponimayu.',
      espanol: 'No entiendo.',
    },
    { ruso: 'Я не знаю.', translit: 'Ya ne znayu.', espanol: 'No sé.' },
    {
      ruso: 'Как это сказать по-русски?',
      translit: 'Kak eto skazatʼ po-russki?',
      espanol: '¿Cómo se dice esto en ruso?',
    },
    {
      ruso: 'Что значит...?',
      translit: 'Chto znachit...?',
      espanol: '¿Qué significa...?',
    },
    {
      ruso: 'Помогите, пожалуйста!',
      translit: 'Pomogite, pozhaluysta!',
      espanol: '¡Ayúdeme, por favor!',
    },
    {
      ruso: 'Можете помочь мне?',
      translit: 'Mozhete pomochʼ mne?',
      espanol: '¿Puede ayudarme?',
    },
    {
      ruso: 'Я не говорю по-русски хорошо.',
      translit: 'Ya ne govoryu po-russki khorosho.',
      espanol: 'No hablo ruso bien.',
    },
    {
      ruso: 'Вы говорите по-английски?',
      translit: 'Vy govorite po-angliyski?',
      espanol: '¿Habla usted inglés?',
    },
    {
      ruso: 'Напишите это, пожалуйста.',
      translit: 'Napishite eto, pozhaluysta.',
      espanol: 'Escríbalo, por favor.',
    },
    {
      ruso: 'Извините, я не понял(а).',
      translit: 'Izvinite, ya ne ponyal(a).',
      espanol: 'Disculpe, no entendí.',
    },
  ];

  const flashCards = frases.map((f) => ({
    ruso: f.ruso,
    translit: f.translit,
    espanol: f.espanol,
  }));

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo se dice "Repita, por favor"?',
      opciones: [
        'Говорите медленнее',
        'Повторите, пожалуйста',
        'Помогите мне',
        'Вы говорите по-русски?',
      ],
      correcta: 'Повторите, пожалуйста',
    },
    {
      id: 'q2',
      pregunta: '"Я не понимаю" significa:',
      opciones: ['No sé', 'No hablo', 'No entiendo', 'No escucho'],
      correcta: 'No entiendo',
    },
    {
      id: 'q3',
      pregunta: '¿Cómo se dice "Hable más despacio"?',
      opciones: [
        'Говорите медленнее',
        'Говорите громче',
        'Повторите пожалуйста',
        'Я не понимаю',
      ],
      correcta: 'Говорите медленнее',
    },
    {
      id: 'q4',
      pregunta: '"Что значит...?" significa:',
      opciones: [
        '¿Qué es esto?',
        '¿Qué significa...?',
        '¿Cómo se dice...?',
        '¿Qué quieres?',
      ],
      correcta: '¿Qué significa...?',
    },
    {
      id: 'q5',
      pregunta: '¿Cómo se dice "¿Puede ayudarme?"?',
      opciones: [
        'Помогите меня',
        'Можете помочь мне?',
        'Вы помогаете?',
        'Мне нужна помощь?',
      ],
      correcta: 'Можете помочь мне?',
    },
    {
      id: 'q6',
      pregunta: '"Я не говорю по-русски хорошо" significa:',
      opciones: [
        'No entiendo ruso',
        'No hablo ruso bien',
        'No me gusta hablar',
        'No hablo inglés',
      ],
      correcta: 'No hablo ruso bien',
    },
    {
      id: 'q7',
      pregunta: '¿Cómo se dice "Escríbalo, por favor"?',
      opciones: [
        'Читайте это',
        'Напишите это, пожалуйста',
        'Покажите это',
        'Скажите это',
      ],
      correcta: 'Напишите это, пожалуйста',
    },
    {
      id: 'q8',
      pregunta: '"Как это сказать по-русски?" significa:',
      opciones: [
        '¿Cómo estás?',
        '¿Cómo te llamas?',
        '¿Cómo se dice esto en ruso?',
        '¿Qué hora es?',
      ],
      correcta: '¿Cómo se dice esto en ruso?',
    },
    {
      id: 'q9',
      pregunta: '¿Cómo se dice "¿Habla usted inglés?"?',
      opciones: [
        'Вы понимаете английский?',
        'Вы знаете английский?',
        'Вы говорите по-английски?',
        'Английский — ваш язык?',
      ],
      correcta: 'Вы говорите по-английски?',
    },
    {
      id: 'q10',
      pregunta: '"Извините, я не понял(а)" significa:',
      opciones: [
        'Perdone, no pude hacerlo',
        'Disculpe, no entendí',
        'Disculpe, no lo hice',
        'Lo siento, no estoy aquí',
      ],
      correcta: 'Disculpe, no entendí',
    },
  ];

  const handleAnswer = (id, val) => {
    setQuizAnswers((p) => ({ ...p, [id]: val }));
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
          🙋 Pedir Ayuda y Aclaración
        </h2>
        <p className="text-htb-text-dim">
          Frases de supervivencia para cuando no entiendes algo. Esenciales en
          un aula, con hablantes nativos o en situaciones cotidianas.
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
                Frases de ayuda y aclaración
              </h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                  <th className="text-left py-2 px-4 text-htb-green text-sm">
                    Ruso
                  </th>
                  <th className="text-left py-2 px-4 text-htb-text-dim text-sm">
                    Translit.
                  </th>
                  <th className="text-left py-2 px-4 text-white text-sm">
                    Español
                  </th>
                </tr>
              </thead>
              <tbody>
                {frases.map((f, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-4 text-htb-green font-bold">
                      {f.ruso}
                    </td>
                    <td className="py-2 px-4 text-htb-text-dim italic text-sm">
                      {f.translit}
                    </td>
                    <td className="py-2 px-4 text-white text-sm">
                      {f.espanol}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-htb-sidebar rounded-lg border border-htb-green/30 p-4">
            <p className="text-htb-green font-semibold mb-2">
              💡 Nota: по-русски / по-английски
            </p>
            <p className="text-htb-text-dim text-sm">
              El prefijo "по-" + adverbio de lengua:{' '}
              <span className="text-white">по-русски</span> (en ruso),{' '}
              <span className="text-white">по-испански</span> (en español),{' '}
              <span className="text-white">по-английски</span> (en inglés).
            </p>
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
                <p className="text-2xl text-htb-green font-bold mb-3 text-center">
                  {flashCards[flashcardIndex].ruso}
                </p>
                <p className="text-htb-text-dim italic text-sm text-center">
                  {flashCards[flashcardIndex].translit}
                </p>
              </>
            ) : (
              <p className="text-xl text-white text-center">
                {flashCards[flashcardIndex].espanol}
              </p>
            )}
          </div>
          <p className="text-center text-htb-text-dim text-sm mb-4">
            {flashcardFlipped ? '🇷🇺 Ruso' : '🇪🇸 Español — haz clic para ver'}
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
              {flashcardIndex + 1} / {flashCards.length}
            </span>
            <button
              onClick={() => {
                setFlashcardIndex((i) =>
                  Math.min(flashCards.length - 1, i + 1)
                );
                setFlashcardFlipped(false);
              }}
              disabled={flashcardIndex === flashCards.length - 1}
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
                      ? 'Bien 💪'
                      : 'Repasa 📚'}
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
                Elige la respuesta correcta.
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

export default PedirAyudaA1Exercise;
