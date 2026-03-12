import React, { useState } from 'react';

const quiz = [
  {
    id: 'q1',
    p: '"Борщ" es:',
    o: ['sopa de pollo', 'sopa de remolacha', 'sopa de guisantes', 'ensalada'],
    c: 'sopa de remolacha',
  },
  {
    id: 'q2',
    p: '"Пельмени" son:',
    o: [
      'panqueques',
      'ravioles/empanadillas de carne',
      'blinis de trigo sarraceno',
      'gachas',
    ],
    c: 'ravioles/empanadillas de carne',
  },
  {
    id: 'q3',
    p: '"Счёт, пожалуйста" en un restaurante significa:',
    o: [
      'La carta, por favor',
      'La cuenta, por favor',
      'Un vaso de agua, por favor',
      'El postre, por favor',
    ],
    c: 'La cuenta, por favor',
  },
  {
    id: 'q4',
    p: '"Кефир" es:',
    o: [
      'zumo de manzana',
      'bebida alcohólica',
      'leche fermentada (kéfir)',
      'té frío',
    ],
    c: 'leche fermentada (kéfir)',
  },
  {
    id: 'q5',
    p: '¿Cómo se dice "waiter/camarero" en ruso?',
    o: ['повар', 'официант', 'кассир', 'кондитер'],
    c: 'официант',
  },
  {
    id: 'q6',
    p: '"Блины" son:',
    o: ['empanadillas', 'panqueques/crepes', 'buñuelos', 'galletas'],
    c: 'panqueques/crepes',
  },
  {
    id: 'q7',
    p: '"Заказать" + блюдо significa:',
    o: [
      'cocinar un plato',
      'pagar un plato',
      'pedir/ordenar un plato',
      'devolver un plato',
    ],
    c: 'pedir/ordenar un plato',
  },
  {
    id: 'q8',
    p: '"Квас" es:',
    o: [
      'leche agria',
      'bebida fermentada de pan',
      'sopa fría de verduras',
      'kéfir de frutas',
    ],
    c: 'bebida fermentada de pan',
  },
  {
    id: 'q9',
    p: '"Щи" (shchi) es una sopa de:',
    o: ['remolacha', 'repollo', 'champiñones', 'lentejas'],
    c: 'repollo',
  },
  {
    id: 'q10',
    p: 'Para decir "¡Buen provecho!" en ruso:',
    o: ['Спасибо!', 'Пожалуйста!', 'Приятного аппетита!', 'Будем здоровы!'],
    c: 'Приятного аппетита!',
  },
];

const vocab = [
  { ru: 'борщ', tl: 'borshch', es: 'sopa de remolacha' },
  { ru: 'щи', tl: 'shchi', es: 'sopa de repollo' },
  { ru: 'пельмени', tl: 'pelmeni', es: 'ravioles de carne' },
  { ru: 'блины', tl: 'bliny', es: 'panqueques/crepes' },
  { ru: 'каша', tl: 'kasha', es: 'gachas (de cereales)' },
  { ru: 'кефир', tl: 'kefir', es: 'leche fermentada' },
  { ru: 'квас', tl: 'kvas', es: 'bebida fermentada de pan' },
  { ru: 'официант/-ка', tl: 'ofitsiant/-ka', es: 'camarero/camarera' },
  { ru: 'заказать', tl: 'zakazatʼ', es: 'pedir/ordenar (perf.)' },
  { ru: 'счёт', tl: 'shchyot', es: 'cuenta (en restaurante)' },
  { ru: 'меню', tl: 'menyu', es: 'menú' },
  {
    ru: 'Приятного аппетита!',
    tl: 'Priyatnovo appetita!',
    es: '¡Buen provecho!',
  },
];

const cards = [
  {
    ru: 'Борщ — это традиционный русский суп.',
    tl: 'Borshch — eto traditsionny russky sup.',
    es: 'El borsch es una sopa rusa tradicional.',
  },
  {
    ru: 'Счёт, пожалуйста!',
    tl: 'Shchyot, pozhaluysta!',
    es: '¡La cuenta, por favor!',
  },
  {
    ru: 'Я хочу заказать пельмени.',
    tl: 'Ya khochu zakazatʼ pelmeni.',
    es: 'Quiero pedir pelmeni.',
  },
  {
    ru: 'Принесите меню, пожалуйста.',
    tl: 'Prinesite menyu, pozhaluysta.',
    es: 'Tráganos el menú, por favor.',
  },
  {
    ru: 'Блины со сметаной — очень вкусно!',
    tl: 'Bliny so smetanoy — ochen vkusno!',
    es: 'Los blinis con crema agria, ¡muy ricos!',
  },
  {
    ru: 'Приятного аппетита!',
    tl: 'Priyatnovo appetita!',
    es: '¡Buen provecho!',
  },
];

export default function ComidaBebidasB2Exercise() {
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
          🍽️ Comida y Bebidas (Еда и напитки)
        </h2>
        <p className="text-htb-text-dim">
          Vocabulario esencial de la{' '}
          <span className="text-htb-green font-bold">
            cocina rusa tradicional
          </span>{' '}
          y del restaurante. Platos típicos: борщ, щи, пельмени, блины. Bebidas:
          кефир, квас.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {vocab.map((v, i) => (
            <div
              key={i}
              className="bg-htb-card rounded-lg border border-gray-800 p-3 flex items-start gap-3"
            >
              <div className="flex-1">
                <p className="text-htb-green font-bold">{v.ru}</p>
                <p className="text-htb-text-dim text-xs italic">{v.tl}</p>
              </div>
              <div className="text-right">
                <p className="text-white text-sm">{v.es}</p>
              </div>
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
