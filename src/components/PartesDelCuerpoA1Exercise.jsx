import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const PartesDelCuerpoA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const partes = [
    { ruso: 'голова', translit: 'golova', espanol: 'cabeza', genero: 'f' },
    { ruso: 'лицо', translit: 'litso', espanol: 'cara', genero: 'n' },
    {
      ruso: 'глаз / глаза',
      translit: 'glaz / glaza',
      espanol: 'ojo / ojos',
      genero: 'm',
    },
    {
      ruso: 'ухо / уши',
      translit: 'ukho / ushi',
      espanol: 'oído / oídos',
      genero: 'n',
    },
    { ruso: 'нос', translit: 'nos', espanol: 'nariz', genero: 'm' },
    { ruso: 'рот', translit: 'rot', espanol: 'boca', genero: 'm' },
    {
      ruso: 'зуб / зубы',
      translit: 'zub / zuby',
      espanol: 'diente / dientes',
      genero: 'm',
    },
    { ruso: 'шея', translit: 'sheya', espanol: 'cuello', genero: 'f' },
    {
      ruso: 'рука / руки',
      translit: 'ruka / ruki',
      espanol: 'mano-brazo / manos',
      genero: 'f',
    },
    {
      ruso: 'нога / ноги',
      translit: 'noga / nogi',
      espanol: 'pierna / piernas',
      genero: 'f',
    },
    { ruso: 'спина', translit: 'spina', espanol: 'espalda', genero: 'f' },
    {
      ruso: 'живот',
      translit: 'zhivot',
      espanol: 'estómago / barriga',
      genero: 'm',
    },
    { ruso: 'сердце', translit: 'serdtse', espanol: 'corazón', genero: 'n' },
    {
      ruso: 'волосы',
      translit: 'volosy',
      espanol: 'cabello / pelo',
      genero: 'pl',
    },
  ];

  const frasesUtil = [
    {
      ruso: 'У меня болит голова.',
      translit: 'U menya bolit golova.',
      espanol: 'Me duele la cabeza.',
    },
    {
      ruso: 'У меня болит горло.',
      translit: 'U menya bolit gorlo.',
      espanol: 'Me duele la garganta.',
    },
    {
      ruso: 'У меня болят ноги.',
      translit: 'U menya bolyat nogi.',
      espanol: 'Me duelen las piernas.',
    },
    {
      ruso: 'Покажи рот.',
      translit: 'Pokazhi rot.',
      espanol: 'Abre la boca. (al médico)',
    },
  ];

  const flashCards = partes
    .slice(0, 10)
    .map((p) => ({ ruso: p.ruso, translit: p.translit, espanol: p.espanol }));

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo se dice "cabeza" en ruso?',
      opciones: ['рука', 'нога', 'голова', 'шея'],
      correcta: 'голова',
    },
    {
      id: 'q2',
      pregunta: '"Нос" significa:',
      opciones: ['boca', 'ojo', 'nariz', 'oído'],
      correcta: 'nariz',
    },
    {
      id: 'q3',
      pregunta: '¿Cómo se dice "mano / brazo"?',
      opciones: ['нога', 'рука', 'спина', 'живот'],
      correcta: 'рука',
    },
    {
      id: 'q4',
      pregunta: '"У меня болит живот" significa:',
      opciones: [
        'Me duele la cabeza',
        'Me duele la espalda',
        'Me duele el estómago',
        'Me duele el cuello',
      ],
      correcta: 'Me duele el estómago',
    },
    {
      id: 'q5',
      pregunta: '"Глаз" significa:',
      opciones: ['nariz', 'boca', 'ojo', 'oído'],
      correcta: 'ojo',
    },
    {
      id: 'q6',
      pregunta: '¿Cómo se dice "espalda"?',
      opciones: ['шея', 'спина', 'сердце', 'зуб'],
      correcta: 'спина',
    },
    {
      id: 'q7',
      pregunta: '"Зуб" significa:',
      opciones: ['labio', 'lengua', 'diente', 'garganta'],
      correcta: 'diente',
    },
    {
      id: 'q8',
      pregunta: '"У меня болят ноги" — ¿por qué "болят" y no "болит"?',
      opciones: [
        'Es incorrecto, debe ser болит',
        'Porque ноги es plural',
        'Porque ноги es masculino',
        'Болят es el pasado',
      ],
      correcta: 'Porque ноги es plural',
    },
    {
      id: 'q9',
      pregunta: '"Волосы" significa:',
      opciones: ['barba', 'cabello / pelo', 'cejas', 'pestañas'],
      correcta: 'cabello / pelo',
    },
    {
      id: 'q10',
      pregunta: '¿Cómo se dice "corazón"?',
      opciones: ['живот', 'спина', 'сердце', 'рот'],
      correcta: 'сердце',
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
          🫀 Partes del Cuerpo
        </h2>
        <p className="text-htb-text-dim">
          Vocabulario esencial para hablar sobre salud, descripciones físicas y
          situaciones cotidianas. Combínalo con{' '}
          <span className="text-htb-green font-bold"><SpeakableText text="У меня болит..." /></span> (me
          duele) para el médico.
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
                Vocabulario del cuerpo
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {partes.map((p, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between py-2 px-4 border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                >
                  <span className="text-htb-green font-bold"><SpeakableText text={p.ruso} /></span>
                  <span className="text-htb-text-dim italic text-sm">
                    {p.translit}
                  </span>
                  <span className="text-white">{p.espanol}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                🏥 Frases útiles (en el médico)
              </h3>
            </div>
            <table className="w-full">
              <tbody>
                {frasesUtil.map((f, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-3 px-4 text-htb-green font-bold">
                      <SpeakableText text={f.ruso} />
                    </td>
                    <td className="py-3 px-4 text-htb-text-dim italic text-sm">
                      {f.translit}
                    </td>
                    <td className="py-3 px-4 text-white text-sm">
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

export default PartesDelCuerpoA1Exercise;
