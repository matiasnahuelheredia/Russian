import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const ColoresA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const colores = [
    { ruso: 'красный', translit: 'krasnyy', espanol: 'rojo', hex: '#ef4444' },
    {
      ruso: 'синий',
      translit: 'siniy',
      espanol: 'azul (oscuro)',
      hex: '#3b82f6',
    },
    {
      ruso: 'голубой',
      translit: 'goluboy',
      espanol: 'azul claro',
      hex: '#7dd3fc',
    },
    { ruso: 'зелёный', translit: 'zelyonyy', espanol: 'verde', hex: '#22c55e' },
    {
      ruso: 'жёлтый',
      translit: 'zheltyy',
      espanol: 'amarillo',
      hex: '#eab308',
    },
    { ruso: 'белый', translit: 'belyy', espanol: 'blanco', hex: '#ffffff' },
    { ruso: 'чёрный', translit: 'chornyy', espanol: 'negro', hex: '#111827' },
    { ruso: 'серый', translit: 'seryy', espanol: 'gris', hex: '#6b7280' },
    { ruso: 'розовый', translit: 'rozovyy', espanol: 'rosa', hex: '#f472b6' },
    {
      ruso: 'оранжевый',
      translit: 'oranzhevyy',
      espanol: 'naranja',
      hex: '#f97316',
    },
    {
      ruso: 'коричневый',
      translit: 'korichnevyy',
      espanol: 'marrón',
      hex: '#92400e',
    },
    {
      ruso: 'фиолетовый',
      translit: 'fioletovyy',
      espanol: 'morado / violeta',
      hex: '#8b5cf6',
    },
  ];

  const flashCards = colores.map((c) => ({
    ruso: c.ruso,
    translit: c.translit,
    espanol: c.espanol,
    hex: c.hex,
  }));

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo se dice "rojo" en ruso?',
      opciones: ['синий', 'красный', 'чёрный', 'жёлтый'],
      correcta: 'красный',
    },
    {
      id: 'q2',
      pregunta: '"Жёлтый" significa:',
      opciones: ['verde', 'naranja', 'amarillo', 'gris'],
      correcta: 'amarillo',
    },
    {
      id: 'q3',
      pregunta: '¿Cuál es la palabra rusa para "blanco"?',
      opciones: ['серый', 'белый', 'розовый', 'голубой'],
      correcta: 'белый',
    },
    {
      id: 'q4',
      pregunta: '"Зелёный" significa:',
      opciones: ['azul', 'verde', 'gris', 'marrón'],
      correcta: 'verde',
    },
    {
      id: 'q5',
      pregunta: '¿Cómo se dice "negro" en ruso?',
      opciones: ['тёмный', 'серый', 'чёрный', 'синий'],
      correcta: 'чёрный',
    },
    {
      id: 'q6',
      pregunta:
        'En ruso hay dos palabras para "azul": синий y голубой. ¿Cuál es el azul CLARO?',
      opciones: ['синий', 'голубой', 'тёмно-синий', 'зелёный'],
      correcta: 'голубой',
    },
    {
      id: 'q7',
      pregunta: '"Розовый" significa:',
      opciones: ['rojo', 'naranja', 'morado', 'rosa'],
      correcta: 'rosa',
    },
    {
      id: 'q8',
      pregunta: '¿Cómo se dice "gris" en ruso?',
      opciones: ['белый', 'коричневый', 'серый', 'чёрный'],
      correcta: 'серый',
    },
    {
      id: 'q9',
      pregunta: '"Коричневый" significa:',
      opciones: ['naranja', 'rojo oscuro', 'marrón', 'negro'],
      correcta: 'marrón',
    },
    {
      id: 'q10',
      pregunta: '¿Cómo se dice "morado / violeta"?',
      opciones: ['розовый', 'фиолетовый', 'синий', 'оранжевый'],
      correcta: 'фиолетовый',
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
          🎨 Los Colores (Цвета)
        </h2>
        <p className="text-htb-text-dim">
          Los colores en ruso son adjetivos; concuerdan en género con el
          sustantivo. En esta lección aprendemos la forma masculina base.
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {colores.map((c, i) => (
              <div
                key={i}
                className="bg-htb-card rounded-lg border border-gray-700 overflow-hidden"
              >
                <div
                  className="h-16 w-full border-b border-gray-700"
                  style={{ backgroundColor: c.hex }}
                />
                <div className="p-2 text-center">
                  <p className="text-htb-green font-bold"><SpeakableText text={c.ruso} /></p>
                  <p className="text-htb-text-dim text-xs italic">
                    {c.translit}
                  </p>
                  <p className="text-white text-sm">{c.espanol}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-htb-sidebar rounded-lg border border-htb-green/30 p-4">
            <p className="text-htb-green font-semibold mb-2">💡 Concordancia</p>
            <p className="text-htb-text-dim text-sm">
              Ejemplo: <span className="text-white">красный</span> (masc.) →{' '}
              <span className="text-white">красная</span> (fem.) →{' '}
              <span className="text-white">красное</span> (neutro). E.g.:
              красная машина (coche rojo).
            </p>
          </div>
        </div>
      )}

      {activeTab === 'flashcards' && (
        <div className="bg-htb-card rounded-lg border border-gray-800 p-6">
          <div
            onClick={() => setFlashcardFlipped(!flashcardFlipped)}
            className="cursor-pointer bg-htb-sidebar rounded-lg border-2 border-htb-green/30 hover:border-htb-green p-8 mb-6 min-h-[220px] flex flex-col items-center justify-center transition-all gap-4"
          >
            <div
              className="w-24 h-24 rounded-full border-4 border-gray-700"
              style={{ backgroundColor: flashCards[flashcardIndex].hex }}
            />
            {flashcardFlipped ? (
              <>
                <p className="text-3xl text-htb-green font-bold">
                  {flashCards[flashcardIndex].ruso}
                </p>
                <p className="text-htb-text-dim italic">
                  {flashCards[flashcardIndex].translit}
                </p>
              </>
            ) : (
              <p className="text-2xl text-white">
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

export default ColoresA1Exercise;
