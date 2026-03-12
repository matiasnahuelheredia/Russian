import React, { useState } from 'react';

const quiz = [
  {
    id: 'q1',
    p: '"Читать" (1ª conj.) — ¿1ª persona singular presente?',
    o: ['читаю', 'читею', 'читию', 'читаешь'],
    c: 'читаю',
  },
  {
    id: 'q2',
    p: '"Говорить" (2ª conj.) — ¿3ª persona plural presente?',
    o: ['говорят', 'говорют', 'говорит', 'говорите'],
    c: 'говорят',
  },
  {
    id: 'q3',
    p: '"Хотеть" es irregular. ¿Forma de "он"?',
    o: ['хотит', 'хочет', 'хотет', 'хочит'],
    c: 'хочет',
  },
  {
    id: 'q4',
    p: '"Писать" → ¿1ª persona singular? (con alteración consonántica)',
    o: ['писаю', 'пишу', 'писью', 'пишаю'],
    c: 'пишу',
  },
  {
    id: 'q5',
    p: 'Los verbos de la 2ª conjugación terminados en -ить/-еть hacen el plural en:',
    o: ['-ают/-яют', '-ут/-ют', '-ят/-ат', '-ет/-ёт'],
    c: '-ят/-ат',
  },
  {
    id: 'q6',
    p: '"Мыться" (lavarse) — ¿1ª persona singular?',
    o: ['мыться', 'мыюсь', 'моюсь', 'моюся'],
    c: 'моюсь',
  },
  {
    id: 'q7',
    p: '"Идти" presente — ¿3ª persona singular?',
    o: ['идёт', 'идит', 'идёт — correcto', 'иду'],
    c: 'идёт',
  },
  {
    id: 'q8',
    p: 'Regla ortográfica: después de ж/ш/ч/щ se escribe:',
    o: ['ю (no у)', 'у (no ю)', 'ё (no е)', 'о (no а)'],
    c: 'у (no ю)',
  },
  {
    id: 'q9',
    p: '"Жить" (vivir) — ¿1ª persona singular?',
    o: ['живу', 'жию', 'жить', 'живю'],
    c: 'живу',
  },
  {
    id: 'q10',
    p: 'Los reflexivos forman el presente añadiendo:',
    o: [
      '-ся/-сь al infinitivo',
      '-ся tras consonante y -сь tras vocal al presente',
      '-ся siempre',
      '-сь siempre',
    ],
    c: '-ся tras consonante y -сь tras vocal al presente',
  },
];

const conj1 = [
  { p: 'я', читать: 'читаю', писать: 'пишу' },
  { p: 'ты', читать: 'читаешь', писать: 'пишешь' },
  { p: 'он/она', читать: 'читает', писать: 'пишет' },
  { p: 'мы', читать: 'читаем', писать: 'пишем' },
  { p: 'вы', читать: 'читаете', писать: 'пишете' },
  { p: 'они', читать: 'читают', писать: 'пишут' },
];

const conj2 = [
  { p: 'я', говорить: 'говорю', любить: 'люблю' },
  { p: 'ты', говорить: 'говоришь', любить: 'любишь' },
  { p: 'он/она', говорить: 'говорит', любить: 'любит' },
  { p: 'мы', говорить: 'говорим', любить: 'любим' },
  { p: 'вы', говорить: 'говорите', любить: 'любите' },
  { p: 'они', говорить: 'говорят', любить: 'любят' },
];

const irr = [
  { v: 'хотеть', forms: 'хочу, хочешь, хочет / хотим, хотите, хотят' },
  { v: 'есть (omer)', forms: 'ем, ешь, ест / едим, едите, едят' },
  { v: 'дать', forms: '(future perf.) дам, дашь, даст / дадим, дадите, дадут' },
  { v: 'идти', forms: 'иду, идёшь, идёт / идём, идёте, идут' },
  { v: 'ехать', forms: 'еду, едешь, едет / едем, едете, едут' },
];

const cards = [
  {
    ru: 'Я читаю книгу.',
    tl: 'Ya chitayu knigu.',
    es: 'Estoy leyendo el libro. (1ª conj.)',
  },
  {
    ru: 'Они говорят по-русски.',
    tl: 'Oni govoryat po-russki.',
    es: 'Ellos hablan ruso. (2ª conj.)',
  },
  {
    ru: 'Он хочет есть.',
    tl: 'On khochet yestʼ.',
    es: 'Él quiere comer. (irregular)',
  },
  {
    ru: 'Я пишу письмо.',
    tl: 'Ya pishu pisʼmo.',
    es: 'Escribo una carta. (alternación п→пш)',
  },
  { ru: 'Мы моемся.', tl: 'My moyemsya.', es: 'Nos lavamos. (reflexivo)' },
  {
    ru: 'Ты любишь музыку?',
    tl: 'Ty lyubish muziku?',
    es: '¿Te gusta la música? (2ª conj.)',
  },
];

export default function PresenteTenseB2Exercise() {
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
          ⚙️ Presente en Ruso (Настоящее время)
        </h2>
        <p className="text-htb-text-dim">
          El presente ruso tiene{' '}
          <span className="text-htb-green font-bold">dos conjugaciones</span>.
          La 1ª usa -ю/-у, -ешь/-ёшь; la 2ª usa -ю/-у, -ишь. Solo verbos
          imperfectivos tienen presente.
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
                  1ª Conjugación (-ать/-ять)
                </h3>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700 text-xs bg-htb-sidebar/50">
                    <th className="py-1.5 px-3 text-htb-text-dim text-left">
                      Persona
                    </th>
                    <th className="py-1.5 px-3 text-htb-green text-left">
                      читать
                    </th>
                    <th className="py-1.5 px-3 text-blue-400 text-left">
                      писать
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {conj1.map((r, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-1.5 px-3 text-htb-text-dim">{r.p}</td>
                      <td className="py-1.5 px-3 text-htb-green font-bold">
                        {r.читать}
                      </td>
                      <td className="py-1.5 px-3 text-blue-400 font-bold">
                        {r.писать}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                <h3 className="text-htb-green font-semibold">
                  2ª Conjugación (-ить/-еть)
                </h3>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700 text-xs bg-htb-sidebar/50">
                    <th className="py-1.5 px-3 text-htb-text-dim text-left">
                      Persona
                    </th>
                    <th className="py-1.5 px-3 text-htb-green text-left">
                      говорить
                    </th>
                    <th className="py-1.5 px-3 text-blue-400 text-left">
                      любить
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {conj2.map((r, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-1.5 px-3 text-htb-text-dim">{r.p}</td>
                      <td className="py-1.5 px-3 text-htb-green font-bold">
                        {r.говорить}
                      </td>
                      <td className="py-1.5 px-3 text-blue-400 font-bold">
                        {r.любить}
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
                Verbos Irregulares
              </h3>
            </div>
            {irr.map((v, i) => (
              <div
                key={i}
                className={`py-2 px-4 border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
              >
                <span className="text-htb-green font-bold mr-2">{v.v}</span>
                <span className="text-white text-sm">{v.forms}</span>
              </div>
            ))}
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
