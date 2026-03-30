import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const AdverbiosA2Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const grupos = [
    {
      titulo: 'Tiempo (Когда?)',
      color: 'text-htb-green',
      adverbios: [
        { ruso: 'сейчас', translit: 'seychas', esp: 'ahora' },
        { ruso: 'потом', translit: 'potom', esp: 'después / luego' },
        { ruso: 'вчера', translit: 'vchera', esp: 'ayer' },
        { ruso: 'сегодня', translit: 'segodnya', esp: 'hoy' },
        { ruso: 'завтра', translit: 'zavtra', esp: 'mañana' },
        { ruso: 'уже', translit: 'uzhe', esp: 'ya' },
        { ruso: 'ещё', translit: 'yeshchyo', esp: 'todavía / aún' },
        { ruso: 'наконец', translit: 'nakonets', esp: 'por fin / al final' },
        { ruso: 'скоро', translit: 'skoro', esp: 'pronto' },
        { ruso: 'поздно', translit: 'pozdno', esp: 'tarde' },
        { ruso: 'рано', translit: 'rano', esp: 'temprano' },
      ],
    },
    {
      titulo: 'Frecuencia (Как часто?)',
      color: 'text-yellow-400',
      adverbios: [
        { ruso: 'всегда', translit: 'vsegda', esp: 'siempre' },
        { ruso: 'часто', translit: 'chasto', esp: 'a menudo / frecuentemente' },
        { ruso: 'иногда', translit: 'inogda', esp: 'a veces' },
        { ruso: 'редко', translit: 'redko', esp: 'raramente' },
        { ruso: 'никогда (не)', translit: 'nikogda (ne)', esp: 'nunca' },
      ],
    },
    {
      titulo: 'Modo (Как?)',
      color: 'text-blue-400',
      adverbios: [
        { ruso: 'хорошо', translit: 'khorosho', esp: 'bien' },
        { ruso: 'плохо', translit: 'plokho', esp: 'mal' },
        { ruso: 'быстро', translit: 'bystro', esp: 'rápido' },
        { ruso: 'медленно', translit: 'medlenno', esp: 'despacio' },
        { ruso: 'громко', translit: 'gromko', esp: 'en voz alta / fuerte' },
        { ruso: 'тихо', translit: 'tikho', esp: 'en voz baja / silencioso' },
        { ruso: 'вместе', translit: 'vmeste', esp: 'juntos' },
        { ruso: 'правильно', translit: 'pravil\u02bcno', esp: 'correctamente' },
      ],
    },
    {
      titulo: 'Lugar (Где?)',
      color: 'text-pink-400',
      adverbios: [
        { ruso: 'здесь / тут', translit: 'zdesʼ / tut', esp: 'aquí' },
        { ruso: 'там', translit: 'tam', esp: 'allí / allá' },
        { ruso: 'дома', translit: 'doma', esp: 'en casa' },
        { ruso: 'далеко', translit: 'daleko', esp: 'lejos' },
        { ruso: 'близко', translit: 'blizko', esp: 'cerca' },
        { ruso: 'везде', translit: 'vezde', esp: 'en todas partes' },
        { ruso: 'нигде', translit: 'nigde', esp: 'en ningún lugar' },
      ],
    },
  ];

  const allFlash = grupos.flatMap((g) =>
    g.adverbios.map((a) => ({
      ruso: a.ruso,
      translit: a.translit,
      espanol: a.esp,
    }))
  );

  const questions = [
    {
      id: 'q1',
      pregunta: '"Сейчас" significa:',
      opciones: ['ayer', 'mañana', 'ahora', 'luego'],
      correcta: 'ahora',
    },
    {
      id: 'q2',
      pregunta: '¿Cómo se dice "siempre"?',
      opciones: ['иногда', 'никогда', 'всегда', 'часто'],
      correcta: 'всегда',
    },
    {
      id: 'q3',
      pregunta: '"Хорошо" significa:',
      opciones: ['mal', 'bien', 'rápido', 'correcto'],
      correcta: 'bien',
    },
    {
      id: 'q4',
      pregunta: '¿Cómo se dice "raramente"?',
      opciones: ['часто', 'иногда', 'всегда', 'редко'],
      correcta: 'редко',
    },
    {
      id: 'q5',
      pregunta: '"Уже" significa:',
      opciones: ['todavía', 'ya', 'nunca', 'pronto'],
      correcta: 'ya',
    },
    {
      id: 'q6',
      pregunta: '¿Cómo se dice "despacio"?',
      opciones: ['быстро', 'громко', 'медленно', 'тихо'],
      correcta: 'медленно',
    },
    {
      id: 'q7',
      pregunta: '"Там" significa:',
      opciones: ['aquí', 'cerca', 'allí', 'lejos'],
      correcta: 'allí',
    },
    {
      id: 'q8',
      pregunta: '¿Cómo se dice "a veces"?',
      opciones: ['никогда', 'всегда', 'иногда', 'часто'],
      correcta: 'иногда',
    },
    {
      id: 'q9',
      pregunta: '"Ещё" significa:',
      opciones: ['ya', 'todavía / aún', 'pronto', 'antes'],
      correcta: 'todavía / aún',
    },
    {
      id: 'q10',
      pregunta: 'En la frase "Он никогда не ест мясо", ¿por qué hay "не"?',
      opciones: [
        'Es redundante',
        'Никогда siempre necesita не en oraciones negativas',
        'Es un error',
        'Никогда solo se usa con не en pasado',
      ],
      correcta: 'Никогда siempre necesita не en oraciones negativas',
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
          📍 Adverbios Esenciales
        </h2>
        <p className="text-htb-text-dim">
          Los adverbios en ruso son{' '}
          <span className="text-htb-green font-bold">invariables</span> — no
          cambian según género, número ni caso. Son ideales para A2 porque
          añaden mucho significado sin complicar la gramática.
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
            {grupos.map((g, i) => (
              <div
                key={i}
                className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden"
              >
                <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                  <h3 className={`font-semibold ${g.color}`}>{g.titulo}</h3>
                </div>
                <table className="w-full">
                  <tbody>
                    {g.adverbios.map((a, j) => (
                      <tr
                        key={j}
                        className={`border-b border-gray-800 ${j % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                      >
                        <td
                          className={`py-1.5 px-3 font-bold text-sm ${g.color}`}
                        >
                          <SpeakableText text={a.ruso} />
                        </td>
                        <td className="py-1.5 px-3 text-htb-text-dim italic text-xs">
                          {a.translit}
                        </td>
                        <td className="py-1.5 px-3 text-white text-sm">
                          {a.esp}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          <div className="bg-htb-sidebar rounded-lg border border-htb-green/30 p-4">
            <p className="text-htb-green font-semibold mb-2">
              💡 Adverbios negativos + не
            </p>
            <p className="text-htb-text-dim text-sm">
              En ruso, los adverbios negativos (
              <span className="text-white">никогда, нигде, никак</span>) siempre
              van acompañados de <span className="text-white">не</span> antes
              del verbo — a diferencia del español que evita la doble negación.
              Ej: <span className="text-htb-green">Я никогда не</span> ем мяса =
              Nunca como carne.
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

export default AdverbiosA2Exercise;
