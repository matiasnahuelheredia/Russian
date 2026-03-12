import React, { useState } from 'react';

const quiz = [
  {
    id: 'q1',
    p: 'El imperativo de "читать" (tú) es:',
    o: ['читай', 'читает', 'читал', 'читай!'],
    c: 'читай',
  },
  {
    id: 'q2',
    p: 'El imperativo de "говорить" (vosotros) es:',
    o: ['говорите', 'говорят', 'говорил', 'говоришь'],
    c: 'говорите',
  },
  {
    id: 'q3',
    p: 'El imperativo negativo "no vayas" (тебе) es:',
    o: ['не иди', 'не идёшь', 'не иди', 'не ходи'],
    c: 'не иди',
  },
  {
    id: 'q4',
    p: '"Давай(те) + infinitivo/1ª plural" expresa:',
    o: ['prohibición', 'sugerencia/vamos a...', 'mandato directo', 'permiso'],
    c: 'sugerencia/vamos a...',
  },
  {
    id: 'q5',
    p: '"Пусть он придёт." — ¿qué expresa "пусть"?',
    o: [
      'mandato directo a él',
      'permiso o deseo que él venga',
      'prohibición',
      'condición',
    ],
    c: 'permiso o deseo que él venga',
  },
  {
    id: 'q6',
    p: '¿Cómo se forma el imperativo?',
    o: [
      'raíz del presente + -й/-и/-ь',
      'infinitivo + -й',
      'pasado + -те',
      'presente 1ª sg + -те',
    ],
    c: 'raíz del presente + -й/-и/-ь',
  },
  {
    id: 'q7',
    p: '"Скажи мне правду!" — ¿qué significa?',
    o: [
      '¿Me dices la verdad?',
      '¡Dime la verdad!',
      'Te digo la verdad.',
      'Me dirás la verdad.',
    ],
    c: '¡Dime la verdad!',
  },
  {
    id: 'q8',
    p: '"Не трогай!" — significa:',
    o: ['¡Toca!', '¡No toques!', '¿Tocas?', 'No tocas.'],
    c: '¡No toques!',
  },
  {
    id: 'q9',
    p: 'Imperativo de "написать" (tú / perfective):',
    o: ['пиши', 'напиши', 'написывай', 'напишите'],
    c: 'напиши',
  },
  {
    id: 'q10',
    p: '"Давайте поговорим!" — ¿qué significa?',
    o: ['¡Hablemos!', '¿Hablamos?', 'Hablen.', 'Iban a hablar.'],
    c: '¡Hablemos!',
  },
];

const reglas = [
  {
    tipo: 'Singular (tú)',
    form: 'Raíz pres. termina en vocal → -й; consonante → -и o -ь',
    ej: 'читай, говори, встань',
  },
  {
    tipo: 'Plural (vosotros/Ud.)',
    form: 'Imperativo sg + -те',
    ej: 'читайте, говорите, встаньте',
  },
  {
    tipo: 'Negativo',
    form: 'не + imperativo imperfectivo',
    ej: 'не читай, не говори',
  },
  {
    tipo: 'Sugerencia (nosotros)',
    form: 'Давай(те) + inf. o 1ª pl. perf.',
    ej: 'Давайте поговорим! / Давай читать!',
  },
  {
    tipo: '3ª persona',
    form: 'Пусть/Пускай + presente 3ª',
    ej: 'Пусть он придёт.',
  },
];

const cards = [
  {
    ru: 'Говори медленнее, пожалуйста!',
    tl: 'Govori medlennee, pozhaluysta!',
    es: '¡Habla más despacio, por favor!',
  },
  {
    ru: 'Не забудь позвонить!',
    tl: 'Ne zabudʼ pozvonit!',
    es: '¡No olvides llamar!',
  },
  { ru: 'Давайте начнём!', tl: 'Davayte nachnyom!', es: '¡Empecemos!' },
  {
    ru: 'Скажите мне, где находится вокзал.',
    tl: 'Skazhite mne, gde nakhoditsya vokzal.',
    es: 'Dígame dónde está la estación.',
  },
  {
    ru: 'Пусть он сам решает.',
    tl: 'Pustiʼ on sam reshayet.',
    es: 'Que decida él mismo.',
  },
  {
    ru: 'Не трогай мои вещи!',
    tl: 'Ne trogay moi veshchi!',
    es: '¡No toques mis cosas!',
  },
];

export default function ImperativoB1Exercise() {
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
          ⚡ Modo Imperativo (Повелительное наклонение)
        </h2>
        <p className="text-htb-text-dim">
          El imperativo se forma con la raíz del presente.{' '}
          <span className="text-htb-green font-bold">-й</span> tras vocal,{' '}
          <span className="text-htb-green font-bold">-и/-ь</span> tras
          consonante. Plural: sg +{' '}
          <span className="text-htb-green font-bold">-те</span>. Negativo: не +
          imperativo imperfectivo.
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
        <div className="space-y-3">
          {reglas.map((r, i) => (
            <div
              key={i}
              className="bg-htb-card rounded-lg border border-gray-800 p-4"
            >
              <p className="text-htb-green font-bold">{r.tipo}</p>
              <p className="text-htb-text-dim text-xs mt-1">{r.form}</p>
              <p className="text-white text-sm mt-1">{r.ej}</p>
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
