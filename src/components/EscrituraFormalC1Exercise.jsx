import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const phrases = [
  {
    cat: 'Estructura del texto argumentativo',
    items: [
      {
        ru: 'Введение: Проблема ... заслуживает особого внимания.',
        tl: 'Problema... zasluzhivaet osobogo vnimaniya.',
        es: 'Introducción: El problema de... merece especial atención.',
      },
      {
        ru: 'Тезис: Я утверждаю, что ...',
        tl: 'Ya utverzhDAYu, chto...',
        es: 'Tesis: Afirmo / Sostengo que ...',
      },
      {
        ru: 'Аргумент + пример: Во-первых,... Например, ...',
        tl: 'Vo-pervykh... Naprimer...',
        es: 'Argumento + ejemplo: En primer lugar,... Por ejemplo,...',
      },
      {
        ru: 'Вывод: Таким образом, можно сделать вывод, что ...',
        tl: 'Takim obrazom, mozhno sdelatʼ vyvod, chto...',
        es: 'Conclusión: Así pues, se puede concluir que ...',
      },
    ],
  },
  {
    cat: 'Conectores formales escritos',
    items: [
      {
        ru: 'Во-первых ... во-вторых ... в-третьих ...',
        tl: 'Vo-pervykh... vo-vtorykh... v-tretʼikh...',
        es: 'En primer lugar... en segundo lugar... en tercer lugar...',
      },
      {
        ru: 'Более того, ...',
        tl: 'Boleye togo...',
        es: 'Es más / Además de eso, ...',
      },
      {
        ru: 'Следует также отметить, что ...',
        tl: 'Sleduyet takzhe otmetitʼ, chto...',
        es: 'Cabe señalar también que ...',
      },
      {
        ru: 'Вопреки распространённому мнению, ...',
        tl: 'Voproki rasprostranённomu mneniyu...',
        es: 'Contrariamente a la opinión generalizada, ...',
      },
    ],
  },
  {
    cat: 'Citar fuentes y datos',
    items: [
      {
        ru: 'Согласно данным исследования, ...',
        tl: 'Soglasno dannym issledovaniya...',
        es: 'Según los datos de la investigación, ...',
      },
      {
        ru: 'Как показывают статистические данные, ...',
        tl: 'Kak pokazyvayut statisticheskiye dannye...',
        es: 'Como muestran los datos estadísticos, ...',
      },
      {
        ru: 'По мнению экспертов, ...',
        tl: 'Po mneniyu ekspertov...',
        es: 'En opinión de los expertos, ...',
      },
    ],
  },
  {
    cat: 'Expresar reservas y matices',
    items: [
      {
        ru: 'Необходимо признать, что ... тем не менее ...',
        tl: 'Neobkhodimo priznatʼ, chto... tem ne meneye...',
        es: 'Hay que reconocer que... sin embargo...',
      },
      {
        ru: 'Это утверждение верно лишь отчасти.',
        tl: 'Eto utverzhdeniye verno lishʼ otchasti.',
        es: 'Esta afirmación sólo es parcialmente cierta.',
      },
      {
        ru: 'Нельзя не учитывать тот факт, что ...',
        tl: 'Nelʼzya ne uchityvatʼ tot fakt, chto...',
        es: 'No se puede ignorar el hecho de que ...',
      },
    ],
  },
];

const quiz = [
  {
    id: 'q1',
    p: '"Я утверждаю, что..." es la formulación de la:',
    o: ['conclusión', 'introducción', 'tesis', 'contraargumento'],
    c: 'tesis',
  },
  {
    id: 'q2',
    p: '"Более того" en un texto formal equivale a:',
    o: [
      'sin embargo',
      'en primer lugar',
      'es más / además de eso',
      'a pesar de que',
    ],
    c: 'es más / además de eso',
  },
  {
    id: 'q3',
    p: '"Согласно данным исследования" rige el caso:',
    o: ['Nominativo', 'Dativo', 'Genitivo', 'Instrumental'],
    c: 'Genitivo',
  },
  {
    id: 'q4',
    p: '"Следует также отметить, что..." en un informe sirve para:',
    o: [
      'refutar un argumento',
      'añadir un punto relevante con formalidad',
      'agradecer',
      'pedir información',
    ],
    c: 'añadir un punto relevante con formalidad',
  },
  {
    id: 'q5',
    p: '"Вопреки распространённому мнению" equivale a:',
    o: [
      'según la opinión generalizada',
      'contrariamente a la opinión generalizada',
      'de acuerdo con los expertos',
      'en resumidas cuentas',
    ],
    c: 'contrariamente a la opinión generalizada',
  },
  {
    id: 'q6',
    p: '"Таким образом, можно сделать вывод, что..." es la fórmula de:',
    o: ['introducción', 'tesis inicial', 'conclusión final', 'ejemplo'],
    c: 'conclusión final',
  },
  {
    id: 'q7',
    p: '"Нельзя не учитывать тот факт, что..." — esta doble negación en ruso expresa:',
    o: [
      'prohibición total',
      'énfasis afirmativo (hay que tener en cuenta)',
      'duda fuerte',
      'ironía',
    ],
    c: 'énfasis afirmativo (hay que tener en cuenta)',
  },
  {
    id: 'q8',
    p: 'El orden "Во-первых... во-вторых... в-третьих..." sirve para:',
    o: [
      'introducir ejemplos',
      'enumerar argumentos con estructura formal',
      'citar fuentes',
      'resumir',
    ],
    c: 'enumerar argumentos con estructura formal',
  },
  {
    id: 'q9',
    p: '"Это утверждение верно лишь отчасти." — "лишь" equivale a:',
    o: ['especialmente', 'sobre todo', 'sólo / únicamente', 'casi'],
    c: 'sólo / únicamente',
  },
  {
    id: 'q10',
    p: '"По мнению экспертов" usa el caso ___ en "мнению":',
    o: ['Nominativo', 'Genitivo', 'Dativo', 'Instrumental'],
    c: 'Dativo',
  },
];

export default function EscrituraFormalC1Exercise() {
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
          ✍️ Escritura Formal C1 (Письменная аргументация)
        </h2>
        <p className="text-htb-text-dim">
          Estructura y conectores para textos argumentativos formales. Esquema:{' '}
          <span className="text-htb-green font-bold">
            Тезис → Аргументы (Во-первых…) → Данные → Вывод
          </span>
          .
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
                        <SpeakableText text={item.ru} />
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
