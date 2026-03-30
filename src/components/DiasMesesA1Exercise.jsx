import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const DiasMesesA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const dias = [
    { ruso: 'понедельник', translit: 'ponedelʼnik', espanol: 'lunes' },
    { ruso: 'вторник', translit: 'vtornik', espanol: 'martes' },
    { ruso: 'среда', translit: 'sreda', espanol: 'miércoles' },
    { ruso: 'четверг', translit: 'chetverg', espanol: 'jueves' },
    { ruso: 'пятница', translit: 'pyatnitsa', espanol: 'viernes' },
    { ruso: 'суббота', translit: 'subbota', espanol: 'sábado' },
    { ruso: 'воскресенье', translit: 'voskresenʼye', espanol: 'domingo' },
  ];

  const meses = [
    { ruso: 'январь', translit: 'yanvarʼ', espanol: 'enero' },
    { ruso: 'февраль', translit: 'fevralʼ', espanol: 'febrero' },
    { ruso: 'март', translit: 'mart', espanol: 'marzo' },
    { ruso: 'апрель', translit: 'aprelʼ', espanol: 'abril' },
    { ruso: 'май', translit: 'may', espanol: 'mayo' },
    { ruso: 'июнь', translit: 'iyunʼ', espanol: 'junio' },
    { ruso: 'июль', translit: 'iyulʼ', espanol: 'julio' },
    { ruso: 'август', translit: 'avgust', espanol: 'agosto' },
    { ruso: 'сентябрь', translit: 'sentyabrʼ', espanol: 'septiembre' },
    { ruso: 'октябрь', translit: 'oktyabrʼ', espanol: 'octubre' },
    { ruso: 'ноябрь', translit: 'noyabrʼ', espanol: 'noviembre' },
    { ruso: 'декабрь', translit: 'dekabrʼ', espanol: 'diciembre' },
  ];

  const estaciones = [
    {
      ruso: 'весна',
      translit: 'vesna',
      espanol: 'primavera',
      color: 'text-green-400',
    },
    {
      ruso: 'лето',
      translit: 'leto',
      espanol: 'verano',
      color: 'text-yellow-400',
    },
    {
      ruso: 'осень',
      translit: 'osenʼ',
      espanol: 'otoño',
      color: 'text-orange-400',
    },
    {
      ruso: 'зима',
      translit: 'zima',
      espanol: 'invierno',
      color: 'text-blue-300',
    },
  ];

  const flashCards = [
    ...dias.map((d) => ({
      ruso: d.ruso,
      translit: d.translit,
      espanol: d.espanol,
    })),
    ...estaciones.map((e) => ({
      ruso: e.ruso,
      translit: e.translit,
      espanol: e.espanol,
    })),
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo se dice "lunes" en ruso?',
      opciones: ['вторник', 'пятница', 'понедельник', 'среда'],
      correcta: 'понедельник',
    },
    {
      id: 'q2',
      pregunta: '"Пятница" significa:',
      opciones: ['jueves', 'viernes', 'sábado', 'miércoles'],
      correcta: 'viernes',
    },
    {
      id: 'q3',
      pregunta: '¿Qué día es "воскресенье"?',
      opciones: ['sábado', 'domingo', 'lunes', 'viernes'],
      correcta: 'domingo',
    },
    {
      id: 'q4',
      pregunta: '"Март" es el mes de:',
      opciones: ['enero', 'febrero', 'marzo', 'mayo'],
      correcta: 'marzo',
    },
    {
      id: 'q5',
      pregunta: '¿Cómo se dice "diciembre"?',
      opciones: ['ноябрь', 'октябрь', 'февраль', 'декабрь'],
      correcta: 'декабрь',
    },
    {
      id: 'q6',
      pregunta: '"Зима" significa:',
      opciones: ['primavera', 'verano', 'otoño', 'invierno'],
      correcta: 'invierno',
    },
    {
      id: 'q7',
      pregunta: '¿Cómo se dice "verano"?',
      opciones: ['весна', 'лето', 'осень', 'зима'],
      correcta: 'лето',
    },
    {
      id: 'q8',
      pregunta: '"Среда" es:',
      opciones: ['martes', 'miércoles', 'jueves', 'lunes'],
      correcta: 'miércoles',
    },
    {
      id: 'q9',
      pregunta: '¿Cuál de estos meses es julio?',
      opciones: ['июнь', 'август', 'июль', 'май'],
      correcta: 'июль',
    },
    {
      id: 'q10',
      pregunta: '"Осень" significa:',
      opciones: ['primavera', 'verano', 'otoño', 'invierno'],
      correcta: 'otoño',
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
          📅 Días, Meses y Estaciones
        </h2>
        <p className="text-htb-text-dim">
          En ruso los días y meses se escriben con{' '}
          <span className="text-htb-green font-semibold">minúscula</span> (a
          diferencia del español). Las estaciones son palabras cortas y fáciles
          de aprender.
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
                  Días de la semana
                </h3>
              </div>
              <table className="w-full">
                <tbody>
                  {dias.map((d, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-3 text-htb-green font-bold">
                        <SpeakableText text={d.ruso} />
                      </td>
                      <td className="py-2 px-3 text-htb-text-dim italic text-sm">
                        {d.translit}
                      </td>
                      <td className="py-2 px-3 text-white text-sm">
                        {d.espanol}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                <h3 className="text-htb-green font-semibold">Meses del año</h3>
              </div>
              <table className="w-full">
                <tbody>
                  {meses.map((m, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-3 text-htb-green font-bold">
                        <SpeakableText text={m.ruso} />
                      </td>
                      <td className="py-2 px-3 text-htb-text-dim italic text-xs">
                        {m.translit}
                      </td>
                      <td className="py-2 px-3 text-white text-sm">
                        {m.espanol}
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
                Estaciones del año
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 p-3 gap-3">
              {estaciones.map((e, i) => (
                <div
                  key={i}
                  className="bg-htb-sidebar rounded-lg p-3 text-center border border-gray-700"
                >
                  <p className={`text-2xl font-bold ${e.color}`}><SpeakableText text={e.ruso} /></p>
                  <p className="text-htb-text-dim italic text-xs">
                    {e.translit}
                  </p>
                  <p className="text-white text-sm">{e.espanol}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-htb-sidebar rounded-lg border border-htb-green/30 p-4">
            <p className="text-htb-green font-semibold mb-2">
              💡 Frases útiles
            </p>
            <ul className="text-htb-text-dim text-sm space-y-1">
              <li>
                • Сегодня <span className="text-htb-green">понедельник</span> —
                Hoy es lunes
              </li>
              <li>
                • Сейчас <span className="text-htb-green">зима</span> — Ahora es
                invierno
              </li>
              <li>
                • Мой день рождения в{' '}
                <span className="text-htb-green">марте</span> — Mi cumpleaños es
                en marzo
              </li>
            </ul>
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

export default DiasMesesA1Exercise;
