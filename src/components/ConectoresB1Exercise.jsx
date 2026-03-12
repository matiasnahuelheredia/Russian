import React, { useState } from 'react';

const quiz = [
  {
    id: 'q1',
    p: '"Я устал, _____ хочу отдохнуть." — ¿conector?',
    o: ['потому что', 'поэтому', 'хотя', 'если'],
    c: 'поэтому',
  },
  {
    id: 'q2',
    p: '"_____ он устал, он продолжал работать." — ¿conector?',
    o: ['Потому что', 'Поэтому', 'Хотя', 'Когда'],
    c: 'Хотя',
  },
  {
    id: 'q3',
    p: '"Я приду, _____ ты позвонишь." — ¿conector?',
    o: ['когда', 'хотя', 'поэтому', 'зато'],
    c: 'когда',
  },
  {
    id: 'q4',
    p: '"Он не богат, _____ очень счастлив." — ¿conector (compensación)?',
    o: ['хотя', 'зато', 'потому что', 'если'],
    c: 'зато',
  },
  {
    id: 'q5',
    p: '"Я не пошёл, _____ был болен." — ¿conector (causa)?',
    o: ['поэтому', 'зато', 'потому что', 'хотя'],
    c: 'потому что',
  },
  {
    id: 'q6',
    p: '"_____ я ни старался, ничего не вышло." — ¿conector?',
    o: ['Хотя', 'Как ни', 'Если', 'Зато'],
    c: 'Как ни',
  },
  {
    id: 'q7',
    p: '"Кроме того" equivale a:',
    o: ['sin embargo', 'además', 'porque', 'aunque'],
    c: 'además',
  },
  {
    id: 'q8',
    p: '"Несмотря на усталость, он продолжал." — "несмотря на" es:',
    o: ['a pesar de', 'gracias a', 'debido a', 'antes de'],
    c: 'a pesar de',
  },
  {
    id: 'q9',
    p: '"Как только она пришла, мы начали." — ¿qué expresa "как только"?',
    o: [
      'En cuanto / Tan pronto como',
      'Mientras',
      'A pesar de que',
      'Después de que mucho tiempo',
    ],
    c: 'En cuanto / Tan pronto como',
  },
  {
    id: 'q10',
    p: '"Следовательно" equivale a:',
    o: ['además', 'sin embargo', 'por lo tanto', 'a pesar de'],
    c: 'por lo tanto',
  },
];

const conectores = [
  {
    cat: 'Causa',
    w: 'потому что, так как, ведь',
    es: 'porque, ya que, pues',
    ej: 'Я устал, потому что много работал.',
  },
  {
    cat: 'Consecuencia',
    w: 'поэтому, следовательно, значит',
    es: 'por eso, por lo tanto',
    ej: 'Он устал, поэтому лёг спать.',
  },
  {
    cat: 'Contraste/Concesión',
    w: 'хотя, несмотря на то что, однако',
    es: 'aunque, a pesar de que, sin embargo',
    ej: 'Хотя он устал, он работал.',
  },
  {
    cat: 'Compensación',
    w: 'зато',
    es: 'pero en cambio / pero al menos',
    ej: 'Он не богат, зато счастлив.',
  },
  {
    cat: 'Temporal',
    w: 'когда, пока, как только, после того как',
    es: 'cuando, mientras, en cuanto, después de que',
    ej: 'Как только он пришёл, мы начали.',
  },
  {
    cat: 'Adición',
    w: 'кроме того, к тому же, также',
    es: 'además, asimismo',
    ej: 'Кроме того, он умный.',
  },
  {
    cat: 'Condición',
    w: 'если, если бы, при условии что',
    es: 'si, con la condición de que',
    ej: 'Если я устану, я лягу.',
  },
];

const cards = [
  {
    ru: 'Я не пришёл, потому что заболел.',
    tl: 'Ya ne prishyol, potomu chto zabolel.',
    es: 'No vine porque me enfermé.',
  },
  {
    ru: 'Он устал, поэтому рано лёг спать.',
    tl: 'On ustal, poetomu rano lyog spatʼ.',
    es: 'Estaba cansado, por eso se acostó temprano.',
  },
  {
    ru: 'Хотя шёл дождь, мы пошли гулять.',
    tl: 'Khotya shyol dozhd, my poshli gulyatʼ.',
    es: 'Aunque llovía, salimos a pasear.',
  },
  {
    ru: 'Как только она придёт, мы начнём.',
    tl: 'Kak tolʼko ona pridyot, my nachnyom.',
    es: 'En cuanto ella llegue, empezaremos.',
  },
  {
    ru: 'Он бедный, зато добрый.',
    tl: 'On bednyy, zato dobryy.',
    es: 'Es pobre, pero en cambio es bondadoso.',
  },
  {
    ru: 'Несмотря на дождь, он вышел.',
    tl: 'Nesmotrya na dozhd, on vyshel.',
    es: 'A pesar de la lluvia, salió.',
  },
];

export default function ConectoresB1Exercise() {
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
          🔀 Conectores y Conjunciones B1
        </h2>
        <p className="text-htb-text-dim">
          Conectores esenciales para construir frases complejas: causa (потому
          что), consecuencia (поэтому), contraste (хотя), temporales (когда, как
          только) y más.
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
        <div className="space-y-2">
          {conectores.map((c, i) => (
            <div
              key={i}
              className="bg-htb-card rounded-lg border border-gray-800 p-4"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-yellow-400 text-xs font-bold">
                  {c.cat}
                </span>
              </div>
              <p className="text-htb-green font-bold">{c.w}</p>
              <p className="text-blue-300 text-sm">{c.es}</p>
              <p className="text-htb-text-dim text-xs mt-1 italic">{c.ej}</p>
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
                        Tu resp.: {ans[q.id] || '(sin responder)'}
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
