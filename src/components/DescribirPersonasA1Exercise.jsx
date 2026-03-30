import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const DescribirPersonasA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const aspectoFisico = [
    {
      adj: 'высокий / высокая',
      translit: 'vysokiy / vysokaya',
      espanol: 'alto / alta',
    },
    {
      adj: 'низкий / низкая',
      translit: 'nizkiy / nizkaya',
      espanol: 'bajo / baja',
    },
    {
      adj: 'стройный / стройная',
      translit: 'stroynyy / stroynaya',
      espanol: 'delgado / delgada',
    },
    {
      adj: 'толстый / толстая',
      translit: 'tolstyy / tolstaya',
      espanol: 'gordo / gorda (informal)',
    },
    {
      adj: 'молодой / молодая',
      translit: 'molodoy / molodaya',
      espanol: 'joven',
    },
    {
      adj: 'старый / старая',
      translit: 'staryy / staraya',
      espanol: 'viejo / vieja',
    },
    {
      adj: 'красивый / красивая',
      translit: 'krasivyy / krasivaya',
      espanol: 'guapo / guapa',
    },
  ];

  const cabelloBella = [
    {
      ruso: 'светлые волосы',
      translit: 'svetlyye volosy',
      espanol: 'cabello rubio / claro',
    },
    {
      ruso: 'тёмные волосы',
      translit: 'tyomnyye volosy',
      espanol: 'cabello oscuro',
    },
    {
      ruso: 'рыжие волосы',
      translit: 'ryzhiye volosy',
      espanol: 'cabello pelirrojo',
    },
    { ruso: 'карие глаза', translit: 'kariye glaza', espanol: 'ojos marrones' },
    { ruso: 'синие глаза', translit: 'siniye glaza', espanol: 'ojos azules' },
    {
      ruso: 'зелёные глаза',
      translit: 'zelyonyye glaza',
      espanol: 'ojos verdes',
    },
  ];

  const caracter = [
    {
      adj: 'добрый / добрая',
      translit: 'dobryy / dobraya',
      espanol: 'amable / bondadoso/a',
    },
    {
      adj: 'умный / умная',
      translit: 'umnyy / umnaya',
      espanol: 'inteligente',
    },
    {
      adj: 'весёлый / весёлая',
      translit: 'vesyolyy / vesyolaya',
      espanol: 'alegre / divertido/a',
    },
    {
      adj: 'серьёзный / серьёзная',
      translit: 'seryoznyy / seryoznaya',
      espanol: 'serio/a',
    },
    {
      adj: 'спокойный / спокойная',
      translit: 'spokoynyy / spokoynaya',
      espanol: 'tranquilo/a',
    },
  ];

  const frases = [
    {
      ruso: 'Он высокий и стройный.',
      translit: 'On vysokiy i stroynyy.',
      espanol: 'Él es alto y delgado.',
    },
    {
      ruso: 'Она красивая и умная.',
      translit: 'Ona krasivaya i umnaya.',
      espanol: 'Ella es guapa e inteligente.',
    },
    {
      ruso: 'У него карие глаза.',
      translit: 'U nego kariye glaza.',
      espanol: 'Él tiene ojos marrones.',
    },
    {
      ruso: 'У неё светлые волосы.',
      translit: 'U neyo svetlyye volosy.',
      espanol: 'Ella tiene cabello rubio.',
    },
  ];

  const flashCards = [
    ...aspectoFisico.map((a) => ({
      ruso: a.adj,
      translit: a.translit,
      espanol: a.espanol,
    })),
    ...caracter.map((c) => ({
      ruso: c.adj,
      translit: c.translit,
      espanol: c.espanol,
    })),
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo se dice "alto" (masc.) en ruso?',
      opciones: ['низкий', 'молодой', 'высокий', 'красивый'],
      correcta: 'высокий',
    },
    {
      id: 'q2',
      pregunta: '"Умная" significa (femenino):',
      opciones: ['bonita', 'inteligente', 'alegre', 'seria'],
      correcta: 'inteligente',
    },
    {
      id: 'q3',
      pregunta: '¿Cómo se dice "joven" (masc.)?',
      opciones: ['старый', 'молодой', 'взрослый', 'новый'],
      correcta: 'молодой',
    },
    {
      id: 'q4',
      pregunta: '"У него карие глаза" significa:',
      opciones: [
        'Él tiene ojos azules',
        'Él tiene ojos verdes',
        'Él tiene ojos marrones',
        'Él tiene ojos oscuros',
      ],
      correcta: 'Él tiene ojos marrones',
    },
    {
      id: 'q5',
      pregunta: '¿Cuál es la forma FEMENINA de "красивый"?',
      opciones: ['красивое', 'красивая', 'красивы', 'красивого'],
      correcta: 'красивая',
    },
    {
      id: 'q6',
      pregunta: '"Весёлый" significa:',
      opciones: ['serio', 'tranquilo', 'alegre', 'inteligente'],
      correcta: 'alegre',
    },
    {
      id: 'q7',
      pregunta: '¿Cómo se dice "Ella tiene cabello rubio"?',
      opciones: [
        'У него светлые волосы',
        'У неё рыжие волосы',
        'У неё светлые волосы',
        'Она светловолосый',
      ],
      correcta: 'У неё светлые волосы',
    },
    {
      id: 'q8',
      pregunta: '"Стройная" (fem.) significa:',
      opciones: ['alta', 'delgada', 'baja', 'guapa'],
      correcta: 'delgada',
    },
    {
      id: 'q9',
      pregunta: '"Спокойный" significa:',
      opciones: ['alegre', 'amable', 'serio', 'tranquilo'],
      correcta: 'tranquilo',
    },
    {
      id: 'q10',
      pregunta: '"Она красивая и умная" significa:',
      opciones: [
        'Ella es alta y joven',
        'Ella es guapa e inteligente',
        'Ella es amable y seria',
        'Ella es alegre y tranquila',
      ],
      correcta: 'Ella es guapa e inteligente',
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
          👤 Describir Personas
        </h2>
        <p className="text-htb-text-dim">
          Adjetivos para describir el aspecto físico y el carácter. Recuerda que
          en ruso los adjetivos concuerdan en{' '}
          <span className="text-htb-green font-bold">género</span>: masculino
          (-ый/-ой) y femenino (-ая).
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
                <h3 className="text-htb-green font-semibold">Aspecto físico</h3>
              </div>
              <table className="w-full">
                <tbody>
                  {aspectoFisico.map((a, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-3 text-htb-green font-bold text-sm">
                        {a.adj}
                      </td>
                      <td className="py-2 px-3 text-htb-text-dim italic text-xs">
                        {a.translit}
                      </td>
                      <td className="py-2 px-3 text-white text-sm">
                        {a.espanol}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
                <h3 className="text-htb-green font-semibold">
                  Carácter y personalidad
                </h3>
              </div>
              <table className="w-full">
                <tbody>
                  {caracter.map((c, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-3 text-htb-green font-bold text-sm">
                        {c.adj}
                      </td>
                      <td className="py-2 px-3 text-htb-text-dim italic text-xs">
                        {c.translit}
                      </td>
                      <td className="py-2 px-3 text-white text-sm">
                        {c.espanol}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Cabello y ojos (У него/неё...)
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3">
              {cabelloBella.map((c, i) => (
                <div
                  key={i}
                  className={`py-2 px-3 border-b border-r border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                >
                  <p className="text-htb-green font-bold text-sm"><SpeakableText text={c.ruso} /></p>
                  <p className="text-htb-text-dim italic text-xs">
                    {c.translit}
                  </p>
                  <p className="text-white text-xs">{c.espanol}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Frases de descripción
              </h3>
            </div>
            <table className="w-full">
              <tbody>
                {frases.map((f, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-4 text-htb-green font-bold">
                      <SpeakableText text={f.ruso} />
                    </td>
                    <td className="py-2 px-4 text-htb-text-dim italic text-xs">
                      {f.translit}
                    </td>
                    <td className="py-2 px-4 text-white text-sm">
                      {f.espanol}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                <p className="text-3xl text-htb-green font-bold mb-3 text-center">
                  {flashCards[flashcardIndex].ruso}
                </p>
                <p className="text-htb-text-dim italic text-sm text-center">
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
              ? '🇷🇺 Ruso (masc. / fem.)'
              : '🇪🇸 Español — haz clic para ver'}
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

export default DescribirPersonasA1Exercise;
