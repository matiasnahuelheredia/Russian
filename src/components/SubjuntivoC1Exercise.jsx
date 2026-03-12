import React, { useState } from 'react';

const quiz = [
  {
    id: 'q1',
    p: '"Если бы я знал, _____ тебе сказал." — ¿forma correcta?',
    o: ['я скажу', 'я бы сказал', 'я скажу бы', 'я скажал'],
    c: 'я бы сказал',
  },
  {
    id: 'q2',
    p: '"Если бы" + tiempo pasado en ruso expresa:',
    o: [
      'condición real',
      'condición hipotética/irreal',
      'condición futura',
      'condición pasada real',
    ],
    c: 'condición hipotética/irreal',
  },
  {
    id: 'q3',
    p: '"Я хочу, чтобы ты пришёл." — "чтобы + пришёл" es porque:',
    o: [
      'пришёл es futuro',
      'чтобы siempre exige pasado',
      'пришёл es presente',
      'чтобы es imperativo',
    ],
    c: 'чтобы siempre exige pasado',
  },
  {
    id: 'q4',
    p: '"Если я буду свободен, я приду." — Esta frase expresa:',
    o: [
      'condición irreal (subjuntivo)',
      'condición real posible (futuro)',
      'deseo',
      'obligación',
    ],
    c: 'condición real posible (futuro)',
  },
  {
    id: 'q5',
    p: '"Чтобы не опоздать, он встал рано." — el infinitivo tras "чтобы" aquí indica:',
    o: ['deseo', 'objetivo/finalidad', 'condición irreal', 'mandato'],
    c: 'objetivo/finalidad',
  },
  {
    id: 'q6',
    p: '"Я бы хотел стакан воды." — ¿Qué expresa "бы хотел"?',
    o: [
      'mandato cortés',
      'petición educada (condicional de cortesía)',
      'pasado habitual',
      'futuro incierto',
    ],
    c: 'petición educada (condicional de cortesía)',
  },
  {
    id: 'q7',
    p: '"Если бы я был богат, ___." — ¿Qué forma verbal sigue lógicamente?',
    o: ['я купил дом', 'я бы купил дом', 'я куплю дом', 'я покупаю дом'],
    c: 'я бы купил дом',
  },
  {
    id: 'q8',
    p: '"Он попросил, чтобы мы помогли." — "помогли" está en:',
    o: ['futuro', 'imperativo', 'pasado (exigido por чтобы)', 'infinitivo'],
    c: 'pasado (exigido por чтобы)',
  },
  {
    id: 'q9',
    p: '"Было бы хорошо встретиться." — ¿qué expresa esta construcción?',
    o: ['mandato', 'sugerencia suave/deseo', 'prohibición', 'condición real'],
    c: 'sugerencia suave/deseo',
  },
  {
    id: 'q10',
    p: '"Если бы не ты, я бы не справился." — ¿qué significa "если бы не"?',
    o: ['aunque', 'si no fuera por', 'a pesar de que', 'para que no'],
    c: 'si no fuera por',
  },
];

const table = [
  {
    tipo: 'Condición real (posible)',
    est: 'Если + presente/futuro, ...budu+inf/perf.future',
    ej: 'Если ты придёшь, мы поговорим.',
    es: 'Si vienes, hablaremos.',
  },
  {
    tipo: 'Condición irreal/hipotética',
    est: 'Если бы + пр. вр., ...бы + пр. вр.',
    ej: 'Если бы я знал, я бы сказал.',
    es: 'Si (yo) supiera, lo diría.',
  },
  {
    tipo: 'Deseo/objetivo (чтобы)',
    est: 'чтобы + пр. вр.',
    ej: 'Я хочу, чтобы ты пришёл.',
    es: 'Quiero que vengas.',
  },
  {
    tipo: 'Finalidad (чтобы + inf.)',
    est: 'Verb + чтобы + infinitivo',
    ej: 'Я пришёл, чтобы помочь.',
    es: 'Vine para ayudar.',
  },
  {
    tipo: 'Petición cortés',
    est: 'бы + past / Infinitivo + бы',
    ej: 'Я бы хотел кофе.',
    es: 'Quisiera un café.',
  },
];

const cards = [
  {
    ru: 'Если бы я был на твоём месте, я бы не делал этого.',
    tl: 'Yesli by ya byl na tvoyom meste, ya by ne delal etovo.',
    es: 'Si yo estuviera en tu lugar, no haría eso.',
  },
  {
    ru: 'Я хочу, чтобы ты понял меня.',
    tl: 'Ya khochu, chtoby ty ponyal menya.',
    es: 'Quiero que me entiendas.',
  },
  {
    ru: 'Если завтра будет солнечно, мы пойдём на прогулку.',
    tl: 'Yesli zavtra budet solnechno, my poydyom na progulku.',
    es: 'Si mañana hace sol, saldremos a pasear.',
  },
  {
    ru: 'Было бы здорово поехать в Москву!',
    tl: 'Bylo by zdorovo poyekhat v Moskvu!',
    es: '¡Sería genial ir a Moscú!',
  },
  {
    ru: 'Он попросил, чтобы она перезвонила.',
    tl: 'On poprosil, chtoby ona perezvo nila.',
    es: 'Le pidió que lo llamara de vuelta.',
  },
  {
    ru: 'Я бы хотела чашку чая, пожалуйста.',
    tl: 'Ya by khotela chashku chaya, pozhaluysta.',
    es: 'Quisiera una taza de té, por favor.',
  },
];

export default function SubjuntivoC1Exercise() {
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
          🔮 Condicional y Subjuntivo Ruso
        </h2>
        <p className="text-htb-text-dim">
          El ruso usa{' '}
          <span className="text-htb-green font-bold">
            если бы + pasado + бы
          </span>{' '}
          para condiciones irreales. Para deseos/mandatos indirectos:{' '}
          <span className="text-htb-green font-bold">чтобы + pasado</span>. No
          hay modo subjuntivo propiamente dicho.
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
              Tipos de Condicional / Estructuras con чтобы
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
                    Estructura
                  </th>
                  <th className="text-left py-2 px-3 text-white">Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                {table.map((r, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-3 text-blue-400 font-bold text-xs">
                      {r.tipo}
                    </td>
                    <td className="py-2 px-3 text-htb-green text-xs">
                      {r.est}
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
