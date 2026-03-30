import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const AspectosIntroA2Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const comparacion = [
    {
      imp: 'читать',
      perf: 'прочитать',
      espImp: 'leer (proceso)',
      espPerf: 'leer hasta el final / terminar de leer',
    },
    {
      imp: 'делать',
      perf: 'сделать',
      espImp: 'hacer (proceso)',
      espPerf: 'hacer / completar',
    },
    {
      imp: 'писать',
      perf: 'написать',
      espImp: 'escribir (proceso)',
      espPerf: 'escribir / terminar de escribir',
    },
    {
      imp: 'говорить',
      perf: 'сказать',
      espImp: 'hablar (proceso)',
      espPerf: 'decir (un acto)',
    },
    {
      imp: 'покупать',
      perf: 'купить',
      espImp: 'comprar (proceso)',
      espPerf: 'comprar / adquirir',
    },
    {
      imp: 'есть',
      perf: 'съесть',
      espImp: 'comer (proceso)',
      espPerf: 'comerse (todo)',
    },
    {
      imp: 'учить',
      perf: 'выучить',
      espImp: 'estudiar / aprender (proceso)',
      espPerf: 'aprender (resultado)',
    },
    {
      imp: 'смотреть',
      perf: 'посмотреть',
      espImp: 'ver / mirar (proceso)',
      espPerf: 'ver hasta el final',
    },
  ];

  const cuandoUsar = [
    {
      aspecto: 'Imperfectivo (НСВ)',
      color: 'text-blue-400',
      border: 'border-blue-400/30',
      reglas: [
        'Acción en proceso o que dura: Я читал книгу. (Estaba leyendo...)',
        'Acción habitual o repetida: Я каждый день читаю. (Leo todos los días.)',
        'Descripción de estado: Она долго думала. (Pensó mucho tiempo.)',
      ],
    },
    {
      aspecto: 'Perfectivo (СВ)',
      color: 'text-htb-green',
      border: 'border-htb-green/30',
      reglas: [
        'Acción completada, con resultado: Я прочитал книгу. (Terminé el libro.)',
        'Acción puntual, única: Он сказал мне правду. (Me dijo la verdad.)',
        'Secuencia de acciones: Я встал, оделся и ушёл. (Me levanté, me vestí y me fui.)',
      ],
    },
  ];

  const flashCards = [
    {
      ruso: 'Я читал книгу.',
      translit: 'Ya chital knigu.',
      espanol: 'Estaba leyendo el libro. (proceso, imp.)',
    },
    {
      ruso: 'Я прочитал книгу.',
      translit: 'Ya prochital knigu.',
      espanol: 'Leí el libro (completo). (resultado, perf.)',
    },
    {
      ruso: 'Она каждый день пишет.',
      translit: 'Ona kazhdyy denʼ pishet.',
      espanol: 'Ella escribe todos los días. (habitual, imp.)',
    },
    {
      ruso: 'Она написала письмо.',
      translit: 'Ona napisala pisʼmo.',
      espanol: 'Ella escribió la carta (la terminó). (perf.)',
    },
    {
      ruso: 'Я учил слова.',
      translit: 'Ya uchil slova.',
      espanol: 'Estaba aprendiendo las palabras. (imp.)',
    },
    {
      ruso: 'Я выучил слова.',
      translit: 'Ya vyuchil slova.',
      espanol: 'Aprendí las palabras (ya sé). (perf.)',
    },
    {
      ruso: 'Мы смотрели фильм.',
      translit: 'My smotreli filʼm.',
      espanol: 'Estábamos viendo la película. (imp.)',
    },
    {
      ruso: 'Мы посмотрели фильм.',
      translit: 'My posmotrely filʼm.',
      espanol: 'Vimos la película (entera). (perf.)',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cuál es el perfecto de "читать"?',
      opciones: ['почитать', 'прочитать', 'читнуть', 'дочитать'],
      correcta: 'прочитать',
    },
    {
      id: 'q2',
      pregunta: '"Я читал книгу" implica:',
      opciones: [
        'Terminé el libro',
        'Estaba leyendo el libro (proceso)',
        'Leo libros habitualmente',
        'Leí una página',
      ],
      correcta: 'Estaba leyendo el libro (proceso)',
    },
    {
      id: 'q3',
      pregunta: '"Я прочитал книгу" implica:',
      opciones: [
        'Empecé el libro',
        'Leí un poco',
        'Terminé el libro (resultado)',
        'Leo siempre libros',
      ],
      correcta: 'Terminé el libro (resultado)',
    },
    {
      id: 'q4',
      pregunta:
        '¿Qué aspecto se usa para acciones HABITUALES (todos los días)?',
      opciones: [
        'perfectivo',
        'imperfectivo',
        'ambos por igual',
        'depende del verbo',
      ],
      correcta: 'imperfectivo',
    },
    {
      id: 'q5',
      pregunta: '¿Cuál es el perfecto de "делать"?',
      opciones: ['поделать', 'наделать', 'сделать', 'переделать'],
      correcta: 'сделать',
    },
    {
      id: 'q6',
      pregunta: '"Она написала письмо." — написала es:',
      opciones: [
        'imperfectivo — proceso',
        'imperfectivo — habitual',
        'perfectivo — resultado',
        'perfectivo — proceso',
      ],
      correcta: 'perfectivo — resultado',
    },
    {
      id: 'q7',
      pregunta: 'Imperfectivo в описании: "Она долго думала" significa:',
      opciones: [
        'Pensó (y terminó)',
        'Pensó mucho tiempo (duración)',
        'Pensará luego',
        'Piensa siempre',
      ],
      correcta: 'Pensó mucho tiempo (duración)',
    },
    {
      id: 'q8',
      pregunta: '¿Cuál es el perfecto de "покупать"?',
      opciones: ['закупать', 'купить', 'скупать', 'докупать'],
      correcta: 'купить',
    },
    {
      id: 'q9',
      pregunta:
        'Para una secuencia de acciones completadas (me levanté, me vestí, me fui) se usa:',
      opciones: ['imperfectivo', 'perfectivo', 'cualquiera', 'el presente'],
      correcta: 'perfectivo',
    },
    {
      id: 'q10',
      pregunta: '¿Cuál es el perfecto de "учить"?',
      opciones: ['заучить', 'выучить', 'поучить', 'научить'],
      correcta: 'выучить',
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
          ⚡ Aspectos Verbales: Intro
        </h2>
        <p className="text-htb-text-dim">
          El ruso distingue dos aspectos para casi todos los verbos:{' '}
          <span className="text-blue-400 font-bold"><SpeakableText text="imperfectivo (НСВ)" /></span> —
          proceso/hábito — y{' '}
          <span className="text-htb-green font-bold"><SpeakableText text="perfectivo (СВ)" /></span> —
          acción completada con resultado.
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
            {cuandoUsar.map((c, i) => (
              <div
                key={i}
                className={`bg-htb-card rounded-lg border ${c.border} overflow-hidden`}
              >
                <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                  <h3 className={`font-bold ${c.color}`}>{c.aspecto}</h3>
                </div>
                <ul className="p-3 space-y-2">
                  {c.reglas.map((r, j) => (
                    <li
                      key={j}
                      className="text-htb-text-dim text-sm flex gap-2"
                    >
                      <span className={c.color}>•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-white font-semibold">
                Pares de verbos Imperfectivo → Perfectivo
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                    <th className="text-left py-2 px-3 text-blue-400">
                      НСВ (Imperfectivo)
                    </th>
                    <th className="text-left py-2 px-3 text-htb-text-dim">
                      Significado
                    </th>
                    <th className="text-left py-2 px-3 text-htb-green">
                      СВ (Perfectivo)
                    </th>
                    <th className="text-left py-2 px-3 text-htb-text-dim">
                      Significado
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparacion.map((v, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-3 text-blue-400 font-bold">
                        <SpeakableText text={v.imp} />
                      </td>
                      <td className="py-2 px-3 text-htb-text-dim italic">
                        {v.espImp}
                      </td>
                      <td className="py-2 px-3 text-htb-green font-bold">
                        <SpeakableText text={v.perf} />
                      </td>
                      <td className="py-2 px-3 text-htb-text-dim italic">
                        {v.espPerf}
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
            className="cursor-pointer bg-htb-sidebar rounded-lg border-2 border-htb-green/30 hover:border-htb-green p-8 mb-6 min-h-[210px] flex flex-col items-center justify-center transition-all"
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

export default AspectosIntroA2Exercise;
