import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const DativoA2Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const pronombres = [
    { nom: 'я', dat: 'мне', espanol: 'a mí' },
    { nom: 'ты', dat: 'тебе', espanol: 'a ti' },
    { nom: 'он/оно', dat: 'ему', espanol: 'a él/ello' },
    { nom: 'она', dat: 'ей', espanol: 'a ella' },
    { nom: 'мы', dat: 'нам', espanol: 'a nosotros' },
    { nom: 'вы', dat: 'вам', espanol: 'a vosotros/Ud.' },
    { nom: 'они', dat: 'им', espanol: 'a ellos' },
  ];

  const usos = [
    {
      titulo: 'Нравиться — gustar',
      desc: 'Sujeto (lo que gusta) en nominativo; a quien le gusta en dativo.',
      ejemplos: [
        {
          ruso: 'Мне нравится музыка.',
          translit: 'Mne nravitsya muzyka.',
          esp: 'Me gusta la música.',
        },
        {
          ruso: 'Тебе нравятся фильмы?',
          translit: 'Tebe nravyatsya filʼmy?',
          esp: '¿Te gustan las películas?',
        },
      ],
    },
    {
      titulo: 'Нужно / нужен / нужна — necesitar',
      desc: 'Quien necesita en dativo + нужен(m)/нужна(f)/нужно(n)/нужны(pl).',
      ejemplos: [
        {
          ruso: 'Мне нужен словарь.',
          translit: 'Mne nuzhen slovarʼ.',
          esp: 'Necesito un diccionario.',
        },
        {
          ruso: 'Ему нужна помощь.',
          translit: 'Emu nuzhna pomoshchʼ.',
          esp: 'Él necesita ayuda.',
        },
      ],
    },
    {
      titulo: 'Objeto Indirecto — dar, decir, enviar',
      desc: 'A quién se da/dice/envía algo: en dativo.',
      ejemplos: [
        {
          ruso: 'Я дал книгу другу.',
          translit: 'Ya dal knigu drugu.',
          esp: 'Le di el libro al amigo.',
        },
        {
          ruso: 'Позвони маме.',
          translit: 'Pozvoni mame.',
          esp: 'Llama a (tu) mamá.',
        },
      ],
    },
    {
      titulo: 'Возраст — edad',
      desc: 'Expresar edad: дativo + лет/год/года.',
      ejemplos: [
        {
          ruso: 'Мне двадцать лет.',
          translit: 'Mne dvadtsatʼ let.',
          esp: 'Tengo veinte años.',
        },
        {
          ruso: 'Ему пять лет.',
          translit: 'Emu pyatʼ let.',
          esp: 'Él tiene cinco años.',
        },
      ],
    },
  ];

  const declinacion = [
    { tipo: 'Masc. conson.', nom: 'брат', dat: 'брату' },
    { tipo: 'Masc. -й', nom: 'музей', dat: 'музею' },
    { tipo: 'Masc. -ь', nom: 'день', dat: 'дню' },
    { tipo: 'Fem. -а', nom: 'сестра', dat: 'сестре' },
    { tipo: 'Fem. -я', nom: 'неделя', dat: 'неделе' },
    { tipo: 'Fem. -ь', nom: 'ночь', dat: 'ночи' },
    { tipo: 'Neutro -о', nom: 'окно', dat: 'окну' },
    { tipo: 'Neutro -е', nom: 'море', dat: 'морю' },
  ];

  const flashCards = [
    {
      ruso: 'Мне нравится кофе.',
      translit: 'Mne nravitsya kofe.',
      espanol: 'Me gusta el café.',
    },
    {
      ruso: 'Тебе нравятся книги?',
      translit: 'Tebe nravyatsya knigi?',
      espanol: '¿Te gustan los libros?',
    },
    {
      ruso: 'Мне нужен врач.',
      translit: 'Mne nuzhen vrach.',
      espanol: 'Necesito un médico.',
    },
    {
      ruso: 'Ей нужна помощь.',
      translit: 'Ey nuzhna pomoshchʼ.',
      espanol: 'Ella necesita ayuda.',
    },
    {
      ruso: 'Я дал деньги другу.',
      translit: 'Ya dal denʼgi drugu.',
      espanol: 'Le di dinero al amigo.',
    },
    {
      ruso: 'Мне тридцать лет.',
      translit: 'Mne tridtsatʼ let.',
      espanol: 'Tengo treinta años.',
    },
    { ruso: 'Позвони мне!', translit: 'Pozvoni mne!', espanol: '¡Llámame!' },
    {
      ruso: 'Нам нравится Москва.',
      translit: 'Nam nravitsya Moskva.',
      espanol: 'Nos gusta Moscú.',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '"Мне нравится музыка." — "Мне" es la forma dativa de:',
      opciones: ['ты', 'я', 'он', 'мы'],
      correcta: 'я',
    },
    {
      id: 'q2',
      pregunta: '¿Cuál es el dativo de "сестра"?',
      opciones: ['сестры', 'сестру', 'сестре', 'сестрой'],
      correcta: 'сестре',
    },
    {
      id: 'q3',
      pregunta: '"Ему нужна помощь" significa:',
      opciones: [
        'Él necesita dinero',
        'Él necesita ayuda',
        'Él tiene ayuda',
        'Él pidió ayuda',
      ],
      correcta: 'Él necesita ayuda',
    },
    {
      id: 'q4',
      pregunta: '¿Cómo se dice "Me gustan los libros"?',
      opciones: [
        'Я люблю книги',
        'Мне нравятся книги',
        'Мне нравится книги',
        'Мне нужны книги',
      ],
      correcta: 'Мне нравятся книги',
    },
    {
      id: 'q5',
      pregunta: '¿Cuál es el dativo de "брат"?',
      opciones: ['брата', 'брату', 'брате', 'братом'],
      correcta: 'брату',
    },
    {
      id: 'q6',
      pregunta: '"Мне двадцать лет" significa:',
      opciones: [
        'Tengo veinte años',
        'Soy de los años 20',
        'Cumplo veinte',
        'Hace veinte años',
      ],
      correcta: 'Tengo veinte años',
    },
    {
      id: 'q7',
      pregunta: 'Para decir "Nos gusta Moscú", ¿qué pronombre dativo se usa?',
      opciones: ['нам', 'нас', 'нами', 'наш'],
      correcta: 'нам',
    },
    {
      id: 'q8',
      pregunta: '"Я дал книгу другу" — "другу" está en dativo porque:',
      opciones: [
        'Es el sujeto',
        'Es objeto directo',
        'Es el destinatario (objeto indirecto)',
        'Hay negación',
      ],
      correcta: 'Es el destinatario (objeto indirecto)',
    },
    {
      id: 'q9',
      pregunta: '¿Cuál es el dativo de "день" (día)?',
      opciones: ['дня', 'дне', 'дню', 'днём'],
      correcta: 'дню',
    },
    {
      id: 'q10',
      pregunta:
        'Si "нравится" se usa con singular, ¿qué forma se usa con plural?',
      opciones: ['нравится', 'нравятся', 'нравилось', 'нравиться'],
      correcta: 'нравятся',
    },
  ];

  const handleAnswer = (id, val) => {
    setQuizAnswers((p) => ({ ...p, [id]: val }));
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
          🎯 Caso Dativo (Дательный падеж)
        </h2>
        <p className="text-htb-text-dim">
          El dativo expresa{' '}
          <span className="text-htb-green font-bold">
            el destinatario de una acción
          </span>
          . También se usa con нравиться (gustar), нужно (necesitar) y para
          expresar la edad.
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
            <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                <h3 className="text-htb-green font-semibold">
                  Pronombres en Dativo
                </h3>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50 text-xs">
                    <th className="text-left py-2 px-3 text-htb-text-dim">
                      Nom.
                    </th>
                    <th className="text-left py-2 px-3 text-htb-green">
                      Dativo
                    </th>
                    <th className="text-left py-2 px-3 text-white">Español</th>
                  </tr>
                </thead>
                <tbody>
                  {pronombres.map((p, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-3 text-htb-text-dim"><SpeakableText text={p.nom} /></td>
                      <td className="py-2 px-3 text-htb-green font-bold">
                        {p.dat}
                      </td>
                      <td className="py-2 px-3 text-white text-sm">
                        {p.espanol}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                <h3 className="text-htb-green font-semibold">
                  Declinación Dativo Singular
                </h3>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {declinacion.map((d, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-3 text-htb-text-dim text-xs">
                        {d.tipo}
                      </td>
                      <td className="py-2 px-3 text-htb-green font-bold">
                        <SpeakableText text={d.nom} />
                      </td>
                      <td className="py-2 px-3 text-white">→ {d.dat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {usos.map((u, i) => (
            <div
              key={i}
              className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden"
            >
              <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                <h3 className="text-htb-green font-semibold">{u.titulo}</h3>
                <p className="text-htb-text-dim text-xs mt-1">{u.desc}</p>
              </div>
              <table className="w-full">
                <tbody>
                  {u.ejemplos.map((e, j) => (
                    <tr
                      key={j}
                      className={`border-b border-gray-800 ${j % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-4 text-htb-green font-bold">
                        <SpeakableText text={e.ruso} />
                      </td>
                      <td className="py-2 px-4 text-htb-text-dim italic text-sm">
                        {e.translit}
                      </td>
                      <td className="py-2 px-4 text-white text-sm">{e.esp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                <p className="text-2xl text-htb-green font-bold mb-3 text-center">
                  {flashCards[flashcardIndex].ruso}
                </p>
                <p className="text-htb-text-dim italic text-sm text-center">
                  {flashCards[flashcardIndex].translit}
                </p>
              </>
            ) : (
              <p className="text-xl text-white text-center">
                {flashCards[flashcardIndex].espanol}
              </p>
            )}
          </div>
          <p className="text-center text-htb-text-dim text-sm mb-4">
            {flashcardFlipped ? '🇷🇺 Ruso' : '🇪🇸 Español — haz clic para ver'}
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
                Elige la respuesta correcta.
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

export default DativoA2Exercise;
