import React, { useState } from 'react';

const vocab = [
  { ru: 'университет', tl: 'universitet', es: 'universidad' },
  { ru: 'диплом', tl: 'diplom', es: 'diploma / título' },
  {
    ru: 'диссертация',
    tl: 'dissertatsiya',
    es: 'tesis doctoral / disertación',
  },
  { ru: 'экзамен', tl: 'ekzamen', es: 'examen' },
  { ru: 'лаборатория', tl: 'laboratoriya', es: 'laboratorio' },
  { ru: 'кафедра', tl: 'kafedra', es: 'departamento (univ.) / cátedra' },
  {
    ru: 'научный руководитель',
    tl: 'nauchnyy rukovoditelʼ',
    es: 'director de tesis / tutor académico',
  },
  { ru: 'степень', tl: 'stepenʼ', es: 'grado académico / título' },
  { ru: 'бакалавр', tl: 'bakalavr', es: 'licenciatura (bachelor)' },
  { ru: 'магистр', tl: 'magistr', es: 'máster' },
  { ru: 'аспирант', tl: 'aspirant', es: 'doctorando / estudiante de posgrado' },
  { ru: 'стипендия', tl: 'stipendiya', es: 'beca' },
  {
    ru: 'зачёт',
    tl: 'zachyot',
    es: 'coloquio / examen parcial (aprobado/no aprobado)',
  },
  { ru: 'лекция', tl: 'lektsiya', es: 'conferencia / clase magistral' },
  { ru: 'семинар', tl: 'seminar', es: 'seminario' },
  {
    ru: 'зачётная книжка',
    tl: 'zachyotnaya knizhka',
    es: 'libreta de calificaciones',
  },
  { ru: 'сессия', tl: 'sessiya', es: 'período de exámenes' },
  { ru: 'защита', tl: 'zashchita', es: 'defensa (de tesis)' },
  { ru: 'публикация', tl: 'publikatsiya', es: 'publicación (académica)' },
  { ru: 'научная статья', tl: 'nauchnaya statʼya', es: 'artículo científico' },
];

const quiz = [
  {
    id: 'q1',
    p: '"Диссертация" es:',
    o: [
      'diploma',
      'tesis doctoral / disertación',
      'artículo',
      'trabajo de fin de grado',
    ],
    c: 'tesis doctoral / disertación',
  },
  {
    id: 'q2',
    p: '¿Cómo se dice "director de tesis"?',
    o: ['декан', 'ректор', 'научный руководитель', 'куратор'],
    c: 'научный руководитель',
  },
  {
    id: 'q3',
    p: '"Аспирант" es:',
    o: [
      'licenciado',
      'máster',
      'doctorando / estudiante de posgrado',
      'profesor',
    ],
    c: 'doctorando / estudiante de posgrado',
  },
  {
    id: 'q4',
    p: '"Стипендия" significa:',
    o: ['préstamo estudiantil', 'matrícula', 'beca', 'subvención'],
    c: 'beca',
  },
  {
    id: 'q5',
    p: '¿Cuál significa "departamento (universitario)"?',
    o: ['факультет', 'кафедра', 'ректорат', 'деканат'],
    c: 'кафедра',
  },
  {
    id: 'q6',
    p: '"Сессия" en el contexto universitario es:',
    o: ['curso', 'asignatura', 'período de exámenes', 'semestre'],
    c: 'período de exámenes',
  },
  {
    id: 'q7',
    p: '"Защита" (университетский контекст) es:',
    o: ['defensa (de tesis)', 'aprobado', 'expediente', 'premio'],
    c: 'defensa (de tesis)',
  },
  {
    id: 'q8',
    p: '¿Cómo se llama al trabajo de fin de estudios que requiere un "бакалавр"?',
    o: [
      'магистерская диссертация',
      'бакалаврская работа',
      'кандидатская работа',
      'докторская диссертация',
    ],
    c: 'бакалаврская работа',
  },
  {
    id: 'q9',
    p: '"Зачёт" es un:',
    o: [
      'examen escrito con nota numérica',
      'coloquio / prueba aprobado/no aprobado',
      'examen oral final',
      'defensa de proyecto',
    ],
    c: 'coloquio / prueba aprobado/no aprobado',
  },
  {
    id: 'q10',
    p: '"Публикация" en el ámbito académico significa:',
    o: [
      'presentación oral',
      'publicación (académica)',
      'conferencia',
      'póster',
    ],
    c: 'publicación (académica)',
  },
];

export default function EducacionCienciaC1Exercise() {
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
          🎓 Educación y Ciencia (Образование и наука)
        </h2>
        <p className="text-htb-text-dim">
          Vocabulario C1 del entorno universitario y académico ruso.
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
        <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
          {vocab.map((v, i) => (
            <div
              key={i}
              className={`py-2 px-4 border-b border-gray-800 flex items-center gap-3 flex-wrap ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
            >
              <span className="text-htb-green font-bold text-base w-48">
                {v.ru}
              </span>
              <span className="text-htb-text-dim text-xs italic w-36">
                {v.tl}
              </span>
              <span className="text-white text-sm">{v.es}</span>
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
                <p className="text-3xl text-htb-green font-bold mb-2 text-center">
                  {vocab[fi].ru}
                </p>
                <p className="text-htb-text-dim italic text-sm">
                  {vocab[fi].tl}
                </p>
              </>
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
