import React, { useState } from 'react';

const reference = [
  {
    title: 'что — que (declarativas)',
    items: [
      'Я знаю, что он дома. — Sé que él está en casa.',
      'Она сказала, что устала. — Dijo que estaba cansada.',
      'Coma obligatoria antes de что en subordinadas.',
    ],
  },
  {
    title: 'чтобы — para que / que (volitivas)',
    items: [
      'Mismo sujeto → чтобы + Inf.: Я пришёл, чтобы помочь.',
      'Distinto sujeto → чтобы + Pasado: Я хочу, чтобы ты пришёл.',
      'Она учится, чтобы получить работу.',
    ],
  },
  {
    title: 'потому что / так как — porque',
    items: [
      'Я остался дома, потому что был болен. — Me quedé porque estaba enfermo.',
      'Так как уже поздно, мы уходим. — Como ya es tarde, nos vamos.',
      'потому что → al final; так как → al principio o en el medio.',
    ],
  },
  {
    title: 'хотя / несмотря на то что — aunque',
    items: [
      'Хотя было холодно, мы гуляли. — Aunque hacía frío, paseamos.',
      'Несмотря на то что он устал, он работал. — A pesar de que estaba cansado, trabajó.',
    ],
  },
  {
    title: 'если — si (condicional real) / как только — en cuanto',
    items: [
      'Если ты придёшь, мы поговорим. — Si vienes, hablaremos.',
      'Если + Present/Fut., [то] + Fut./Imper. → condición real.',
      'Как только он придёт, начнём. — En cuanto llegue, empezamos.',
    ],
  },
  {
    title: 'когда / пока / после того как',
    items: [
      'Когда я читаю, я слушаю музыку. — Cuando leo, escucho música.',
      'Пока я работал, она готовила. — Mientras yo trabajaba, ella cocinaba.',
      'После того как он ушёл, мы поговорили. — Después de que se fue, hablamos.',
    ],
  },
];

const quiz = [
  {
    id: 'q1',
    p: '"Я хочу, чтобы ты пришёл" — el verbo de la subordinada está en:',
    o: ['infinitivo', 'futuro', 'pasado', 'presente'],
    c: 'pasado',
  },
  {
    id: 'q2',
    p: '¿Cuándo se usa "так как" en lugar de "потому что"?',
    o: [
      'sólo al final',
      'al principio o en el medio de la oración',
      'son siempre intercambiables',
      'sólo en preguntas',
    ],
    c: 'al principio o en el medio de la oración',
  },
  {
    id: 'q3',
    p: '"Хотя" equivale a:',
    o: ['porque', 'si', 'aunque', 'cuando'],
    c: 'aunque',
  },
  {
    id: 'q4',
    p: '"Я пришёл, чтобы помочь" — mismo sujeto → чтобы + ___',
    o: ['pasado', 'infinitivo', 'presente', 'futuro'],
    c: 'infinitivo',
  },
  {
    id: 'q5',
    p: '"Если ты придёшь, мы поговорим" es una condición:',
    o: [
      'irreal (hipotética)',
      'real (posible en el futuro)',
      'habitual',
      'negada',
    ],
    c: 'real (posible en el futuro)',
  },
  {
    id: 'q6',
    p: '"Пока" en "Пока я работал, она готовила" significa:',
    o: ['antes de que', 'después de que', 'mientras', 'en cuanto'],
    c: 'mientras',
  },
  {
    id: 'q7',
    p: '"Она сказала, что устала" — ¿qué introduce la subordinada?',
    o: ['чтобы', 'что', 'если', 'когда'],
    c: 'что',
  },
  {
    id: 'q8',
    p: '"Как только он придёт, начнём" equivale a:',
    o: [
      'si viene',
      'en cuanto llegue',
      'mientras llegue',
      'antes de que llegue',
    ],
    c: 'en cuanto llegue',
  },
  {
    id: 'q9',
    p: '"Несмотря на то что" significa:',
    o: ['porque', 'cuando', 'a pesar de que', 'para que'],
    c: 'a pesar de que',
  },
  {
    id: 'q10',
    p: 'Ante la conjunción subordinada rusa, la coma es:',
    o: [
      'opcional si es corta',
      'siempre obligatoria',
      'nunca necesaria',
      'sólo después del verbo',
    ],
    c: 'siempre obligatoria',
  },
];

export default function SubordinadasB2Exercise() {
  const [tab, setTab] = useState('referencia');
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
          🔗 Oraciones Subordinadas B2 (Придаточные предложения)
        </h2>
        <p className="text-htb-text-dim">
          Conjunciones clave:{' '}
          <span className="text-htb-green font-bold">что</span> (que) ·{' '}
          <span className="text-blue-400 font-bold">чтобы</span> (para que) ·{' '}
          <span className="text-yellow-400 font-bold">потому что</span> (porque)
          · <span className="text-red-400 font-bold">хотя</span> (aunque) ·{' '}
          <span className="text-purple-400 font-bold">если</span> (si/condición
          real).
        </p>
      </div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {[
          ['referencia', '📚 Referencia'],
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
          {reference.map((sec, i) => (
            <div
              key={i}
              className="bg-htb-card rounded-lg border border-gray-800 p-4"
            >
              <h3 className="text-htb-green font-bold mb-3">{sec.title}</h3>
              <ul className="space-y-2">
                {sec.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm">
                    <span className="text-htb-green mt-0.5">▸</span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
