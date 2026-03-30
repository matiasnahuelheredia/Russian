import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const AspectosVerbalesC1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const pares = [
    { imp: 'читать', perf: 'прочитать', espanol: 'leer / terminar de leer' },
    {
      imp: 'писать',
      perf: 'написать',
      espanol: 'escribir / terminar de escribir',
    },
    { imp: 'делать', perf: 'сделать', espanol: 'hacer / terminar de hacer' },
    {
      imp: 'говорить',
      perf: 'сказать',
      espanol: 'hablar / decir (un enunciado)',
    },
    {
      imp: 'покупать',
      perf: 'купить',
      espanol: 'comprar (proceso) / comprar (completado)',
    },
    {
      imp: 'учить',
      perf: 'выучить',
      espanol: 'aprender (proceso) / aprender (memorizado)',
    },
    {
      imp: 'смотреть',
      perf: 'посмотреть',
      espanol: 'ver/mirar (proceso) / ver (completado)',
    },
    {
      imp: 'открывать',
      perf: 'открыть',
      espanol: 'abrir (proceso) / abrir (completado)',
    },
  ];

  const usos = [
    {
      aspecto: 'Imperfectivo',
      usos: [
        {
          uso: 'Acciones en proceso (presente)',
          ejemplo: 'Я читаю книгу. (Leo el libro ahora)',
        },
        {
          uso: 'Acciones habituales',
          ejemplo: 'Я читаю каждый день. (Leo cada día)',
        },
        {
          uso: 'Acción sin resultado específico',
          ejemplo: 'Я читал долго. (Leí mucho tiempo)',
        },
        {
          uso: 'Pasado — en proceso en ese momento',
          ejemplo: 'Когда ты пришёл, я читал. (Estaba leyendo cuando llegaste)',
        },
      ],
    },
    {
      aspecto: 'Perfectivo',
      usos: [
        {
          uso: 'Acción completada con resultado',
          ejemplo: 'Я прочитал книгу. (Terminé de leer el libro)',
        },
        {
          uso: 'Acción puntual única',
          ejemplo: 'Он сказал правду. (Él dijo la verdad)',
        },
        {
          uso: 'Secuencia de acciones completadas',
          ejemplo: 'Я пришёл, увидел, победил.',
        },
        {
          uso: 'Futuro (aspecto perfectivo = futuro simple)',
          ejemplo: 'Я прочитаю завтра. (Lo leeré mañana)',
        },
      ],
    },
  ];

  const flashCards = [
    { ruso: 'Вид глагола', translit: 'Vid glagola', espanol: 'Aspecto verbal' },
    {
      ruso: 'несовершенный вид',
      translit: 'nesovershenniy vid',
      espanol: 'Aspecto imperfectivo',
    },
    {
      ruso: 'совершенный вид',
      translit: 'sovershenniy vid',
      espanol: 'Aspecto perfectivo',
    },
    {
      ruso: 'читать / прочитать',
      translit: 'chitatʼ / prochitатʼ',
      espanol: 'leer (imp.) / terminar de leer (perf.)',
    },
    {
      ruso: 'делать / сделать',
      translit: 'delatʼ / sdelatʼ',
      espanol: 'hacer (imp.) / terminar/completar (perf.)',
    },
    {
      ruso: 'покупать / купить',
      translit: 'pokupatʼ / kupitʼ',
      espanol: 'comprar (proceso) / comprar (completado)',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta:
        '¿Cuál es la diferencia fundamental entre los aspectos verbales en ruso?',
      opciones: [
        'El imperfectivo es presente, el perfectivo es pasado',
        'El imperfectivo expresa proceso/hábito, el perfectivo acción completada con resultado',
        'El imperfectivo es informal, el perfectivo formal',
        'No hay diferencia práctica',
      ],
      correcta:
        'El imperfectivo expresa proceso/hábito, el perfectivo acción completada con resultado',
    },
    {
      id: 'q2',
      pregunta:
        '"Я прочитал книгу" vs "Я читал книгу". ¿Cuál indica que el libro fue terminado?',
      opciones: ['Я читал книгу', 'Я прочитал книгу', 'Ambas', 'Ninguna'],
      correcta: 'Я прочитал книгу',
    },
    {
      id: 'q3',
      pregunta: 'Para el futuro perfectivo se usa:',
      opciones: [
        'буду + imperfectivo',
        'la forma perfectiva conjugada directamente',
        'стану + infinitivo',
        'Solo буду',
      ],
      correcta: 'la forma perfectiva conjugada directamente',
    },
    {
      id: 'q4',
      pregunta: '"Что ты делал вчера?" usa el imperfectivo porque:',
      opciones: [
        'Es una pregunta general sobre actividades (proceso/qué hacías)',
        'Es una acción completada',
        'Es el futuro',
        'Es un hábito',
      ],
      correcta:
        'Es una pregunta general sobre actividades (proceso/qué hacías)',
    },
    {
      id: 'q5',
      pregunta: '¿Cuál es la pareja perfectiva de "покупать"?',
      opciones: ['покупить', 'купить', 'накупить', 'закупить'],
      correcta: 'купить',
    },
    {
      id: 'q6',
      pregunta:
        '"Я буду читать" (futuro imperfectivo) vs "Я прочитаю" (futuro perfectivo): la diferencia es:',
      opciones: [
        'Son idénticas',
        'El primer expresa actividad futura general, el segundo acción que se completará',
        'El primero es más formal',
        'Solo el segundo es correcto para el futuro',
      ],
      correcta:
        'El primer expresa actividad futura general, el segundo acción que se completará',
    },
    {
      id: 'q7',
      pregunta: 'La secuencia "Я пришёл, поел и лёг спать" usa el aspecto:',
      opciones: [
        'Imperfectivo',
        'Perfectivo (acciones secuenciales y completadas)',
        'Mixto',
        'Ninguno',
      ],
      correcta: 'Perfectivo (acciones secuenciales y completadas)',
    },
    {
      id: 'q8',
      pregunta: '"Каждый день я читаю газету" usa el imperfectivo porque:',
      opciones: [
        'Es una acción única',
        'Es una acción completada',
        'Es una acción habitual/repetida',
        'Es el futuro',
      ],
      correcta: 'Es una acción habitual/repetida',
    },
    {
      id: 'q9',
      pregunta: 'El aspecto imperfectivo NO puede expresar:',
      opciones: [
        'Hábitos',
        'Proceso en curso',
        'Acción completada con resultado concreto',
        'Acciones paralelas',
      ],
      correcta: 'Acción completada con resultado concreto',
    },
    {
      id: 'q10',
      pregunta: '"Он сказал правду" usa "сказать" (perfectivo) porque:',
      opciones: [
        'Es pasado habitual',
        'Es un proceso largo',
        'Es una enunciación puntual y completa',
        'Es una acción futura',
      ],
      correcta: 'Es una enunciación puntual y completa',
    },
  ];

  const handleAnswer = (id, value) => {
    setQuizAnswers((prev) => ({ ...prev, [id]: value }));
    setShowResults(false);
  };
  const calcScore = () => {
    let c = 0;
    questions.forEach((q) => {
      if (quizAnswers[q.id] === q.correcta) c++;
    });
    setScore(c);
    setShowResults(true);
    setShowAnswers(false);
  };
  const resetQuiz = () => {
    setQuizAnswers({});
    setShowResults(false);
    setScore(0);
    setShowAnswers(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-htb-card rounded-lg border border-gray-800 p-6 mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">
          ⚖️ Aspecto Verbal Avanzado (Вид глагола)
        </h2>
        <p className="text-htb-text-dim">
          El aspecto verbal es uno de los conceptos más fundamentales del ruso.
          Todos los verbos tienen dos formas:{' '}
          <span className="text-htb-green font-semibold">imperfectivo</span>{' '}
          (proceso, hábito) y{' '}
          <span className="text-htb-green font-semibold">perfectivo</span>{' '}
          (resultado, completado).
        </p>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {[
          { id: 'referencia', label: '📚 Referencia' },
          { id: 'flashcards', label: '🃏 Flashcards' },
          { id: 'ejercicio', label: '✏️ Ejercicio' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-htb-green text-htb-bg' : 'bg-htb-card text-htb-text-dim hover:text-white border border-gray-700'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'referencia' && (
        <div className="space-y-4">
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Pares imperfectivo / perfectivo
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                    <th className="text-left py-3 px-4 text-blue-400 text-sm">
                      Imperfectivo (нсв)
                    </th>
                    <th className="text-left py-3 px-4 text-htb-green text-sm">
                      Perfectivo (св)
                    </th>
                    <th className="text-left py-3 px-4 text-htb-text-dim text-sm">
                      Español
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pares.map((p, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-4 text-blue-400 font-bold text-lg">
                        <SpeakableText text={p.imp} />
                      </td>
                      <td className="py-2 px-4 text-htb-green font-bold text-lg">
                        <SpeakableText text={p.perf} />
                      </td>
                      <td className="py-2 px-4 text-htb-text-dim text-sm">
                        {p.espanol}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {usos.map((u) => (
            <div
              key={u.aspecto}
              className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden"
            >
              <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
                <h3
                  className={`font-semibold ${u.aspecto === 'Perfectivo' ? 'text-htb-green' : 'text-blue-400'}`}
                >
                  Usos del {u.aspecto}
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {u.usos.map((item, i) => (
                  <div
                    key={i}
                    className="bg-htb-sidebar rounded-lg p-3 border border-gray-800"
                  >
                    <p className="text-white font-semibold text-sm mb-1">
                      {item.uso}
                    </p>
                    <p
                      className={`text-sm italic ${u.aspecto === 'Perfectivo' ? 'text-htb-green' : 'text-blue-300'}`}
                    >
                      {item.ejemplo}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'flashcards' && (
        <div className="bg-htb-card rounded-lg border border-gray-800 p-6">
          <div
            onClick={() => setFlashcardFlipped(!flashcardFlipped)}
            className="cursor-pointer bg-htb-sidebar rounded-lg border-2 border-htb-green/30 hover:border-htb-green p-8 mb-6 min-h-[200px] flex flex-col items-center justify-center transition-all"
          >
            {flashcardFlipped ? (
              <>
                <p className="text-3xl text-htb-green font-bold mb-3 text-center">
                  {flashCards[flashcardIndex].ruso}
                </p>
                <p className="text-htb-text-dim italic text-lg">
                  {flashCards[flashcardIndex].translit}
                </p>
              </>
            ) : (
              <p className="text-2xl text-white text-center">
                {flashCards[flashcardIndex].espanol}
              </p>
            )}
          </div>
          <p className="text-center text-htb-text-dim text-sm mb-4">
            {flashcardFlipped
              ? '🇷🇺 Ruso'
              : '🇪🇸 Español — haz clic para ver en ruso'}
          </p>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => {
                setFlashcardIndex((i) => Math.max(0, i - 1));
                setFlashcardFlipped(false);
              }}
              disabled={flashcardIndex === 0}
              className="px-4 py-2 bg-htb-sidebar border border-gray-700 rounded-lg text-white hover:border-htb-green disabled:opacity-40"
            >
              ← Anterior
            </button>
            <span className="text-htb-text-dim">
              {flashcardIndex + 1} / {flashCards.length}
            </span>
            <button
              onClick={() => {
                setFlashcardIndex((i) =>
                  Math.min(flashCards.length - 1, i + 1)
                );
                setFlashcardFlipped(false);
              }}
              disabled={flashcardIndex === flashCards.length - 1}
              className="px-4 py-2 bg-htb-sidebar border border-gray-700 rounded-lg text-white hover:border-htb-green disabled:opacity-40"
            >
              Siguiente →
            </button>
          </div>
        </div>
      )}

      {activeTab === 'ejercicio' && (
        <div className="bg-htb-card rounded-lg border border-gray-800 p-6">
          {showResults ? (
            <div className="text-center">
              <div
                className={`text-6xl font-bold mb-4 ${score >= 8 ? 'text-htb-green' : score >= 5 ? 'text-yellow-400' : 'text-red-400'}`}
              >
                {score}/{questions.length}
              </div>
              <p className="text-white text-xl mb-6">
                {score === questions.length
                  ? '¡Perfecto! 🎉'
                  : score >= 8
                    ? '¡Excelente! 👍'
                    : score >= 5
                      ? 'Bien 💪'
                      : 'Sigue estudiando 📚'}
              </p>
              {showAnswers && (
                <div className="space-y-3 text-left mb-6">
                  {questions.map((q) => (
                    <div
                      key={q.id}
                      className={`p-3 rounded-lg border ${quizAnswers[q.id] === q.correcta ? 'border-htb-green bg-htb-green/10' : 'border-red-500 bg-red-500/10'}`}
                    >
                      <p className="text-white text-sm mb-1">{q.pregunta}</p>
                      <p
                        className={`text-sm font-medium ${quizAnswers[q.id] === q.correcta ? 'text-htb-green' : 'text-red-400'}`}
                      >
                        Tu respuesta: {quizAnswers[q.id] || '(sin responder)'}
                      </p>
                      {quizAnswers[q.id] !== q.correcta && (
                        <p className="text-htb-green text-sm">
                          Correcta: {q.correcta}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={resetQuiz}
                  className="bg-htb-green text-htb-bg px-6 py-3 rounded-lg font-semibold"
                >
                  🔄 Repetir
                </button>
                {!showAnswers && (
                  <button
                    onClick={() => setShowAnswers(true)}
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
                Responde todas las preguntas y pulsa &quot;Comprobar&quot;.
              </p>
              <div className="space-y-4">
                {questions.map((q, i) => (
                  <div
                    key={q.id}
                    className="bg-htb-sidebar rounded-lg p-4 border border-gray-800"
                  >
                    <p className="text-white font-medium mb-3">
                      {i + 1}. {q.pregunta}
                    </p>
                    <select
                      value={quizAnswers[q.id] || ''}
                      onChange={(e) => handleAnswer(q.id, e.target.value)}
                      className="w-full bg-htb-bg border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-htb-green"
                    >
                      <option value="">-- Elige una respuesta --</option>
                      {q.opciones.map((o, idx) => (
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
                  onClick={calcScore}
                  className="bg-htb-green text-htb-bg px-8 py-3 rounded-lg font-semibold"
                >
                  ✅ Comprobar
                </button>
                <button
                  onClick={resetQuiz}
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
};

export default AspectosVerbalesC1Exercise;
