import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const VerbosReflexivosB1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const reflexiveVerbs = [
    {
      verbo: 'мыться',
      conjugacion: 'мо́юсь / мо́ешься / мо́ется',
      espanol: 'lavarse',
    },
    {
      verbo: 'одеваться',
      conjugacion: 'одева́юсь / одева́ешься',
      espanol: 'vestirse',
    },
    {
      verbo: 'раздеваться',
      conjugacion: 'раздева́юсь / раздева́ешься',
      espanol: 'desvestirse',
    },
    {
      verbo: 'причёсываться',
      conjugacion: 'причёсываюсь',
      espanol: 'peinarse',
    },
    {
      verbo: 'бриться',
      conjugacion: 'бре́юсь / бре́ешься',
      espanol: 'afeitarse',
    },
    {
      verbo: 'купаться',
      conjugacion: 'купа́юсь / купа́ешься',
      espanol: 'bañarse',
    },
    { verbo: 'смеяться', conjugacion: 'смею́сь / смеёшься', espanol: 'reírse' },
    {
      verbo: 'улыбаться',
      conjugacion: 'улыба́юсь / улыба́ешься',
      espanol: 'sonreírse',
    },
    {
      verbo: 'учиться',
      conjugacion: 'учу́сь / у́чишься',
      espanol: 'estudiar / aprender',
    },
    {
      verbo: 'заниматься',
      conjugacion: 'занима́юсь / занима́ешься',
      espanol: 'ocuparse de / estudiar',
    },
    {
      verbo: 'находиться',
      conjugacion: 'нахожу́сь / нахо́дишься',
      espanol: 'encontrarse / estar ubicado',
    },
    {
      verbo: 'называться',
      conjugacion: 'называю́сь / называё́шься',
      espanol: 'llamarse',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Qué partícula caracteriza a los verbos reflexivos rusos?',
      opciones: ['-ть', '-ся/-сь', '-ти', '-ить'],
      correcta: '-ся/-сь',
    },
    {
      id: 'q2',
      pregunta: '"Я учусь" significa:',
      opciones: ['Enseño', 'Aprendo / Estudio', 'Toco', 'Trabajo'],
      correcta: 'Aprendo / Estudio',
    },
    {
      id: 'q3',
      pregunta: '¿Cuál es el reflexivo de "одеваться" (vestirse) para "я"?',
      opciones: ['одеваешься', 'одевается', 'одеваюсь', 'одеваются'],
      correcta: 'одеваюсь',
    },
    {
      id: 'q4',
      pregunta: '"Называться" significa:',
      opciones: [
        'Llamar a alguien',
        'Llamarse / tener el nombre de',
        'Nombrar',
        'Gritar',
      ],
      correcta: 'Llamarse / tener el nombre de',
    },
    {
      id: 'q5',
      pregunta: 'La partícula -СЬ (en vez de -СЯ) se usa después de:',
      opciones: [
        'Consonantes',
        'Vocales',
        'La letra й',
        'Solo al final de verbo',
      ],
      correcta: 'Vocales',
    },
    {
      id: 'q6',
      pregunta: '"Смеяться" significa:',
      opciones: ['Sonreír', 'Llorar', 'Reírse', 'Gritar'],
      correcta: 'Reírse',
    },
    {
      id: 'q7',
      pregunta: '"Где находится вокзал?" significa:',
      opciones: [
        '¿Dónde va la estación?',
        '¿Dónde está la estación?',
        '¿Cuándo abre la estación?',
        '¿Cómo es la estación?',
      ],
      correcta: '¿Dónde está la estación?',
    },
    {
      id: 'q8',
      pregunta: '"Я занимаюсь спортом" significa:',
      opciones: [
        'Me gusta el deporte',
        'Hago deporte / Me dedico al deporte',
        'Veo deporte',
        'Estudio deporte',
      ],
      correcta: 'Hago deporte / Me dedico al deporte',
    },
    {
      id: 'q9',
      pregunta: '¿Cuál de estos verbos NO es reflexivo?',
      opciones: ['мыться', 'учиться', 'работать', 'называться'],
      correcta: 'работать',
    },
    {
      id: 'q10',
      pregunta: '"Он моется каждый день" significa:',
      opciones: [
        'Él lava algo cada día',
        'Él se lava cada día',
        'Él llora cada día',
        'Él trabaja cada día',
      ],
      correcta: 'Él se lava cada día',
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
          🔄 Verbos Reflexivos en Ruso (-ся/-сь)
        </h2>
        <p className="text-htb-text-dim">
          Los verbos reflexivos se forman añadiendo{' '}
          <span className="text-htb-green font-bold"><SpeakableText text="-ся" /></span> (después de
          consonante) o <span className="text-htb-green font-bold"><SpeakableText text="-сь" /></span>{' '}
          (después de vocal) al verbo.
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
          <div className="bg-htb-card rounded-lg border border-gray-800 p-4">
            <h3 className="text-htb-green font-semibold mb-3">
              📐 Regla de formación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-htb-sidebar rounded-lg p-3 border border-htb-green/30">
                <p className="text-htb-green font-bold mb-1">
                  -ся (después de consonante)
                </p>
                <p className="text-white text-sm">
                  мыть<span className="text-htb-green"><SpeakableText text="ся" /></span>, учит
                  <span className="text-htb-green"><SpeakableText text="ся" /></span>, одевает
                  <span className="text-htb-green"><SpeakableText text="ся" /></span>
                </p>
              </div>
              <div className="bg-htb-sidebar rounded-lg p-3 border border-htb-green/30">
                <p className="text-htb-green font-bold mb-1">
                  -сь (después de vocal)
                </p>
                <p className="text-white text-sm">
                  учу<span className="text-htb-green"><SpeakableText text="сь" /></span>, моё
                  <span className="text-htb-green"><SpeakableText text="сь" /></span>, занимаю
                  <span className="text-htb-green"><SpeakableText text="сь" /></span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Verbos reflexivos comunes
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                    <th className="text-left py-3 px-4 text-htb-green text-sm">
                      Infinitivo
                    </th>
                    <th className="text-left py-3 px-4 text-htb-text-dim text-sm">
                      Conjugación (yo/tú)
                    </th>
                    <th className="text-left py-3 px-4 text-white text-sm">
                      Español
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reflexiveVerbs.map((v, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 hover:bg-htb-sidebar/50 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-3 px-4 text-htb-green font-bold text-lg">
                        <SpeakableText text={v.verbo} />
                      </td>
                      <td className="py-3 px-4 text-htb-text-dim italic text-sm">
                        <SpeakableText text={v.conjugacion} />
                      </td>
                      <td className="py-3 px-4 text-white">{v.espanol}</td>
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
              <p className="text-4xl text-htb-green font-bold text-center">
                {reflexiveVerbs[flashcardIndex].verbo}
              </p>
            ) : (
              <p className="text-2xl text-white text-center">
                {reflexiveVerbs[flashcardIndex].espanol}
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
              {flashcardIndex + 1} / {reflexiveVerbs.length}
            </span>
            <button
              onClick={() => {
                setFlashcardIndex((i) =>
                  Math.min(reflexiveVerbs.length - 1, i + 1)
                );
                setFlashcardFlipped(false);
              }}
              disabled={flashcardIndex === reflexiveVerbs.length - 1}
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

export default VerbosReflexivosB1Exercise;
