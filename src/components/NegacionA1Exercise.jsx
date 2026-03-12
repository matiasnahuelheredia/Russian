import React, { useState } from 'react';

const NegacionA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const reglas = [
    {
      patron: 'не + verbo',
      ejemplo: 'Я не знаю.',
      translit: 'Ya ne znayu.',
      espanol: 'Yo no sé.',
    },
    {
      patron: 'не + verbo',
      ejemplo: 'Он не говорит по-русски.',
      translit: 'On ne govorit po-russki.',
      espanol: 'Él no habla ruso.',
    },
    {
      patron: 'не + adjetivo',
      ejemplo: 'Это не большой дом.',
      translit: 'Eto ne bolʼshoy dom.',
      espanol: 'Esta no es una casa grande.',
    },
    {
      patron: 'Нет (есть) — no hay',
      ejemplo: 'Нет проблем.',
      translit: 'Net problem.',
      espanol: 'No hay problema.',
    },
    {
      patron: 'У меня нет + gen.',
      ejemplo: 'У меня нет книги.',
      translit: 'U menya net knigi.',
      espanol: 'No tengo libro.',
    },
    {
      patron: 'Не + быть (pasado)',
      ejemplo: 'Меня не было дома.',
      translit: 'Menya ne bylo doma.',
      espanol: 'No estaba en casa.',
    },
    {
      patron: 'Никогда не',
      ejemplo: 'Я никогда не курю.',
      translit: 'Ya nikogda ne kuryu.',
      espanol: 'Nunca fumo.',
    },
    {
      patron: 'Ничего не',
      ejemplo: 'Я ничего не понимаю.',
      translit: 'Ya nichego ne ponimayu.',
      espanol: 'No entiendo nada.',
    },
  ];

  const flashCards = [
    { ruso: 'Я не знаю.', translit: 'Ya ne znayu.', espanol: 'No sé.' },
    {
      ruso: 'Нет, спасибо.',
      translit: 'Net, spasibo.',
      espanol: 'No, gracias.',
    },
    {
      ruso: 'У меня нет времени.',
      translit: 'U menya net vremeni.',
      espanol: 'No tengo tiempo.',
    },
    {
      ruso: 'Я не понимаю.',
      translit: 'Ya ne ponimayu.',
      espanol: 'No entiendo.',
    },
    {
      ruso: 'Он не дома.',
      translit: 'On ne doma.',
      espanol: 'Él no está en casa.',
    },
    {
      ruso: 'Это не моя книга.',
      translit: 'Eto ne moya kniga.',
      espanol: 'Este no es mi libro.',
    },
    {
      ruso: 'Я никогда не опаздываю.',
      translit: 'Ya nikogda ne opazdyvayu.',
      espanol: 'Nunca llego tarde.',
    },
    {
      ruso: 'Я ничего не хочу.',
      translit: 'Ya nichego ne khochu.',
      espanol: 'No quiero nada.',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo se dice "Yo no sé" en ruso?',
      opciones: ['Я знаю', 'Я не знаю', 'Я нет знаю', 'Нет я знаю'],
      correcta: 'Я не знаю',
    },
    {
      id: 'q2',
      pregunta: '"У меня нет книги" significa:',
      opciones: [
        'Tengo un libro',
        'No tengo libro',
        'Mi libro no está',
        'No leo libros',
      ],
      correcta: 'No tengo libro',
    },
    {
      id: 'q3',
      pregunta: 'Para negar un verbo en ruso se usa:',
      opciones: [
        'нет antes del sujeto',
        'не antes del verbo',
        'ни después del verbo',
        'no antes del verbo',
      ],
      correcta: 'не antes del verbo',
    },
    {
      id: 'q4',
      pregunta: '"Нет проблем" significa:',
      opciones: [
        'Hay un problema',
        'No hay problema',
        'Sin problema',
        'Hay problemas',
      ],
      correcta: 'No hay problema',
    },
    {
      id: 'q5',
      pregunta: '¿Cómo se dice "No entiendo nada"?',
      opciones: [
        'Я не ничего понимаю',
        'Я ничего не понимаю',
        'Нет я понимаю',
        'Я ничего понимаю',
      ],
      correcta: 'Я ничего не понимаю',
    },
    {
      id: 'q6',
      pregunta: '"Он не говорит по-русски" significa:',
      opciones: [
        'Él habla ruso',
        'Él no habla ruso',
        'Él hablaría ruso',
        'Él estudia ruso',
      ],
      correcta: 'Él no habla ruso',
    },
    {
      id: 'q7',
      pregunta: 'Para decir "No tengo X" en ruso se usa:',
      opciones: [
        'Я нет X',
        'У меня нет + genitivo',
        'Мне нет X',
        'Нет у меня X',
      ],
      correcta: 'У меня нет + genitivo',
    },
    {
      id: 'q8',
      pregunta: '"Я никогда не курю" significa:',
      opciones: ['Siempre fumo', 'Nunca fumo', 'A veces fumo', 'Ya no fumo'],
      correcta: 'Nunca fumo',
    },
    {
      id: 'q9',
      pregunta: '¿Cuál es la forma correcta de negar?',
      opciones: ['Я нет читаю', 'Нет я читаю', 'Я не читаю', 'Я читаю не'],
      correcta: 'Я не читаю',
    },
    {
      id: 'q10',
      pregunta: '"Это не моя книга" significa:',
      opciones: [
        'Este es mi libro',
        'Este no es mi libro',
        'No tengo libro',
        'No leo este libro',
      ],
      correcta: 'Este no es mi libro',
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
          🚫 La Negación en Ruso
        </h2>
        <p className="text-htb-text-dim">
          En ruso se usa <span className="text-htb-green font-bold">не</span>{' '}
          antes del verbo para negar acciones, y{' '}
          <span className="text-htb-green font-bold">нет</span> para indicar
          ausencia o responder negativamente.
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
                Patrones de negación
              </h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                  <th className="text-left py-2 px-4 text-htb-green text-sm">
                    Patrón
                  </th>
                  <th className="text-left py-2 px-4 text-white text-sm">
                    Ejemplo
                  </th>
                  <th className="text-left py-2 px-4 text-htb-text-dim text-sm">
                    Translit.
                  </th>
                  <th className="text-left py-2 px-4 text-htb-text-dim text-sm">
                    Español
                  </th>
                </tr>
              </thead>
              <tbody>
                {reglas.map((r, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-4 text-htb-green font-bold text-sm">
                      {r.patron}
                    </td>
                    <td className="py-2 px-4 text-white">{r.ejemplo}</td>
                    <td className="py-2 px-4 text-htb-text-dim italic text-sm">
                      {r.translit}
                    </td>
                    <td className="py-2 px-4 text-htb-text-dim text-sm">
                      {r.espanol}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-htb-sidebar rounded-lg border border-blue-700/40 p-4">
              <p className="text-blue-300 font-semibold mb-2">
                не (ne) — niega verbos y adjetivos
              </p>
              <ul className="text-htb-text-dim text-sm space-y-1">
                <li>
                  • Я <span className="text-white">не</span> читаю → No leo
                </li>
                <li>
                  • Он <span className="text-white">не</span> дома → No está en
                  casa
                </li>
                <li>
                  • <span className="text-white">Не</span> очень хорошо → No muy
                  bien
                </li>
              </ul>
            </div>
            <div className="bg-htb-sidebar rounded-lg border border-red-700/40 p-4">
              <p className="text-red-300 font-semibold mb-2">
                нет (net) — ausencia / respuesta negativa
              </p>
              <ul className="text-htb-text-dim text-sm space-y-1">
                <li>
                  • <span className="text-white">Нет</span>, спасибо → No,
                  gracias
                </li>
                <li>
                  • У меня <span className="text-white">нет</span> денег → No
                  tengo dinero
                </li>
                <li>
                  • Его <span className="text-white">нет</span> → Él no está
                </li>
              </ul>
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
                <p className="text-2xl text-htb-green font-bold mb-3 text-center">
                  {flashCards[flashcardIndex].ruso}
                </p>
                <p className="text-htb-text-dim italic">
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

export default NegacionA1Exercise;
