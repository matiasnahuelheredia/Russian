import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const DireccionesExercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const phrases = [
    {
      ruso: 'Где находится...?',
      translit: 'Gde nakhoditsya...?',
      espanol: '¿Dónde está/se encuentra...?',
    },
    {
      ruso: 'Как добраться до...?',
      translit: 'Kak dobratʼsya do...?',
      espanol: '¿Cómo se llega a...?',
    },
    { ruso: 'Налево', translit: 'Nalevo', espanol: 'A la izquierda' },
    { ruso: 'Направо', translit: 'Napravo', espanol: 'A la derecha' },
    { ruso: 'Прямо', translit: 'Pryamo', espanol: 'Todo recto / Recto' },
    { ruso: 'Недалеко', translit: 'Nedaleko', espanol: 'Cerca / No muy lejos' },
    { ruso: 'Далеко', translit: 'Daleko', espanol: 'Lejos' },
    {
      ruso: 'Остановка',
      translit: 'Ostanovka',
      espanol: 'Parada (autobús/tranvía)',
    },
    { ruso: 'Метро', translit: 'Metro', espanol: 'Metro / Subterráneo' },
    {
      ruso: 'Извините, вы не знаете, где...?',
      translit: 'Izvinite, vy ne znaete, gde...?',
      espanol: 'Perdone, ¿sabe por dónde está...?',
    },
    {
      ruso: 'Поверните налево/направо',
      translit: 'Povernitʼ nalevo/napravo',
      espanol: 'Gire a la izquierda/derecha',
    },
    {
      ruso: 'На следующем перекрёстке',
      translit: 'Na sleduyushchem perekryostke',
      espanol: 'En el próximo cruce',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo preguntas "¿Dónde está...?" en ruso?',
      opciones: [
        'Как добраться до...?',
        'Где находится...?',
        'Поверните налево',
        'Это далеко?',
      ],
      correcta: 'Где находится...?',
    },
    {
      id: 'q2',
      pregunta: '"Налево" significa:',
      opciones: ['A la derecha', 'Recto', 'A la izquierda', 'Atrás'],
      correcta: 'A la izquierda',
    },
    {
      id: 'q3',
      pregunta: '"Направо" significa:',
      opciones: ['A la izquierda', 'Recto', 'Atrás', 'A la derecha'],
      correcta: 'A la derecha',
    },
    {
      id: 'q4',
      pregunta: '"Прямо" significa:',
      opciones: ['A la izquierda', 'Todo recto', 'Atrás', 'A la derecha'],
      correcta: 'Todo recto',
    },
    {
      id: 'q5',
      pregunta: '"Недалеко" significa:',
      opciones: ['Muy lejos', 'Por aquí', 'Cerca', 'No sé'],
      correcta: 'Cerca',
    },
    {
      id: 'q6',
      pregunta: '¿Cómo preguntas "¿Cómo se llega a...?" en ruso?',
      opciones: [
        'Где находится...?',
        'Как добраться до...?',
        'Поверните направо',
        'Это близко?',
      ],
      correcta: 'Как добраться до...?',
    },
    {
      id: 'q7',
      pregunta: '"Остановка" significa:',
      opciones: [
        'Aeropuerto',
        'Estación de tren',
        'Parada (autobús)',
        'Semáforo',
      ],
      correcta: 'Parada (autobús)',
    },
    {
      id: 'q8',
      pregunta: '"Далеко" significa:',
      opciones: ['Cerca', 'Aquí', 'Lejos', 'A la derecha'],
      correcta: 'Lejos',
    },
    {
      id: 'q9',
      pregunta: '¿Cómo dices "Gire a la izquierda"?',
      opciones: [
        'Прямо',
        'Поверните налево',
        'Поверните направо',
        'Остановитесь',
      ],
      correcta: 'Поверните налево',
    },
    {
      id: 'q10',
      pregunta: '"На следующем перекрёстке" significa:',
      opciones: [
        'Al final de la calle',
        'En el próximo cruce',
        'Antes del semáforo',
        'A la vuelta de la esquina',
      ],
      correcta: 'En el próximo cruce',
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
          🗺️ Preguntar Direcciones en Ruso
        </h2>
        <p className="text-htb-text-dim">
          Aprende a pedir y entender direcciones en ruso.
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
              Frases y palabras de direcciones
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
          <div className="p-4 bg-htb-sidebar/30 border-t border-gray-800">
            <p className="text-htb-green font-semibold mb-2">💡 Consejo</p>
            <p className="text-htb-text-dim text-sm">
              En ruso, para dar instrucciones usas el imperativo:{' '}
              <span className="text-white"><SpeakableText text="Идите прямо" /></span> (Vaya recto),{' '}
              <span className="text-white"><SpeakableText text="Поверните направо" /></span> (Gire a la
              derecha).
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

export default DireccionesExercise;
