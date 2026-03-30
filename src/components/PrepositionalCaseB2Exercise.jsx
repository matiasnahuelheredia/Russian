import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const quiz = [
  {
    id: 'q1',
    p: '"Я живу в Москве." — "в + prepositivo" indica:',
    o: ['Dirección', 'Instrumento', 'Ubicación (estar en)', 'Compañía'],
    c: 'Ubicación (estar en)',
  },
  {
    id: 'q2',
    p: '¿Prepositivo de "Москва"?',
    o: ['Москву', 'Москвой', 'Москве', 'Москвы'],
    c: 'Москве',
  },
  {
    id: 'q3',
    p: '"Говорить о друге" — "о + prepositivo" significa:',
    o: [
      'Hablar a un amigo',
      'Hablar sobre un amigo',
      'Hablar por un amigo',
      'Hablar sin un amigo',
    ],
    c: 'Hablar sobre un amigo',
  },
  {
    id: 'q4',
    p: '¿Prepositivo de "стол" (mesa)?',
    o: ['стола', 'столу', 'столе', 'столом'],
    c: 'столе',
  },
  {
    id: 'q5',
    p: '"На работе" vs "на работу" — ¿cuál indica ESTAR en el trabajo?',
    o: ['на работу', 'на работе', 'обе lo indican', 'ninguna'],
    c: 'на работе',
  },
  {
    id: 'q6',
    p: '¿Prepositivo de "лес" (bosque)? (forma especial con в)',
    o: ['лесе', 'лесу', 'леса', 'лесом'],
    c: 'лесу',
  },
  {
    id: 'q7',
    p: '"Об этом" — ¿cuándo se usa "об" en vez de "о"?',
    o: ['Ante consonante', 'Ante vocal', 'Siempre', 'Nunca'],
    c: 'Ante vocal',
  },
  {
    id: 'q8',
    p: '¿Prepositivo de "книга"?',
    o: ['книги', 'книгу', 'книгой', 'книге'],
    c: 'книге',
  },
  {
    id: 'q9',
    p: '"Думать о чём?" — ¿qué caso rige "о/об"?',
    o: ['Acusativo', 'Dativo', 'Prepositivo', 'Instrumental'],
    c: 'Prepositivo',
  },
  {
    id: 'q10',
    p: '"В прошлом году" (el año pasado) — "году" es prepositivo de:',
    o: [
      'год — forma regular',
      'год — forma especial locativa',
      'года — genitivo',
      'годом — instrumental',
    ],
    c: 'год — forma especial locativa',
  },
];

const usos = [
  {
    prep: 'в/на + Prep.',
    uso: 'ubicación (estar en)',
    ej: 'Я в школе. / Он на работе.',
    t: 'Estoy en la escuela. Él está en el trabajo.',
  },
  {
    prep: 'о/об + Prep.',
    uso: 'hablar/pensar sobre',
    ej: 'Говорить о путешествиях.',
    t: 'Hablar sobre viajes.',
  },
  {
    prep: 'при + Prep.',
    uso: 'en presencia de / en el período de',
    ej: 'При мне. / При Сталине.',
    t: 'En mi presencia. En tiempos de Stalin.',
  },
];

const decl = [
  { tipo: 'Masc. conson.', nom: 'стол', prep: 'столе' },
  { tipo: 'Masc. -й', nom: 'музей', prep: 'музее' },
  { tipo: 'Masc. -ь', nom: 'день', prep: 'дне' },
  { tipo: 'Fem. -а', nom: 'школа', prep: 'школе' },
  { tipo: 'Fem. -я', nom: 'неделя', prep: 'неделе' },
  { tipo: 'Fem. -ь', nom: 'ночь', prep: 'ночи' },
  { tipo: 'Neutro -о', nom: 'окно', prep: 'окне' },
  { tipo: 'Neutro -ие', nom: 'здание', prep: 'здании' },
];

const especiales = [
  { nom: 'лес', prep: 'в лесу', t: 'en el bosque' },
  { nom: 'год', prep: 'в году', t: 'en el año' },
  { nom: 'берег', prep: 'на берегу', t: 'en la orilla' },
  { nom: 'мост', prep: 'на мосту', t: 'en el puente' },
  { nom: 'глаз', prep: 'в глазу', t: 'en el ojo' },
];

const cards = [
  { ru: 'Я живу в Москве.', tl: 'Ya zhivu v Moskve.', es: 'Vivo en Moscú.' },
  {
    ru: 'Думать о работе.',
    tl: 'Dumatʼ o rabote.',
    es: 'Pensar en el trabajo.',
  },
  { ru: 'Он на работе.', tl: 'On na rabote.', es: 'Él está en el trabajo.' },
  {
    ru: 'Говорить об этом.',
    tl: 'Govoritʼ ob etom.',
    es: 'Hablar sobre esto.',
  },
  { ru: 'В прошлом году.', tl: 'V proshlom godu.', es: 'El año pasado.' },
  {
    ru: 'На берегу моря.',
    tl: 'Na beregu morya.',
    es: 'En la orilla del mar.',
  },
];

export default function PrepositionalCaseB2Exercise() {
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
          📍 Caso Prepositivo (Предложный падеж)
        </h2>
        <p className="text-htb-text-dim">
          El prepositivo{' '}
          <span className="text-htb-green font-bold">
            siempre va con preposición
          </span>
          . Las principales son в/на (ubicación) y о/об (sobre/acerca de).
          Responde a где? (¿dónde?) y о чём / о ком?
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
                Preposiciones + Prepositivo
              </h3>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {usos.map((u, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-3 text-htb-green font-bold w-24">
                      {u.prep}
                    </td>
                    <td className="py-2 px-3 text-htb-text-dim text-xs">
                      {u.uso}
                    </td>
                    <td className="py-2 px-3 text-white text-sm">{u.ej}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                <h3 className="text-htb-green font-semibold">
                  Declinación Prepositivo Sg.
                </h3>
              </div>
              {decl.map((d, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 py-1.5 px-4 border-b border-gray-800 text-sm ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                >
                  <span className="text-htb-text-dim text-xs w-24">
                    {d.tipo}
                  </span>
                  <span className="text-white font-bold"><SpeakableText text={d.nom} /></span>
                  <span className="text-htb-text-dim mx-1">→</span>
                  <span className="text-htb-green font-bold">{d.prep}</span>
                </div>
              ))}
            </div>
            <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                <h3 className="text-htb-green font-semibold">
                  Formas Especiales (locativas)
                </h3>
              </div>
              {especiales.map((e, i) => (
                <div
                  key={i}
                  className={`py-2 px-4 border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                >
                  <span className="text-white font-bold mr-2"><SpeakableText text={e.nom} /></span>
                  <span className="text-htb-text-dim">→</span>
                  <span className="text-htb-green font-bold ml-2">
                    {e.prep}
                  </span>
                  <span className="text-htb-text-dim text-xs ml-2">{e.t}</span>
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
