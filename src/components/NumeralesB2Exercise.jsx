import React, { useState } from 'react';

const reference = [
  {
    title: 'Números + sustantivo (Nominativo)',
    items: [
      '1 — один/одна/одно + Nom. singular: один стол, одна книга.',
      '2-4 — два/две + Gen. singular: два стола, три книги.',
      '5-20 — пять...двадцать + Gen. plural: пять столов, шесть книг.',
      '21 — двадцать один + Nom. sg. (sigue la regla del último dígito).',
    ],
  },
  {
    title: 'Números compuestos',
    items: [
      '21 = двадцать один · 35 = тридцать пять · 102 = сто два',
      'En números compuestos, rige el último dígito para el caso del sustantivo.',
      '51 пассажир (1→Nom.sg.) · 52 пассажира (2→Gen.sg.) · 55 пассажиров (5→Gen.pl.)',
    ],
  },
  {
    title: 'Declinación de числительные (básico B2)',
    items: [
      'Nominativo: пять, Gen.: пяти, Dat.: пяти, Inst.: пятью, Prep.: о пяти.',
      'Один declina como adjetivo: одного (Gen.), одному (Dat.).',
      'Два/три/четыре tienen formas propias: двух, трёх, четырёх (Gen./Prep.).',
    ],
  },
  {
    title: 'Números ordinales',
    items: [
      'Формируются como adjectives: первый, второй, третий, четвёртый, пятый...',
      'Concuerdan в роде, числе и падеже: в первый раз, во втором классе.',
      'Дата: двадцать первого марта (Gen.) — el veintiuno de marzo.',
    ],
  },
  {
    title: 'Выражение времени',
    items: [
      'Который час? — ¿Qué hora es?',
      'Сейчас три часа. (3→Gen.sg.) Сейчас пять часов. (5→Gen.pl.)',
      'В два часа (Acc. con в). В пять часов (Acc.≈Gen.pl.).',
    ],
  },
];

const quiz = [
  {
    id: 'q1',
    p: '"Три книги" — el sustantivo va en:',
    o: [
      'Nominativo singular',
      'Genitivo singular',
      'Genitivo plural',
      'Nominativo plural',
    ],
    c: 'Genitivo singular',
  },
  {
    id: 'q2',
    p: '"Пять студентов" — el sustantivo va en:',
    o: [
      'Nominativo singular',
      'Genitivo singular',
      'Genitivo plural',
      'Nominativo plural',
    ],
    c: 'Genitivo plural',
  },
  {
    id: 'q3',
    p: '"21 пассажир / 22 пассажира / 25 пассажиров" — ¿qué rige el caso del sustantivo?',
    o: [
      'el primer dígito',
      'el último dígito',
      'el número total de cifras',
      'el género del sustantivo',
    ],
    c: 'el último dígito',
  },
  {
    id: 'q4',
    p: 'El Genitivo de "пять" es:',
    o: ['пятю', 'пяти', 'пятью', 'пятого'],
    c: 'пяти',
  },
  {
    id: 'q5',
    p: 'Los números ordinales concuerdan con el sustantivo en:',
    o: ['sólo género', 'sólo número', 'género, número y caso', 'sólo caso'],
    c: 'género, número y caso',
  },
  {
    id: 'q6',
    p: '"Двадцать второго февраля" — ¿en qué caso está la fecha?',
    o: ['Nominativo', 'Acusativo', 'Genitivo', 'Dativo'],
    c: 'Genitivo',
  },
  {
    id: 'q7',
    p: '"Сейчас два часа" — hora rige Gen. sg. porque dos es:',
    o: ['1', '2-4', '5-20', '21+'],
    c: '2-4',
  },
  {
    id: 'q8',
    p: '¿Cuál es la forma correcta? "Я купил ___ яблок(а/о/и)"',
    o: ['два яблока', 'два яблоки', 'два яблоков', 'два яблоко'],
    c: 'два яблока',
  },
  {
    id: 'q9',
    p: '"Одна" se usa con sustantivos:',
    o: ['masculinos', 'femeninos', 'neutros', 'plurales'],
    c: 'femeninos',
  },
  {
    id: 'q10',
    p: '"В пять часов" — el sustantivo "часов" está en:',
    o: [
      'Nominativo plural',
      'Genitivo plural = Acusativo aquí',
      'Dativo plural',
      'Instrumental plural',
    ],
    c: 'Genitivo plural = Acusativo aquí',
  },
];

export default function NumeralesB2Exercise() {
  const [tab, setTab] = useState('referencia');
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
          🔢 Numerales y Casos B2 (Числительные)
        </h2>
        <p className="text-htb-text-dim">
          Regla núcleo:{' '}
          <span className="text-htb-green font-bold">1 → Nom.sg.</span> ·{' '}
          <span className="text-blue-400 font-bold">2-4 → Gen.sg.</span> ·{' '}
          <span className="text-yellow-400 font-bold">5+ → Gen.pl.</span> En
          compuestos rige el <em className="text-white">último dígito</em>.
        </p>
      </div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {[
          ['referencia', '📚 Referencia'],
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
          {reference.map((sec, i) => (
            <div
              key={i}
              className="bg-htb-card rounded-lg border border-gray-800 p-4"
            >
              <h3 className="text-htb-green font-bold mb-3">{sec.title}</h3>
              <ul className="space-y-2">
                {sec.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm">
                    <span className="text-htb-green mt-0.5">▸</span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
