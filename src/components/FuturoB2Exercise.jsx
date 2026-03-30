import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const reference = [
  {
    title: 'Futuro imperfectivo (составное) — acción continua/repetida',
    items: [
      'буду / будешь / будет / будем / будете / будут + Infinitivo imperfectivo.',
      'Я буду читать. — Estaré leyendo / Voy a leer (proceso).',
      'Мы будем работать каждый день. — Trabajaremos cada día.',
      'Uso: acción en proceso, habitual o sin límite temporal en el futuro.',
    ],
  },
  {
    title: 'Futuro perfectivo (simple) — acción completada',
    items: [
      'Se conjuga igual que el presente pero con verbos perfectivos.',
      'Я прочитаю. — Leeré (y terminaré). Он напишет. — Escribirá (y terminará).',
      'Мы придём. — Llegaremos. Они сделают. — Lo harán.',
      'Uso: resultado concreto, acción única y completa en el futuro.',
    ],
  },
  {
    title: 'Contraste esencial',
    items: [
      'Impf.: Завтра я буду читать книгу. (proceso, sin énfasis en terminar)',
      'Pf.: Завтра я прочитаю книгу. (la terminaré)',
      'Impf.: Каждый вечер я буду смотреть фильмы. (hábito futuro)',
      'Pf.: Сегодня вечером я посмотрю фильм. (un film específico, resultado)',
    ],
  },
  {
    title: 'Verbos auxiliares del futuro',
    items: [
      'быть (ser/estar) → budu, budesh, budet anf пр. — sólo con impf.',
      'стать (ponerse a) → стану + Inf. impf. — inicio planificado.',
      'собираться + Inf. — tener intención de: Я собираюсь поехать.',
    ],
  },
];

const quiz = [
  {
    id: 'q1',
    p: '"Я буду читать" es futuro:',
    o: [
      'perfectivo simple',
      'imperfectivo compuesto',
      'imperativo',
      'condicional',
    ],
    c: 'imperfectivo compuesto',
  },
  {
    id: 'q2',
    p: '"Я прочитаю книгу" indica:',
    o: [
      'leeré el libro sin completarlo',
      'leeré y terminaré el libro',
      'estaba leyendo',
      'leía habitualmente',
    ],
    c: 'leeré y terminaré el libro',
  },
  {
    id: 'q3',
    p: 'Para expresar un hábito futuro ("estudiaré todos los días") se usa:',
    o: [
      'futuro perfectivo',
      'futuro imperfectivo compuesto',
      'presente imperfectivo',
      'imperativo',
    ],
    c: 'futuro imperfectivo compuesto',
  },
  {
    id: 'q4',
    p: '"Мы придём" es el futuro de "приходить/прийти". ¿Es simple o compuesto?',
    o: [
      'compuesto (буду + inf.)',
      'simple (perfectivo conjugado)',
      'ambos son posibles',
      'ninguno',
    ],
    c: 'simple (perfectivo conjugado)',
  },
  {
    id: 'q5',
    p: '"Я собираюсь поехать" expresa:',
    o: ['obligación', 'intención / plan', 'resultado inmediato', 'permiso'],
    c: 'intención / plan',
  },
  {
    id: 'q6',
    p: '¿Qué forma dice "voy a escribir el informe (y terminarlo)"?',
    o: ['буду писать отчёт', 'напишу отчёт', 'пишу отчёт', 'написал отчёт'],
    c: 'напишу отчёт',
  },
  {
    id: 'q7',
    p: 'El futuro imperfectivo compuesto se forma con:',
    o: [
      'быть (pasado) + inf.',
      'буду/будешь... + infinitivo imperfectivo',
      'стать + pasado',
      'хочу + inf.',
    ],
    c: 'буду/будешь... + infinitivo imperfectivo',
  },
  {
    id: 'q8',
    p: '"Завтра мы будем гулять в парке" — énfasis en:',
    o: [
      'el resultado del paseo',
      'el proceso/duración del paseo',
      'la obligación de pasear',
      'el inicio del paseo',
    ],
    c: 'el proceso/duración del paseo',
  },
  {
    id: 'q9',
    p: '"Они сделают домашнее задание" — ¿perfectivo o imperfectivo?',
    o: [
      'imperfectivo',
      'perfectivo',
      'neutro, depende del contexto',
      'es un gerundio',
    ],
    c: 'perfectivo',
  },
  {
    id: 'q10',
    p: 'Para decir "cada mañana beberé café" (hábito), la forma correcta es:',
    o: [
      'выпью кофе каждое утро',
      'буду пить кофе каждое утро',
      'пил кофе каждое утро',
      'пью кофе каждое утро',
    ],
    c: 'буду пить кофе каждое утро',
  },
];

export default function FuturoB2Exercise() {
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
          ⏩ Tiempo Futuro B2 (Будущее время)
        </h2>
        <p className="text-htb-text-dim">
          Contraste esencial:{' '}
          <span className="text-htb-green font-bold"><SpeakableText text="буду + Inf.impf." /></span>{' '}
          (proceso/hábito) vs{' '}
          <span className="text-blue-400 font-bold">Pf. conjugado </span>{' '}
          (resultado concreto).
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
