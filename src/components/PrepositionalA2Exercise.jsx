import React, { useState } from 'react';

const reference = [
  {
    title: 'Uso: ubicación y tema',
    content:
      'Prepositivo (Предложный) se usa SIEMPRE con preposición. Principales: в (en, dentro), на (en, sobre), о/об (sobre/acerca de).',
  },
  {
    title: 'Formación masculino/neutro',
    content:
      'Singular: -е → столе, море, отце. Excepciones en -ии/-ие → университете.',
  },
  {
    title: 'Formación femenino',
    content:
      'Singular -е: комнате, школе. Palabras en -ия → -ии: станция → на станции.',
  },
  {
    title: 'Plural',
    content:
      'Plural se forma con -ах/-ях: в домах (en las casas), на улицах (en las calles).',
  },
  {
    title: 'в vs. на',
    content:
      'в + lugares cerrados/países: в школе, в России. на + superficies/eventos: на улице, на концерте, на работе.',
  },
  {
    title: 'о/об + Prepositivo',
    content:
      'Hablar/pensar/soñar sobre algo: Я думаю о тебе (pienso en ti). Расскажи мне об этом (cuéntame de eso).',
  },
];

const vocab = [
  { ru: 'в школе', es: 'en la escuela' },
  { ru: 'на улице', es: 'en la calle' },
  { ru: 'в России', es: 'en Rusia' },
  { ru: 'на работе', es: 'en el trabajo' },
  { ru: 'на концерте', es: 'en el concierto' },
  { ru: 'о тебе', es: 'sobre/de ti' },
  { ru: 'в Москве', es: 'en Moscú' },
  { ru: 'на столе', es: 'sobre la mesa' },
  { ru: 'в комнате', es: 'en la habitación' },
  { ru: 'о чём ты думаешь?', es: '¿En qué piensas?' },
  { ru: 'на станции', es: 'en la estación' },
  { ru: 'в университете', es: 'en la universidad' },
];

const quiz = [
  {
    id: 'q1',
    p: '"В школе" significa:',
    o: ['a la escuela', 'de la escuela', 'en la escuela', 'hasta la escuela'],
    c: 'en la escuela',
  },
  {
    id: 'q2',
    p: 'La terminación Prepositivo singular masculino de "стол" es:',
    o: ['стола', 'столу', 'столе', 'столом'],
    c: 'столе',
  },
  {
    id: 'q3',
    p: '"На работе" significa:',
    o: ['al trabajo', 'del trabajo', 'en el trabajo', 'para el trabajo'],
    c: 'en el trabajo',
  },
  {
    id: 'q4',
    p: '"О/Об + Prepositivo" se usa para:',
    o: ['ubicación', 'comparación', 'hablar/pensar sobre algo', 'instrumento'],
    c: 'hablar/pensar sobre algo',
  },
  {
    id: 'q5',
    p: '"Станция" en Prepositivo es:',
    o: ['станции', 'станцие', 'станциа', 'станцей'],
    c: 'станции',
  },
  {
    id: 'q6',
    p: '¿Qué preposición se usa con eventos? (на концерте)',
    o: ['в', 'у', 'на', 'за'],
    c: 'на',
  },
  {
    id: 'q7',
    p: '"В Москве" — ¿qué preposición usamos y por qué?',
    o: [
      'на, es superficie',
      'в, es lugar/ciudad',
      'у, posesión',
      'по, movimiento',
    ],
    c: 'в, es lugar/ciudad',
  },
  {
    id: 'q8',
    p: 'Plural prepositivo de "дом" (casa) es:',
    o: ['домах', 'домов', 'домам', 'домами'],
    c: 'домах',
  },
  {
    id: 'q9',
    p: '"Я думаю о тебе" significa:',
    o: ['Pienso contigo', 'Pienso en ti', 'Te pienso a ti', 'Pienso para ti'],
    c: 'Pienso en ti',
  },
  {
    id: 'q10',
    p: '"В университете" — terminación de Prepositivo masc. en -ет/-ет:',
    o: ['е', 'ие', 'ии', 'е (excepción -е)'],
    c: 'е (excepción -е)',
  },
];

export default function PrepositionalA2Exercise() {
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
          📍 Caso Prepositivo A2 (Предложный падеж)
        </h2>
        <p className="text-htb-text-dim">
          El Prepositivo siempre lleva preposición.{' '}
          <span className="text-htb-green font-bold">в/на + Prep.</span> =
          ubicación.{' '}
          <span className="text-blue-400 font-bold">о/об + Prep.</span> = tema.
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
