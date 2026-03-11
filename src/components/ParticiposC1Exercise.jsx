import React, { useState } from 'react';

const ParticiposC1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const tiposParticipios = [
    {
      tipo: 'Activo Presente',
      sufijo: '-ущий/-ющий (1ª), -ащий/-ящий (2ª)',
      ejemplo: 'читать → читающий (que lee)',
      uso: 'Describe al sujeto que realiza la acción ahora',
    },
    {
      tipo: 'Activo Pasado',
      sufijo: '-вший / -ший',
      ejemplo: 'читать → читавший (que leyó)',
      uso: 'Describe al sujeto que realizó la acción en el pasado',
    },
    {
      tipo: 'Pasivo Presente',
      sufijo: '-емый/-омый (1ª), -имый (2ª)',
      ejemplo: 'читать → читаемый (leído, que se lee)',
      uso: 'Describe al objeto que sufre la acción (activo)',
    },
    {
      tipo: 'Pasivo Pasado',
      sufijo: '-нный/-тый',
      ejemplo: 'читать → прочитанный (leído)',
      uso: 'Describe al objeto que sufrió la acción (completada)',
    },
  ];

  const ejemplos = [
    {
      participio: 'читающий студент',
      espanol: 'el estudiante que lee',
      tipo: 'Activo Presente',
    },
    {
      participio: 'написанная книга',
      espanol: 'el libro escrito',
      tipo: 'Pasivo Pasado',
    },
    {
      participio: 'говорящий человек',
      espanol: 'la persona que habla',
      tipo: 'Activo Presente',
    },
    {
      participio: 'открытая дверь',
      espanol: 'la puerta abierta',
      tipo: 'Pasivo Pasado',
    },
    {
      participio: 'любимый фильм',
      espanol: 'la película favorita / amada',
      tipo: 'Pasivo Presente',
    },
    {
      participio: 'уехавший друг',
      espanol: 'el amigo que se fue',
      tipo: 'Activo Pasado',
    },
  ];

  const flashCards = [
    { ruso: 'Причастие', translit: 'Prichastie', espanol: 'Participio' },
    {
      ruso: 'читающий',
      translit: 'chitayushchiy',
      espanol: 'que lee (activo presente)',
    },
    {
      ruso: 'прочитанный',
      translit: 'prochitannyy',
      espanol: 'leído (pasivo pasado)',
    },
    {
      ruso: 'говорящий',
      translit: 'govoryashchiy',
      espanol: 'que habla (activo presente)',
    },
    {
      ruso: 'написанный',
      translit: 'napisannyy',
      espanol: 'escrito (pasivo pasado)',
    },
    {
      ruso: 'открытый',
      translit: 'otkrytyy',
      espanol: 'abierto (pasivo pasado)',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Qué es un participio (причастие) en ruso?',
      opciones: [
        'Un verbo en futuro',
        'Una forma verbal que funciona como adjetivo',
        'Un adverbio derivado de verbo',
        'Una conjunción',
      ],
      correcta: 'Una forma verbal que funciona como adjetivo',
    },
    {
      id: 'q2',
      pregunta: '"Читающий" es un participio:',
      opciones: [
        'Pasivo pasado',
        'Activo pasado',
        'Activo presente',
        'Pasivo presente',
      ],
      correcta: 'Activo presente',
    },
    {
      id: 'q3',
      pregunta:
        '¿Qué sufijo usan los participios activos de presente para verbos de 1ª conjugación?',
      opciones: ['-вший', '-ащий/-ящий', '-ущий/-ющий', '-нный'],
      correcta: '-ущий/-ющий',
    },
    {
      id: 'q4',
      pregunta: '"Написанная книга" significa:',
      opciones: [
        'El libro que escribe',
        'El libro escrito',
        'El libro que escribía',
        'El libro de escritura',
      ],
      correcta: 'El libro escrito',
    },
    {
      id: 'q5',
      pregunta: 'Los participios rusos concuerdan con el sustantivo en:',
      opciones: [
        'Solo en número',
        'Solo en género',
        'Género, número y caso',
        'Solo en caso',
      ],
      correcta: 'Género, número y caso',
    },
    {
      id: 'q6',
      pregunta: '"Открытая дверь" usa el participio:',
      opciones: [
        'Activo presente',
        'Activo pasado',
        'Pasivo presente',
        'Pasivo pasado',
      ],
      correcta: 'Pasivo pasado',
    },
    {
      id: 'q7',
      pregunta: '"Говорящий человек" significa:',
      opciones: [
        'El hombre que habló',
        'El hombre que hablará',
        'La persona que habla',
        'El hombre callado',
      ],
      correcta: 'La persona que habla',
    },
    {
      id: 'q8',
      pregunta: 'Los participios pasivos de pasado se forman con el sufijo:',
      opciones: ['-ущий', '-вший', '-нный/-тый', '-имый'],
      correcta: '-нный/-тый',
    },
    {
      id: 'q9',
      pregunta: '"Любимый фильм" contiene un participio:',
      opciones: [
        'Activo presente',
        'Activo pasado',
        'Pasivo presente',
        'Pasivo pasado',
      ],
      correcta: 'Pasivo presente',
    },
    {
      id: 'q10',
      pregunta: 'La diferencia principal entre participio activo y pasivo es:',
      opciones: [
        'El tiempo verbal',
        'El activo describe al que hace la acción, el pasivo al que la recibe',
        'El activo es singular, el pasivo plural',
        'No hay diferencia práctica',
      ],
      correcta:
        'El activo describe al que hace la acción, el pasivo al que la recibe',
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
          📎 Participios Rusos (Причастия)
        </h2>
        <p className="text-htb-text-dim">
          Los participios son formas verbales que funcionan como adjetivos. En
          ruso hay 4 tipos según voz y tiempo.
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
                Los 4 tipos de participios
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                    <th className="text-left py-3 px-4 text-htb-green text-sm">
                      Tipo
                    </th>
                    <th className="text-left py-3 px-4 text-white text-sm">
                      Sufijo
                    </th>
                    <th className="text-left py-3 px-4 text-htb-text-dim text-sm">
                      Ejemplo
                    </th>
                    <th className="text-left py-3 px-4 text-htb-text-dim text-sm">
                      Uso
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tiposParticipios.map((t, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-3 px-4 text-white font-semibold">
                        {t.tipo}
                      </td>
                      <td className="py-3 px-4 text-htb-green font-bold text-sm">
                        {t.sufijo}
                      </td>
                      <td className="py-3 px-4 text-htb-green text-sm">
                        {t.ejemplo}
                      </td>
                      <td className="py-3 px-4 text-htb-text-dim text-xs">
                        {t.uso}
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
                Ejemplos en contexto
              </h3>
            </div>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {ejemplos.map((e, i) => (
                <div
                  key={i}
                  className="bg-htb-sidebar rounded-lg p-3 border border-gray-800"
                >
                  <p className="text-htb-green font-bold">{e.participio}</p>
                  <p className="text-white text-sm">{e.espanol}</p>
                  <span className="text-xs bg-htb-card border border-gray-700 text-htb-text-dim px-2 py-0.5 rounded mt-1 inline-block">
                    {e.tipo}
                  </span>
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
                    ? '¡Excelente! 👍'
                    : score >= 5
                      ? 'Bien 💪'
                      : 'Sigue estudiando 📚'}
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

export default ParticiposC1Exercise;
