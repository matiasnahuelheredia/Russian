import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const quiz = [
  {
    id: 'q1',
    p: '"Читай каждый день!" — imperativo imperfectivo indica:',
    o: [
      'Haz esto una vez',
      'Haz esto habitualmente',
      'Termina de hacerlo',
      'Deja de hacerlo',
    ],
    c: 'Haz esto habitualmente',
  },
  {
    id: 'q2',
    p: '"Прочитай эту книгу!" — imperativo perfectivo indica:',
    o: [
      'Lee un poco',
      'Lee habitualmente',
      'Lee este libro entero (resultado)',
      'No leas',
    ],
    c: 'Lee este libro entero (resultado)',
  },
  {
    id: 'q3',
    p: '"Нужно читать больше." — ¿qué implica el imperfectivo?',
    o: [
      'Terminar de leer',
      'Hábito de leer más (proceso)',
      'Leer una vez',
      'Leer rápido',
    ],
    c: 'Hábito de leer más (proceso)',
  },
  {
    id: 'q4',
    p: '"Не читай этого!" — negativo imperfectivo significa:',
    o: [
      'No empieces a leer',
      'No termines de leer',
      'No leas (en general, hábito)',
      'Lee de otra manera',
    ],
    c: 'No leas (en general, hábito)',
  },
  {
    id: 'q5',
    p: '¿Cuál es el perfectivo de "писать"?',
    o: ['пописать', 'записать — dep. del contexto', 'написать', 'списать'],
    c: 'написать',
  },
  {
    id: 'q6',
    p: '"Он долго думал." — imperfectivo porque:',
    o: [
      'Pensó y terminó',
      'Expresa duración (dolgo=durante mucho tiempo)',
      'Es habitual',
      'Es secuencia',
    ],
    c: 'Expresa duración (dolgo=durante mucho tiempo)',
  },
  {
    id: 'q7',
    p: 'Con "начать" (comenzar) se usa el infinitivo:',
    o: ['perfectivo', 'imperfectivo', 'cualquiera', 'solo reflexivo'],
    c: 'imperfectivo',
  },
  {
    id: 'q8',
    p: '"Успеть + inf." (alcanzar a, lograr) usa el infinitivo:',
    o: ['imperfectivo', 'perfectivo', 'cualquiera', 'solo determinado'],
    c: 'perfectivo',
  },
  {
    id: 'q9',
    p: '"По-" como prefijo perfectivo da idea de:',
    o: [
      'Acción larga',
      'Acción un poco / por un rato',
      'Resultado permanente',
      'Inverso del verbo',
    ],
    c: 'Acción un poco / por un rato',
  },
  {
    id: 'q10',
    p: '"Я забыл купить хлеб." — "купить" es perfectivo porque:',
    o: [
      'Es habitual',
      'Es una acción concreta que había que completar',
      'Es proceso',
      'Es imperativo',
    ],
    c: 'Es una acción concreta que había que completar',
  },
];

const contextos = [
  {
    ctx: 'Con "всегда/часто/каждый день" (hábito)',
    asp: 'Imperfectivo',
    ej: 'Я всегда читаю газету.',
    t: 'Siempre leo el periódico.',
  },
  {
    ctx: 'Con "долго/весь день" (duración)',
    asp: 'Imperfectivo',
    ej: 'Она долго ждала.',
    t: 'Ella esperó mucho tiempo.',
  },
  {
    ctx: 'Con "наконец/уже" (resultado)',
    asp: 'Perfectivo',
    ej: 'Наконец он написал.',
    t: 'Por fin escribió.',
  },
  {
    ctx: 'Con "начать/кончить/продолжать"',
    asp: 'Imperfectivo',
    ej: 'Начал читать.',
    t: 'Empezó a leer.',
  },
  {
    ctx: 'Con "успеть/забыть/отказаться"',
    asp: 'Perfectivo',
    ej: 'Успел купить.',
    t: 'Alcanzó a comprar.',
  },
  {
    ctx: 'Imperativo de hábito/proceso',
    asp: 'Imperfectivo',
    ej: 'Читай каждый день!',
    t: '¡Lee todos los días!',
  },
  {
    ctx: 'Imperativo de resultado/tarea',
    asp: 'Perfectivo',
    ej: 'Прочитай это!',
    t: '¡Lee esto (entero)!',
  },
];

const cards = [
  {
    ru: 'Читай каждый день! (НСВ)',
    tl: 'Chitay kazhdyy denʼ!',
    es: '¡Lee todos los días! (hábito)',
  },
  {
    ru: 'Прочитай эту статью. (СВ)',
    tl: 'Prochitay etu statyu.',
    es: '¡Lee este artículo (entero)!',
  },
  {
    ru: 'Она начала петь.',
    tl: 'Ona nachala petʼ.',
    es: 'Ella empezó a cantar. (НСВ tras начать)',
  },
  {
    ru: 'Он наконец позвонил.',
    tl: 'On nakonets pozvonil.',
    es: 'Por fin llamó. (СВ, resultado)',
  },
  {
    ru: 'Я долго думал.',
    tl: 'Ya dolgo dumal.',
    es: 'Pensé durante mucho tiempo. (НСВ, duración)',
  },
  {
    ru: 'Не забудь купить хлеб!',
    tl: 'Ne zabudʼ kupitʼ khlyeb!',
    es: '¡No olvides comprar pan!',
  },
];

export default function VerbAspectosB2Exercise() {
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
          ⚡ Aspectos Verbales B2
        </h2>
        <p className="text-htb-text-dim">
          Dominio de los aspectos en el{' '}
          <span className="text-htb-green font-bold">
            imperativo, con verbos modales, con начать/кончить, y según el
            contexto temporal
          </span>
          . Clave para hablar ruso con naturalidad.
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
                Contextos y Aspectos
              </h3>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 bg-htb-sidebar/50 text-xs">
                  <th className="text-left py-2 px-3 text-htb-text-dim">
                    Contexto
                  </th>
                  <th className="text-left py-2 px-3 text-htb-green">
                    Aspecto
                  </th>
                  <th className="text-left py-2 px-3 text-white">Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                {contextos.map((c, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-3 text-htb-text-dim text-xs">
                      {c.ctx}
                    </td>
                    <td
                      className={`py-2 px-3 font-bold text-sm ${c.asp === 'Imperfectivo' ? 'text-blue-400' : 'text-htb-green'}`}
                    >
                      <SpeakableText text={c.asp} />
                    </td>
                    <td className="py-2 px-3">
                      <p className="text-white text-sm"><SpeakableText text={c.ej} /></p>
                      <p className="text-htb-text-dim text-xs">{c.t}</p>
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
