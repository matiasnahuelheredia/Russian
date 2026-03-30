import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const PronombresA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const personales = [
    {
      ruso: 'я',
      translit: 'ya',
      espanol: 'yo',
      numero: 'singular',
      persona: '1ª',
    },
    {
      ruso: 'ты',
      translit: 'ty',
      espanol: 'tú (informal)',
      numero: 'singular',
      persona: '2ª',
    },
    {
      ruso: 'он',
      translit: 'on',
      espanol: 'él',
      numero: 'singular',
      persona: '3ª',
    },
    {
      ruso: 'она',
      translit: 'ona',
      espanol: 'ella',
      numero: 'singular',
      persona: '3ª',
    },
    {
      ruso: 'оно',
      translit: 'ono',
      espanol: 'ello (neutro)',
      numero: 'singular',
      persona: '3ª',
    },
    {
      ruso: 'мы',
      translit: 'my',
      espanol: 'nosotros/as',
      numero: 'plural',
      persona: '1ª',
    },
    {
      ruso: 'вы',
      translit: 'vy',
      espanol: 'vosotros / usted (formal)',
      numero: 'plural',
      persona: '2ª',
    },
    {
      ruso: 'они',
      translit: 'oni',
      espanol: 'ellos/ellas',
      numero: 'plural',
      persona: '3ª',
    },
  ];

  const posesivos = [
    {
      ruso: 'мой / моя / моё',
      translit: 'moy / moya / moyo',
      espanol: 'mi(s) — masc/fem/neutro',
    },
    {
      ruso: 'твой / твоя / твоё',
      translit: 'tvoy / tvoya / tvoyo',
      espanol: 'tu(s) — masc/fem/neutro',
    },
    { ruso: 'его', translit: 'yevo', espanol: 'su(s) — de él' },
    { ruso: 'её', translit: 'yeyo', espanol: 'su(s) — de ella' },
    {
      ruso: 'наш / наша / наше',
      translit: 'nash / nasha / nashe',
      espanol: 'nuestro/a',
    },
    {
      ruso: 'ваш / ваша / ваше',
      translit: 'vash / vasha / vashe',
      espanol: 'vuestro/a / su (formal)',
    },
    { ruso: 'их', translit: 'ikh', espanol: 'su(s) — de ellos/ellas' },
  ];

  const flashCards = [
    { ruso: 'я', translit: 'ya', espanol: 'yo' },
    { ruso: 'ты', translit: 'ty', espanol: 'tú (informal)' },
    {
      ruso: 'он / она / оно',
      translit: 'on / ona / ono',
      espanol: 'él / ella / ello',
    },
    { ruso: 'мы', translit: 'my', espanol: 'nosotros' },
    { ruso: 'вы', translit: 'vy', espanol: 'vosotros / usted (formal)' },
    { ruso: 'они', translit: 'oni', espanol: 'ellos / ellas' },
    { ruso: 'мой / моя', translit: 'moy / moya', espanol: 'mi (masc. / fem.)' },
    {
      ruso: 'твой / твоя',
      translit: 'tvoy / tvoya',
      espanol: 'tu (masc. / fem.)',
    },
    {
      ruso: 'наш / наша',
      translit: 'nash / nasha',
      espanol: 'nuestro / nuestra',
    },
    { ruso: 'их', translit: 'ikh', espanol: 'su(s) (de ellos/ellas)' },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo se dice "yo" en ruso?',
      opciones: ['мы', 'я', 'ты', 'он'],
      correcta: 'я',
    },
    {
      id: 'q2',
      pregunta: '"Вы" puede significar:',
      opciones: [
        'Solo vosotros',
        'Solo usted (formal)',
        'Vosotros y también usted (formal)',
        'Solo tú',
      ],
      correcta: 'Vosotros y también usted (formal)',
    },
    {
      id: 'q3',
      pregunta: '¿Cuál es el pronombre ruso para "ella"?',
      opciones: ['он', 'оно', 'она', 'они'],
      correcta: 'она',
    },
    {
      id: 'q4',
      pregunta: '"Мой" (mi) se usa con sustantivos:',
      opciones: ['Femeninos', 'Masculinos', 'Neutros', 'Plurales'],
      correcta: 'Masculinos',
    },
    {
      id: 'q5',
      pregunta: '¿Cómo se dice "su" (de ella) en ruso?',
      opciones: ['его', 'её', 'их', 'наш'],
      correcta: 'её',
    },
    {
      id: 'q6',
      pregunta: '"Они" significa:',
      opciones: ['nosotros', 'vosotros', 'ellos/ellas', 'usted'],
      correcta: 'ellos/ellas',
    },
    {
      id: 'q7',
      pregunta: '"Наша школа" significa:',
      opciones: ['mi escuela', 'tu escuela', 'nuestra escuela', 'su escuela'],
      correcta: 'nuestra escuela',
    },
    {
      id: 'q8',
      pregunta:
        '¿Cuál pronombre posesivo es invariable (no cambia con el género)?',
      opciones: ['мой', 'наш', 'его', 'твой'],
      correcta: 'его',
    },
    {
      id: 'q9',
      pregunta: '"Оно" se usa para:',
      opciones: [
        'personas masculinas',
        'personas femeninas',
        'sustantivos neutros',
        'el plural',
      ],
      correcta: 'sustantivos neutros',
    },
    {
      id: 'q10',
      pregunta: '"Твоя мама" significa:',
      opciones: ['mi mamá', 'tu mamá', 'nuestra mamá', 'su mamá'],
      correcta: 'tu mamá',
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
          👤 Pronombres Personales y Posesivos
        </h2>
        <p className="text-htb-text-dim">
          En ruso los pronombres personales no tienen artículo ni género propio,
          pero los posesivos concuerdan en género con el sustantivo al que
          acompañan.
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
                Pronombres Personales
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
                      Translit.
                    </th>
                    <th className="text-left py-3 px-4 text-white text-sm">
                      Español
                    </th>
                    <th className="text-left py-3 px-4 text-htb-text-dim text-sm">
                      Número
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {personales.map((p, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-3 px-4 text-htb-green font-bold text-2xl">
                        <SpeakableText text={p.ruso} />
                      </td>
                      <td className="py-3 px-4 text-htb-text-dim italic">
                        {p.translit}
                      </td>
                      <td className="py-3 px-4 text-white">{p.espanol}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`text-xs px-2 py-0.5 rounded border ${p.numero === 'singular' ? 'border-blue-700 text-blue-300 bg-blue-900/30' : 'border-purple-700 text-purple-300 bg-purple-900/30'}`}
                        >
                          {p.numero}
                        </span>
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
                Pronombres Posesivos
              </h3>
              <p className="text-htb-text-dim text-xs mt-1">
                Los posesivos concuerdan en género con el sustantivo (no con el
                poseedor)
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                    <th className="text-left py-3 px-4 text-htb-green text-sm">
                      Ruso
                    </th>
                    <th className="text-left py-3 px-4 text-htb-text-dim text-sm">
                      Translit.
                    </th>
                    <th className="text-left py-3 px-4 text-white text-sm">
                      Español
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {posesivos.map((p, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-3 px-4 text-htb-green font-bold">
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
          </div>

          <div className="bg-htb-sidebar rounded-lg border border-htb-green/30 p-4">
            <p className="text-htb-green font-semibold mb-2">💡 Nota clave</p>
            <p className="text-htb-text-dim text-sm">
              Los posesivos <strong className="text-white"><SpeakableText text="его" /></strong> (de él),{' '}
              <strong className="text-white"><SpeakableText text="её" /></strong> (de ella) e{' '}
              <strong className="text-white"><SpeakableText text="их" /></strong> (de ellos) son
              invariables — no cambian según el género del sustantivo.
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
                <p className="text-5xl text-htb-green font-bold mb-3 text-center">
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

export default PronombresA1Exercise;
