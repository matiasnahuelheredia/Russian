import React, { useState } from 'react';

const reference = [
  {
    title: 'Plurales Nominativo — regla general',
    content:
      'Masculinos: +ы/и → столы, книги. Femeninos en -а/-я: → -ы/-и → мамы, недели. Neutros en -о/-е: → -а/-я → окна, моря.',
  },
  {
    title: 'Plurales irregulares comunes',
    content:
      'друг → друзья, брат → братья, ребёнок → дети, человек → люди, ухо → уши, глаз → глаза, дерево → деревья.',
  },
  {
    title: 'Genitivo plural (после 5)',
    content:
      'Masc.: нулевое окончание (стол → столов, глаз → глаз) o -ей (учитель → учителей). Fem.: мама → мам, неделя → недель. Neut.: окно → окон.',
  },
  {
    title: 'Plurales con 2-4 (Genitivo singular)',
    content:
      'два стола, три книги, четыре окна — con 2, 3, 4 se usa Genitivo singular.',
  },
  {
    title: 'Regla 7-ка (правило 7-ки)',
    content:
      'Tras г, к, х, ж, ш, щ, ч → siempre и, nunca ы: книга → книги, ухо → уши.',
  },
];

const vocab = [
  { ru: 'стол → столы', es: 'mesa → mesas' },
  { ru: 'книга → книги', es: 'libro → libros' },
  { ru: 'окно → окна', es: 'ventana → ventanas' },
  { ru: 'друг → друзья', es: 'amigo → amigos (irreg.)' },
  { ru: 'дети', es: 'niños (pl. irr. de ребёнок)' },
  { ru: 'люди', es: 'gente / personas (pl. irr. de человек)' },
  { ru: 'глаз → глаза', es: 'ojo → ojos' },
  { ru: 'два стола', es: 'dos mesas (Gen. sg.)' },
  { ru: 'пять столов', es: 'cinco mesas (Gen. pl.)' },
  { ru: 'три книги', es: 'tres libros (Gen. sg.)' },
  { ru: 'семь книг', es: 'siete libros (Gen. pl.)' },
  { ru: 'брат → братья', es: 'hermano → hermanos (irreg.)' },
];

const quiz = [
  {
    id: 'q1',
    p: 'El plural de "стол" (mesa) es:',
    o: ['столы', 'столов', 'столи', 'столя'],
    c: 'столы',
  },
  {
    id: 'q2',
    p: 'El plural irregular de "ребёнок" es:',
    o: ['ребёнки', 'ребята', 'дети', 'детьи'],
    c: 'дети',
  },
  {
    id: 'q3',
    p: '"Два стола" usa Genitivo:',
    o: ['plural', 'singular', 'La forma base', 'Nominativo plural'],
    c: 'singular',
  },
  {
    id: 'q4',
    p: 'El plural irregular de "человек" (persona) es:',
    o: ['человеки', 'лица', 'люди', 'персоны'],
    c: 'люди',
  },
  {
    id: 'q5',
    p: 'Tras г, к, х, ж, ш: el plural termina en:',
    o: ['ы', 'и', 'а', 'е'],
    c: 'и',
  },
  {
    id: 'q6',
    p: 'El plural de "окно" (ventana, neutro) es:',
    o: ['окни', 'окны', 'окна', 'окное'],
    c: 'окна',
  },
  {
    id: 'q7',
    p: '"Пять столов" — ¿qué forma usa?',
    o: [
      'Nominativo sg.',
      'Genitivo singular',
      'Genitivo plural',
      'Acusativo plural',
    ],
    c: 'Genitivo plural',
  },
  {
    id: 'q8',
    p: 'El plural irregular de "друг" (amigo) es:',
    o: ['други', 'другы', 'друзья', 'другов'],
    c: 'друзья',
  },
  {
    id: 'q9',
    p: '"Три книги" usa Genitivo:',
    o: ['plural', 'singular', 'Nominativo', 'Instrumental'],
    c: 'singular',
  },
  {
    id: 'q10',
    p: 'El plural de "брат" (hermano) es:',
    o: ['браты', 'браты', 'братья', 'братей'],
    c: 'братья',
  },
];

export default function PluralesA2Exercise() {
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
          🔢 Plurales y Declinaciones A2 (Множественное число)
        </h2>
        <p className="text-htb-text-dim">
          Formación del plural en Nominativo, irregulares frecuentes y uso del{' '}
          <span className="text-htb-green font-bold">Genitivo singular</span>{' '}
          (2-4) vs{' '}
          <span className="text-blue-400 font-bold">Genitivo plural</span> (5+).
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
          {reference.map((r, i) => (
            <div
              key={i}
              className="bg-htb-card rounded-lg border border-gray-800 p-4"
            >
              <h3 className="text-htb-green font-semibold mb-2">{r.title}</h3>
              <p className="text-htb-text text-sm">{r.content}</p>
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
              <p className="text-3xl text-htb-green font-bold text-center">
                {vocab[fi].ru}
              </p>
            ) : (
              <p className="text-2xl text-white text-center">{vocab[fi].es}</p>
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
              {fi + 1} / {vocab.length}
            </span>
            <button
              onClick={() => {
                setFi((i) => Math.min(vocab.length - 1, i + 1));
                setFf(false);
              }}
              disabled={fi === vocab.length - 1}
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
