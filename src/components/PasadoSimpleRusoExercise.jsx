import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const PasadoSimpleRusoExercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const formacionPasado = [
    {
      forma: 'Masculino (я/он)',
      terminacion: '-л',
      ejemplo: 'читать → читал',
      espanol: 'yo/él leía/leyó',
    },
    {
      forma: 'Femenino (я/она)',
      terminacion: '-ла',
      ejemplo: 'читать → читала',
      espanol: 'yo/ella leía/leyó',
    },
    {
      forma: 'Neutro (оно)',
      terminacion: '-ло',
      ejemplo: 'читать → читало',
      espanol: 'ello leía/leyó',
    },
    {
      forma: 'Plural (мы/вы/они)',
      terminacion: '-ли',
      ejemplo: 'читать → читали',
      espanol: 'nosotros/vosotros/ellos leían/leyeron',
    },
  ];

  const verbosEjemplos = [
    {
      infinitivo: 'работать (trabajar)',
      masc: 'работал',
      fem: 'работала',
      pl: 'работали',
    },
    {
      infinitivo: 'говорить (hablar)',
      masc: 'говорил',
      fem: 'говорила',
      pl: 'говорили',
    },
    { infinitivo: 'читать (leer)', masc: 'читал', fem: 'читала', pl: 'читали' },
    {
      infinitivo: 'писать (escribir)',
      masc: 'писал',
      fem: 'писала',
      pl: 'писали',
    },
    { infinitivo: 'жить (vivir)', masc: 'жил', fem: 'жила', pl: 'жили' },
    { infinitivo: 'быть (ser/estar)', masc: 'был', fem: 'была', pl: 'были' },
    { infinitivo: 'идти (ir a pie)', masc: 'шёл', fem: 'шла', pl: 'шли' },
    {
      infinitivo: 'делать (hacer)',
      masc: 'делал',
      fem: 'делала',
      pl: 'делали',
    },
  ];

  const flashPhrases = [
    { ruso: 'Вчера', translit: 'Vchera', espanol: 'Ayer' },
    {
      ruso: 'На прошлой неделе',
      translit: 'Na proshloy nedele',
      espanol: 'La semana pasada',
    },
    {
      ruso: 'В прошлом году',
      translit: 'V proshlom godu',
      espanol: 'El año pasado',
    },
    { ruso: 'Давно', translit: 'Davno', espanol: 'Hace mucho tiempo' },
    {
      ruso: 'Недавно',
      translit: 'Nedavno',
      espanol: 'Hace poco / Recientemente',
    },
    {
      ruso: 'Тогда',
      translit: 'Togda',
      espanol: 'Entonces / En aquel momento',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: 'El pasado de "работать" para "она" (ella) es:',
      opciones: ['работал', 'работала', 'работали', 'работало'],
      correcta: 'работала',
    },
    {
      id: 'q2',
      pregunta: 'El pasado de "читать" para "они" (ellos) es:',
      opciones: ['читал', 'читала', 'читало', 'читали'],
      correcta: 'читали',
    },
    {
      id: 'q3',
      pregunta:
        '¿Qué terminación usan los verbos en pasado para masculino singular?',
      opciones: ['-ла', '-ли', '-л', '-ло'],
      correcta: '-л',
    },
    {
      id: 'q4',
      pregunta: '"Вчера" significa:',
      opciones: ['Nunca', 'Ayer', 'Mañana', 'Siempre'],
      correcta: 'Ayer',
    },
    {
      id: 'q5',
      pregunta: 'El pasado de "быть" (ser/estar) para "она" es:',
      opciones: ['был', 'были', 'была', 'было'],
      correcta: 'была',
    },
    {
      id: 'q6',
      pregunta: '¿Qué terminación usan los verbos en pasado para plural?',
      opciones: ['-л', '-ла', '-ло', '-ли'],
      correcta: '-ли',
    },
    {
      id: 'q7',
      pregunta: '"Говорил" es la forma de pasado para:',
      opciones: ['ella habló', 'ellos hablaron', 'él habló', 'yo hablé (fem.)'],
      correcta: 'él habló',
    },
    {
      id: 'q8',
      pregunta: '"В прошлом году" significa:',
      opciones: ['Esta semana', 'El año pasado', 'El mes pasado', 'Ayer'],
      correcta: 'El año pasado',
    },
    {
      id: 'q9',
      pregunta: 'El pasado de "жить" para "мы" (nosotros) es:',
      opciones: ['жил', 'жила', 'жило', 'жили'],
      correcta: 'жили',
    },
    {
      id: 'q10',
      pregunta: '"Недавно" significa:',
      opciones: ['Hace mucho', 'Nunca', 'Hace poco', 'Siempre'],
      correcta: 'Hace poco',
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
          ⏮️ Pasado en Ruso
        </h2>
        <p className="text-htb-text-dim">
          Aprende a hablar en pasado en ruso. La formación es muy regular:
          depende del género.
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
                📐 Formación del Pasado
              </h3>
              <p className="text-htb-text-dim text-sm mt-1">
                Infinitivo → quitar -тъ/-ти → añadir terminación según
                género/número
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                    <th className="text-left py-3 px-4 text-htb-green text-sm">
                      Forma
                    </th>
                    <th className="text-left py-3 px-4 text-white text-sm">
                      Terminación
                    </th>
                    <th className="text-left py-3 px-4 text-htb-text-dim text-sm">
                      Ejemplo
                    </th>
                    <th className="text-left py-3 px-4 text-htb-text-dim text-sm">
                      Significado
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {formacionPasado.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 hover:bg-htb-sidebar/50 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-3 px-4 text-white font-medium">
                        <SpeakableText text={row.forma} />
                      </td>
                      <td className="py-3 px-4 text-htb-green font-bold text-lg">
                        {row.terminacion}
                      </td>
                      <td className="py-3 px-4 text-htb-green font-medium">
                        {row.ejemplo}
                      </td>
                      <td className="py-3 px-4 text-htb-text-dim text-sm">
                        {row.espanol}
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
                📝 Verbos comunes en pasado
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                    <th className="text-left py-3 px-4 text-htb-green text-sm">
                      Infinitivo
                    </th>
                    <th className="text-left py-3 px-4 text-white text-sm">
                      Masc. (он)
                    </th>
                    <th className="text-left py-3 px-4 text-white text-sm">
                      Fem. (она)
                    </th>
                    <th className="text-left py-3 px-4 text-white text-sm">
                      Plural (они)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {verbosEjemplos.map((v, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 hover:bg-htb-sidebar/50 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-3 px-4 text-htb-text-dim text-sm">
                        <SpeakableText text={v.infinitivo} />
                      </td>
                      <td className="py-3 px-4 text-htb-green font-medium">
                        <SpeakableText text={v.masc} />
                      </td>
                      <td className="py-3 px-4 text-htb-green font-medium">
                        <SpeakableText text={v.fem} />
                      </td>
                      <td className="py-3 px-4 text-htb-green font-medium">
                        <SpeakableText text={v.pl} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                <p className="text-4xl text-htb-green font-bold mb-3 text-center">
                  {flashPhrases[flashcardIndex].ruso}
                </p>
                <p className="text-htb-text-dim italic text-lg">
                  {flashPhrases[flashcardIndex].translit}
                </p>
              </>
            ) : (
              <p className="text-2xl text-white text-center">
                {flashPhrases[flashcardIndex].espanol}
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
              {flashcardIndex + 1} / {flashPhrases.length}
            </span>
            <button
              onClick={() => {
                setFlashcardIndex((i) =>
                  Math.min(flashPhrases.length - 1, i + 1)
                );
                setFlashcardFlipped(false);
              }}
              disabled={flashcardIndex === flashPhrases.length - 1}
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

export default PasadoSimpleRusoExercise;
