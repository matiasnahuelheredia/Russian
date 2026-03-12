import React, { useState } from 'react';

const quiz = [
  {
    id: 'q1',
    p: 'El perfecto imperfectivo pasado expresa:',
    o: [
      'acción completada una vez',
      'acción repetida o proceso sin énfasis en resultado',
      'intención futura',
      'estado presente',
    ],
    c: 'acción repetida o proceso sin énfasis en resultado',
  },
  {
    id: 'q2',
    p: '"Он написал письмо." — ¿qué enfatiza?',
    o: [
      'El proceso de escritura',
      'El resultado: la carta está escrita',
      'La duración',
      'La repetición',
    ],
    c: 'El resultado: la carta está escrita',
  },
  {
    id: 'q3',
    p: '"Она читала книгу каждый день." — ¿aspecto?',
    o: ['Perfectivo', 'Imperfectivo', 'Ambos posibles', 'Ninguno'],
    c: 'Imperfectivo',
  },
  {
    id: 'q4',
    p: '"Я уже поел." — "поел" es perfectivo porque:',
    o: [
      'el verbo termina en -ь',
      'indica haber comido (acción completa con resultado)',
      'es un verbo irregular',
      'va con уже siempre',
    ],
    c: 'indica haber comido (acción completa con resultado)',
  },
  {
    id: 'q5',
    p: '"Пока он читал, она готовила." — ¿qué aspecto usan los verbos?',
    o: [
      'ambos perfectivos',
      'ambos imperfectivos',
      'leer perfectivo, cocinar imperfectivo',
      'leer imperfectivo, cocinar perfectivo',
    ],
    c: 'ambos imperfectivos',
  },
  {
    id: 'q6',
    p: '¿En qué se distinguen "делать" y "сделать"?',
    o: [
      'нет разницы',
      'делать = imperfectivo (proceso), сделать = perfectivo (resultado)',
      'сделать es presente',
      'делать es solo pasado',
    ],
    c: 'делать = imperfectivo (proceso), сделать = perfectivo (resultado)',
  },
  {
    id: 'q7',
    p: '"Вчера я долго писал отчёт." — ¿por qué imperfectivo?',
    o: [
      'Porque ayer es tiempo pasado',
      'Porque "долго" indica duración (proceso)',
      'Porque es un sustantivo',
      'Porque es negativo',
    ],
    c: 'Porque "долго" indica duración (proceso)',
  },
  {
    id: 'q8',
    p: '"Врач уже осмотрел пациента." — "осмотрел" es perfectivo porque:',
    o: [
      'va con врач',
      'va con уже (la acción está completada)',
      'tiene prefijo о-',
      'es un verbo médico',
    ],
    c: 'va con уже (la acción está completada)',
  },
  {
    id: 'q9',
    p: '"Она всегда опаздывала." — ¿aspecto lógico?',
    o: ['Perfectivo', 'Imperfectivo', 'Cualquiera', 'Solo presente'],
    c: 'Imperfectivo',
  },
  {
    id: 'q10',
    p: 'Los prefijos (на-, по-, за-, вы-) generalmente crean verbos:',
    o: ['imperfectivos', 'perfectivos', 'mixtos', 'sin cambio de aspecto'],
    c: 'perfectivos',
  },
];

const tabla = [
  {
    asp: 'Imperfectivo',
    uso: 'Proceso, duración, repetición, estado',
    senal: 'всегда, часто, долго, пока, каждый день',
    ej: 'Он писал письмо (Process)',
    color: 'text-blue-400',
  },
  {
    asp: 'Perfectivo',
    uso: 'Acción completada, resultado, acción única',
    senal: 'уже, вдруг, однажды, сразу, наконец',
    ej: 'Он написал письмо (Done)',
    color: 'text-htb-green',
  },
];

const pares = [
  { imp: 'писать', perf: 'написать', es: 'escribir' },
  { imp: 'читать', perf: 'прочитать', es: 'leer' },
  { imp: 'делать', perf: 'сделать', es: 'hacer' },
  { imp: 'говорить', perf: 'сказать', es: 'decir (hablar)' },
  { imp: 'покупать', perf: 'купить', es: 'comprar' },
  { imp: 'приходить', perf: 'прийти', es: 'venir, llegar' },
];

const cards = [
  {
    ru: 'Я читал эту книгу всё лето.',
    tl: 'Ya chital etu knigu vsyo leto.',
    es: 'Leí (estuve leyendo) ese libro todo el verano. (proceso)',
  },
  {
    ru: 'Я прочитал эту книгу за неделю.',
    tl: 'Ya prochital etu knigu za nedelyu.',
    es: 'Leí ese libro en una semana. (completado)',
  },
  {
    ru: 'Она всегда опаздывала на работу.',
    tl: 'Ona vsegda opazdyvala na rabotu.',
    es: 'Siempre llegaba tarde al trabajo. (repetición)',
  },
  {
    ru: 'Вдруг он вспомнил её имя.',
    tl: 'Vdrug on vspomnil eyo imya.',
    es: 'De repente recordó su nombre. (acción única)',
  },
  {
    ru: 'Пока он готовил, она убирала.',
    tl: 'Poka on gotovil, ona ubírala.',
    es: 'Mientras él cocinaba, ella limpiaba. (proceso simultáneo)',
  },
  {
    ru: 'Наконец, он сдал экзамен.',
    tl: 'Nakonets, on sdal ekzamen.',
    es: 'Por fin aprobó el examen. (resultado)',
  },
];

export default function AspectoPasadoB1Exercise() {
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
          🔁 Aspecto verbal en el pasado B1
        </h2>
        <p className="text-htb-text-dim">
          La elección de aspecto cambia el significado.{' '}
          <span className="text-blue-400 font-bold">Imperfectivo</span>:
          proceso/repetición.{' '}
          <span className="text-htb-green font-bold">Perfectivo</span>:
          resultado/acción completa. Señales clave: всегда/долго → imp.;
          уже/вдруг → perf.
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
          {tabla.map((t, i) => (
            <div
              key={i}
              className={`bg-htb-card rounded-lg border border-gray-800 p-4`}
            >
              <p className={`font-bold text-lg mb-1 ${t.color}`}>{t.asp}</p>
              <p className="text-white text-sm">{t.uso}</p>
              <p className="text-htb-text-dim text-xs">
                Señales: <span className="text-yellow-400">{t.senal}</span>
              </p>
              <p className="text-htb-text-dim text-xs mt-1 italic">{t.ej}</p>
            </div>
          ))}
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Pares imperfectivo / perfectivo
              </h3>
            </div>
            {pares.map((p, i) => (
              <div
                key={i}
                className={`py-2 px-4 border-b border-gray-800 flex items-center gap-4 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
              >
                <span className="text-blue-400 w-24 font-bold">{p.imp}</span>
                <span className="text-htb-text-dim">→</span>
                <span className="text-htb-green w-24 font-bold">{p.perf}</span>
                <span className="text-white text-sm">{p.es}</span>
              </div>
            ))}
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
