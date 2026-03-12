import React, { useState } from 'react';

const quiz = [
  {
    id: 'q1',
    p: '"Рубль" es la unidad monetaria de Rusia. Su subdivisión es:',
    o: ['копейка', 'гривна', 'пенни', 'цент'],
    c: 'копейка',
  },
  {
    id: 'q2',
    p: '"Скидка" en un contexto de compras es:',
    o: ['precio completo', 'descuento', 'impuesto', 'devolución'],
    c: 'descuento',
  },
  {
    id: 'q3',
    p: '"Касса" en una tienda es:',
    o: ['camerín/probador', 'caja registradora', 'estantería', 'mostrador'],
    c: 'caja registradora',
  },
  {
    id: 'q4',
    p: '"Сколько стоит?" significa:',
    o: ['¿Cómo se llama?', '¿Cuánto cuesta?', '¿De qué talla?', '¿Hay stock?'],
    c: '¿Cuánto cuesta?',
  },
  {
    id: 'q5',
    p: '"Распродажа" es:',
    o: [
      'rebajas/liquidación',
      'precio especial VIP',
      'venta al por mayor',
      'mercadillo habitual',
    ],
    c: 'rebajas/liquidación',
  },
  {
    id: 'q6',
    p: '"Примерочная" es:',
    o: [
      'mostrador de información',
      'caja de pago',
      'probador/camerín',
      'zona de devoluciones',
    ],
    c: 'probador/camerín',
  },
  {
    id: 'q7',
    p: '"Дорого" y "дёшево" significan:',
    o: ['grande y pequeño', 'caro y barato', 'nuevo y viejo', 'bonito y feo'],
    c: 'caro y barato',
  },
  {
    id: 'q8',
    p: '"Какой размер?" se pregunta al comprar:',
    o: ['comida', 'ropa/zapatos', 'electrónico', 'libro'],
    c: 'ropa/zapatos',
  },
  {
    id: 'q9',
    p: '"Квитанция" o "чек" es:',
    o: [
      'moneda de cambio',
      'descuento aplicado',
      'recibo/ticket de compra',
      'etiqueta de precio',
    ],
    c: 'recibo/ticket de compra',
  },
  {
    id: 'q10',
    p: 'Para regatear o pedir descuento se puede decir:',
    o: [
      'Дайте скидку, пожалуйста!',
      'Сделайте заказ!',
      'Принесите чек!',
      'Отдайте сдачу!',
    ],
    c: 'Дайте скидку, пожалуйста!',
  },
];

const vocab = [
  { ru: 'рубль / копейка', tl: 'rubl / kopeyka', es: 'rublo / copec' },
  { ru: 'скидка', tl: 'skidka', es: 'descuento' },
  { ru: 'распродажа', tl: 'rasprodazha', es: 'rebajas/liquidación' },
  { ru: 'касса', tl: 'kassa', es: 'caja registradora' },
  { ru: 'примерочная', tl: 'primierochnaya', es: 'probador/camerín' },
  { ru: 'Сколько стоит?', tl: 'Skolʼko stoit?', es: '¿Cuánto cuesta?' },
  { ru: 'дорого / дёшево', tl: 'dorogo / dyoshevo', es: 'caro / barato' },
  { ru: 'размер', tl: 'razmer', es: 'talla/tamaño' },
  { ru: 'чек / квитанция', tl: 'chek / kvitantsiya', es: 'recibo/ticket' },
  { ru: 'сдача', tl: 'sdacha', es: 'cambio (dinero devuelto)' },
  { ru: 'наличные', tl: 'nalichnyye', es: 'efectivo' },
  { ru: 'Дайте скидку!', tl: 'Dayte skidku!', es: '¡Haga un descuento!' },
];

const cards = [
  {
    ru: 'Сколько стоит эта рубашка?',
    tl: 'Skolʼko stoit eta rubashka?',
    es: '¿Cuánto cuesta esta camisa?',
  },
  {
    ru: 'Это очень дорого. Можно скидку?',
    tl: 'Eto ochenʼ dorogo. Mozhno skidku?',
    es: 'Es muy caro. ¿Puede hacerme un descuento?',
  },
  { ru: 'Где касса?', tl: 'Gde kassa?', es: '¿Dónde está la caja?' },
  {
    ru: 'У вас есть размер 42?',
    tl: 'U vas yestʼ razmer 42?',
    es: '¿Tiene talla 42?',
  },
  {
    ru: 'Идёт распродажа — скидки до 50%!',
    tl: 'Idyot rasprodazha — skidki do 50%!',
    es: '¡Hay rebajas, hasta el 50% de descuento!',
  },
  { ru: 'Можно поменять?', tl: 'Mozhno pomenyatʼ?', es: '¿Se puede cambiar?' },
];

export default function ComprasDineroB2Exercise() {
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
          🛍️ Compras y Dinero (Покупки и деньги)
        </h2>
        <p className="text-htb-text-dim">
          Vocabulario para ir de compras en Rusia:{' '}
          <span className="text-htb-green font-bold">
            касса, примерочная, скидка, распродажа
          </span>{' '}
          y frases clave como "Сколько стоит?" y "Дайте скидку!".
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
