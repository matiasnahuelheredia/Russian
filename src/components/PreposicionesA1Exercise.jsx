import React, { useState } from 'react';

const PreposicionesA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const preposiciones = [
    {
      prep: 'в',
      caso: 'Prepositivo',
      uso: 'Lugar: estar en',
      ejemplo: 'Я живу в Москве.',
      translit: 'Ya zhivu v Moskve.',
      espanol: 'Vivo en Moscú.',
    },
    {
      prep: 'в',
      caso: 'Acusativo',
      uso: 'Dirección: ir a',
      ejemplo: 'Я иду в школу.',
      translit: 'Ya idu v shkolu.',
      espanol: 'Voy a la escuela.',
    },
    {
      prep: 'на',
      caso: 'Prepositivo',
      uso: 'Lugar: estar sobre/en',
      ejemplo: 'Книга на столе.',
      translit: 'Kniga na stole.',
      espanol: 'El libro está en la mesa.',
    },
    {
      prep: 'на',
      caso: 'Acusativo',
      uso: 'Dirección: ir hacia',
      ejemplo: 'Я иду на работу.',
      translit: 'Ya idu na rabotu.',
      espanol: 'Voy al trabajo.',
    },
    {
      prep: 'из',
      caso: 'Genitivo',
      uso: 'Origen: de dentro',
      ejemplo: 'Я из России.',
      translit: 'Ya iz Rossii.',
      espanol: 'Soy de Rusia.',
    },
    {
      prep: 'с',
      caso: 'Genitivo',
      uso: 'Origen: de superficie',
      ejemplo: 'Я иду с работы.',
      translit: 'Ya idu s raboty.',
      espanol: 'Vengo del trabajo.',
    },
    {
      prep: 'у',
      caso: 'Genitivo',
      uso: 'Posesión / junto a',
      ejemplo: 'У меня есть кошка.',
      translit: 'U menya yestʼ koshka.',
      espanol: 'Tengo un gato.',
    },
    {
      prep: 'к',
      caso: 'Dativo',
      uso: 'Dirección hacia persona',
      ejemplo: 'Я иду к другу.',
      translit: 'Ya idu k drugu.',
      espanol: 'Voy a casa de mi amigo.',
    },
    {
      prep: 'о / об',
      caso: 'Prepositivo',
      uso: 'Sobre, acerca de',
      ejemplo: 'Я думаю о тебе.',
      translit: 'Ya dumayu o tebe.',
      espanol: 'Pienso en ti.',
    },
    {
      prep: 'с',
      caso: 'Instrumental',
      uso: 'Compañía / con',
      ejemplo: 'Я иду с другом.',
      translit: 'Ya idu s drugom.',
      espanol: 'Voy con mi amigo.',
    },
  ];

  const flashCards = [
    {
      ruso: 'в + prep. — lugar',
      translit: 'v',
      espanol: 'en (lugar): в школе — en la escuela',
    },
    {
      ruso: 'в + acus. — dirección',
      translit: 'v',
      espanol: 'a (movimiento): в школу — a la escuela',
    },
    {
      ruso: 'на + prep. — superficie',
      translit: 'na',
      espanol: 'en/sobre: на столе — en la mesa',
    },
    {
      ruso: 'из + gen.',
      translit: 'iz',
      espanol: 'de (origen): из России — de Rusia',
    },
    { ruso: 'у + gen.', translit: 'u', espanol: 'posesión: у меня — yo tengo' },
    {
      ruso: 'к + dat.',
      translit: 'k',
      espanol: 'hacia (persona): к другу — a casa del amigo',
    },
    {
      ruso: 'с + inst.',
      translit: 's',
      espanol: 'con: с другом — con el amigo',
    },
    {
      ruso: 'о/об + prep.',
      translit: 'o/ob',
      espanol: 'sobre/acerca de: о тебе — sobre ti',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta:
        '"Я живу ___ Москве." (Vivo en Moscú) — ¿qué preposición falta?',
      opciones: ['на', 'в', 'из', 'у'],
      correcta: 'в',
    },
    {
      id: 'q2',
      pregunta:
        '"Книга ___ столе" significa "el libro está en la mesa". ¿Qué preposición?',
      opciones: ['в', 'из', 'на', 'к'],
      correcta: 'на',
    },
    {
      id: 'q3',
      pregunta: '"Я ___ России" (soy de Rusia). ¿Qué preposición de origen?',
      opciones: ['с', 'в', 'о', 'из'],
      correcta: 'из',
    },
    {
      id: 'q4',
      pregunta:
        '"___ меня есть машина" (tengo un coche). ¿Qué preposición de posesión?',
      opciones: ['к', 'у', 'с', 'в'],
      correcta: 'у',
    },
    {
      id: 'q5',
      pregunta:
        '"Я иду ___ школу" (voy a la escuela, movimiento). ¿Preposición + caso?',
      opciones: ['на + prep.', 'в + acus.', 'из + gen.', 'в + prep.'],
      correcta: 'в + acus.',
    },
    {
      id: 'q6',
      pregunta: '"Я иду ___ другом" (voy con mi amigo). ¿Qué preposición?',
      opciones: ['у', 'к', 'с', 'о'],
      correcta: 'с',
    },
    {
      id: 'q7',
      pregunta: '¿Cuál es la diferencia entre "в + prep." y "в + acus."?',
      opciones: [
        'No hay diferencia',
        'Prep. indica lugar, Acus. indica movimiento',
        'Acus. indica lugar, Prep. indica origen',
        'Depende del verbo',
      ],
      correcta: 'Prep. indica lugar, Acus. indica movimiento',
    },
    {
      id: 'q8',
      pregunta: '"Я думаю ___ тебе" (pienso en ti). ¿Qué preposición?',
      opciones: ['у', 'к', 'с', 'о'],
      correcta: 'о',
    },
    {
      id: 'q9',
      pregunta: '"Я иду ___ другу" (voy a casa de mi amigo). ¿Qué preposición?',
      opciones: ['с', 'о', 'к', 'у'],
      correcta: 'к',
    },
    {
      id: 'q10',
      pregunta:
        '"Я иду ___ работы" (vengo del trabajo — de superficie). ¿Qué preposición?',
      opciones: ['из', 'с', 'у', 'от'],
      correcta: 'с',
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
          📍 Preposiciones Básicas
        </h2>
        <p className="text-htb-text-dim">
          Las preposiciones rusas rigen un caso específico. Las más importantes
          para A1 son{' '}
          <span className="text-htb-green font-bold">
            в, на, из, с, у, к, о
          </span>
          .
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
                Preposiciones + caso + uso
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                    <th className="text-left py-2 px-3 text-htb-green text-sm">
                      Prep.
                    </th>
                    <th className="text-left py-2 px-3 text-htb-text-dim text-sm">
                      Caso
                    </th>
                    <th className="text-left py-2 px-3 text-white text-sm">
                      Uso
                    </th>
                    <th className="text-left py-2 px-3 text-white text-sm">
                      Ejemplo
                    </th>
                    <th className="text-left py-2 px-3 text-htb-text-dim text-sm">
                      Español
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {preposiciones.map((p, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-3 text-htb-green font-bold text-xl">
                        {p.prep}
                      </td>
                      <td className="py-2 px-3 text-htb-text-dim text-xs">
                        {p.caso}
                      </td>
                      <td className="py-2 px-3 text-white text-sm">{p.uso}</td>
                      <td className="py-2 px-3 text-htb-green text-sm">
                        {p.ejemplo}
                      </td>
                      <td className="py-2 px-3 text-htb-text-dim text-sm italic">
                        {p.espanol}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-htb-sidebar rounded-lg border border-yellow-700/40 p-4">
            <p className="text-yellow-300 font-semibold mb-2">
              ⚠️ в vs на para lugar
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-white font-medium mb-1">
                  в — espacios cerrados
                </p>
                <p className="text-htb-text-dim">
                  в школе, в доме, в магазине, в городе
                </p>
              </div>
              <div>
                <p className="text-white font-medium mb-1">
                  на — superficies / eventos
                </p>
                <p className="text-htb-text-dim">
                  на улице, на работе, на концерте, на море
                </p>
              </div>
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
                Elige la preposición o respuesta correcta.
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

export default PreposicionesA1Exercise;
