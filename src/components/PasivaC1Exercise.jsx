import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const quiz = [
  {
    id: 'q1',
    p: 'La voz pasiva en ruso se forma más comúnmente con:',
    o: [
      'ser + gerundio',
      'forma corta del participio pasivo',
      'infinitivo + быть',
      'reflexivo -ся pasivo',
    ],
    c: 'forma corta del participio pasivo',
  },
  {
    id: 'q2',
    p: '"Письмо написано мной." — "написано" es:',
    o: [
      'participio activo presente',
      'participio pasivo corto (neutro)',
      'gerundio perfecto',
      'adjetivo verbal',
    ],
    c: 'participio pasivo corto (neutro)',
  },
  {
    id: 'q3',
    p: 'El agente de la voz pasiva en ruso va en caso:',
    o: ['Nominativo', 'Acusativo', 'Dativo', 'Instrumental'],
    c: 'Instrumental',
  },
  {
    id: 'q4',
    p: '"Книга прочитана учеником." — ¿cuál es el sujeto lógico activo?',
    o: ['книга', 'прочитана', 'учеником', 'no hay sujeto'],
    c: 'учеником',
  },
  {
    id: 'q5',
    p: '"Дом строится рабочими." — "-ся" aquí es:',
    o: [
      'reflexivo real',
      'pasiva reflexiva (imperfectiva)',
      'voz media',
      'voz causativa',
    ],
    c: 'pasiva reflexiva (imperfectiva)',
  },
  {
    id: 'q6',
    p: '"Открыт/открыта/открыто/открыты" son formas cortas de:',
    o: [
      'открывать (imperfectivo)',
      'открытый (participio de открыть)',
      'открытый adjetivo largo',
      'открываясь gerundio',
    ],
    c: 'открытый (participio de открыть)',
  },
  {
    id: 'q7',
    p: '"Задание выполнено." — ¿qué transmite esta pasiva?',
    o: [
      'proceso en curso',
      'estado resultante (ya completado)',
      'mandato',
      'hipótesis',
    ],
    c: 'estado resultante (ya completado)',
  },
  {
    id: 'q8',
    p: 'Para la pasiva de proceso (imperfectiva) se usa preferentemente:',
    o: [
      'participio corto perfectivo',
      '-ся + verbo imperfectivo',
      'быть + infinitivo',
      'gerundio imperfectivo',
    ],
    c: '-ся + verbo imperfectivo',
  },
  {
    id: 'q9',
    p: '"Эта книга читается легко." — esta construcción equivale a:',
    o: [
      'Este libro se lee fácilmente.',
      'Este libro lo leí fácilmente.',
      'Este libro fue leído.',
      'Este libro es difícil de leer.',
    ],
    c: 'Este libro se lee fácilmente.',
  },
  {
    id: 'q10',
    p: '"Он был приглашён на вечеринку." — ¿qué tiempo es?',
    o: [
      'Presente pasivo',
      'Pasado pasivo (perfectivo, estado resultante)',
      'Futuro pasivo',
      'Participio activo pasado',
    ],
    c: 'Pasado pasivo (perfectivo, estado resultante)',
  },
];

const formas = [
  {
    d: 'Pasiva resultante (perf.)',
    e: 'Participio pasivo corto',
    ej: 'Дверь открыта. (La puerta está abierta.)',
    col: 'text-htb-green',
  },
  {
    d: 'Pasiva de proceso (imp.)',
    e: '-ся + verbo imperfectivo',
    ej: 'Дом строится. (La casa se está construyendo.)',
    col: 'text-blue-400',
  },
  {
    d: 'Pasiva formal escrita',
    e: 'быть + participio corto',
    ej: 'Закон был принят. (La ley fue aprobada.)',
    col: 'text-yellow-400',
  },
  {
    d: 'Agente de la acción',
    e: 'Instrumental',
    ej: 'Письмо написано мной. (La carta fue escrita por mí.)',
    col: 'text-pink-400',
  },
];

const cards = [
  {
    ru: 'Дверь открыта.',
    tl: 'Dverʼ otkryta.',
    es: 'La puerta está abierta. (pasiva resultante)',
  },
  {
    ru: 'Письмо было написано вчера.',
    tl: 'Pisʼmo bylo napisano vchera.',
    es: 'La carta fue escrita ayer.',
  },
  {
    ru: 'Эта книга читается очень легко.',
    tl: 'Eta kniga chitayetsya ochen legko.',
    es: 'Este libro se lee muy fácilmente.',
  },
  {
    ru: 'Задание выполнено.',
    tl: 'Zadaniye vypolneno.',
    es: 'La tarea está (ha sido) completada.',
  },
  {
    ru: 'Он был приглашён на конференцию.',
    tl: 'On byl priglashyon na konferentsiyu.',
    es: 'Fue invitado a la conferencia.',
  },
  {
    ru: 'Дом строится рабочими.',
    tl: 'Dom stroitsya rabochimi.',
    es: 'La casa está siendo construida por obreros.',
  },
];

export default function PasivaC1Exercise() {
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
          🔄 Voz Pasiva (Страдательный залог)
        </h2>
        <p className="text-htb-text-dim">
          El ruso usa principalmente{' '}
          <span className="text-htb-green font-bold">
            participios pasivos cortos
          </span>{' '}
          (para estados resultantes) y{' '}
          <span className="text-blue-400 font-bold"><SpeakableText text="-ся" /></span> (para procesos
          pasivos). El agente siempre en instrumental.
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
        <div className="space-y-3">
          {formas.map((f, i) => (
            <div
              key={i}
              className="bg-htb-card rounded-lg border border-gray-800 p-4"
            >
              <p className={`font-bold mb-1 ${f.col}`}><SpeakableText text={f.d} /></p>
              <p className="text-htb-text-dim text-xs mb-2">
                Forma: <span className="text-white"><SpeakableText text={f.e} /></span>
              </p>
              <p className="text-white text-sm"><SpeakableText text={f.ej} /></p>
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
