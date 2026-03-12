import React, { useState } from 'react';

const quiz = [
  {
    id: 'q1',
    p: '"Он ничего не сказал." — La negación doble en ruso es:',
    o: [
      'un error gramatical',
      'obligatoria y correcta',
      'opcional',
      'solo en coloquial',
    ],
    c: 'obligatoria y correcta',
  },
  {
    id: 'q2',
    p: '"Я никого не видел." — ¿Qué caso tiene "никого"?',
    o: ['Nominativo', 'Genitivo (de никто)', 'Dativo', 'Acusativo de persona'],
    c: 'Genitivo (de никто)',
  },
  {
    id: 'q3',
    p: '"Ни...ни" equivale a:',
    o: ['o...o', 'ni...ni', 'ya...ya', 'либо...либо'],
    c: 'ni...ni',
  },
  {
    id: 'q4',
    p: '"Нигде" significa:',
    o: [
      'en ningún lugar',
      'en algún lugar',
      'en cualquier lugar',
      'en otro lugar',
    ],
    c: 'en ningún lugar',
  },
  {
    id: 'q5',
    p: '"Никто не пришёл." — En ruso es correcto porque:',
    o: [
      'solo hay una negación',
      'la doble negación es obligatoria en ruso',
      'никто no es real negación',
      'пришёл es positivo',
    ],
    c: 'la doble negación es obligatoria en ruso',
  },
  {
    id: 'q6',
    p: '"Ни тот, ни другой не подходят." — ¿Qué expresa?',
    o: [
      'uno de los dos sirve',
      'ninguno de los dos sirve',
      'ambos sirven',
      'uno sirve más',
    ],
    c: 'ninguno de los dos sirve',
  },
  {
    id: 'q7',
    p: '"Он нисколько не устал." — "нисколько не" refuerza:',
    o: [
      'poco cansado',
      'bastante cansado',
      'nada (en absoluto) cansado',
      'muy cansado',
    ],
    c: 'nada (en absoluto) cansado',
  },
  {
    id: 'q8',
    p: '"Никак не могу решить." — "никак" significa:',
    o: [
      'de alguna manera',
      'de ninguna manera',
      'de cualquier manera',
      'de otra manera',
    ],
    c: 'de ninguna manera',
  },
  {
    id: 'q9',
    p: '"Ни разу не был в Москве." — "ни разу" significa:',
    o: ['pocas veces', 'una sola vez', 'ni una sola vez', 'muchas veces'],
    c: 'ni una sola vez',
  },
  {
    id: 'q10',
    p: '¿Cuál es la negación de "кто-то" (alguien)?',
    o: ['не кто', 'никто', 'нет кто', 'нигде'],
    c: 'никто',
  },
];

const neg = [
  {
    pos: 'кто-то (alguien)',
    neg: 'никто (nadie)',
    ej: 'Никто не знает. (Nadie sabe.)',
  },
  {
    pos: 'что-то (algo)',
    neg: 'ничто/ничего (nada)',
    ej: 'Он ничего не сказал. (No dijo nada.)',
  },
  {
    pos: 'где-то (en algún lugar)',
    neg: 'нигде (en ningún lugar)',
    ej: 'Нигде не нашёл. (No lo encontré en ningún lugar.)',
  },
  {
    pos: 'куда-то (a algún lugar)',
    neg: 'никуда (a ningún lugar)',
    ej: 'Никуда не пошёл. (No fue a ningún lugar.)',
  },
  {
    pos: 'когда-то (alguna vez)',
    neg: 'никогда (nunca)',
    ej: 'Никогда не видел этого. (Nunca vi eso.)',
  },
  {
    pos: 'как-то (de alguna manera)',
    neg: 'никак (de ninguna manera)',
    ej: 'Никак не могу. (De ninguna manera puedo.)',
  },
  {
    pos: '(ни...ни)',
    neg: 'ни...ни (ni...ni)',
    ej: 'Ни он, ни она не пришли. (Ni él ni ella vino.)',
  },
];

const cards = [
  {
    ru: 'Никто ничего не знает.',
    tl: 'Nikto nichego ne znayет.',
    es: 'Nadie sabe nada. (doble negación obligatoria)',
  },
  {
    ru: 'Я никогда не был в России.',
    tl: 'Ya nikogda ne byl v Rossii.',
    es: 'Nunca he estado en Rusia.',
  },
  {
    ru: 'Ни ты, ни я не виноваты.',
    tl: 'Ni ty, ni ya ne vinovaty.',
    es: 'Ni tú ni yo somos culpables.',
  },
  {
    ru: 'Нигде нет свободных мест.',
    tl: 'Nigde net svobodnykh mest.',
    es: 'No hay asientos libres en ningún lugar.',
  },
  {
    ru: 'Он нисколько не сожалеет.',
    tl: 'On niskolʼko ne sozhaleyет.',
    es: 'No se arrepiente en absoluto.',
  },
  {
    ru: 'Я никуда не хочу идти.',
    tl: 'Ya nikuda ne khochu idti.',
    es: 'No quiero ir a ningún lado.',
  },
];

export default function NegacionAvanzadaC1Exercise() {
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
          🚫 Negación Avanzada (Расширенное отрицание)
        </h2>
        <p className="text-htb-text-dim">
          En ruso la{' '}
          <span className="text-htb-green font-bold">
            doble negación es obligatoria
          </span>
          : "никто не" (nadie no). Las palabras ni- (никто, ничего, нигде,
          никуда, никогда) siempre aparecen con "не" en el verbo.
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
              Palabras Negativas: Positivo → Negativo
            </h3>
          </div>
          {neg.map((r, i) => (
            <div
              key={i}
              className={`py-2 px-4 border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
            >
              <div className="flex items-start gap-4 flex-wrap">
                <span className="text-htb-text-dim text-sm w-40">{r.pos}</span>
                <span className="text-red-400 font-bold">→ {r.neg}</span>
              </div>
              <p className="text-htb-text-dim text-xs mt-1">{r.ej}</p>
            </div>
          ))}
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
