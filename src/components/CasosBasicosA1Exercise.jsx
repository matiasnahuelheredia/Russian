import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const CasosBasicosA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const casos = [
    {
      nombre: 'Nominativo',
      abrev: 'Nom.',
      pregunta: '¿Quién? ¿Qué?',
      uso: 'Sujeto de la oración',
      color: 'text-htb-green',
      border: 'border-htb-green/30',
      ejemplos: [
        {
          ruso: 'Кот спит.',
          translit: 'Kot spit.',
          espanol: 'El gato duerme.',
        },
        {
          ruso: 'Студент читает.',
          translit: 'Student chitayet.',
          espanol: 'El estudiante lee.',
        },
        {
          ruso: 'Мама дома.',
          translit: 'Mama doma.',
          espanol: 'Mamá está en casa.',
        },
      ],
    },
    {
      nombre: 'Acusativo',
      abrev: 'Acus.',
      pregunta: '¿A quién? ¿Qué?',
      uso: 'Objeto directo de la acción',
      color: 'text-blue-400',
      border: 'border-blue-400/30',
      ejemplos: [
        {
          ruso: 'Я читаю книгу.',
          translit: 'Ya chitayu knigu.',
          espanol: 'Leo un libro.',
        },
        {
          ruso: 'Он видит кота.',
          translit: 'On vidit kota.',
          espanol: 'Él ve al gato.',
        },
        {
          ruso: 'Мы едим суп.',
          translit: 'My yedim sup.',
          espanol: 'Comemos sopa.',
        },
      ],
    },
  ];

  const comparativa = [
    { tipo: 'Masc. inanimado', nom: 'стол (mesa)', acus: 'стол (=nominativo)' },
    { tipo: 'Masc. animado', nom: 'кот (gato)', acus: 'кота (añade -а)' },
    { tipo: 'Femenino en -а', nom: 'книга (libro)', acus: 'книгу (-а → -у)' },
    { tipo: 'Femenino en -я', nom: 'земля (tierra)', acus: 'землю (-я → -ю)' },
    { tipo: 'Neutro', nom: 'окно (ventana)', acus: 'окно (=nominativo)' },
  ];

  const flashCards = [
    {
      ruso: 'Кот спит.',
      translit: 'Kot spit.',
      espanol: 'El gato duerme. (nominativo — sujeto)',
    },
    {
      ruso: 'Я вижу кота.',
      translit: 'Ya vizhu kota.',
      espanol: 'Veo al gato. (acusativo animado: кот→кота)',
    },
    {
      ruso: 'Я читаю книгу.',
      translit: 'Ya chitayu knigu.',
      espanol: 'Leo el libro. (acusativo fem.: книга→книгу)',
    },
    {
      ruso: 'Он ест суп.',
      translit: 'On yest sup.',
      espanol: 'Él come sopa. (acusativo inanim.: =nominativo)',
    },
    {
      ruso: 'Студент учится.',
      translit: 'Student uchitsya.',
      espanol: 'El estudiante estudia. (nominativo)',
    },
    {
      ruso: 'Мы смотрим фильм.',
      translit: 'My smotrim filʼm.',
      espanol: 'Vemos una película. (acusativo inanim.)',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: 'En "Кошка спит" (el gato duerme), "кошка" está en:',
      opciones: ['nominativo', 'acusativo', 'genitivo', 'dativo'],
      correcta: 'nominativo',
    },
    {
      id: 'q2',
      pregunta: 'En "Я вижу кошку" (veo al gato), "кошку" está en:',
      opciones: ['nominativo', 'acusativo', 'instrumental', 'prepositivo'],
      correcta: 'acusativo',
    },
    {
      id: 'q3',
      pregunta: 'El nominativo responde a la pregunta:',
      opciones: ['¿A quién?', '¿Con quién?', '¿De quién?', '¿Quién? / ¿Qué?'],
      correcta: '¿Quién? / ¿Qué?',
    },
    {
      id: 'q4',
      pregunta: '¿Cuál es el acusativo de "книга" (libro, femenino)?',
      opciones: ['книги', 'книгу', 'книге', 'книга'],
      correcta: 'книгу',
    },
    {
      id: 'q5',
      pregunta: 'Los sustantivos masculinos INANIMADOS en acusativo:',
      opciones: [
        'añaden -а',
        'cambian a -у',
        'son iguales al nominativo',
        'añaden -е',
      ],
      correcta: 'son iguales al nominativo',
    },
    {
      id: 'q6',
      pregunta: '¿Cuál es el acusativo del animado "кот" (gato)?',
      opciones: ['кот', 'коту', 'кота', 'коте'],
      correcta: 'кота',
    },
    {
      id: 'q7',
      pregunta: 'En "Он ест суп" (él come sopa), "суп" está en:',
      opciones: ['nominativo', 'acusativo (inanimado)', 'genitivo', 'dativo'],
      correcta: 'acusativo (inanimado)',
    },
    {
      id: 'q8',
      pregunta: '¿Qué caso se usa para el SUJETO de la oración?',
      opciones: ['acusativo', 'dativo', 'nominativo', 'genitivo'],
      correcta: 'nominativo',
    },
    {
      id: 'q9',
      pregunta:
        '"Я люблю музыку" — "музыку" está en acusativo (музыка → музыку). ¿Qué terminación cambió?',
      opciones: ['-а → -и', '-а → -у', '-а → -е', '-а → -я'],
      correcta: '-а → -у',
    },
    {
      id: 'q10',
      pregunta: 'Los sustantivos NEUTROS (окно, место) en acusativo:',
      opciones: [
        'añaden -о',
        'son iguales al nominativo',
        'terminan en -е',
        'añaden -а',
      ],
      correcta: 'son iguales al nominativo',
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
          📐 Casos Básicos: Nominativo y Acusativo
        </h2>
        <p className="text-htb-text-dim">
          El ruso tiene 6 casos. En A1 dominaremos los 2 más importantes: el{' '}
          <span className="text-htb-green font-bold">nominativo</span> (quién
          hace la acción) y el{' '}
          <span className="text-blue-400 font-bold">acusativo</span> (qué o a
          quién afecta).
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
          {casos.map((c, i) => (
            <div
              key={i}
              className={`bg-htb-card rounded-lg border ${c.border} overflow-hidden`}
            >
              <div className="p-4 border-b border-gray-800 bg-htb-sidebar flex justify-between items-center">
                <h3 className={`font-bold text-lg ${c.color}`}>
                  {c.nombre} ({c.abrev})
                </h3>
                <span className="text-htb-text-dim text-sm">{c.pregunta}</span>
              </div>
              <div className="p-4">
                <p className="text-white text-sm mb-3">
                  <span className="text-htb-text-dim">Uso:</span> {c.uso}
                </p>
                <table className="w-full">
                  <tbody>
                    {c.ejemplos.map((e, j) => (
                      <tr
                        key={j}
                        className="border-b border-gray-800 last:border-0"
                      >
                        <td className={`py-2 px-3 font-bold ${c.color}`}>
                          <SpeakableText text={e.ruso} />
                        </td>
                        <td className="py-2 px-3 text-htb-text-dim italic text-sm">
                          {e.translit}
                        </td>
                        <td className="py-2 px-3 text-white text-sm">
                          {e.espanol}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-white font-semibold">
                Cambios en acusativo (resumen)
              </h3>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                  <th className="text-left py-2 px-3 text-htb-text-dim">
                    Tipo
                  </th>
                  <th className="text-left py-2 px-3 text-htb-green">
                    Nominativo
                  </th>
                  <th className="text-left py-2 px-3 text-blue-400">
                    Acusativo
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparativa.map((r, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-3 text-htb-text-dim">{r.tipo}</td>
                    <td className="py-2 px-3 text-htb-green font-bold">
                      <SpeakableText text={r.nom} />
                    </td>
                    <td className="py-2 px-3 text-blue-400 font-bold">
                      {r.acus}
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
            {flashcardFlipped
              ? '🇷🇺 Ejemplo en ruso'
              : '🇪🇸 Descripción — haz clic para ver'}
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

export default CasosBasicosA1Exercise;
