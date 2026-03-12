import React, { useState } from 'react';

const GeneroSustantivosA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const reglas = [
    {
      genero: 'Masculino',
      terminacion: 'consonante, -й',
      color: 'blue',
      ejemplos: [
        { ruso: 'стол', translit: 'stol', espanol: 'mesa' },
        { ruso: 'брат', translit: 'brat', espanol: 'hermano' },
        { ruso: 'музей', translit: 'muzey', espanol: 'museo' },
        { ruso: 'словарь', translit: 'slovarʼ', espanol: 'diccionario' },
      ],
    },
    {
      genero: 'Femenino',
      terminacion: '-а, -я, -ь (algunas)',
      color: 'pink',
      ejemplos: [
        { ruso: 'мама', translit: 'mama', espanol: 'mamá' },
        { ruso: 'книга', translit: 'kniga', espanol: 'libro' },
        { ruso: 'неделя', translit: 'nedelya', espanol: 'semana' },
        { ruso: 'ночь', translit: 'nochʼ', espanol: 'noche' },
      ],
    },
    {
      genero: 'Neutro',
      terminacion: '-о, -е',
      color: 'green',
      ejemplos: [
        { ruso: 'окно', translit: 'okno', espanol: 'ventana' },
        { ruso: 'море', translit: 'more', espanol: 'mar' },
        { ruso: 'слово', translit: 'slovo', espanol: 'palabra' },
        { ruso: 'имя', translit: 'imya', espanol: 'nombre' },
      ],
    },
  ];

  const flashCards = [
    { ruso: 'стол (м)', translit: 'stol', espanol: 'mesa — masculino' },
    { ruso: 'книга (ж)', translit: 'kniga', espanol: 'libro — femenino' },
    { ruso: 'окно (ср)', translit: 'okno', espanol: 'ventana — neutro' },
    { ruso: 'брат (м)', translit: 'brat', espanol: 'hermano — masculino' },
    { ruso: 'мама (ж)', translit: 'mama', espanol: 'mamá — femenino' },
    { ruso: 'море (ср)', translit: 'more', espanol: 'mar — neutro' },
    {
      ruso: 'словарь (м)',
      translit: 'slovarʼ',
      espanol: 'diccionario — masculino',
    },
    { ruso: 'ночь (ж)', translit: 'nochʼ', espanol: 'noche — femenino' },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cuál es el género de "стол" (mesa)?',
      opciones: ['Masculino', 'Femenino', 'Neutro', 'No tiene género'],
      correcta: 'Masculino',
    },
    {
      id: 'q2',
      pregunta: 'Los sustantivos que terminan en -а/-я generalmente son:',
      opciones: ['Masculinos', 'Femeninos', 'Neutros', 'Depende del contexto'],
      correcta: 'Femeninos',
    },
    {
      id: 'q3',
      pregunta: '"Окно" (ventana) termina en -о, por tanto es:',
      opciones: ['Masculino', 'Femenino', 'Neutro', 'Plural'],
      correcta: 'Neutro',
    },
    {
      id: 'q4',
      pregunta: '¿Cuál de estas palabras es femenina?',
      opciones: ['брат', 'стол', 'книга', 'окно'],
      correcta: 'книга',
    },
    {
      id: 'q5',
      pregunta: '"Словарь" (diccionario) termina en -ь. ¿Cuál es su género?',
      opciones: [
        'Siempre masculino',
        'Siempre femenino',
        'Hay que aprender caso por caso',
        'Siempre neutro',
      ],
      correcta: 'Hay que aprender caso por caso',
    },
    {
      id: 'q6',
      pregunta: '¿Cuál de estas palabras es neutra?',
      opciones: ['мама', 'стол', 'море', 'ночь'],
      correcta: 'море',
    },
    {
      id: 'q7',
      pregunta: '"Имя" (nombre) termina en -я pero es:',
      opciones: ['Femenino', 'Masculino', 'Neutro (excepción)', 'Invariable'],
      correcta: 'Neutro (excepción)',
    },
    {
      id: 'q8',
      pregunta: 'Los sustantivos que terminan en consonante son generalmente:',
      opciones: ['Femeninos', 'Neutros', 'Masculinos', 'Plurales'],
      correcta: 'Masculinos',
    },
    {
      id: 'q9',
      pregunta: '¿Cuál es el género de "неделя" (semana)?',
      opciones: ['Masculino', 'Femenino', 'Neutro', 'Indefinido'],
      correcta: 'Femenino',
    },
    {
      id: 'q10',
      pregunta: 'El género en ruso es importante porque:',
      opciones: [
        'Para conjugar los verbos',
        'Los adjetivos y posesivos deben concordar con el género del sustantivo',
        'Para identificar animales',
        'No tiene importancia práctica',
      ],
      correcta:
        'Los adjetivos y posesivos deben concordar con el género del sustantivo',
    },
  ];

  const colorMap = {
    blue: 'border-blue-700 text-blue-300 bg-blue-900/20',
    pink: 'border-pink-700 text-pink-300 bg-pink-900/20',
    green: 'border-htb-green text-htb-green bg-htb-green/10',
  };
  const headerColor = {
    blue: 'text-blue-400',
    pink: 'text-pink-400',
    green: 'text-htb-green',
  };

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
          🏷️ Género de los Sustantivos
        </h2>
        <p className="text-htb-text-dim">
          En ruso hay 3 géneros:{' '}
          <span className="text-blue-400 font-semibold">masculino</span>,{' '}
          <span className="text-pink-400 font-semibold">femenino</span> y{' '}
          <span className="text-htb-green font-semibold">neutro</span>. La
          terminación del sustantivo suele indicar el género.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reglas.map((r) => (
              <div
                key={r.genero}
                className={`rounded-lg border p-4 ${colorMap[r.color]}`}
              >
                <h3
                  className={`font-bold text-lg mb-1 ${headerColor[r.color]}`}
                >
                  {r.genero}
                </h3>
                <p className="text-htb-text-dim text-xs mb-3">
                  Termina en:{' '}
                  <span className="text-white font-semibold">
                    {r.terminacion}
                  </span>
                </p>
                <div className="space-y-2">
                  {r.ejemplos.map((e, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span
                        className={`font-bold text-lg ${headerColor[r.color]}`}
                      >
                        {e.ruso}
                      </span>
                      <span className="text-htb-text-dim text-sm italic">
                        {e.translit}
                      </span>
                      <span className="text-white text-sm">{e.espanol}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-htb-sidebar rounded-lg border border-htb-green/30 p-4">
            <p className="text-htb-green font-semibold mb-2">
              ⚠️ Excepción: sustantivos en -ь
            </p>
            <p className="text-htb-text-dim text-sm">
              Los sustantivos que terminan en{' '}
              <strong className="text-white">-ь</strong> (signo blando) pueden
              ser masculinos o femeninos. Hay que aprenderlos individualmente.
              Ej: <span className="text-blue-400">словарь</span> (masc.) vs{' '}
              <span className="text-pink-400">ночь</span> (fem.)
            </p>
          </div>

          <div className="bg-htb-card rounded-lg border border-gray-800 p-4">
            <h3 className="text-htb-green font-semibold mb-3">
              Resumen de terminaciones
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 px-3 text-blue-400">
                      Masculino
                    </th>
                    <th className="text-left py-2 px-3 text-pink-400">
                      Femenino
                    </th>
                    <th className="text-left py-2 px-3 text-htb-green">
                      Neutro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-3 text-white">
                      consonante, -й, -ь*
                    </td>
                    <td className="py-2 px-3 text-white">-а, -я, -ь*</td>
                    <td className="py-2 px-3 text-white">-о, -е, -мя</td>
                  </tr>
                </tbody>
              </table>
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
                <p className="text-4xl text-htb-green font-bold mb-3 text-center">
                  {flashCards[flashcardIndex].ruso}
                </p>
                <p className="text-htb-text-dim italic text-lg">
                  {flashCards[flashcardIndex].translit}
                </p>
              </>
            ) : (
              <p className="text-2xl text-white text-center">
                {flashCards[flashcardIndex].espanol}
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

export default GeneroSustantivosA1Exercise;
