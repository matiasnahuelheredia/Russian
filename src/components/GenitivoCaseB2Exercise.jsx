import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const quiz = [
  {
    id: 'q1',
    p: '¿Genitivo plural de "книга"?',
    o: ['книги', 'книгам', 'книг', 'книгах'],
    c: 'книг',
  },
  {
    id: 'q2',
    p: '"Много студентов" — "студентов" está en genitivo porque:',
    o: [
      'Es sujeto',
      'Va con много (cantidad)',
      'Es objeto directo',
      'Hay negación',
    ],
    c: 'Va con много (cantidad)',
  },
  {
    id: 'q3',
    p: '¿Genitivo plural de "стол" (mesa)?',
    o: ['столов', 'столам', 'столы', 'столах'],
    c: 'столов',
  },
  {
    id: 'q4',
    p: '"Нет времени" — ¿qué expresa el genitivo aquí?',
    o: ['Posesión', 'Ausencia/negación con нет', 'Cantidad', 'Pertenencia'],
    c: 'Ausencia/negación con нет',
  },
  {
    id: 'q5',
    p: '¿Genitivo plural de "слово" (palabra)?',
    o: ['словов', 'словам', 'слове', 'слов'],
    c: 'слов',
  },
  {
    id: 'q6',
    p: '"Стакан воды" — "воды" es genitivo de:',
    o: [
      'вода — genitivo partitivo (porción)',
      'вода — genitivo de ausencia',
      'вода — con preposición',
      'вода — posesión',
    ],
    c: 'вода — genitivo partitivo (porción)',
  },
  {
    id: 'q7',
    p: '"После урока" — ¿qué preposición rige genitivo aquí?',
    o: ['после', 'перед', 'между', 'над'],
    c: 'после',
  },
  {
    id: 'q8',
    p: 'Con los números 5, 6, 7... el sustantivo va en:',
    o: [
      'Genitivo singular',
      'Nominativo plural',
      'Genitivo plural',
      'Acusativo singular',
    ],
    c: 'Genitivo plural',
  },
  {
    id: 'q9',
    p: '"Кроме меня" significa:',
    o: ['Conmigo', 'Para mí', 'Excepto yo', 'Cerca de mí'],
    c: 'Excepto yo',
  },
  {
    id: 'q10',
    p: '¿Genitivo plural de "день" (día)?',
    o: ['днями', 'дней', 'дням', 'днях'],
    c: 'дней',
  },
];

const pluralGen = [
  { tipo: 'Masc. conson.', nom: 'стол', genPl: 'столов' },
  { tipo: 'Masc. -й', nom: 'музей', genPl: 'музеев' },
  { tipo: 'Masc. -ь', nom: 'рубль', genPl: 'рублей' },
  { tipo: 'Fem. -а (unch.)', nom: 'женщина', genPl: 'женщин' },
  { tipo: 'Fem. -я', nom: 'неделя', genPl: 'недель' },
  { tipo: 'Fem. -ь', nom: 'тетрадь', genPl: 'тетрадей' },
  { tipo: 'Neutro -о', nom: 'слово', genPl: 'слов' },
  { tipo: 'Neutro -е', nom: 'здание', genPl: 'зданий' },
];

const preps = [
  ['у', 'en casa de / (yo) tengo', 'У меня есть.'],
  ['без', 'sin', 'Без сахара.'],
  ['для', 'para', 'Для тебя.'],
  ['до', 'hasta / antes de', 'До встречи!'],
  ['из', 'de (origen)', 'Из России.'],
  ['от', 'de (separación)', 'Письмо от мамы.'],
  ['после', 'después de', 'После урока.'],
  ['кроме', 'excepto', 'Кроме меня.'],
  ['около', 'cerca de', 'Около школы.'],
  ['возле', 'al lado de', 'Возле дома.'],
];

const cards = [
  {
    ru: 'Много студентов.',
    tl: 'Mnogo studentov.',
    es: 'Muchos estudiantes. (gen. pl.)',
  },
  {
    ru: 'Стакан воды.',
    tl: 'Stakan vody.',
    es: 'Un vaso de agua. (partitivo)',
  },
  {
    ru: 'У меня нет времени.',
    tl: 'U menya net vremeni.',
    es: 'No tengo tiempo. (ausencia)',
  },
  { ru: 'После работы.', tl: 'Posle raboty.', es: 'Después del trabajo.' },
  { ru: 'Пять рублей.', tl: 'Pyatʼ rubley.', es: 'Cinco rublos. (gen. pl.)' },
  { ru: 'Кроме тебя.', tl: 'Krome tebya.', es: 'Excepto tú.' },
];

export default function GenitivoCaseB2Exercise() {
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
          🔑 Caso Genitivo B2 (Родительный падеж)
        </h2>
        <p className="text-htb-text-dim">
          Nivel B2: genitivo plural, uso partitivo, preposiciones con genitivo y
          su uso con numerales. El genitivo es el caso más versátil del ruso.
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
              <h3 className="text-htb-green font-semibold">Genitivo Plural</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {pluralGen.map((p, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 py-2 px-4 border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                >
                  <span className="text-htb-text-dim text-xs w-28">
                    {p.tipo}
                  </span>
                  <span className="text-white font-bold"><SpeakableText text={p.nom} /></span>
                  <span className="text-htb-text-dim">→</span>
                  <span className="text-htb-green font-bold">{p.genPl}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Preposiciones + Genitivo
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {preps.map(([p, uso, ej], i) => (
                <div
                  key={i}
                  className={`py-2 px-4 border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                >
                  <span className="text-htb-green font-bold mr-2">{p}</span>
                  <span className="text-htb-text-dim text-xs">{uso}</span>
                  <p className="text-white text-sm">{ej}</p>
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
