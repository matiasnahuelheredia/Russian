import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const phrases = [
  {
    cat: 'Apertura formal',
    items: [
      {
        ru: 'Уважаемые дамы и господа!',
        tl: 'Uvazhaemye damy i gospoda!',
        es: 'Estimadas damas y caballeros / Señoras y señores:',
      },
      {
        ru: 'Разрешите представиться. Меня зовут...',
        tl: 'Razreshite predstavitʼsya. Menya zovut...',
        es: 'Permítanme presentarme. Me llamo...',
      },
      {
        ru: 'Тема моего доклада — ...',
        tl: 'Tema moyego doklada...',
        es: 'El tema de mi ponencia es...',
      },
      {
        ru: 'Сегодня я расскажу о ..., а также остановлюсь на ...',
        tl: 'Segodnya ya rasskazhu o...',
        es: 'Hoy les hablaré de... y también me detendré en...',
      },
    ],
  },
  {
    cat: 'Estructurar la exposición',
    items: [
      {
        ru: 'Для начала рассмотрим ...',
        tl: 'Dlya nachala rassmotrim...',
        es: 'Para empezar, examinaremos...',
      },
      {
        ru: 'Перейдём к следующему пункту.',
        tl: 'Pereydom k sleduyushchemu punktu.',
        es: 'Pasemos al siguiente punto.',
      },
      {
        ru: 'Хотел(а) бы особо подчеркнуть ...',
        tl: 'Khotel(a) by osobo podcherknutʼ...',
        es: 'Me gustaría destacar especialmente...',
      },
      {
        ru: 'Как видно из графика / таблицы, ...',
        tl: 'Kak vidno iz grafika / tablitsy...',
        es: 'Como se puede observar en el gráfico / la tabla...',
      },
    ],
  },
  {
    cat: 'Interactuar con el público',
    items: [
      {
        ru: 'Позвольте задать вопрос?',
        tl: 'Pozvolʼte zadatʼ vopros?',
        es: '¿Me permiten hacerles una pregunta?',
      },
      {
        ru: 'Если у вас есть вопросы, я готов(а) ответить.',
        tl: 'Yesli u vas yestʼ voprosy...',
        es: 'Si tienen preguntas, estoy dispuesto/a a responder.',
      },
      {
        ru: 'Это именно то, о чём я говорил(а).',
        tl: 'Eto imenno to, o chyom ya govoril(a).',
        es: 'Eso es exactamente de lo que estaba hablando.',
      },
    ],
  },
  {
    cat: 'Cierre formal',
    items: [
      {
        ru: 'Подведём итоги сказанного.',
        tl: 'Podvedyom itogi skazannogo.',
        es: 'Recapitulemos lo dicho.',
      },
      {
        ru: 'Благодарю за внимание!',
        tl: 'Blagodaryu za vnimanie!',
        es: '¡Gracias por su atención!',
      },
      {
        ru: 'Буду рад(а) ответить на ваши вопросы.',
        tl: 'Budu rad(a) otvetitʼ na vashi voprosy.',
        es: 'Estaré encantado/a de responder sus preguntas.',
      },
    ],
  },
];

const quiz = [
  {
    id: 'q1',
    p: '"Тема моего доклада" — ¿qué es "доклад"?',
    o: [
      'el público',
      'la ponencia / el informe',
      'el gráfico',
      'el tiempo asignado',
    ],
    c: 'la ponencia / el informe',
  },
  {
    id: 'q2',
    p: '"Перейдём к следующему пункту." sirve para:',
    o: [
      'cerrar la presentación',
      'pasar al siguiente punto de la exposición',
      'hacer una pregunta',
      'agradecer',
    ],
    c: 'pasar al siguiente punto de la exposición',
  },
  {
    id: 'q3',
    p: '"Хотел(а) бы особо подчеркнуть..." expresa:',
    o: [
      'concluir',
      'destacar/enfatizar un punto',
      'saludar al público',
      'referirse a estadísticas',
    ],
    c: 'destacar/enfatizar un punto',
  },
  {
    id: 'q4',
    p: '"Благодарю за внимание!" es la frase de:',
    o: [
      'apertura',
      'transición',
      'cierre / agradecimiento final',
      'introducción al tema',
    ],
    c: 'cierre / agradecimiento final',
  },
  {
    id: 'q5',
    p: '"Разрешите представиться" — el infinitivo "представиться" significa:',
    o: [
      'representar algo',
      'presentarse a sí mismo',
      'presentar un informe',
      'presionar',
    ],
    c: 'presentarse a sí mismo',
  },
  {
    id: 'q6',
    p: '"Как видно из графика..." usa el Genitivo porque:',
    o: [
      'es complemento de tiempo',
      'es dependiente del sustantivo "видно"',
      '"из" rige Genitivo',
      'es complemento de lugar',
    ],
    c: '"из" rige Genitivo',
  },
  {
    id: 'q7',
    p: '"Уважаемые дамы и господа!" es un saludo apropiado para:',
    o: [
      'un chat informal',
      'una presentación formal/académica',
      'una conversación telefónica',
      'un correo entre amigos',
    ],
    c: 'una presentación formal/académica',
  },
  {
    id: 'q8',
    p: '"Буду рад(а) ответить на ваши вопросы." — "буду рад(а)" es:',
    o: [
      'presente + adjetivo corto',
      'futuro imperfectivo + adjetivo corto predicativo',
      'condicional',
      'imperativo',
    ],
    c: 'futuro imperfectivo + adjetivo corto predicativo',
  },
  {
    id: 'q9',
    p: '"Подведём итоги сказанного." — "сказанного" es:',
    o: [
      'gerundio',
      'participio pasado pasivo en Genitivo',
      'infinitivo',
      'adjetivo',
    ],
    c: 'participio pasado pasivo en Genitivo',
  },
  {
    id: 'q10',
    p: '"Для начала рассмотрим..." — "для начала" significa:',
    o: [
      'para siempre',
      'para empezar / en primer lugar',
      'sin embargo',
      'en conclusión',
    ],
    c: 'para empezar / en primer lugar',
  },
];

export default function PresentacionC1Exercise() {
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
          🎤 Presentación Formal C1 (Доклад)
        </h2>
        <p className="text-htb-text-dim">
          Lenguaje para exposiciones académicas/profesionales. Fórmula de
          apertura:{' '}
          <span className="text-htb-green font-bold">
            Уважаемые дамы и господа!
          </span>{' '}
          Cierre:{' '}
          <span className="text-blue-400 font-bold">
            Благодарю за внимание!
          </span>
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
