import React, { useState } from 'react';

const phrases = [
  {
    cat: 'Introducir tu opinión',
    items: [
      {
        ru: 'По моему мнению, ...',
        tl: 'Po moyemu mneniyu...',
        es: 'En mi opinión, ...',
      },
      {
        ru: 'Я считаю, что ...',
        tl: 'Ya schitayu, chto...',
        es: 'Considero que ...',
      },
      {
        ru: 'На мой взгляд, ...',
        tl: 'Na moy vzglyad...',
        es: 'Desde mi punto de vista, ...',
      },
      {
        ru: 'Я убеждён(а), что ...',
        tl: 'Ya ubezhdyon(a), chto...',
        es: 'Estoy convencido/a de que ...',
      },
    ],
  },
  {
    cat: 'Contraargumentar',
    items: [
      {
        ru: 'Я не согласен/согласна с тем, что ...',
        tl: 'Ya ne soglasen/soglasna...',
        es: 'No estoy de acuerdo con que ...',
      },
      {
        ru: 'Это спорный вопрос, потому что ...',
        tl: 'Eto spornyy vopros...',
        es: 'Es un tema discutible porque ...',
      },
      {
        ru: 'Тем не менее, ...',
        tl: 'Tem ne meneye...',
        es: 'Sin embargo, ...',
      },
      {
        ru: 'С одной стороны... с другой стороны...',
        tl: 'S odnoy storony... s drugoy...',
        es: 'Por un lado... por otro lado...',
      },
    ],
  },
  {
    cat: 'Apoyar con argumentos',
    items: [
      {
        ru: 'Это подтверждается тем, что ...',
        tl: 'Eto podtverzhdayetsya tem, chto...',
        es: 'Esto se confirma por el hecho de que ...',
      },
      {
        ru: 'Доводы в пользу этого: ...',
        tl: 'Dovody v polʼzu etogo...',
        es: 'Los argumentos a favor son: ...',
      },
      {
        ru: 'Следовательно, ...',
        tl: 'Sledovatelʼno...',
        es: 'Por tanto / En consecuencia, ...',
      },
      {
        ru: 'Из этого следует, что ...',
        tl: 'Iz etogo sleduyet, chto...',
        es: 'De esto se desprende que ...',
      },
    ],
  },
  {
    cat: 'Conceder y matizar',
    items: [
      {
        ru: 'Я согласен(а) с тем, что..., однако ...',
        tl: 'Ya soglasen... odnako...',
        es: 'Coincido en que..., pero ...',
      },
      {
        ru: 'Хотя это верно, всё же ...',
        tl: 'Khotya eto verno, vsyo zhe...',
        es: 'Aunque esto es cierto, aun así ...',
      },
      {
        ru: 'Это важный момент, и тем не менее ...',
        tl: 'Eto vazhnyy moment...',
        es: 'Es un punto importante, y sin embargo ...',
      },
    ],
  },
  {
    cat: 'Concluir',
    items: [
      {
        ru: 'Подводя итоги, можно сказать, что ...',
        tl: 'Podvodya itogi...',
        es: 'Resumiendo, se puede decir que ...',
      },
      {
        ru: 'В заключение отмечу, что ...',
        tl: 'V zaklyuchenie otmechu, chto...',
        es: 'Para concluir, señalaré que ...',
      },
      {
        ru: 'Таким образом, ...',
        tl: 'Takim obrazom...',
        es: 'Así pues / De este modo, ...',
      },
    ],
  },
];

const quiz = [
  {
    id: 'q1',
    p: '"На мой взгляд" equivale a:',
    o: [
      'En mi opinión / Desde mi punto de vista',
      'Estoy de acuerdo',
      'Sin embargo',
      'Por tanto',
    ],
    c: 'En mi opinión / Desde mi punto de vista',
  },
  {
    id: 'q2',
    p: '"Тем не менее" en un debate sirve para:',
    o: [
      'introducir tu opinión',
      'concluir',
      'contraargumentar / introducir contraste',
      'apoyar un argumento',
    ],
    c: 'contraargumentar / introducir contraste',
  },
  {
    id: 'q3',
    p: '"Следовательно" equivale a:',
    o: ['sin embargo', 'por un lado', 'por tanto / en consecuencia', 'aunque'],
    c: 'por tanto / en consecuencia',
  },
  {
    id: 'q4',
    p: '"С одной стороны... с другой стороны..." sirve para:',
    o: [
      'concluir',
      'presentar dos perspectivas contrastadas',
      'citar fuentes',
      'pedir aclaraciones',
    ],
    c: 'presentar dos perspectivas contrastadas',
  },
  {
    id: 'q5',
    p: '"Я убеждён(а), что..." expresa:',
    o: ['duda', 'convicción / certeza', 'concesión', 'sorpresa'],
    c: 'convicción / certeza',
  },
  {
    id: 'q6',
    p: '"Подводя итоги, можно сказать, что..." se usa para:',
    o: [
      'introducir el debate',
      'refutar un argumento',
      'resumir/concluir',
      'pedir turno de palabra',
    ],
    c: 'resumir/concluir',
  },
  {
    id: 'q7',
    p: '"Я не согласен/согласна с тем, что..." — ¿qué caso / modo sigue?',
    o: [
      'Nominativo',
      'Instrumentale + Infinitivo',
      'чтобы + Pasado',
      'que + Indicativo (en ruso: что + Indicativo)',
    ],
    c: 'que + Indicativo (en ruso: что + Indicativo)',
  },
  {
    id: 'q8',
    p: '"Хотя это верно, всё же..." es una estructura de:',
    o: ['causa', 'concesión + contraste', 'condición', 'finalidad'],
    c: 'concesión + contraste',
  },
  {
    id: 'q9',
    p: '"Из этого следует, что..." significa:',
    o: [
      'A pesar de esto...',
      'De esto se desprende que...',
      'Sobre todo...',
      'Por ejemplo...',
    ],
    c: 'De esto se desprende que...',
  },
  {
    id: 'q10',
    p: '"В заключение отмечу, что..." es apropiado:',
    o: [
      'al inicio del debate',
      'cuando introduces un ejemplo',
      'al final para concluir',
      'cuando pides la palabra',
    ],
    c: 'al final para concluir',
  },
];

export default function DebateC1Exercise() {
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
          🗣️ Debate y Argumentación C1 (Дискуссия)
        </h2>
        <p className="text-htb-text-dim">
          Expresiones para debatir en ruso formal. Clave:{' '}
          <span className="text-htb-green font-bold">
            По моему мнению / На мой взгляд
          </span>{' '}
          (opinión) ·{' '}
          <span className="text-blue-400 font-bold">Тем не менее</span>{' '}
          (contraste) ·{' '}
          <span className="text-yellow-400 font-bold">Следовательно</span>{' '}
          (conclusión).
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
          {phrases.map((sec, i) => (
            <div
              key={i}
              className="bg-htb-card rounded-lg border border-gray-800 p-4"
            >
              <h3 className="text-htb-green font-bold mb-3">{sec.cat}</h3>
              <div className="space-y-2">
                {sec.items.map((item, j) => (
                  <div key={j} className="flex gap-3 items-start">
                    <span className="text-htb-green mt-0.5">▸</span>
                    <div>
                      <p className="text-white font-medium text-sm">
                        {item.ru}
                      </p>
                      <p className="text-htb-text-dim text-xs italic">
                        {item.tl}
                      </p>
                      <p className="text-blue-300 text-xs">{item.es}</p>
                    </div>
                  </div>
                ))}
              </div>
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
