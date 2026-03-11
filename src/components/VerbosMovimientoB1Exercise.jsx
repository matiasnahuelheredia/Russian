import React, { useState } from 'react';

const VerbosMovimientoB1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const verbPairs = [
    {
      det: 'идти',
      indet: 'ходить',
      detMeaning: 'ir (a pie, une vez, dirección concreta)',
      indetMeaning: 'ir (a pie, hábito, múltiples direcciones)',
      ejemplo: 'Я иду в магазин. / Я хожу в спортзал каждый день.',
      ejemploEsp: 'Voy a la tienda (ahora). / Voy al gimnasio cada día.',
    },
    {
      det: 'ехать',
      indet: 'ездить',
      detMeaning: 'ir (en vehículo, una vez, dirección concreta)',
      indetMeaning: 'ir (en vehículo, hábito, múltiples viajes)',
      ejemplo: 'Я еду на работу. / Я езжу в Москву каждый год.',
      ejemploEsp: 'Voy al trabajo (ahora). / Voy a Moscú cada año.',
    },
    {
      det: 'лететь',
      indet: 'летать',
      detMeaning: 'volar (un vuelo concreto)',
      indetMeaning: 'volar (hábito, múltiples vuelos)',
      ejemplo: 'Самолёт летит в Париж. / Я часто летаю по работе.',
      ejemploEsp: 'El avión vuela a París. / Suelo volar por trabajo.',
    },
    {
      det: 'плыть',
      indet: 'плавать',
      detMeaning: 'nadar/navegar (en una dirección)',
      indetMeaning: 'nadar/navegar (hábito)',
      ejemplo: 'Рыба плывёт. / Она хорошо плавает.',
      ejemploEsp: 'El pez nada (en una dirección). / Ella nada bien.',
    },
  ];

  const conjugIdti = [
    { persona: 'я', forma: 'иду' },
    { persona: 'ты', forma: 'идёшь' },
    { persona: 'он/она', forma: 'идёт' },
    { persona: 'мы', forma: 'идём' },
    { persona: 'вы', forma: 'идёте' },
    { persona: 'они', forma: 'идут' },
  ];
  const conjugKhodit = [
    { persona: 'я', forma: 'хожу' },
    { persona: 'ты', forma: 'ходишь' },
    { persona: 'он/она', forma: 'ходит' },
    { persona: 'мы', forma: 'ходим' },
    { persona: 'вы', forma: 'ходите' },
    { persona: 'они', forma: 'ходят' },
  ];

  const flashCards = [
    {
      ruso: 'идти',
      translit: 'idti',
      espanol: 'ir (a pie, dirección concreta)',
    },
    { ruso: 'ходить', translit: 'khoditʼ', espanol: 'ir (a pie, hábito)' },
    {
      ruso: 'ехать',
      translit: 'yekhatʼ',
      espanol: 'ir (en vehículo, dirección concreta)',
    },
    {
      ruso: 'ездить',
      translit: 'yezditʼ',
      espanol: 'ir (en vehículo, hábito)',
    },
    { ruso: 'лететь', translit: 'letetʼ', espanol: 'volar (un vuelo)' },
    { ruso: 'летать', translit: 'letatʼ', espanol: 'volar (hábito)' },
    { ruso: 'Куда?', translit: 'Kuda?', espanol: '¿A dónde?' },
    { ruso: 'Откуда?', translit: 'Otkuda?', espanol: '¿De dónde?' },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cuál es la diferencia entre "идти" y "ходить"?',
      opciones: [
        'Идти es en vehículo, ходить a pie',
        'Идти es una vez/dirección concreta, ходить es hábito',
        'Идти es plural, ходить es singular',
        'No hay diferencia',
      ],
      correcta: 'Идти es una vez/dirección concreta, ходить es hábito',
    },
    {
      id: 'q2',
      pregunta: '"Я еду в Москву" usa "ехать" porque:',
      opciones: [
        'Es a pie',
        'Es un viaje concreto en vehículo ahora',
        'Es un hábito',
        'Es en pasado',
      ],
      correcta: 'Es un viaje concreto en vehículo ahora',
    },
    {
      id: 'q3',
      pregunta: 'Para decir "Cada día voy al trabajo (en metro)" usarías:',
      opciones: [
        'Я еду на работу',
        'Я иду на работу',
        'Я езжу на работу',
        'Я хожу на работу',
      ],
      correcta: 'Я езжу на работу',
    },
    {
      id: 'q4',
      pregunta: '¿Cómo se conjuga "идти" para "ты"?',
      opciones: ['идёт', 'идёшь', 'иду', 'идут'],
      correcta: 'идёшь',
    },
    {
      id: 'q5',
      pregunta: '"Самолёт летит в Лондон" significa:',
      opciones: [
        'El avión suele volar a Londres',
        'El avión está volando a Londres ahora',
        'El avión voló a Londres',
        'El avión vuela por placer',
      ],
      correcta: 'El avión está volando a Londres ahora',
    },
    {
      id: 'q6',
      pregunta: '"Куда?" significa:',
      opciones: ['¿Dónde?', '¿Cuándo?', '¿A dónde?', '¿De dónde?'],
      correcta: '¿A dónde?',
    },
    {
      id: 'q7',
      pregunta: '¿Cuál de estas frases indica hábito?',
      opciones: [
        'Я иду в кино',
        'Я еду домой',
        'Я хожу в кино каждую неделю',
        'Самолёт летит',
      ],
      correcta: 'Я хожу в кино каждую неделю',
    },
    {
      id: 'q8',
      pregunta: '"Ходить" y "ездить" son verbos:',
      opciones: [
        'Determinados',
        'Indeterminados (hábito/multidireccional)',
        'Irregulares',
        'De aspecto perfectivo',
      ],
      correcta: 'Indeterminados (hábito/multidireccional)',
    },
    {
      id: 'q9',
      pregunta: '¿Cómo se dice "Ellos van (caminando ahora)"?',
      opciones: ['Они ходят', 'Они идут', 'Они едут', 'Они ездят'],
      correcta: 'Они идут',
    },
    {
      id: 'q10',
      pregunta: '"Плавать" se usa para:',
      opciones: [
        'Nadar una vez en dirección concreta',
        'Volar',
        'Nadar por hábito',
        'Conducir',
      ],
      correcta: 'Nadar por hábito',
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
          🚶 Verbos de Movimiento en Ruso
        </h2>
        <p className="text-htb-text-dim">
          Los verbos de movimiento rusos tienen dos formas:{' '}
          <span className="text-htb-green font-semibold">determinado</span>{' '}
          (dirección concreta, una vez) e{' '}
          <span className="text-htb-green font-semibold">indeterminado</span>{' '}
          (hábito, múltiples direcciones).
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
                Pares de verbos de movimiento
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                    <th className="text-left py-3 px-4 text-htb-green text-sm">
                      Determinado
                    </th>
                    <th className="text-left py-3 px-4 text-htb-green text-sm">
                      Indeterminado
                    </th>
                    <th className="text-left py-3 px-4 text-white text-sm">
                      Usos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {verbPairs.map((v, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-3 px-4">
                        <p className="text-htb-green font-bold text-xl">
                          {v.det}
                        </p>
                        <p className="text-htb-text-dim text-xs">
                          {v.detMeaning}
                        </p>
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-htb-green font-bold text-xl">
                          {v.indet}
                        </p>
                        <p className="text-htb-text-dim text-xs">
                          {v.indetMeaning}
                        </p>
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-white text-sm">{v.ejemplo}</p>
                        <p className="text-htb-text-dim text-xs italic mt-1">
                          {v.ejemploEsp}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'идти (ir a pie, concreto)', data: conjugIdti },
              { title: 'ходить (ir a pie, hábito)', data: conjugKhodit },
            ].map((conj) => (
              <div
                key={conj.title}
                className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden"
              >
                <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                  <h4 className="text-htb-green font-semibold text-sm">
                    {conj.title}
                  </h4>
                </div>
                <table className="w-full">
                  <tbody>
                    {conj.data.map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                      >
                        <td className="py-2 px-4 text-htb-text-dim text-sm">
                          {row.persona}
                        </td>
                        <td className="py-2 px-4 text-htb-green font-bold">
                          {row.forma}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
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

export default VerbosMovimientoB1Exercise;
