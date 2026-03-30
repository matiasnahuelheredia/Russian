import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const EnElMedicoA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const frases = [
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
      ruso: 'У меня болит живот.',
      translit: 'U menya bolit zhivot.',
      espanol: 'Me duele el estómago.',
    },
    {
      ruso: 'У меня болят зубы.',
      translit: 'U menya bolyat zuby.',
      espanol: 'Me duelen los dientes.',
    },
    {
      ruso: 'У меня температура.',
      translit: 'U menya temperatura.',
      espanol: 'Tengo fiebre.',
    },
    { ruso: 'Мне плохо.', translit: 'Mne plokho.', espanol: 'Me siento mal.' },
    {
      ruso: 'Мне лучше.',
      translit: 'Mne luchshe.',
      espanol: 'Me siento mejor.',
    },
    {
      ruso: 'Вызовите врача!',
      translit: 'Vyzovite vracha!',
      espanol: '¡Llamen a un médico!',
    },
    {
      ruso: 'Вызовите скорую!',
      translit: 'Vyzovite skoruyu!',
      espanol: '¡Llamen a la ambulancia!',
    },
    {
      ruso: 'Мне нужно лекарство.',
      translit: 'Mne nuzhno lekarstvo.',
      espanol: 'Necesito medicamento.',
    },
    {
      ruso: 'Где ближайшая аптека?',
      translit: 'Gde blizhayshaya apteka?',
      espanol: '¿Dónde está la farmacia más cercana?',
    },
    {
      ruso: 'Я аллергик на...',
      translit: 'Ya allerghik na...',
      espanol: 'Soy alérgico/a a...',
    },
  ];

  const flashCards = frases.map((f) => ({
    ruso: f.ruso,
    translit: f.translit,
    espanol: f.espanol,
  }));

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo se dice "Me duele la cabeza"?',
      opciones: [
        'Моя голова болит',
        'У меня болит голова',
        'Я болею голова',
        'Голова у меня больно',
      ],
      correcta: 'У меня болит голова',
    },
    {
      id: 'q2',
      pregunta: '"Мне плохо" significa:',
      opciones: [
        'Tengo fiebre',
        'Me siento mal',
        'Estoy cansado',
        'Tengo hambre',
      ],
      correcta: 'Me siento mal',
    },
    {
      id: 'q3',
      pregunta: '"У меня температура" significa:',
      opciones: [
        'Hace calor',
        'Tengo fiebre',
        'Me duele la espalda',
        'Estoy mareado',
      ],
      correcta: 'Tengo fiebre',
    },
    {
      id: 'q4',
      pregunta: '¿Cómo se dice "Llamen al médico"?',
      opciones: [
        'Идите к врачу',
        'Вызовите врача',
        'Врач здесь',
        'Нужен врач, пожалуйста',
      ],
      correcta: 'Вызовите врача',
    },
    {
      id: 'q5',
      pregunta: '"У меня болят зубы" — ¿por qué "болят" y no "болит"?',
      opciones: [
        'Es incorrecto',
        'Porque зубы es plural',
        'Porque es femenino',
        'Porque es una expresión fija',
      ],
      correcta: 'Porque зубы es plural',
    },
    {
      id: 'q6',
      pregunta: '"Аптека" significa:',
      opciones: ['hospital', 'clínica', 'farmacia', 'médico'],
      correcta: 'farmacia',
    },
    {
      id: 'q7',
      pregunta: '¿Cómo se dice "Me siento mejor"?',
      opciones: ['Мне плохо', 'Мне хорошо', 'Мне лучше', 'Мне нормально'],
      correcta: 'Мне лучше',
    },
    {
      id: 'q8',
      pregunta: '"Вызовите скорую!" significa:',
      opciones: [
        '¡Llamen a la policía!',
        '¡Llamen a un médico!',
        '¡Llamen a la ambulancia!',
        '¡Pidan ayuda!',
      ],
      correcta: '¡Llamen a la ambulancia!',
    },
    {
      id: 'q9',
      pregunta: '"Мне нужно лекарство" significa:',
      opciones: [
        'Tengo medicamento',
        'No quiero medicina',
        'Necesito medicamento',
        'Compré medicina',
      ],
      correcta: 'Necesito medicamento',
    },
    {
      id: 'q10',
      pregunta: '¿Cómo se dice "Me duele la garganta"?',
      opciones: [
        'У меня болит живот',
        'У меня болит горло',
        'У меня болит голова',
        'У меня болят зубы',
      ],
      correcta: 'У меня болит горло',
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
        <h2 className="text-3xl font-bold text-white mb-2">🏥 En el Médico</h2>
        <p className="text-htb-text-dim">
          Frases esenciales para situaciones médicas. La estructura{' '}
          <span className="text-htb-green font-bold">
            У меня болит + parte del cuerpo
          </span>{' '}
          es la más importante para expresar dolor.
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
          <div className="bg-htb-sidebar rounded-lg border border-htb-green/30 p-4 mb-2">
            <p className="text-htb-green font-semibold mb-2">
              🔑 Estructura clave
            </p>
            <p className="text-white text-lg font-bold mb-1">
              У меня болит + <span className="text-htb-green">singular</span> /
              болят + <span className="text-htb-green">plural</span>
            </p>
            <p className="text-htb-text-dim text-sm">
              Lit. "En mí duele / duelen..." — болит (sing.), болят (plur.)
            </p>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Frases en el médico
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
                {frases.map((f, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-4 text-htb-green font-bold">
                      <SpeakableText text={f.ruso} />
                    </td>
                    <td className="py-2 px-4 text-htb-text-dim italic text-sm">
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
                <p className="text-2xl text-htb-green font-bold mb-3 text-center">
                  {flashCards[flashcardIndex].ruso}
                </p>
                <p className="text-htb-text-dim italic text-center">
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

export default EnElMedicoA1Exercise;
