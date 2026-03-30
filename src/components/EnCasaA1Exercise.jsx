import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const EnCasaA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const tiposVivienda = [
    { ruso: 'квартира', translit: 'kvartira', espanol: 'apartamento / piso' },
    { ruso: 'дом', translit: 'dom', espanol: 'casa / edificio' },
    { ruso: 'комната', translit: 'komnata', espanol: 'habitación / cuarto' },
    { ruso: 'этаж', translit: 'etazh', espanol: 'piso (planta)' },
  ];

  const habitaciones = [
    { ruso: 'кухня', translit: 'kukhnya', espanol: 'cocina' },
    { ruso: 'спальня', translit: 'spalʼnya', espanol: 'dormitorio' },
    { ruso: 'гостиная', translit: 'gostinaya', espanol: 'sala de estar' },
    { ruso: 'ванная', translit: 'vannaya', espanol: 'cuarto de baño' },
    { ruso: 'туалет', translit: 'tualet', espanol: 'aseo / retrete' },
    {
      ruso: 'прихожая',
      translit: 'prikhózhaya',
      espanol: 'entrada / recibidor',
    },
    { ruso: 'балкон', translit: 'balkon', espanol: 'balcón' },
  ];

  const muebles = [
    { ruso: 'стол', translit: 'stol', espanol: 'mesa' },
    { ruso: 'стул', translit: 'stul', espanol: 'silla' },
    { ruso: 'диван', translit: 'divan', espanol: 'sofá' },
    { ruso: 'кровать', translit: 'krovatʼ', espanol: 'cama' },
    { ruso: 'шкаф', translit: 'shkaf', espanol: 'armario' },
    {
      ruso: 'холодильник',
      translit: 'kholodilʼnik',
      espanol: 'nevera / refrigerador',
    },
    { ruso: 'окно', translit: 'okno', espanol: 'ventana' },
    { ruso: 'дверь', translit: 'dverʼ', espanol: 'puerta' },
  ];

  const frases = [
    {
      ruso: 'Я живу в квартире.',
      translit: 'Ya zhivu v kvartire.',
      espanol: 'Vivo en un apartamento.',
    },
    {
      ruso: 'Мы живём в доме.',
      translit: 'My zhivyom v dome.',
      espanol: 'Vivimos en una casa.',
    },
    {
      ruso: 'Где кухня?',
      translit: 'Gde kukhnya?',
      espanol: '¿Dónde está la cocina?',
    },
    {
      ruso: 'На кухне есть стол.',
      translit: 'Na kukhne yestʼ stol.',
      espanol: 'En la cocina hay una mesa.',
    },
  ];

  const allFlash = [
    ...habitaciones.map((h) => ({
      ruso: h.ruso,
      translit: h.translit,
      espanol: h.espanol,
    })),
    ...muebles
      .slice(0, 5)
      .map((m) => ({ ruso: m.ruso, translit: m.translit, espanol: m.espanol })),
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo se dice "cocina" en ruso?',
      opciones: ['спальня', 'кухня', 'гостиная', 'ванная'],
      correcta: 'кухня',
    },
    {
      id: 'q2',
      pregunta: '"Спальня" significa:',
      opciones: ['sala de estar', 'dormitorio', 'cocina', 'baño'],
      correcta: 'dormitorio',
    },
    {
      id: 'q3',
      pregunta: '¿Cómo se dice "sofá"?',
      opciones: ['стул', 'стол', 'диван', 'кровать'],
      correcta: 'диван',
    },
    {
      id: 'q4',
      pregunta: '"Кровать" significa:',
      opciones: ['silla', 'armario', 'mesa', 'cama'],
      correcta: 'cama',
    },
    {
      id: 'q5',
      pregunta: '¿Cómo se dice "ventana"?',
      opciones: ['дверь', 'окно', 'шкаф', 'балкон'],
      correcta: 'окно',
    },
    {
      id: 'q6',
      pregunta: '"Я живу в квартире" significa:',
      opciones: [
        'Vivo en una casa',
        'Vivo en un apartamento',
        'Tengo un piso',
        'Quiero un apartamento',
      ],
      correcta: 'Vivo en un apartamento',
    },
    {
      id: 'q7',
      pregunta: '¿Cómo se dice "sala de estar" / "salón"?',
      opciones: ['прихожая', 'туалет', 'кухня', 'гостиная'],
      correcta: 'гостиная',
    },
    {
      id: 'q8',
      pregunta: '"Холодильник" significa:',
      opciones: [
        'cocina (aparato)',
        'lavadora',
        'nevera / refrigerador',
        'horno',
      ],
      correcta: 'nevera / refrigerador',
    },
    {
      id: 'q9',
      pregunta: '¿Cómo se dice "armario"?',
      opciones: ['диван', 'кровать', 'шкаф', 'стул'],
      correcta: 'шкаф',
    },
    {
      id: 'q10',
      pregunta: '"Где кухня?" significa:',
      opciones: [
        '¿Hay cocina?',
        '¿Dónde está la cocina?',
        '¿Cómo es la cocina?',
        '¿Cuándo está la cocina?',
      ],
      correcta: '¿Dónde está la cocina?',
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
        <h2 className="text-3xl font-bold text-white mb-2">🏠 En Casa</h2>
        <p className="text-htb-text-dim">
          Vocabulario para describir tu hogar: tipos de vivienda, habitaciones y
          muebles. Combínalo con{' '}
          <span className="text-htb-green font-bold">Я живу в...</span> para
          presentarte.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                <h3 className="text-htb-green font-semibold">
                  Tipos de vivienda
                </h3>
              </div>
              <table className="w-full">
                <tbody>
                  {tiposVivienda.map((t, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-3 text-htb-green font-bold">
                        <SpeakableText text={t.ruso} />
                      </td>
                      <td className="py-2 px-3 text-htb-text-dim italic text-xs">
                        {t.translit}
                      </td>
                      <td className="py-2 px-3 text-white text-sm">
                        {t.espanol}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                <h3 className="text-htb-green font-semibold">Habitaciones</h3>
              </div>
              <table className="w-full">
                <tbody>
                  {habitaciones.map((h, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-3 text-htb-green font-bold">
                        <SpeakableText text={h.ruso} />
                      </td>
                      <td className="py-2 px-3 text-htb-text-dim italic text-xs">
                        {h.translit}
                      </td>
                      <td className="py-2 px-3 text-white text-sm">
                        {h.espanol}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Muebles y elementos
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {muebles.map((m, i) => (
                <div
                  key={i}
                  className={`py-2 px-3 border-b border-r border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                >
                  <p className="text-htb-green font-bold text-sm"><SpeakableText text={m.ruso} /></p>
                  <p className="text-htb-text-dim italic text-xs">
                    {m.translit}
                  </p>
                  <p className="text-white text-xs">{m.espanol}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">Frases útiles</h3>
            </div>
            <table className="w-full">
              <tbody>
                {frases.map((f, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-4 text-htb-green font-bold">
                      <SpeakableText text={f.ruso} />
                    </td>
                    <td className="py-2 px-4 text-htb-text-dim italic text-xs">
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
                <p className="text-4xl text-htb-green font-bold mb-3">
                  {allFlash[flashcardIndex].ruso}
                </p>
                <p className="text-htb-text-dim italic">
                  {allFlash[flashcardIndex].translit}
                </p>
              </>
            ) : (
              <p className="text-2xl text-white">
                {allFlash[flashcardIndex].espanol}
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
              {flashcardIndex + 1} / {allFlash.length}
            </span>
            <button
              onClick={() => {
                setFlashcardIndex((i) => Math.min(allFlash.length - 1, i + 1));
                setFlashcardFlipped(false);
              }}
              disabled={flashcardIndex === allFlash.length - 1}
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

export default EnCasaA1Exercise;
