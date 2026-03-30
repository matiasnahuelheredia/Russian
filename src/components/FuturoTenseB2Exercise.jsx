import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const quiz = [
  {
    id: 'q1',
    p: '"Я буду читать." — "буду читать" es el futuro de:',
    o: [
      'читать (perfectivo)',
      'читать (imperfectivo)',
      'читать (habitual)',
      'читать (inmediato)',
    ],
    c: 'читать (imperfectivo)',
  },
  {
    id: 'q2',
    p: '¿Cómo se dice "Voy a leer el libro" (y terminar de leerlo)?',
    o: [
      'Я буду читать книгу',
      'Я прочитаю книгу',
      'Я буду прочитать книгу',
      'Я читаю книгу',
    ],
    c: 'Я прочитаю книгу',
  },
  {
    id: 'q3',
    p: '"Завтра я напишу письмо." — "напишу" es:',
    o: [
      'Futuro imperfectivo con буду',
      'Futuro perfectivo (forma simple)',
      'Presente con significado futuro',
      'Imperativo',
    ],
    c: 'Futuro perfectivo (forma simple)',
  },
  {
    id: 'q4',
    p: '"Буду" es la forma de futuro de:',
    o: ['делать', 'написать', 'быть (ser/estar)', 'читать'],
    c: 'быть (ser/estar)',
  },
  {
    id: 'q5',
    p: 'El futuro imperfectivo se forma con:',
    o: [
      'просто formas del verbo',
      'буду + infinitivo imperfectivo',
      'буду + participio',
      'infinitivo solo',
    ],
    c: 'буду + infinitivo imperfectivo',
  },
  {
    id: 'q6',
    p: '"Через год я budu жить в Москве." — ¿qué expresa el futuro imperfectivo aquí?',
    o: [
      'Acción que se completará',
      'Proceso continuo en el futuro',
      'Una sola acción futura',
      'Resultado futuro',
    ],
    c: 'Proceso continuo en el futuro',
  },
  {
    id: 'q7',
    p: '"Я куплю хлеб." — "куплю" es:',
    o: [
      'Futuro imperfectivo',
      'Presente',
      'Futuro perfectivo (купить)',
      'Imperativo',
    ],
    c: 'Futuro perfectivo (купить)',
  },
  {
    id: 'q8',
    p: '¿Forma correcta para "Mañana voy a trabajar (proceso)"?',
    o: [
      'Я поработаю завтра',
      'Я работаю завтра',
      'Я буду работать завтра',
      'Я должен работать',
    ],
    c: 'Я буду работать завтра',
  },
  {
    id: 'q9',
    p: '"Скоро" (pronto) más frecuentemente acompaña:',
    o: [
      'Pasado imperfectivo',
      'Presente habitual',
      'Futuro (perfectivo o imperfectivo)',
      'Imperativo',
    ],
    c: 'Futuro (perfectivo o imperfectivo)',
  },
  {
    id: 'q10',
    p: '"Что ты будешь делать завтра?" — "будешь делать" es:',
    o: [
      'Futuro perfectivo',
      'Futuro imperfectivo',
      'Presente continuo',
      'Imperativo negativo',
    ],
    c: 'Futuro imperfectivo',
  },
];

const tabla = [
  {
    asp: 'Imperfectivo',
    forma: 'буду/будешь/будет + infinitivo НСВ',
    ej: 'Я буду читать. Ты будешь работать.',
    uso: 'Proceso, duración, hábito futuro',
  },
  {
    asp: 'Perfectivo',
    forma: 'Formas simples (como presente de perf.)',
    ej: 'Я прочитаю. Ты напишешь.',
    uso: 'Acción única completada en futuro',
  },
];

const fut_imp = [
  ['я', 'буду'],
  ['ты', 'будешь'],
  ['он/она', 'будет'],
  ['мы', 'будем'],
  ['вы', 'будете'],
  ['они', 'будут'],
];

const cards = [
  {
    ru: 'Я буду читать книгу.',
    tl: 'Ya budu chitat knigu.',
    es: 'Voy a estar leyendo el libro. (imp.)',
  },
  {
    ru: 'Я прочитаю книгу.',
    tl: 'Ya prochitayu knigu.',
    es: 'Voy a leer el libro (entero). (perf.)',
  },
  {
    ru: 'Завтра напишу письмо.',
    tl: 'Zavtra napishi pisʼmo.',
    es: 'Mañana escribiré la carta.',
  },
  {
    ru: 'Что ты будешь делать?',
    tl: 'Chto ty budesh delatʼ?',
    es: '¿Qué vas a hacer?',
  },
  {
    ru: 'Скоро всё будет хорошо.',
    tl: 'Skoro vsyo budet khorosho.',
    es: 'Pronto todo estará bien.',
  },
  {
    ru: 'Мы переедем в июне.',
    tl: 'My pereeyedem v iyune.',
    es: 'Nos mudaremos en junio. (perf.)',
  },
];

export default function FuturoTenseB2Exercise() {
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
          ⏩ Futuro en Ruso (Будущее время)
        </h2>
        <p className="text-htb-text-dim">
          El ruso tiene{' '}
          <span className="text-htb-green font-bold">dos futuros</span>:
          imperfectivo (буду + inf.) para proceso/hábito futuro, y perfectivo
          (forma simple) para acción completada futura.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                <h3 className="text-htb-green font-semibold">
                  Conjugación de "быть" (futuro)
                </h3>
              </div>
              {fut_imp.map(([p, f], i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between py-2 px-4 border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                >
                  <span className="text-htb-text-dim">{p}</span>
                  <span className="text-htb-green font-bold">{f}</span>
                </div>
              ))}
            </div>
            <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                <h3 className="text-htb-green font-semibold">
                  Futuro: Dos Tipos
                </h3>
              </div>
              {tabla.map((t, i) => (
                <div
                  key={i}
                  className={`p-3 border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                >
                  <p
                    className={`font-bold text-sm mb-1 ${i === 0 ? 'text-blue-400' : 'text-htb-green'}`}
                  >
                    {t.asp}
                  </p>
                  <p className="text-htb-text-dim text-xs mb-1"><SpeakableText text={t.forma} /></p>
                  <p className="text-white text-sm">{t.ej}</p>
                  <p className="text-htb-text-dim text-xs italic">{t.uso}</p>
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
