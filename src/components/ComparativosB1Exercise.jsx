import React, { useState } from 'react';

const ComparativosB1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const comparativos = [
    {
      adjetivo: 'большой (grande)',
      comparativo: 'больше',
      superlativo: 'самый большой',
      ejemploComp: 'Этот город больше.',
      ejemploSup: 'Это самый большой город.',
    },
    {
      adjetivo: 'маленький (pequeño)',
      comparativo: 'меньше',
      superlativo: 'самый маленький',
      ejemploComp: 'Эта комната меньше.',
      ejemploSup: 'Это самая маленькая комната.',
    },
    {
      adjetivo: 'хороший (bueno)',
      comparativo: 'лучше',
      superlativo: 'самый хороший / лучший',
      ejemploComp: 'Это лучше.',
      ejemploSup: 'Это лучший вариант.',
    },
    {
      adjetivo: 'плохой (malo)',
      comparativo: 'хуже',
      superlativo: 'самый плохой / худший',
      ejemploComp: 'Сегодня хуже.',
      ejemploSup: 'Это худший результат.',
    },
    {
      adjetivo: 'старый (viejo)',
      comparativo: 'старше',
      superlativo: 'самый старый',
      ejemploComp: 'Он старше меня.',
      ejemploSup: 'Он самый старый.',
    },
    {
      adjetivo: 'молодой (joven)',
      comparativo: 'моложе',
      superlativo: 'самый молодой',
      ejemploComp: 'Она моложе.',
      ejemploSup: 'Она самая молодая.',
    },
    {
      adjetivo: 'быстрый (rápido)',
      comparativo: 'быстрее',
      superlativo: 'самый быстрый',
      ejemploComp: 'Машина быстрее.',
      ejemploSup: 'Это самая быстрая машина.',
    },
    {
      adjetivo: 'дорогой (caro)',
      comparativo: 'дороже',
      superlativo: 'самый дорогой',
      ejemploComp: 'Это дороже.',
      ejemploSup: 'Это самый дорогой магазин.',
    },
  ];

  const estructuras = [
    {
      estructura: 'A + сравнит. + чем + B',
      ejemplo: 'Москва больше, чем Казань.',
      espanol: 'Moscú es más grande que Kazán.',
    },
    {
      estructura: 'A + сравнит. + B (gen.)',
      ejemplo: 'Москва больше Казани.',
      espanol: 'Moscú es más grande que Kazán.',
    },
    {
      estructura: 'самый + adj. (superlativo)',
      ejemplo: 'Байкал — самое глубокое озеро.',
      espanol: 'El Baikal es el lago más profundo.',
    },
    {
      estructura: 'такой же ... как',
      ejemplo: 'Он такой же высокий, как я.',
      espanol: 'Él es tan alto como yo.',
    },
  ];

  const flashCards = [
    { ruso: 'больше', translit: 'bolʼshe', espanol: 'más grande / más' },
    { ruso: 'меньше', translit: 'menʼshe', espanol: 'más pequeño / menos' },
    { ruso: 'лучше', translit: 'luchshe', espanol: 'mejor' },
    { ruso: 'хуже', translit: 'khuzhe', espanol: 'peor' },
    { ruso: 'старше', translit: 'starshe', espanol: 'mayor (en edad)' },
    { ruso: 'самый', translit: 'samyy', espanol: 'el/la más (superlativo)' },
    { ruso: 'чем', translit: 'chem', espanol: 'que (en comparaciones)' },
    {
      ruso: 'такой же ... как',
      translit: 'takoy zhe... kak',
      espanol: 'tan ... como',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo se forma el superlativo en ruso?',
      opciones: [
        'mejor + adj.',
        'самый + adj.',
        'лучше + adj.',
        'больше + adj.',
      ],
      correcta: 'самый + adj.',
    },
    {
      id: 'q2',
      pregunta: 'El comparativo de "хороший" (bueno) es:',
      opciones: ['хуже', 'больше', 'лучше', 'лучший'],
      correcta: 'лучше',
    },
    {
      id: 'q3',
      pregunta: '"Этот фильм лучше, чем тот" significa:',
      opciones: [
        'Esta película es peor que esa',
        'Esta película es mejor que esa',
        'Esta película es la mejor',
        'Esa película es mejor',
      ],
      correcta: 'Esta película es mejor que esa',
    },
    {
      id: 'q4',
      pregunta: '"Самый большой город" significa:',
      opciones: [
        'Una ciudad muy grande',
        'La ciudad más grande',
        'Una ciudad bastante grande',
        'La ciudad grande',
      ],
      correcta: 'La ciudad más grande',
    },
    {
      id: 'q5',
      pregunta: '¿Cuál es el comparativo de "плохой" (malo)?',
      opciones: ['меньше', 'хуже', 'старше', 'больше'],
      correcta: 'хуже',
    },
    {
      id: 'q6',
      pregunta: '"Он старше меня" significa:',
      opciones: [
        'Él es más joven que yo',
        'Él es mayor que yo',
        'Él es el mayor',
        'Él es tan mayor como yo',
      ],
      correcta: 'Él es mayor que yo',
    },
    {
      id: 'q7',
      pregunta: 'La estructura "такой же ... как" expresa:',
      opciones: ['Superioridad', 'Inferioridad', 'Igualdad', 'El superlativo'],
      correcta: 'Igualdad',
    },
    {
      id: 'q8',
      pregunta: 'Para decir "más rápido" en ruso se dice:',
      opciones: ['быстрый', 'самый быстрый', 'быстрее', 'очень быстрый'],
      correcta: 'быстрее',
    },
    {
      id: 'q9',
      pregunta: '"Москва больше Казани" usa el caso:',
      opciones: ['Nominativo', 'Acusativo', 'Genitivo', 'Instrumental'],
      correcta: 'Genitivo',
    },
    {
      id: 'q10',
      pregunta: '¿Cuál de estas frases usa el superlativo correctamente?',
      opciones: [
        'Это более хороший',
        'Это самый хороший',
        'Это лучше всего',
        'Это самый лучший',
      ],
      correcta: 'Это самый хороший',
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
          📊 Comparativos y Superlativos
        </h2>
        <p className="text-htb-text-dim">
          En ruso, los comparativos son invariables (no cambian género/número).
          Los superlativos usan{' '}
          <span className="text-htb-green font-bold">самый</span> + adjetivo
          (que sí concuerda).
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
                Adjetivos, comparativos y superlativos
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                    <th className="text-left py-3 px-4 text-htb-text-dim text-sm">
                      Adjetivo
                    </th>
                    <th className="text-left py-3 px-4 text-htb-green text-sm">
                      Comparativo
                    </th>
                    <th className="text-left py-3 px-4 text-white text-sm">
                      Superlativo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparativos.map((c, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-4 text-htb-text-dim text-sm">
                        {c.adjetivo}
                      </td>
                      <td className="py-2 px-4">
                        <p className="text-htb-green font-bold text-lg">
                          {c.comparativo}
                        </p>
                        <p className="text-htb-text-dim text-xs italic">
                          {c.ejemploComp}
                        </p>
                      </td>
                      <td className="py-2 px-4">
                        <p className="text-white font-semibold">
                          {c.superlativo}
                        </p>
                        <p className="text-htb-text-dim text-xs italic">
                          {c.ejemploSup}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Estructuras comparativas
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {estructuras.map((e, i) => (
                <div
                  key={i}
                  className="bg-htb-sidebar rounded-lg p-3 border border-gray-800 flex flex-col md:flex-row md:items-center gap-2"
                >
                  <span className="text-xs bg-htb-card border border-gray-700 text-htb-green px-2 py-1 rounded font-mono whitespace-nowrap">
                    {e.estructura}
                  </span>
                  <div>
                    <p className="text-htb-green">{e.ejemplo}</p>
                    <p className="text-htb-text-dim text-sm italic">
                      {e.espanol}
                    </p>
                  </div>
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

export default ComparativosB1Exercise;
