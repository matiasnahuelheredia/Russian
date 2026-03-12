import React, { useState } from 'react';

const vocab = [
  { ru: 'отдыхать', tl: 'otdykhatʼ', es: 'descansar' },
  { ru: 'гулять', tl: 'gulyatʼ', es: 'pasear / salir a caminar' },
  {
    ru: 'встречаться',
    tl: 'vstrechatʼsya',
    es: 'quedar / encontrarse (con alguien)',
  },
  { ru: 'ходить в кино', tl: 'khoditʼ v kino', es: 'ir al cine' },
  {
    ru: 'смотреть телевизор',
    tl: 'smotretʼ televizor',
    es: 'ver la televisión',
  },
  { ru: 'слушать музыку', tl: 'slushatʼ muzyku', es: 'escuchar música' },
  {
    ru: 'играть в + Acc.',
    tl: 'igratʼ v + Acc.',
    es: 'jugar a (fútbol, ajedrez...)',
  },
  {
    ru: 'играть на + Prep.',
    tl: 'igratʼ na + Prep.',
    es: 'tocar (un instrumento)',
  },
  { ru: 'заниматься спортом', tl: 'zanimatsya sportom', es: 'hacer deporte' },
  { ru: 'бегать', tl: 'begatʼ', es: 'correr (habitualmente)' },
  { ru: 'плавать', tl: 'plavatʼ', es: 'nadar (habitualmente)' },
  { ru: 'ходить в спортзал', tl: 'khoditʼ v sportzal', es: 'ir al gimnasio' },
  { ru: 'читать книги', tl: 'chitatʼ knigi', es: 'leer libros' },
  { ru: 'рисовать', tl: 'risovatʼ', es: 'dibujar / pintar' },
  { ru: 'готовить', tl: 'gotovitʼ', es: 'cocinar' },
  {
    ru: 'фотографировать',
    tl: 'fotografirovatʼ',
    es: 'fotografiar / hacer fotos',
  },
  { ru: 'путешествовать', tl: 'puteshestvоvatʼ', es: 'viajar' },
  { ru: 'выходные', tl: 'vykhodnyye', es: 'fin de semana' },
  { ru: 'проводить время', tl: 'provoditʼ vremya', es: 'pasar el tiempo' },
  { ru: 'свободное время', tl: 'svobodnoye vremya', es: 'tiempo libre' },
];

const quiz = [
  {
    id: 'q1',
    p: '"Свободное время" es:',
    o: ['tiempo de trabajo', 'tiempo libre', 'hora punta', 'tiempo extra'],
    c: 'tiempo libre',
  },
  {
    id: 'q2',
    p: '"Играть в + Acusativo" se usa para:',
    o: [
      'tocar un instrumento',
      'jugar a un deporte/juego',
      'practicar un hobby',
      'cantar',
    ],
    c: 'jugar a un deporte/juego',
  },
  {
    id: 'q3',
    p: '"Гулять" significa:',
    o: ['conducir', 'pasear / salir a caminar', 'bailar', 'viajar'],
    c: 'pasear / salir a caminar',
  },
  {
    id: 'q4',
    p: '"Встречаться" en tiempo libre significa:',
    o: [
      'casarse',
      'quedar / encontrarse (con alguien)',
      'conocer a alguien nuevo',
      'visitar un lugar',
    ],
    c: 'quedar / encontrarse (con alguien)',
  },
  {
    id: 'q5',
    p: '"Выходные" son:',
    o: ['vacaciones', 'días festivos', 'fin de semana', 'las noches libres'],
    c: 'fin de semana',
  },
  {
    id: 'q6',
    p: '"Заниматься спортом" significa:',
    o: ['ver deporte', 'hacer deporte', 'practicar un hobby', 'competir'],
    c: 'hacer deporte',
  },
  {
    id: 'q7',
    p: '"Играть на + Prepositivo" se usa para:',
    o: [
      'jugar videojuegos',
      'tocar un instrumento musical',
      'practicar deporte',
      'jugar en casa',
    ],
    c: 'tocar un instrumento musical',
  },
  {
    id: 'q8',
    p: '"Проводить время" significa:',
    o: [
      'matar el tiempo',
      'perder el tiempo',
      'pasar el tiempo',
      'ahorrar tiempo',
    ],
    c: 'pasar el tiempo',
  },
  {
    id: 'q9',
    p: '"Ходить в кино" — ¿qué caso lleva "кино"?',
    o: [
      'Nominativo',
      'Acusativo (в + куда)',
      'Prepositivo (в + где)',
      'Dativo',
    ],
    c: 'Acusativo (в + куда)',
  },
  {
    id: 'q10',
    p: '"Плавать" y "бегать" son verbos de:',
    o: [
      'movimiento unidireccional',
      'movimiento multidireccional / habitual',
      'aspecto perfectivo',
      'reflexivos',
    ],
    c: 'movimiento multidireccional / habitual',
  },
];

export default function TiempoLibreA2Exercise() {
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
          🎮 Tiempo Libre y Actividades (Свободное время)
        </h2>
        <p className="text-htb-text-dim">
          Vocabulario A2 para hablar del ocio. Contraste clave:{' '}
          <span className="text-htb-green font-bold">играть в + Acc.</span>{' '}
          (deportes/juegos) vs{' '}
          <span className="text-blue-400 font-bold">играть на + Prep.</span>{' '}
          (instrumentos).
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
        <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
          {vocab.map((v, i) => (
            <div
              key={i}
              className={`py-2 px-4 border-b border-gray-800 flex items-center gap-3 flex-wrap ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
            >
              <span className="text-htb-green font-bold text-base w-44">
                {v.ru}
              </span>
              <span className="text-htb-text-dim text-xs italic w-36">
                {v.tl}
              </span>
              <span className="text-white text-sm">{v.es}</span>
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
                <p className="text-3xl text-htb-green font-bold mb-2">
                  {vocab[fi].ru}
                </p>
                <p className="text-htb-text-dim italic text-sm">
                  {vocab[fi].tl}
                </p>
              </>
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
