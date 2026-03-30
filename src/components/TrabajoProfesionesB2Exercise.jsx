import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const quiz = [
  {
    id: 'q1',
    p: '"Зарплата" significa:',
    o: ['vacaciones', 'entrevista de trabajo', 'salario/sueldo', 'contrato'],
    c: 'salario/sueldo',
  },
  {
    id: 'q2',
    p: '"Собеседование" es:',
    o: ['reunión de equipo', 'entrevista de trabajo', 'currículum', 'despido'],
    c: 'entrevista de trabajo',
  },
  {
    id: 'q3',
    p: 'Para decir "soy médico" (profesión como instrumento) en ruso:',
    o: ['Я — медик', 'Я есть врача', 'Я работаю врачом', 'Я медик есть'],
    c: 'Я работаю врачом',
  },
  {
    id: 'q4',
    p: '"Отпуск" es:',
    o: ['horas extra', 'sueldo base', 'vacaciones', 'baja por enfermedad'],
    c: 'vacaciones',
  },
  {
    id: 'q5',
    p: '"Переводчик" es:',
    o: ['ingeniero', 'programador', 'traductor/intérprete', 'contador'],
    c: 'traductor/intérprete',
  },
  {
    id: 'q6',
    p: '"Уволиться" significa:',
    o: ['ser contratado', 'ascender', 'renunciar/dimitir', 'jubilarse'],
    c: 'renunciar/dimitir',
  },
  {
    id: 'q7',
    p: '"Командировка" es:',
    o: [
      'reunión en la oficina',
      'viaje de negocios',
      'entrevista de trabajo',
      'teletrabajo',
    ],
    c: 'viaje de negocios',
  },
  {
    id: 'q8',
    p: 'La profesión "бухгалтер" es:',
    o: ['abogado', 'contador/contable', 'arquitecto', 'diseñador'],
    c: 'contador/contable',
  },
  {
    id: 'q9',
    p: '"Повышение по службе" significa:',
    o: [
      'reducción de sueldo',
      'cambio de empresa',
      'ascenso laboral',
      'baja voluntaria',
    ],
    c: 'ascenso laboral',
  },
  {
    id: 'q10',
    p: '"Стажировка" es:',
    o: [
      'trabajo a tiempo completo',
      'prácticas/pasantía',
      'trabajo temporal',
      'formación a distancia',
    ],
    c: 'prácticas/pasantía',
  },
];

const vocab = [
  { ru: 'зарплата', tl: 'zarplata', es: 'salario/sueldo' },
  { ru: 'собеседование', tl: 'sobesedovaniye', es: 'entrevista de trabajo' },
  { ru: 'отпуск', tl: 'otpusk', es: 'vacaciones' },
  { ru: 'переводчик', tl: 'perevodchik', es: 'traductor' },
  { ru: 'программист', tl: 'programmist', es: 'programador' },
  { ru: 'инженер', tl: 'inzhener', es: 'ingeniero' },
  {
    ru: 'работать врачом',
    tl: 'rabotatʼ vrachom',
    es: 'trabajar de médico (+inst.)',
  },
  { ru: 'уволиться', tl: 'uvolitsya', es: 'renunciar (perf.)' },
  { ru: 'командировка', tl: 'komandirovka', es: 'viaje de negocios' },
  { ru: 'стажировка', tl: 'stazhirovka', es: 'prácticas/pasantía' },
  { ru: 'повышение', tl: 'povysheniye', es: 'ascenso' },
  { ru: 'бухгалтер', tl: 'bukhgalter', es: 'contador/contable' },
];

const cards = [
  {
    ru: 'Я работаю программистом в банке.',
    tl: 'Ya rabotayu programmistom v banke.',
    es: 'Trabajo como programador en un banco.',
  },
  {
    ru: 'Меня приняли на работу!',
    tl: 'Menya prinyali na rabotu!',
    es: '¡Me contrataron!',
  },
  {
    ru: 'Когда у тебя собеседование?',
    tl: 'Kogda u tebya sobesedovaniye?',
    es: '¿Cuándo tienes la entrevista?',
  },
  {
    ru: 'Она в командировке в Москве.',
    tl: 'Ona v komandirovke v Moskve.',
    es: 'Está en viaje de negocios en Moscú.',
  },
  {
    ru: 'Он получил повышение!',
    tl: 'On poluchil povysheniye!',
    es: '¡Recibió un ascenso!',
  },
  {
    ru: 'У меня две недели отпуска.',
    tl: 'U menya dve nedeli otpuska.',
    es: 'Tengo dos semanas de vacaciones.',
  },
];

export default function TrabajoProfesionesB2Exercise() {
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
          💼 Trabajo y Profesiones (Работа и профессии)
        </h2>
        <p className="text-htb-text-dim">
          Vocabulario laboral ruso. Nota importante: la profesión como actividad
          usa <span className="text-htb-green font-bold">instrumental</span>:
          "работать врачом" (trabajar de médico), no "работать врач".
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {vocab.map((v, i) => (
            <div
              key={i}
              className="bg-htb-card rounded-lg border border-gray-800 p-3 flex items-start gap-3"
            >
              <div className="flex-1">
                <p className="text-htb-green font-bold"><SpeakableText text={v.ru} /></p>
                <p className="text-htb-text-dim text-xs italic">{v.tl}</p>
              </div>
              <div className="text-right">
                <p className="text-white text-sm">{v.es}</p>
              </div>
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
