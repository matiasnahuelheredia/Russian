import React, { useState } from 'react';

const quiz = [
  {
    id: 'q1',
    p: '"Идти" vs "ходить" — ¿cuál es DETERMINADO (una dirección concreta)?',
    o: ['ходить', 'идти', 'ambos', 'ninguno'],
    c: 'идти',
  },
  {
    id: 'q2',
    p: '"Каждый день я хожу в школу." — "хожу" porque:',
    o: [
      'Es determinado: dirección concreta',
      'Es indeterminado: hábito repetido',
      'Es perfectivo',
      'Es pasado',
    ],
    c: 'Es indeterminado: hábito repetido',
  },
  {
    id: 'q3',
    p: '"Он едет в Москву." — ¿qué verbo es?',
    o: ['ездить (indeterminado)', 'ехать (determinado)', 'идти', 'ходить'],
    c: 'ехать (determinado)',
  },
  {
    id: 'q4',
    p: '¿Prefijado de "идти" que significa "llegar" (perf.)?',
    o: ['уйти', 'войти', 'прийти', 'выйти'],
    c: 'прийти',
  },
  {
    id: 'q5',
    p: '"Птицы летят на юг." — ¿qué expresa "летят"?',
    o: [
      'Vuelo habitual (indeterminado)',
      'Vuelo concreto ahora/en esta dirección (determinado)',
      'Vuelo pasado',
      'Vuelo perfecto',
    ],
    c: 'Vuelo concreto ahora/en esta dirección (determinado)',
  },
  {
    id: 'q6',
    p: '¿Parejo indeterminado de "лететь"?',
    o: ['полететь', 'пролетать', 'летать', 'лётывать'],
    c: 'летать',
  },
  {
    id: 'q7',
    p: '"Он вошёл в комнату." — "вошёл" es de:',
    o: [
      'ходить (prefijado)',
      'идти → войти (prefijado)',
      'ездить (prefijado)',
      'ехать (prefijado)',
    ],
    c: 'идти → войти (prefijado)',
  },
  {
    id: 'q8',
    p: '¿Cuál es el prefijo que indica "alejarse de un punto"?',
    o: ['при-', 'вы-', 'у-', 'под-'],
    c: 'у-',
  },
  {
    id: 'q9',
    p: '"Она бегает по утрам." — "бегает" es:',
    o: [
      'determinado — corre ahora',
      'indeterminado — costumbre',
      'perfectivo',
      'futuro',
    ],
    c: 'indeterminado — costumbre',
  },
  {
    id: 'q10',
    p: '"Зайди в магазин!" — "зайди" (de зайти) significa:',
    o: [
      'Sal de la tienda',
      'Entra en la tienda (de paso)',
      'Corre hacia la tienda',
      'Pasa por encima de la tienda',
    ],
    c: 'Entra en la tienda (de paso)',
  },
];

const pares = [
  { det: 'идти', indet: 'ходить', t: 'ir a pie' },
  { det: 'ехать', indet: 'ездить', t: 'ir en vehículo' },
  { det: 'лететь', indet: 'летать', t: 'volar' },
  { det: 'плыть', indet: 'плавать', t: 'nadar/navegar' },
  { det: 'нести', indet: 'носить', t: 'llevar (a pie)' },
  { det: 'везти', indet: 'возить', t: 'llevar (en vehículo)' },
  { det: 'бежать', indet: 'бегать', t: 'correr' },
];

const prefijos = [
  { pref: 'при-', sig: 'llegar', ej: 'прийти, приехать' },
  { pref: 'у-', sig: 'alejarse, ir de', ej: 'уйти, уехать' },
  { pref: 'вы-', sig: 'salir de', ej: 'выйти, выехать' },
  { pref: 'в-/во-', sig: 'entrar en', ej: 'войти, въехать' },
  { pref: 'под-', sig: 'acercarse a', ej: 'подойти, подъехать' },
  { pref: 'за-', sig: 'pasar por, entrar de paso', ej: 'зайти, заехать' },
  { pref: 'пере-', sig: 'cruzar', ej: 'перейти, переехать' },
  { pref: 'про-', sig: 'pasar por', ej: 'пройти, проехать' },
];

const cards = [
  {
    ru: 'Я иду в школу.',
    tl: 'Ya idu v shkolu.',
    es: 'Voy a la escuela (ahora, esta dirección).',
  },
  {
    ru: 'Я хожу в школу каждый день.',
    tl: 'Ya khozhu v shkolu kazhdyy denʼ.',
    es: 'Voy a la escuela todos los días.',
  },
  {
    ru: 'Он приехал из Москвы.',
    tl: 'On priyekhal iz Moskvy.',
    es: 'Llegó de Moscú (en vehículo).',
  },
  {
    ru: 'Войдите, пожалуйста!',
    tl: 'Voydite, pozhaluysta!',
    es: '¡Pasen, por favor!',
  },
  {
    ru: 'Птицы летят на юг.',
    tl: 'Ptitsy letyat na yug.',
    es: 'Los pájaros vuelan hacia el sur.',
  },
  { ru: 'Зайди ко мне!', tl: 'Zaydi ko mne!', es: '¡Pásate por mi casa!' },
];

export default function VerbosMovimientoB2Exercise() {
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
          🚶 Verbos de Movimiento
        </h2>
        <p className="text-htb-text-dim">
          Los verbos de movimiento rusos tienen dos formas:{' '}
          <span className="text-htb-green font-bold">determinado</span>{' '}
          (dirección concreta, un viaje) e{' '}
          <span className="text-blue-400 font-bold">indeterminado</span>{' '}
          (hábito, varias direcciones). Con prefijo se vuelven perfectivos.
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
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                <h3 className="text-htb-green font-semibold">
                  Pares Determinado / Indeterminado
                </h3>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50 text-xs">
                    <th className="text-left py-2 px-3 text-htb-green">
                      Determinado
                    </th>
                    <th className="text-left py-2 px-3 text-blue-400">
                      Indeterminado
                    </th>
                    <th className="text-left py-2 px-3 text-white">
                      Significa
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pares.map((p, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-1.5 px-3 text-htb-green font-bold">
                        {p.det}
                      </td>
                      <td className="py-1.5 px-3 text-blue-400 font-bold">
                        {p.indet}
                      </td>
                      <td className="py-1.5 px-3 text-htb-text-dim text-xs">
                        {p.t}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                <h3 className="text-htb-green font-semibold">
                  Prefijos de Movimiento
                </h3>
              </div>
              {prefijos.map((p, i) => (
                <div
                  key={i}
                  className={`py-2 px-4 border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                >
                  <span className="text-htb-green font-bold mr-2">
                    {p.pref}
                  </span>
                  <span className="text-white text-sm">{p.sig}</span>
                  <p className="text-htb-text-dim text-xs">{p.ej}</p>
                </div>
              ))}
            </div>
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
                <p className="text-2xl text-htb-green font-bold mb-2 text-center">
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
