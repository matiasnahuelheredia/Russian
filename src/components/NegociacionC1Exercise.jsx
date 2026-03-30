import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const phrases = [
  {
    cat: 'Proponer y sugerir',
    items: [
      {
        ru: 'Предлагаю рассмотреть вариант...',
        tl: 'Predlagayu rassmotretʼ variant...',
        es: 'Propongo considerar la opción...',
      },
      {
        ru: 'Могу предложить следующее解决 решение:',
        tl: 'Mogu predlozhitʼ sleduyushcheye resheniye:',
        es: 'Puedo proponer la siguiente solución:',
      },
      {
        ru: 'Было бы целесообразно + Inf.',
        tl: 'Bylo by tselesoobrazno...',
        es: 'Sería conveniente / razonable + Inf.',
      },
      {
        ru: 'Думаю, стоит + Inf.',
        tl: 'Dumayu, stoit...',
        es: 'Creo que vale la pena + Inf.',
      },
    ],
  },
  {
    cat: 'Persuadir / convencer',
    items: [
      {
        ru: 'Уверен(а), что это выгодно для обеих сторон.',
        tl: 'Uveren(a), chto eto vygodno...',
        es: 'Estoy seguro/a de que esto es beneficioso para ambas partes.',
      },
      {
        ru: 'Это позволит нам + Inf.',
        tl: 'Eto pozvolit nam...',
        es: 'Esto nos permitirá + Inf.',
      },
      {
        ru: 'Мы могли бы взаимовыгодно сотрудничать.',
        tl: 'My mogli by vzaimovygodno sotrudnichatʼ.',
        es: 'Podríamos cooperar con beneficio mutuo.',
      },
    ],
  },
  {
    cat: 'Condiciones y compromisos',
    items: [
      {
        ru: 'При условии, что ...',
        tl: 'Pri uslovii, chto...',
        es: 'Con la condición de que ...',
      },
      {
        ru: 'Мы готовы + Inf., если ...',
        tl: 'My gotovy... yesli...',
        es: 'Estamos dispuestos a... si ...',
      },
      {
        ru: 'Давайте договоримся о том, что ...',
        tl: 'Davayte dogovorimsya o tom, chto...',
        es: 'Lleguemos a un acuerdo sobre que ...',
      },
      {
        ru: 'Мы принимаем это при условии, что ...',
        tl: 'My prinimaem eto pri uslovii, chto...',
        es: 'Aceptamos esto con la condición de que ...',
      },
    ],
  },
  {
    cat: 'Rechazar / aplazar',
    items: [
      {
        ru: 'К сожалению, это для нас неприемлемо.',
        tl: 'K sozhaleniyu, eto nepriemlemо.',
        es: 'Lamentablemente, esto no es aceptable para nosotros.',
      },
      {
        ru: 'Нам нужно больше времени, чтобы подумать.',
        tl: 'Nam nuzhno bolʼshe vremeni...',
        es: 'Necesitamos más tiempo para reflexionar.',
      },
      {
        ru: 'Предлагаю вернуться к этому вопросу позже.',
        tl: 'Predlagayu vernutʼsya k etomu voprosu...',
        es: 'Propongo retomar este punto más adelante.',
      },
    ],
  },
  {
    cat: 'Llegar a un acuerdo',
    items: [
      {
        ru: 'Итак, мы договорились о том, что ...',
        tl: 'Itak, my dogovorilisʼ o tom, chto...',
        es: 'Así pues, hemos acordado que ...',
      },
      {
        ru: 'Обе стороны согласны с тем, что ...',
        tl: 'Obe storony soglasny s tem, chto...',
        es: 'Ambas partes están de acuerdo en que ...',
      },
      {
        ru: 'Мы нашли компромисс.',
        tl: 'My nashli kompromiss.',
        es: 'Hemos llegado a un compromiso.',
      },
    ],
  },
];

const quiz = [
  {
    id: 'q1',
    p: '"При условии, что..." es una expresión de:',
    o: ['causa', 'finalidad', 'condición', 'concesión'],
    c: 'condición',
  },
  {
    id: 'q2',
    p: '"Было бы целесообразно + Inf." equivale a:',
    o: [
      'es obligatorio',
      'sería conveniente / razonable',
      'quiero',
      'me niego a',
    ],
    c: 'sería conveniente / razonable',
  },
  {
    id: 'q3',
    p: '"Мы готовы + Inf., если..." expresa:',
    o: [
      'rechazo definitivo',
      'disposición condicionada',
      'obligación sin condición',
      'sugerencia',
    ],
    c: 'disposición condicionada',
  },
  {
    id: 'q4',
    p: '"Итак, мы договорились о том, что..." se usa para:',
    o: [
      'abrir la negociación',
      'rechazar una propuesta',
      'confirmar un acuerdo alcanzado',
      'pedir más tiempo',
    ],
    c: 'confirmar un acuerdo alcanzado',
  },
  {
    id: 'q5',
    p: '"Это позволит нам + Inf." sirve para:',
    o: [
      'rechazar',
      'pedir información',
      'persuadir mostrando un beneficio',
      'establecer una condición',
    ],
    c: 'persuadir mostrando un beneficio',
  },
  {
    id: 'q6',
    p: '"К сожалению, это для нас неприемлемо" equivale a:',
    o: [
      'Con la condición de...',
      'Estamos de acuerdo',
      'Lamentablemente, esto no es aceptable para nosotros',
      'Propongo retomar este punto',
    ],
    c: 'Lamentablemente, esto no es aceptable para nosotros',
  },
  {
    id: 'q7',
    p: '"Предлагаю вернуться к этому вопросу позже" sirve para:',
    o: [
      'cerrar definitivamente',
      'aplazar la discusión de un punto',
      'conceder de inmediato',
      'introducir un nuevo tema',
    ],
    c: 'aplazar la discusión de un punto',
  },
  {
    id: 'q8',
    p: '"Мы нашли компромисс" significa:',
    o: [
      'No hemos llegado a ningún acuerdo',
      'Hemos llegado a un compromiso',
      'Rechazamos la propuesta',
      'Necesitamos más tiempo',
    ],
    c: 'Hemos llegado a un compromiso',
  },
  {
    id: 'q9',
    p: '"Давайте договоримся о том, что..." — ¿qué caso sigue "о том"?',
    o: ['Accusativo', 'Dativo', 'Prepositivo (о + Prep.)', 'Genitivo'],
    c: 'Prepositivo (о + Prep.)',
  },
  {
    id: 'q10',
    p: '"Думаю, стоит поговорить об этом." — "стоит" aquí expresa:',
    o: [
      'costar dinero',
      'vale la pena / merece la pena',
      'obligación',
      'posibilidad',
    ],
    c: 'vale la pena / merece la pena',
  },
];

export default function NegociacionC1Exercise() {
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
          🤝 Negociación y Persuasión C1 (Переговоры)
        </h2>
        <p className="text-htb-text-dim">
          Lenguaje formal para negociar. Clave:{' '}
          <span className="text-htb-green font-bold">При условии, что...</span>{' '}
          (condición) ·{' '}
          <span className="text-blue-400 font-bold">Было бы целесообразно</span>{' '}
          (sugerencia formal) ·{' '}
          <span className="text-yellow-400 font-bold">Мы нашли компромисс</span>{' '}
          (acuerdo).
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
