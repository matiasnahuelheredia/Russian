import React, { useState } from 'react';

const quiz = [
  {
    id: 'q1',
    p: '"Он сказал, что устал." — El discurso indirecto en ruso:',
    o: [
      'Cambia el tiempo verbal como en inglés',
      'No cambia el tiempo verbal (se mantiene como el hablante lo dijo)',
      'Siempre va en subjuntivo',
      'Solo usa infinitivo',
    ],
    c: 'No cambia el tiempo verbal (se mantiene como el hablante lo dijo)',
  },
  {
    id: 'q2',
    p: '"Она спросила, _____ он придёт." — ¿qué conector?',
    o: ['что', 'чтобы', 'придёт ли', 'ли'],
    c: 'придёт ли',
  },
  {
    id: 'q3',
    p: '"Он попросил её _____ помочь." — sin cambio de sujeto usa:',
    o: [
      'чтобы + прошедшее',
      'infinitivo directamente',
      'что + infinitivo',
      'ли + infinitivo',
    ],
    c: 'infinitivo directamente',
  },
  {
    id: 'q4',
    p: '"Мама сказала, что _____ устала." — ¿forma correcta de decir "she was tired" en ind.?',
    o: ['устаёт', 'устала', 'устанет', 'была уставшей'],
    c: 'устала',
  },
  {
    id: 'q5',
    p: '"Она спросила, нравится ли мне Москва." — "ли" aparece:',
    o: [
      'al principio de la cláusula',
      'detrás del verbo o palabra enfatizada',
      'al final',
      'antes del sujeto',
    ],
    c: 'detrás del verbo o palabra enfatizada',
  },
  {
    id: 'q6',
    p: '"Он велел нам уйти." — "велел" significa:',
    o: ['preguntó', 'ordenó', 'prometió', 'negó'],
    c: 'ordenó',
  },
  {
    id: 'q7',
    p: '"Она пообещала, что позвонит." — "позвонит" está en:',
    o: [
      'presente',
      'futuro (sin cambio de tiempo en ruso)',
      'pasado',
      'condicional',
    ],
    c: 'futuro (sin cambio de tiempo en ruso)',
  },
  {
    id: 'q8',
    p: '¿Cómo se reporta "¿Ты голоден?" (¿Tienes hambre?) en discurso indirecto?',
    o: [
      'Он спросил, что я голоден.',
      'Он спросил, голоден ли я.',
      'Он спросил, если я голоден.',
      'Он сказал, голоден ли я.',
    ],
    c: 'Он спросил, голоден ли я.',
  },
  {
    id: 'q9',
    p: '"Доктор сказал, чтобы я пил много воды." — "чтобы + пил" aquí expresa:',
    o: [
      'condición irreal',
      'deseo/instrucción del médico',
      'pregunta indirecta',
      'afirmación',
    ],
    c: 'deseo/instrucción del médico',
  },
  {
    id: 'q10',
    p: '"Он отрицал, что _____ это сделал." — ¿forma correcta?',
    o: ['он', 'что он', 'он сделал', 'нет'],
    c: 'что он',
  },
];

const tipos = [
  {
    t: 'Afirmación',
    conj: 'что + misma forma verbal',
    ej: 'Он сказал, что он устал.',
    es: 'Dijo que estaba cansado.',
  },
  {
    t: 'Pregunta sí/no',
    conj: 'ли (pospuesto al verbo)',
    ej: 'Она спросила, придёт ли он.',
    es: 'Preguntó si él vendría.',
  },
  {
    t: 'Pregunta con pronombre',
    conj: 'Palabra interrogativa + oración',
    ej: 'Он спросил, где она живёт.',
    es: 'Preguntó dónde vivía ella.',
  },
  {
    t: 'Mandato/Petición',
    conj: 'попросил + inf (mismo suj.) / чтобы + past (distinto)',
    ej: 'Он попросил её помочь. / Он попросил, чтобы она помогла.',
    es: 'Le pidió que ayudara.',
  },
  {
    t: 'Instrucción/Consejo',
    conj: 'сказал + чтобы + past',
    ej: 'Врач сказал, чтобы я отдыхал.',
    es: 'El médico dijo que descansara.',
  },
];

const cards = [
  {
    ru: 'Он сказал, что он устал.',
    tl: 'On skazal, chto on ustal.',
    es: 'Dijo que estaba cansado.',
  },
  {
    ru: 'Она спросила, придёт ли он.',
    tl: 'Ona sprosila, pridyot li on.',
    es: 'Preguntó si él vendría.',
  },
  {
    ru: 'Он спросил, где она живёт.',
    tl: 'On sprosil, gde ona zhivyot.',
    es: 'Preguntó dónde vivía.',
  },
  {
    ru: 'Врач сказал, чтобы я пил больше воды.',
    tl: 'Vrach skazal, chtoby ya pil bolshe vody.',
    es: 'El médico dijo que bebiera más agua.',
  },
  {
    ru: 'Она пообещала, что позвонит.',
    tl: 'Ona poobeshchala, chto pozvonit.',
    es: 'Prometió que llamaría.',
  },
  {
    ru: 'Мама попросила меня помочь.',
    tl: 'Mama poprosila menya pomoch.',
    es: 'Mamá me pidió que ayudara.',
  },
];

export default function DiscursoIndirectoC1Exercise() {
  const [tab, setTab] = useState('referencia');
  const [fi, setFi] = useState(0);
  const [ff, setFf] = useState(false);
  const [ans, setAns] = useState({});
  const [res, setRes] = useState(false);
  const [score, setScore] = useState(0);
  const [sa, setSa] = useState(false);
  const setA = (id, v) => {
    setAns((p) => ({ ...p, [id]: v }));
    setRes(false);
  };
  const check = () => {
    let c = 0;
    quiz.forEach((q) => {
      if (ans[q.id] === q.c) c++;
    });
    setScore(c);
    setRes(true);
    setSa(false);
  };
  const reset = () => {
    setAns({});
    setRes(false);
    setScore(0);
    setSa(false);
  };
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-htb-card rounded-lg border border-gray-800 p-6 mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">
          💬 Discurso Indirecto (Косвенная речь)
        </h2>
        <p className="text-htb-text-dim">
          El ruso{' '}
          <span className="text-htb-green font-bold">
            NO cambia los tiempos verbales
          </span>{' '}
          en discurso indirecto (a diferencia del inglés). Afirmaciones: что;
          preguntas sí/no: ли; mandatos/instrucciones: чтобы + pasado.
        </p>
      </div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {[
          ['referencia', '📚 Referencia'],
          ['flashcards', '🃏 Flashcards'],
          ['ejercicio', '✏️ Ejercicio'],
        ].map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === id ? 'bg-htb-green text-htb-bg' : 'bg-htb-card text-htb-text-dim hover:text-white border border-gray-700'}`}
          >
            {label}
          </button>
        ))}
      </div>
      {tab === 'referencia' && (
        <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
          <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
            <h3 className="text-htb-green font-semibold">
              Tipos de Discurso Indirecto
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 bg-htb-sidebar/50 text-xs">
                  <th className="text-left py-2 px-3 text-htb-text-dim">
                    Tipo
                  </th>
                  <th className="text-left py-2 px-3 text-htb-green">
                    Conector
                  </th>
                  <th className="text-left py-2 px-3 text-white">Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                {tipos.map((r, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-3 text-blue-400 font-bold text-xs">
                      {r.t}
                    </td>
                    <td className="py-2 px-3 text-htb-green text-xs font-bold">
                      {r.conj}
                    </td>
                    <td className="py-2 px-3">
                      <p className="text-white text-sm">{r.ej}</p>
                      <p className="text-htb-text-dim text-xs">{r.es}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {tab === 'flashcards' && (
        <div className="bg-htb-card rounded-lg border border-gray-800 p-6">
          <div
            onClick={() => setFf(!ff)}
            className="cursor-pointer bg-htb-sidebar rounded-lg border-2 border-htb-green/30 hover:border-htb-green p-8 mb-6 min-h-[180px] flex flex-col items-center justify-center transition-all"
          >
            {ff ? (
              <>
                <p className="text-xl text-htb-green font-bold mb-2 text-center">
                  {cards[fi].ru}
                </p>
                <p className="text-htb-text-dim italic text-sm text-center">
                  {cards[fi].tl}
                </p>
              </>
            ) : (
              <p className="text-xl text-white text-center">{cards[fi].es}</p>
            )}
          </div>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => {
                setFi((i) => Math.max(0, i - 1));
                setFf(false);
              }}
              disabled={fi === 0}
              className="px-4 py-2 bg-htb-sidebar border border-gray-700 rounded-lg text-white hover:border-htb-green disabled:opacity-40"
            >
              ← Anterior
            </button>
            <span className="text-htb-text-dim">
              {fi + 1} / {cards.length}
            </span>
            <button
              onClick={() => {
                setFi((i) => Math.min(cards.length - 1, i + 1));
                setFf(false);
              }}
              disabled={fi === cards.length - 1}
              className="px-4 py-2 bg-htb-sidebar border border-gray-700 rounded-lg text-white hover:border-htb-green disabled:opacity-40"
            >
              Siguiente →
            </button>
          </div>
        </div>
      )}
      {tab === 'ejercicio' && (
        <div className="bg-htb-card rounded-lg border border-gray-800 p-6">
          {res ? (
            <div className="text-center">
              <div
                className={`text-6xl font-bold mb-4 ${score >= 8 ? 'text-htb-green' : score >= 5 ? 'text-yellow-400' : 'text-red-400'}`}
              >
                {score}/{quiz.length}
              </div>
              <p className="text-white text-xl mb-6">
                {score === quiz.length
                  ? '¡Perfecto! 🎉'
                  : score >= 8
                    ? '¡Muy bien! 👍'
                    : score >= 5
                      ? 'Bien 💪'
                      : 'Repasa 📚'}
              </p>
              {sa && (
                <div className="space-y-3 text-left mb-6">
                  {quiz.map((q) => (
                    <div
                      key={q.id}
                      className={`p-3 rounded-lg border ${ans[q.id] === q.c ? 'border-htb-green bg-htb-green/10' : 'border-red-500 bg-red-500/10'}`}
                    >
                      <p className="text-white text-sm mb-1">{q.p}</p>
                      <p
                        className={`text-sm font-medium ${ans[q.id] === q.c ? 'text-htb-green' : 'text-red-400'}`}
                      >
                        Tu respuesta: {ans[q.id] || '(sin responder)'}
                      </p>
                      {ans[q.id] !== q.c && (
                        <p className="text-htb-green text-sm">
                          Correcta: {q.c}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={reset}
                  className="bg-htb-green text-htb-bg px-6 py-3 rounded-lg font-semibold"
                >
                  🔄 Repetir
                </button>
                {!sa && (
                  <button
                    onClick={() => setSa(true)}
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
                {quiz.map((q, i) => (
                  <div
                    key={q.id}
                    className="bg-htb-sidebar rounded-lg p-4 border border-gray-800"
                  >
                    <p className="text-white font-medium mb-3">
                      {i + 1}. {q.p}
                    </p>
                    <select
                      value={ans[q.id] || ''}
                      onChange={(e) => setA(q.id, e.target.value)}
                      className="w-full bg-htb-bg border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-htb-green"
                    >
                      <option value="">-- Elige una respuesta --</option>
                      {q.o.map((o, idx) => (
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
                  onClick={check}
                  className="bg-htb-green text-htb-bg px-8 py-3 rounded-lg font-semibold"
                >
                  ✅ Comprobar
                </button>
                <button
                  onClick={reset}
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
}
