import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const reference = [
  {
    title: 'Uso principal: "con"',
    content:
      'Instrumental expresa compañía y medio. Prep. с + Inst.: Я иду с другом (voy con un amigo).',
  },
  {
    title: 'Formación masculino/neutro',
    content:
      'Singular: -ом/-ем → другом, отцом, морем. Plural: -ами/-ями → друзьями.',
  },
  {
    title: 'Formación femenino',
    content: 'Singular: -ой/-ей → мамой, землёй. Plural: -ами/-ями → мамами.',
  },
  {
    title: 'Comparativos con чем / Instrumental',
    content: 'Москва больше, чем Париж. О Иван выше Петра (más alto que).',
  },
  {
    title: 'Predicado con ser (Instrumental)',
    content: 'Он работает врачом (trabaja de médico). Она была учительницей.',
  },
  {
    title: 'Ejemplos',
    content:
      'Я пишу ручкой (escribo con un bolígrafo). Мы едем поездом (vamos en tren). Чай с молоком (té con leche).',
  },
];

const vocab = [
  { ru: 'с + Inst.', es: 'con (compañía)' },
  { ru: 'Я иду с другом', es: 'Voy con un amigo' },
  { ru: 'работать + Inst.', es: 'trabajar de / como' },
  { ru: 'ручка → ручкой', es: 'bolígrafo → con un bolígrafo' },
  { ru: 'поезд → поездом', es: 'tren → en tren' },
  { ru: 'молоко → с молоком', es: 'leche → con leche' },
  { ru: 'мама → мамой', es: 'mamá → con mamá (Inst.)' },
  { ru: 'друг → с другом', es: 'amigo → con el amigo' },
  { ru: 'Он врач → Он работает врачом', es: 'Es médico → trabaja de médico' },
  { ru: 'между + Inst.', es: 'entre (dos cosas)' },
  { ru: 'перед + Inst.', es: 'delante de' },
  { ru: 'Она была учительницей', es: 'Ella era profesora' },
];

const quiz = [
  {
    id: 'q1',
    p: '"Я иду с другом" — ¿qué caso lleva "другом"?',
    o: ['Nominativo', 'Acusativo', 'Instrumental', 'Prepositivo'],
    c: 'Instrumental',
  },
  {
    id: 'q2',
    p: '"Работать врачом" significa:',
    o: [
      'visitar al médico',
      'trabajar de médico',
      'llamarse médico',
      'estudiar medicina',
    ],
    c: 'trabajar de médico',
  },
  {
    id: 'q3',
    p: 'La terminación Instrumental singular femenino de "мама" es:',
    o: ['маму', 'мамы', 'маме', 'мамой'],
    c: 'мамой',
  },
  {
    id: 'q4',
    p: '"Поездом" indica viajar:',
    o: ['al tren', 'del tren', 'en tren', 'para el tren'],
    c: 'en tren',
  },
  {
    id: 'q5',
    p: 'Terminación Instrumental masculino singular de "друг" es:',
    o: ['друга', 'другу', 'другом', 'другов'],
    c: 'другом',
  },
  {
    id: 'q6',
    p: '"Чай с молоком" significa:',
    o: ['té sin leche', 'té con leche', 'leche con té caliente', 'té de leche'],
    c: 'té con leche',
  },
  {
    id: 'q7',
    p: '"Перед + Instrumental" expresa:',
    o: ['dentro de', 'delante de', 'detrás de', 'junto a'],
    c: 'delante de',
  },
  {
    id: 'q8',
    p: '"Она была учительницей." ¿Qué caso es "учительницей"?',
    o: ['Dativo', 'Genitivo', 'Instrumental', 'Nominativo'],
    c: 'Instrumental',
  },
  {
    id: 'q9',
    p: '"Между + Instrumental" significa:',
    o: ['en frente de', 'entre (dos cosas)', 'después de', 'alrededor de'],
    c: 'entre (dos cosas)',
  },
  {
    id: 'q10',
    p: '"Я пишу ручкой." ¿Qué expresa "ручкой"?',
    o: [
      'a quién escribo',
      'dónde escribo',
      'con qué escribo (instrumento)',
      'cuándo escribo',
    ],
    c: 'con qué escribo (instrumento)',
  },
];

export default function InstrumentalA2Exercise() {
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
          🔧 Caso Instrumental A2 (Творительный падеж)
        </h2>
        <p className="text-htb-text-dim">
          El caso Instrumental expresa{' '}
          <span className="text-htb-green font-bold"><SpeakableText text="compañía (с + Inst.)" /></span>
          , <span className="text-blue-400 font-bold">medio o instrumento</span>{' '}
          y <span className="text-yellow-400 font-bold">profesión/función</span>{' '}
          (работать + Inst.).
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
