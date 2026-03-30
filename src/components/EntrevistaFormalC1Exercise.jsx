import React, { useState } from 'react';

const phrases = [
  {
    cat: 'Comenzar la entrevista (candidato)',
    items: [
      {
        ru: 'Добрый день! Меня зовут ... Я пришёл(а) на собеседование.',
        tl: 'Dobryy denʼ! Menya zovut... Ya prishyol(a) na sobesedovaniye.',
        es: '¡Buenos días! Me llamo... He venido a la entrevista.',
      },
      {
        ru: 'Спасибо, что пригласили меня на встречу.',
        tl: 'Spasibo, chto priglasili menya na vstrechu.',
        es: 'Gracias por invitarme a esta reunión.',
      },
      {
        ru: 'Я заинтересован(а) в этой должности, потому что ...',
        tl: 'Ya zainteresovan(a) v etoy dolzhnosti...',
        es: 'Estoy interesado/a en este puesto porque...',
      },
    ],
  },
  {
    cat: 'Hablar de experiencia y habilidades',
    items: [
      {
        ru: 'У меня ... лет опыта в сфере ...',
        tl: 'U menya ... let opyta v sfere...',
        es: 'Tengo ... años de experiencia en el área de...',
      },
      {
        ru: 'Я специализируюсь на ...',
        tl: 'Ya spetsializiruyusʼ na...',
        es: 'Me especializo en...',
      },
      {
        ru: 'Среди моих сильных сторон — ...',
        tl: 'Sredi moikh silʼnykh storon—',
        es: 'Entre mis puntos fuertes se encuentran...',
      },
      {
        ru: 'В своей предыдущей должности я отвечал(а) за ...',
        tl: 'V svoey predydushchey dolzhnosti ya otвечал(а) za...',
        es: 'En mi puesto anterior era responsable de...',
      },
    ],
  },
  {
    cat: 'Preguntas del entrevistador',
    items: [
      {
        ru: 'Расскажите о себе.',
        tl: 'Rasskazhite o sebe.',
        es: 'Hábleme de usted.',
      },
      {
        ru: 'Каковы ваши профессиональные цели?',
        tl: 'Kakovy vashi professionalʼnye tseli?',
        es: '¿Cuáles son sus objetivos profesionales?',
      },
      {
        ru: 'Почему вы хотите работать у нас?',
        tl: 'Pochemu vy khotite rabotatʼ u nas?',
        es: '¿Por qué quiere trabajar con nosotros?',
      },
      {
        ru: 'Каковы ваши ожидания по зарплате?',
        tl: 'Kakovy vashi ozhdaniya po zarplate?',
        es: '¿Cuáles son sus expectativas salariales?',
      },
    ],
  },
  {
    cat: 'Respuestas formales útiles',
    items: [
      {
        ru: 'Я готов(а) к любым профессиональным вызовам.',
        tl: 'Ya gotov(a) k lyubym professionalʼnym vyzovam.',
        es: 'Estoy preparado/a para cualquier desafío profesional.',
      },
      {
        ru: 'Полагаю, что мои навыки соответствуют требованиям должности.',
        tl: 'Polagayu, chto moi navyki sootvetsвуют trebovaniyam...',
        es: 'Considero que mis competencias se ajustan a los requisitos del puesto.',
      },
      {
        ru: 'Я быстро учусь и легко адаптируюсь.',
        tl: 'Ya bystro uchuslʼ i legko adaptiruYusʼ.',
        es: 'Aprendo rápido y me adapto con facilidad.',
      },
    ],
  },
];

const quiz = [
  {
    id: 'q1',
    p: '"Собеседование" es:',
    o: [
      'reunión informal',
      'entrevista de trabajo',
      'presentación de empresa',
      'llamada telefónica',
    ],
    c: 'entrevista de trabajo',
  },
  {
    id: 'q2',
    p: '"У меня ... лет опыта в сфере..." — ¿qué caso rige "лет"?',
    o: ['Nominativo', 'Acusativo', 'Genitivo', 'Instrumental'],
    c: 'Genitivo',
  },
  {
    id: 'q3',
    p: '"Среди моих сильных сторон — ..." sirve para:',
    o: [
      'describir debilidades',
      'mencionar puntos fuertes',
      'hablar del salario',
      'dar referencias',
    ],
    c: 'mencionar puntos fuertes',
  },
  {
    id: 'q4',
    p: '"Расскажите о себе." — ¿qué caso lleva "о себе"?',
    o: ['Dativo', 'Acusativo', 'Prepositivo', 'Genitivo'],
    c: 'Prepositivo',
  },
  {
    id: 'q5',
    p: '"Я специализируюсь на..." — "на" aquí rige:',
    o: ['Acusativo', 'Dativo', 'Prepositivo', 'Genitivo'],
    c: 'Prepositivo',
  },
  {
    id: 'q6',
    p: '"Каковы ваши ожидания по зарплате?" pregunta sobre:',
    o: [
      'experiencia laboral',
      'objetivos profesionales',
      'expectativas salariales',
      'disponibilidad',
    ],
    c: 'expectativas salariales',
  },
  {
    id: 'q7',
    p: '"Полагаю, что..." equivale a:',
    o: [
      'No sé si...',
      'Estoy seguro/a de que... / Considero que...',
      'Dudo que...',
      'Me pregunto si...',
    ],
    c: 'Estoy seguro/a de que... / Considero que...',
  },
  {
    id: 'q8',
    p: '"В своей предыдущей должности я отвечал(а) за..." — "отвечать за" rige:',
    o: ['Dativo', 'Acusativo', 'Genitivo', 'Instrumental'],
    c: 'Acusativo',
  },
  {
    id: 'q9',
    p: '"Я быстро учусь" — "учусь" es la forma reflexiva de:',
    o: [
      'учить (enseñar)',
      'учиться (aprender)',
      'научить (enseñar a alguien)',
      'заучить (memorizar)',
    ],
    c: 'учиться (aprender)',
  },
  {
    id: 'q10',
    p: '"Каковы ваши профессиональные цели?" — "каковы" es:',
    o: [
      'adverbio de cantidad',
      'forma predicativa de "какой" (pronombre)',
      'participio',
      'gerundio',
    ],
    c: 'forma predicativa de "какой" (pronombre)',
  },
];

export default function EntrevistaFormalC1Exercise() {
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
          💼 Entrevista de Trabajo C1 (Собеседование)
        </h2>
        <p className="text-htb-text-dim">
          Lenguaje formal para entrevistas profesionales. Clave:{' '}
          <span className="text-htb-green font-bold">
            Я специализируюсь на + Prep.
          </span>{' '}
          · <span className="text-blue-400 font-bold">Отвечать за + Acus.</span>{' '}
          (ser responsable de) ·{' '}
          <span className="text-yellow-400 font-bold">Полагаю, что...</span>{' '}
          (considero que).
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
