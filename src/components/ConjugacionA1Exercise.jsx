import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const ConjugacionA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const conj1 = {
    nombre: '1ª Conjugación (-ать/-ять)',
    modelo: 'читать (leer)',
    filas: [
      { persona: 'я', desinencia: '-ю / -у', forma: 'читаю' },
      { persona: 'ты', desinencia: '-ешь / -ёшь', forma: 'читаешь' },
      { persona: 'он/она', desinencia: '-ет / -ёт', forma: 'читает' },
      { persona: 'мы', desinencia: '-ем / -ём', forma: 'читаем' },
      { persona: 'вы', desinencia: '-ете / -ёте', forma: 'читаете' },
      { persona: 'они', desinencia: '-ют / -ут', forma: 'читают' },
    ],
  };

  const conj2 = {
    nombre: '2ª Conjugación (-ить/-еть)',
    modelo: 'говорить (hablar)',
    filas: [
      { persona: 'я', desinencia: '-ю / -у', forma: 'говорю' },
      { persona: 'ты', desinencia: '-ишь', forma: 'говоришь' },
      { persona: 'он/она', desinencia: '-ит', forma: 'говорит' },
      { persona: 'мы', desinencia: '-им', forma: 'говорим' },
      { persona: 'вы', desinencia: '-ите', forma: 'говорите' },
      { persona: 'они', desinencia: '-ят / -ат', forma: 'говорят' },
    ],
  };

  const verbosComunes = [
    {
      infinitivo: 'читать',
      translit: 'chitatʼ',
      espanol: 'leer',
      conj: '1ª',
      yo: 'читаю',
    },
    {
      infinitivo: 'работать',
      translit: 'rabatatʼ',
      espanol: 'trabajar',
      conj: '1ª',
      yo: 'работаю',
    },
    {
      infinitivo: 'знать',
      translit: 'znatʼ',
      espanol: 'saber / conocer',
      conj: '1ª',
      yo: 'знаю',
    },
    {
      infinitivo: 'понимать',
      translit: 'ponimatʼ',
      espanol: 'entender',
      conj: '1ª',
      yo: 'понимаю',
    },
    {
      infinitivo: 'говорить',
      translit: 'govoritʼ',
      espanol: 'hablar',
      conj: '2ª',
      yo: 'говорю',
    },
    {
      infinitivo: 'жить',
      translit: 'zhitʼ',
      espanol: 'vivir',
      conj: '2ª irreg.',
      yo: 'живу',
    },
    {
      infinitivo: 'любить',
      translit: 'lyubitʼ',
      espanol: 'amar / gustar',
      conj: '2ª',
      yo: 'люблю',
    },
    {
      infinitivo: 'учиться',
      translit: 'uchitʼsya',
      espanol: 'estudiar',
      conj: '2ª',
      yo: 'учусь',
    },
  ];

  const flashCards = [
    { ruso: 'читать', translit: 'chitatʼ', espanol: 'leer' },
    { ruso: 'я читаю', translit: 'ya chitayu', espanol: 'yo leo' },
    { ruso: 'ты читаешь', translit: 'ty chitayesh', espanol: 'tú lees' },
    { ruso: 'говорить', translit: 'govoritʼ', espanol: 'hablar' },
    { ruso: 'я говорю', translit: 'ya govoryu', espanol: 'yo hablo' },
    { ruso: 'он говорит', translit: 'on govorit', espanol: 'él habla' },
    { ruso: 'знать', translit: 'znatʼ', espanol: 'saber / conocer' },
    { ruso: 'работать', translit: 'rabatatʼ', espanol: 'trabajar' },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo se conjuga "читать" (leer) para "я"?',
      opciones: ['читает', 'читаешь', 'читаю', 'читаем'],
      correcta: 'читаю',
    },
    {
      id: 'q2',
      pregunta: '"Ты говоришь" significa:',
      opciones: ['Él habla', 'Nosotros hablamos', 'Tú hablas', 'Yo hablo'],
      correcta: 'Tú hablas',
    },
    {
      id: 'q3',
      pregunta: '¿Cuál es la forma "мы" del verbo "работать" (trabajar)?',
      opciones: ['работаю', 'работает', 'работаем', 'работают'],
      correcta: 'работаем',
    },
    {
      id: 'q4',
      pregunta:
        'Los verbos de la 2ª conjugación usan la desinencia -ишь para "ты". ¿Cuál es la forma de "говорить" para "ты"?',
      opciones: ['говоришь', 'говоришь', 'говорите', 'говорю'],
      correcta: 'говоришь',
    },
    {
      id: 'q5',
      pregunta: '"Они читают" significa:',
      opciones: ['Ella lee', 'Nosotros leemos', 'Ellos leen', 'Yo leo'],
      correcta: 'Ellos leen',
    },
    {
      id: 'q6',
      pregunta: '¿Cuál es el infinitivo de "знаю"?',
      opciones: ['знал', 'знать', 'знает', 'знали'],
      correcta: 'знать',
    },
    {
      id: 'q7',
      pregunta: '"Вы понимаете?" significa:',
      opciones: [
        '¿Entiendes?',
        '¿Entiende usted / entendéis?',
        '¿Entiende él?',
        '¿Entendemos?',
      ],
      correcta: '¿Entiende usted / entendéis?',
    },
    {
      id: 'q8',
      pregunta: '¿Cómo se dice "nosotros vivimos" en ruso?',
      opciones: ['мы живёт', 'мы живём', 'мы живут', 'мы живёшь'],
      correcta: 'мы живём',
    },
    {
      id: 'q9',
      pregunta: 'La desinencia de los verbos de 1ª conjugación para "они" es:',
      opciones: ['-ят/-ат', '-ют/-ут', '-ит', '-ет'],
      correcta: '-ют/-ут',
    },
    {
      id: 'q10',
      pregunta: '"Я люблю русский язык" significa:',
      opciones: [
        'Yo estudio ruso',
        'Me gusta / Amo el idioma ruso',
        'Yo hablaré ruso',
        'Yo estudié ruso',
      ],
      correcta: 'Me gusta / Amo el idioma ruso',
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
          🔧 Conjugación de Verbos en Presente
        </h2>
        <p className="text-htb-text-dim">
          En ruso hay dos modelos de conjugación en presente. La{' '}
          <span className="text-htb-green font-semibold">1ª conjugación</span>{' '}
          (verbos en -ать/-ять) y la{' '}
          <span className="text-htb-green font-semibold">2ª conjugación</span>{' '}
          (verbos en -ить/-еть).
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[conj1, conj2].map((conj) => (
              <div
                key={conj.nombre}
                className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden"
              >
                <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                  <h3 className="text-htb-green font-semibold text-sm">
                    {conj.nombre}
                  </h3>
                  <p className="text-htb-text-dim text-xs">
                    Modelo: {conj.modelo}
                  </p>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700 bg-htb-sidebar/30">
                      <th className="text-left py-2 px-3 text-htb-text-dim text-xs">
                        Persona
                      </th>
                      <th className="text-left py-2 px-3 text-htb-text-dim text-xs">
                        Desinencia
                      </th>
                      <th className="text-left py-2 px-3 text-htb-green text-xs">
                        Forma
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {conj.filas.map((f, i) => (
                      <tr
                        key={i}
                        className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                      >
                        <td className="py-2 px-3 text-htb-text-dim text-sm">
                          {f.persona}
                        </td>
                        <td className="py-2 px-3 text-htb-text-dim text-sm font-mono">
                          {f.desinencia}
                        </td>
                        <td className="py-2 px-3 text-htb-green font-bold">
                          <SpeakableText text={f.forma} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Verbos comunes (forma yo)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                    <th className="text-left py-2 px-4 text-htb-green text-sm">
                      Infinitivo
                    </th>
                    <th className="text-left py-2 px-4 text-htb-text-dim text-sm">
                      Translit.
                    </th>
                    <th className="text-left py-2 px-4 text-white text-sm">
                      Español
                    </th>
                    <th className="text-left py-2 px-4 text-htb-green text-sm">
                      Yo (я)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {verbosComunes.map((v, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-4 text-htb-green font-bold">
                        <SpeakableText text={v.infinitivo} />
                      </td>
                      <td className="py-2 px-4 text-htb-text-dim italic text-sm">
                        {v.translit}
                      </td>
                      <td className="py-2 px-4 text-white">{v.espanol}</td>
                      <td className="py-2 px-4 text-htb-green font-bold">
                        <SpeakableText text={v.yo} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
                <p className="text-4xl text-htb-green font-bold mb-3 text-center">
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
                    ? '¡Muy bien! 👍'
                    : score >= 5
                      ? 'Bien 💪'
                      : 'Repasa 📚'}
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

export default ConjugacionA1Exercise;
