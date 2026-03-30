import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const LaHoraA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const horas = [
    { hora: 'Сейчас час.', translit: 'Seychas chas.', espanol: 'Es la una.' },
    {
      hora: 'Сейчас два часа.',
      translit: 'Seychas dva chasa.',
      espanol: 'Son las dos.',
    },
    {
      hora: 'Сейчас три часа.',
      translit: 'Seychas tri chasa.',
      espanol: 'Son las tres.',
    },
    {
      hora: 'Сейчас четыре часа.',
      translit: 'Seychas chetyre chasa.',
      espanol: 'Son las cuatro.',
    },
    {
      hora: 'Сейчас пять часов.',
      translit: 'Seychas pyatʼ chasov.',
      espanol: 'Son las cinco.',
    },
    {
      hora: 'Сейчас двенадцать часов.',
      translit: 'Seychas dvenadtsatʼ chasov.',
      espanol: 'Son las doce.',
    },
  ];

  const partes = [
    { ruso: 'утра', translit: 'utra', espanol: 'de la mañana (AM: 0–12)' },
    { ruso: 'дня', translit: 'dnya', espanol: 'de la tarde (12–18)' },
    {
      ruso: 'вечера',
      translit: 'vechera',
      espanol: 'de la noche / tarde (18–24)',
    },
    { ruso: 'ночи', translit: 'nochi', espanol: 'de la madrugada (0–4)' },
  ];

  const reglasChas = [
    { numero: '1', forma: 'час', ejemplo: 'один час' },
    { numero: '2, 3, 4', forma: 'часа', ejemplo: 'два часа' },
    { numero: '5–12, 20+', forma: 'часов', ejemplo: 'пять часов' },
  ];

  const flashCards = [
    {
      ruso: 'Который час?',
      translit: 'Kotoryy chas?',
      espanol: '¿Qué hora es?',
    },
    {
      ruso: 'В котором часу?',
      translit: 'V kotorom chasu?',
      espanol: '¿A qué hora?',
    },
    { ruso: 'Сейчас час.', translit: 'Seychas chas.', espanol: 'Es la una.' },
    {
      ruso: 'Сейчас два часа.',
      translit: 'Seychas dva chasa.',
      espanol: 'Son las dos.',
    },
    {
      ruso: 'Сейчас пять часов.',
      translit: 'Seychas pyatʼ chasov.',
      espanol: 'Son las cinco.',
    },
    { ruso: 'В три часа.', translit: 'V tri chasa.', espanol: 'A las tres.' },
    {
      ruso: 'утром / днём / вечером',
      translit: 'utrom / dnyom / vecherom',
      espanol: 'por la mañana / tarde / noche',
    },
    {
      ruso: 'Сейчас полдень.',
      translit: 'Seychas poldenʼ.',
      espanol: 'Es mediodía.',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo se pregunta "¿qué hora es?" en ruso?',
      opciones: ['Сколько время?', 'Который час?', 'Когда час?', 'Что время?'],
      correcta: 'Который час?',
    },
    {
      id: 'q2',
      pregunta: '"Сейчас два часа" significa:',
      opciones: ['Son las doce', 'Es la una', 'Son las dos', 'Son las diez'],
      correcta: 'Son las dos',
    },
    {
      id: 'q3',
      pregunta: 'Con los números 2, 3 y 4 se usa:',
      opciones: ['час', 'часов', 'часа', 'часу'],
      correcta: 'часа',
    },
    {
      id: 'q4',
      pregunta: '"Сейчас пять часов" significa:',
      opciones: [
        'Son las cuatro',
        'Son las cinco',
        'Son las seis',
        'Es la una y cinco',
      ],
      correcta: 'Son las cinco',
    },
    {
      id: 'q5',
      pregunta: '¿Cómo se dice "a las tres" (para citas)?',
      opciones: ['Три часа', 'В три часа', 'С трёх часов', 'На три часа'],
      correcta: 'В три часа',
    },
    {
      id: 'q6',
      pregunta: '"Утра" indica:',
      opciones: [
        'de la tarde',
        'de la noche',
        'de la mañana (AM)',
        'de la madrugada',
      ],
      correcta: 'de la mañana (AM)',
    },
    {
      id: 'q7',
      pregunta: 'Con el número 1 se usa:',
      opciones: ['часа', 'часов', 'час', 'часу'],
      correcta: 'час',
    },
    {
      id: 'q8',
      pregunta: '"Вечера" indica la franja:',
      opciones: ['0–4h', '5–12h', '12–18h', '18–24h'],
      correcta: '18–24h',
    },
    {
      id: 'q9',
      pregunta: '¿Cómo se dice "¿a qué hora?"',
      opciones: [
        'Который час?',
        'В котором часу?',
        'Когда часа?',
        'Сколько часов?',
      ],
      correcta: 'В котором часу?',
    },
    {
      id: 'q10',
      pregunta: '"Сейчас полдень" significa:',
      opciones: [
        'Es medianoche',
        'Es mediodía',
        'Son las doce de la noche',
        'Son las once',
      ],
      correcta: 'Es mediodía',
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
        <h2 className="text-3xl font-bold text-white mb-2">🕐 La Hora</h2>
        <p className="text-htb-text-dim">
          Para decir la hora en ruso:{' '}
          <span className="text-htb-green font-bold"><SpeakableText text="Который час?" /></span> (¿Qué
          hora es?) /{' '}
          <span className="text-htb-green font-bold">
            Сейчас + número + час/часа/часов
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
                Reglas de "час" (hora)
              </h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                  <th className="text-left py-2 px-4 text-htb-text-dim text-sm">
                    Número
                  </th>
                  <th className="text-left py-2 px-4 text-htb-green text-sm">
                    Forma
                  </th>
                  <th className="text-left py-2 px-4 text-white text-sm">
                    Ejemplo
                  </th>
                </tr>
              </thead>
              <tbody>
                {reglasChas.map((r, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-3 px-4 text-white">{r.numero}</td>
                    <td className="py-3 px-4 text-htb-green font-bold text-xl">
                      <SpeakableText text={r.forma} />
                    </td>
                    <td className="py-3 px-4 text-htb-text-dim">{r.ejemplo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Ejemplos de horas
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
                {horas.map((h, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-4 text-htb-green font-bold">
                      {h.hora}
                    </td>
                    <td className="py-2 px-4 text-htb-text-dim italic text-sm">
                      {h.translit}
                    </td>
                    <td className="py-2 px-4 text-white">{h.espanol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">Partes del día</h3>
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
                {partes.map((p, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-4 text-htb-green font-bold">
                      <SpeakableText text={p.ruso} />
                    </td>
                    <td className="py-2 px-4 text-htb-text-dim italic text-sm">
                      {p.translit}
                    </td>
                    <td className="py-2 px-4 text-white">{p.espanol}</td>
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
                <p className="text-3xl text-htb-green font-bold mb-3 text-center">
                  {flashCards[flashcardIndex].ruso}
                </p>
                <p className="text-htb-text-dim italic">
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

export default LaHoraA1Exercise;
