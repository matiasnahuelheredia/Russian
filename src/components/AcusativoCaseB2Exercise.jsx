import React, { useState } from 'react';

const quiz = [
  {
    id: 'q1',
    p: '"Я вижу дом." — "дом" está en acusativo porque:',
    o: ['Es sujeto', 'Es objeto directo', 'Hay negación', 'Va con preposición'],
    c: 'Es objeto directo',
  },
  {
    id: 'q2',
    p: '¿Acusativo de "сестра" (objeto directo)?',
    o: ['сестры', 'сестру', 'сестре', 'сестрой'],
    c: 'сестру',
  },
  {
    id: 'q3',
    p: 'Para sustantivos masculinos INANIMADOS, el acusativo es igual al:',
    o: ['Genitivo', 'Dativo', 'Nominativo', 'Instrumental'],
    c: 'Nominativo',
  },
  {
    id: 'q4',
    p: 'Para sustantivos masculinos ANIMADOS, el acusativo es igual al:',
    o: ['Nominativo', 'Dativo', 'Prepositivo', 'Genitivo'],
    c: 'Genitivo',
  },
  {
    id: 'q5',
    p: '"Я иду в магазин." — "в + acusativo" indica:',
    o: [
      'Ubicación (estar en)',
      'Dirección (ir hacia)',
      'Compañía',
      'Instrumento',
    ],
    c: 'Dirección (ir hacia)',
  },
  {
    id: 'q6',
    p: '¿Acusativo de "брат" (objeto directo animado)?',
    o: ['брат', 'брату', 'брата', 'братом'],
    c: 'брата',
  },
  {
    id: 'q7',
    p: '"Через неделю" significa:',
    o: [
      'Hace una semana',
      'En/dentro de una semana',
      'Durante una semana',
      'Desde hace una semana',
    ],
    c: 'En/dentro de una semana',
  },
  {
    id: 'q8',
    p: '¿Acusativo de "книга"?',
    o: ['книги', 'книге', 'книгу', 'книгой'],
    c: 'книгу',
  },
  {
    id: 'q9',
    p: '"Я люблю русский язык." — "русский язык" está en:',
    o: ['Nominativo', 'Instrumental', 'Acusativo', 'Prepositivo'],
    c: 'Acusativo',
  },
  {
    id: 'q10',
    p: 'Para sustantivos neutros, el acusativo es igual al:',
    o: ['Genitivo', 'Dativo', 'Nominativo', 'Instrumental'],
    c: 'Nominativo',
  },
];

const reglas = [
  { tipo: 'Fem. -а → -у', nom: 'женщина', ac: 'женщину', anim: '—' },
  { tipo: 'Fem. -я → -ю', nom: 'неделя', ac: 'неделю', anim: '—' },
  { tipo: 'Masc. inanimate = Nom.', nom: 'стол', ac: 'стол', anim: 'inanim.' },
  { tipo: 'Masc. animate = Gen.', nom: 'брат', ac: 'брата', anim: 'anim.' },
  { tipo: 'Neutro = Nom.', nom: 'окно', ac: 'окно', anim: '—' },
  { tipo: 'Fem. -ь = Nom.', nom: 'ночь', ac: 'ночь', anim: '—' },
];

const preps = [
  {
    prep: 'в + Ac.',
    uso: 'dirección: ir a',
    ej: 'Я иду в магазин.',
    t: 'Voy a la tienda.',
  },
  {
    prep: 'на + Ac.',
    uso: 'dirección: ir a (superficie/evento)',
    ej: 'Идём на концерт!',
    t: '¡Vamos al concierto!',
  },
  {
    prep: 'через + Ac.',
    uso: 'a través de / dentro de (tiempo)',
    ej: 'Через час.',
    t: 'En una hora.',
  },
  {
    prep: 'за + Ac.',
    uso: 'detrás de (movimiento)',
    ej: 'Он ушёл за угол.',
    t: 'Se fue detrás de la esquina.',
  },
  {
    prep: 'про + Ac.',
    uso: 'sobre / acerca de',
    ej: 'Фильм про войну.',
    t: 'Película sobre la guerra.',
  },
];

const cards = [
  {
    ru: 'Я вижу брата.',
    tl: 'Ya vizhu brata.',
    es: 'Veo a mi hermano. (animate → gen.)',
  },
  {
    ru: 'Я читаю книгу.',
    tl: 'Ya chitayu knigu.',
    es: 'Estoy leyendo el libro.',
  },
  {
    ru: 'Он смотрит телевизор.',
    tl: 'On smotrit televizor.',
    es: 'Él ve la televisión. (inanimate → nom.)',
  },
  {
    ru: 'Мы идём в школу.',
    tl: 'My idyom v shkolu.',
    es: 'Vamos a la escuela. (dirección)',
  },
  { ru: 'Через час.', tl: 'Cherez chas.', es: 'En una hora.' },
  { ru: 'Я люблю маму.', tl: 'Ya lyublyu mamu.', es: 'Quiero a mamá.' },
];

export default function AcusativoCaseB2Exercise() {
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
          🎯 Caso Acusativo (Винительный падеж)
        </h2>
        <p className="text-htb-text-dim">
          El acusativo es el caso del{' '}
          <span className="text-htb-green font-bold">objeto directo</span>.
          Responde a кого? (¿a quién?) / что? (¿qué?). También aparece tras в/на
          para expresar dirección.
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
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Declinación Acusativo Singular
              </h3>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 bg-htb-sidebar/50 text-xs">
                  <th className="text-left py-2 px-3 text-htb-text-dim">
                    Tipo
                  </th>
                  <th className="text-left py-2 px-3 text-white">Nominativo</th>
                  <th className="text-left py-2 px-3 text-htb-green">
                    Acusativo
                  </th>
                  <th className="text-left py-2 px-3 text-htb-text-dim">
                    Nota
                  </th>
                </tr>
              </thead>
              <tbody>
                {reglas.map((r, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-3 text-htb-text-dim text-xs">
                      {r.tipo}
                    </td>
                    <td className="py-2 px-3 text-white font-bold">{r.nom}</td>
                    <td className="py-2 px-3 text-htb-green font-bold">
                      {r.ac}
                    </td>
                    <td className="py-2 px-3 text-htb-text-dim text-xs">
                      {r.anim}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Preposiciones + Acusativo
              </h3>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {preps.map((p, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-3 text-htb-green font-bold w-20">
                      {p.prep}
                    </td>
                    <td className="py-2 px-3 text-htb-text-dim text-xs">
                      {p.uso}
                    </td>
                    <td className="py-2 px-3 text-white">{p.ej}</td>
                    <td className="py-2 px-3 text-htb-text-dim italic text-xs">
                      {p.t}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-htb-sidebar rounded-lg border border-htb-green/30 p-4">
            <p className="text-htb-green font-semibold mb-1">
              💡 Animado vs Inanimado
            </p>
            <p className="text-htb-text-dim text-sm">
              Los sustantivos{' '}
              <span className="text-white">masculinos animados</span> (personas,
              animales) en acusativo = genitivo. Los{' '}
              <span className="text-white">inanimados</span> = nominativo. Para
              femeninos: siempre -у/-ю.
            </p>
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
          <p className="text-center text-htb-text-dim text-sm mb-4">
            {ff ? '🇷🇺 Ruso' : '🇪🇸 Español — clic para ver'}
          </p>
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
