import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const quiz = [
  {
    id: 'q1',
    p: '"El primo" (hijo de tío/tía) en ruso es:',
    o: ['племянник', 'брат', 'двоюродный брат', 'сводный брат'],
    c: 'двоюродный брат',
  },
  {
    id: 'q2',
    p: '"Невеста" significa:',
    o: ['novia (prometida)', 'esposa', 'hermana', 'sobrina'],
    c: 'novia (prometida)',
  },
  {
    id: 'q3',
    p: '"Тёща" es:',
    o: [
      'suegra (madre del esposo)',
      'suegra (madre de la esposa)',
      'nuera',
      'cuñada',
    ],
    c: 'suegra (madre de la esposa)',
  },
  {
    id: 'q4',
    p: 'La palabra para "boda/casamiento" es:',
    o: ['развод', 'свидание', 'свадьба', 'знакомство'],
    c: 'свадьба',
  },
  {
    id: 'q5',
    p: '"Племянник" es:',
    o: ['primo', 'sobrino (hijo del hermano)', 'nieto', 'yerno'],
    c: 'sobrino (hijo del hermano)',
  },
  {
    id: 'q6',
    p: '"Зять" significa:',
    o: ['cuñado', 'yerno', 'suegro', 'padrino'],
    c: 'yerno',
  },
  {
    id: 'q7',
    p: '¿Cómo se dice "divorciarse" en ruso?',
    o: ['жениться', 'выйти замуж', 'развестись', 'познакомиться'],
    c: 'развестись',
  },
  {
    id: 'q8',
    p: '"Свёкор" es:',
    o: [
      'suegro (padre de la esposa)',
      'suegro (padre del esposo)',
      'abuelo',
      'padrastro',
    ],
    c: 'suegro (padre del esposo)',
  },
  {
    id: 'q9',
    p: 'Para un hombre casarse se dice:',
    o: ['выйти замуж', 'жениться', 'развестись', 'познакомиться'],
    c: 'жениться',
  },
  {
    id: 'q10',
    p: '"Внук/внучка" significa:',
    o: ['sobrino/sobrina', 'primo/prima', 'nieto/nieta', 'hijastro/hijastra'],
    c: 'nieto/nieta',
  },
];

const vocab = [
  { ru: 'родители', tl: 'roditeli', es: 'padres' },
  { ru: 'бабушка / дедушка', tl: 'babushka / dedushka', es: 'abuela / abuelo' },
  {
    ru: 'двоюродный брат/сестра',
    tl: 'dvoyurodny brat/sestra',
    es: 'primo/prima',
  },
  {
    ru: 'племянник / племянница',
    tl: 'plemyannik / plemyannitsa',
    es: 'sobrino / sobrina',
  },
  {
    ru: 'невеста / жених',
    tl: 'nevesta / zhenikh',
    es: 'novia / novio (prometidos)',
  },
  { ru: 'свадьба', tl: 'svadʼba', es: 'boda' },
  { ru: 'развод', tl: 'razvod', es: 'divorcio' },
  {
    ru: 'тёща / тесть',
    tl: 'tyoshcha / testʼ',
    es: 'suegra/suegro (de la esposa)',
  },
  {
    ru: 'свекровь / свёкор',
    tl: 'svekrovʼ / svyokor',
    es: 'suegra/suegro (del esposo)',
  },
  { ru: 'зять / невестка', tl: 'zyatʼ / nevestka', es: 'yerno / nuera' },
  { ru: 'внук / внучка', tl: 'vnuk / vnuchka', es: 'nieto / nieta' },
  {
    ru: 'жениться / выйти замуж',
    tl: 'zhenitstya / vyti zamuzh',
    es: 'casarse (él / ella)',
  },
];

const cards = [
  {
    ru: 'Мои родители живут в Москве.',
    tl: 'Moi roditeli zhivut v Moskve.',
    es: 'Mis padres viven en Moscú.',
  },
  {
    ru: 'У меня есть двоюродная сестра.',
    tl: 'U menya yestʼ dvoyurodnaya sestra.',
    es: 'Tengo una prima.',
  },
  {
    ru: 'Они поженились в июне.',
    tl: 'Oni pozhenilis v iyune.',
    es: 'Ellos se casaron en junio.',
  },
  {
    ru: 'Где живут ваши свёкор и свекровь?',
    tl: 'Gde zhivut vashi svyokor i svekrovʼ?',
    es: '¿Dónde viven tus suegros (del esposo)?',
  },
  {
    ru: 'Мoy племянник учится в школе.',
    tl: 'Moy plemyannik uchitsya v shkole.',
    es: 'Mi sobrino va a la escuela.',
  },
  {
    ru: 'На свадьбе было много гостей.',
    tl: 'Na svadʼbe bylo mnogo gostey.',
    es: 'En la boda había muchos invitados.',
  },
];

export default function FamiliaRelacionesB2Exercise() {
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
          👨‍👩‍👧 Familia y Relaciones (Семья и отношения)
        </h2>
        <p className="text-htb-text-dim">
          El ruso tiene vocabulario muy específico para la familia política:{' '}
          <span className="text-htb-green font-bold">
            diferentes palabras según si son parientes del marido o de la mujer
          </span>
          . Esencial para la vida cotidiana.
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
                <p className="text-htb-green font-bold"><SpeakableText text={v.ru} /></p>
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
