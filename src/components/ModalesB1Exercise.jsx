import React, { useState } from 'react';

const quiz = [
  {
    id: 'q1',
    p: '"Нужно идти." — ¿qué expresa "нужно"?',
    o: ['permiso', 'prohibición', 'necesidad impersonal', 'capacidad'],
    c: 'necesidad impersonal',
  },
  {
    id: 'q2',
    p: '¿Cuál es la diferencia entre "нужно" y "должен"?',
    o: [
      'Son idénticos',
      'нужно es impersonal; должен concuerda con el sujeto',
      'должен es más fuerte',
      'нужно solo para cosas',
    ],
    c: 'нужно es impersonal; должен concuerda con el sujeto',
  },
  {
    id: 'q3',
    p: '"Можно войти?" — ¿Qué pide esta frase?',
    o: ['Necesidad', 'Obligación', 'Permiso', 'Capacidad'],
    c: 'Permiso',
  },
  {
    id: 'q4',
    p: '"Нельзя курить здесь." — significa:',
    o: [
      'No es necesario fumar',
      'No se puede / Está prohibido fumar',
      'Es difícil fumar',
      'No se sabe fumar',
    ],
    c: 'No se puede / Está prohibido fumar',
  },
  {
    id: 'q5',
    p: '"Я должна позвонить." — "должна" está en forma:',
    o: ['masculina', 'femenina', 'neutra', 'plural'],
    c: 'femenina',
  },
  {
    id: 'q6',
    p: '"Надо поспать." — "надо" es:',
    o: [
      'solo coloquial',
      'solo formal',
      'sinónimo informal de нужно',
      'solo para mandatos',
    ],
    c: 'sinónimo informal de нужно',
  },
  {
    id: 'q7',
    p: '"Тебе не нужно приходить." — significa:',
    o: [
      'No puedes venir.',
      'No está permitido venir.',
      'No es necesario que vengas.',
      'Debes venir.',
    ],
    c: 'No es necesario que vengas.',
  },
  {
    id: 'q8',
    p: '"Он не должен знать об этом." — ¿qué expresa?',
    o: [
      'Es imposible que lo sepa.',
      'No debe / No tiene que saber eso.',
      'No puede saberlo.',
      'No sabe nada.',
    ],
    c: 'No debe / No tiene que saber eso.',
  },
  {
    id: 'q9',
    p: '"Можно мне взять это?" — forma correcta de pedir algo:',
    o: [
      '¿Podría yo tomar esto? (cortés)',
      '¡Dame esto!',
      'Toma esto.',
      'Necesito esto.',
    ],
    c: '¿Podría yo tomar esto? (cortés)',
  },
  {
    id: 'q10',
    p: '¿Cuál significa "no es necesario"?',
    o: ['нельзя', 'не должен', 'не нужно', 'не может'],
    c: 'не нужно',
  },
];

const modales = [
  {
    w: 'нужно / надо',
    es: 'es necesario / hay que',
    ej: 'Нужно учиться. (Hay que estudiar.)',
    tipo: 'Necesidad impersonal',
  },
  {
    w: 'не нужно / не надо',
    es: 'no es necesario / no hace falta',
    ej: 'Не нужно кричать. (No hace falta gritar.)',
    tipo: 'Innecesario',
  },
  {
    w: 'можно',
    es: 'se puede / está permitido',
    ej: 'Здесь можно курить? (¿Se puede fumar aquí?)',
    tipo: 'Permiso',
  },
  {
    w: 'нельзя',
    es: 'no se puede / está prohibido',
    ej: 'Нельзя опаздывать. (No se puede llegar tarde.)',
    tipo: 'Prohibición',
  },
  {
    w: 'должен/должна/должно/должны',
    es: 'deber / tener que (concuerda)',
    ej: 'Я должен работать. (Debo trabajar.)',
    tipo: 'Obligación personal',
  },
  {
    w: 'обязан/обязана',
    es: 'estar obligado/a (más fuerte)',
    ej: 'Он обязан явиться. (Está obligado a presentarse.)',
    tipo: 'Obligación fuerte',
  },
];

const cards = [
  {
    ru: 'Нужно говорить по-русски.',
    tl: 'Nuzhno govoritʼ po-russki.',
    es: 'Hay que hablar en ruso.',
  },
  {
    ru: 'Здесь нельзя фотографировать.',
    tl: 'Zdesʼ nelʼzya fotografirovatʼ.',
    es: 'Aquí no se puede fotografiar.',
  },
  {
    ru: 'Можно задать вопрос?',
    tl: 'Mozhno zadatʼ vopros?',
    es: '¿Se puede hacer una pregunta?',
  },
  {
    ru: 'Она должна прийти вовремя.',
    tl: 'Ona dolzhna priyti vovremya.',
    es: 'Ella debe llegar a tiempo.',
  },
  {
    ru: 'Тебе не нужно беспокоиться.',
    tl: 'Tebe ne nuzhno bespokoitʼsya.',
    es: 'No necesitas preocuparte.',
  },
  {
    ru: 'Мне надо поспать.',
    tl: 'Mne nado pospatʼ.',
    es: 'Necesito dormir un poco.',
  },
];

export default function ModalesB1Exercise() {
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
          🔑 Palabras Modales (Модальные слова)
        </h2>
        <p className="text-htb-text-dim">
          нужно/надо (necesidad), можно (permiso), нельзя (prohibición), должен
          (obligación personal). нужно/надо/можно/нельзя son{' '}
          <span className="text-htb-green font-bold">impersonales</span>; должен
          concuerda con el sujeto.
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
          {modales.map((m, i) => (
            <div
              key={i}
              className="bg-htb-card rounded-lg border border-gray-800 p-4"
            >
              <div className="flex items-start gap-4 flex-wrap">
                <span className="text-htb-green font-bold text-lg">{m.w}</span>
                <span className="text-yellow-400 text-sm">({m.tipo})</span>
              </div>
              <p className="text-blue-300 text-sm">{m.es}</p>
              <p className="text-white text-sm mt-1">{m.ej}</p>
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
