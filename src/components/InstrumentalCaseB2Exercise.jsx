import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const quiz = [
  {
    id: 'q1',
    p: '"Он работает врачом." — "врачом" es instrumental porque:',
    o: [
      'Es objeto directo',
      'Es predicado nominal con быть/работать',
      'Es sujeto',
      'Va con preposición с',
    ],
    c: 'Es predicado nominal con быть/работать',
  },
  {
    id: 'q2',
    p: '¿Instrumental de "ручка" (bolígrafo)?',
    o: ['ручки', 'ручке', 'ручкой', 'ручку'],
    c: 'ручкой',
  },
  {
    id: 'q3',
    p: '"Я иду с другом." — "с + instrumental" expresa:',
    o: ['Dirección', 'Compañía', 'Instrumento', 'Posesión'],
    c: 'Compañía',
  },
  {
    id: 'q4',
    p: '"Писать ручкой" — "ручкой" es instrumental porque:',
    o: [
      'Es el instrumento con que se escribe',
      'Es objeto directo',
      'Es sujeto',
      'Hay negación',
    ],
    c: 'Es el instrumento con que se escribe',
  },
  {
    id: 'q5',
    p: '¿Instrumental de "брат"?',
    o: ['братом', 'брата', 'брату', 'братe'],
    c: 'братом',
  },
  {
    id: 'q6',
    p: '"Между нами" (entre nosotros) — "между" rige:',
    o: ['Genitivo', 'Dativo', 'Instrumental', 'Prepositivo'],
    c: 'Instrumental',
  },
  {
    id: 'q7',
    p: '"Он был хорошим студентом." — "студентом" es instrumental porque:',
    o: [
      'Es sujeto',
      'Es predicado con был (pasado de быть)',
      'Es objeto directo',
      'Es complemento de lugar',
    ],
    c: 'Es predicado con был (pasado de быть)',
  },
  {
    id: 'q8',
    p: '¿Instrumental de "Москва"?',
    o: ['Москвы', 'Москву', 'Москвой', 'Москве'],
    c: 'Москвой',
  },
  {
    id: 'q9',
    p: '"Перед домом" (frente a la casa) — "перед" rige:',
    o: ['Genitivo', 'Dativo', 'Instrumental', 'Prepositivo'],
    c: 'Instrumental',
  },
  {
    id: 'q10',
    p: '"С удовольствием!" (¡con mucho gusto!) usa el instrumental porque:',
    o: [
      'Es sujeto',
      'Va con с expresando compañía/modo',
      'Es objeto directo',
      'Hay negación',
    ],
    c: 'Va con с expresando compañía/modo',
  },
];

const usos = [
  {
    uso: 'Instrumento/medio',
    est: 'verbo + instr.',
    ej: 'Писать ручкой.',
    t: 'Escribir con bolígrafo.',
  },
  {
    uso: 'Profesión/predicado',
    est: 'быть/стать/работать + instr.',
    ej: 'Он стал врачом.',
    t: 'Él se convirtió en médico.',
  },
  {
    uso: 'Compañía',
    est: 'с + instr.',
    ej: 'Иду с другом.',
    t: 'Voy con el amigo.',
  },
  {
    uso: 'Tiempo (cuándo)',
    est: 'instr. de tiempo',
    ej: 'Утром, вечером.',
    t: 'Por la mañana, por la tarde.',
  },
  {
    uso: 'Ubicación (за/под/над/перед/между)',
    est: 'prep + instr.',
    ej: 'За домом.',
    t: 'Detrás de la casa.',
  },
];

const decl = [
  { tipo: 'Masc. conson.', nom: 'брат', ins: 'братом' },
  { tipo: 'Masc. -й', nom: 'музей', ins: 'музеем' },
  { tipo: 'Masc. -ь', nom: 'день', ins: 'днём' },
  { tipo: 'Fem. -а', nom: 'сестра', ins: 'сестрой' },
  { tipo: 'Fem. -я', nom: 'неделя', ins: 'неделей' },
  { tipo: 'Fem. -ь', nom: 'ночь', ins: 'ночью' },
  { tipo: 'Neutro -о', nom: 'окно', ins: 'окном' },
];

const cards = [
  {
    ru: 'Он работает учителем.',
    tl: 'On rabotayet uchitelem.',
    es: 'Él trabaja de profesor.',
  },
  {
    ru: 'Писать карандашом.',
    tl: 'Pisatʼ karandashom.',
    es: 'Escribir con lápiz.',
  },
  { ru: 'Я иду с мамой.', tl: 'Ya idu s mamoy.', es: 'Voy con mamá.' },
  { ru: 'За горой.', tl: 'Za goroy.', es: 'Detrás de la montaña.' },
  { ru: 'Утром я бегаю.', tl: 'Utrom ya begayu.', es: 'Por la mañana corro.' },
  { ru: 'С удовольствием!', tl: 'S udovolʼstviem!', es: '¡Con mucho gusto!' },
];

export default function InstrumentalCaseB2Exercise() {
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
          🔧 Caso Instrumental (Творительный падеж)
        </h2>
        <p className="text-htb-text-dim">
          El instrumental indica el{' '}
          <span className="text-htb-green font-bold">
            instrumento, el medio, la profesión (predicado), la compañía (с +
            instr.) y la ubicación
          </span>{' '}
          con preposiciones за/под/над/перед/между.
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
              <h3 className="text-htb-green font-semibold">
                Usos del Instrumental
              </h3>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {usos.map((u, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-3 text-htb-green font-bold text-xs">
                      {u.uso}
                    </td>
                    <td className="py-2 px-3 text-htb-text-dim italic text-xs">
                      {u.est}
                    </td>
                    <td className="py-2 px-3 text-white text-sm"><SpeakableText text={u.ej} /></td>
                    <td className="py-2 px-3 text-htb-text-dim text-xs">
                      {u.t}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Declinación Instrumental Singular
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {decl.map((d, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 py-2 px-4 border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                >
                  <span className="text-htb-text-dim text-xs w-24">
                    {d.tipo}
                  </span>
                  <span className="text-white font-bold"><SpeakableText text={d.nom} /></span>
                  <span className="text-htb-text-dim">→</span>
                  <span className="text-htb-green font-bold">{d.ins}</span>
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
