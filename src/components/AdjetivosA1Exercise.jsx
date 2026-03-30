import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const AdjetivosA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const terminaciones = [
    {
      genero: 'Masculino',
      desinencia: '-ый / -ий / -ой',
      ejemplo: 'новый, синий, молодой',
      regla: 'Sustantivos masculinos en consonante/-й',
    },
    {
      genero: 'Femenino',
      desinencia: '-ая / -яя',
      ejemplo: 'новая, синяя, молодая',
      regla: 'Sustantivos femeninos en -а/-я',
    },
    {
      genero: 'Neutro',
      desinencia: '-ое / -ее',
      ejemplo: 'новое, синее, молодое',
      regla: 'Sustantivos neutros en -о/-е',
    },
    {
      genero: 'Plural',
      desinencia: '-ые / -ие',
      ejemplo: 'новые, синие, молодые',
      regla: 'Todos los géneros en plural',
    },
  ];

  const adjetivos = [
    { masc: 'большой', fem: 'большая', neutro: 'большое', espanol: 'grande' },
    {
      masc: 'маленький',
      fem: 'маленькая',
      neutro: 'маленькое',
      espanol: 'pequeño/a',
    },
    { masc: 'новый', fem: 'новая', neutro: 'новое', espanol: 'nuevo/a' },
    { masc: 'старый', fem: 'старая', neutro: 'старое', espanol: 'viejo/a' },
    { masc: 'хороший', fem: 'хорошая', neutro: 'хорошее', espanol: 'bueno/a' },
    { masc: 'плохой', fem: 'плохая', neutro: 'плохое', espanol: 'malo/a' },
    {
      masc: 'красивый',
      fem: 'красивая',
      neutro: 'красивое',
      espanol: 'bonito/a, guapo/a',
    },
    {
      masc: 'интересный',
      fem: 'интересная',
      neutro: 'интересное',
      espanol: 'interesante',
    },
  ];

  const flashCards = [
    {
      ruso: 'новый / новая / новое',
      translit: 'novyy / novaya / novoye',
      espanol: 'nuevo/a/o',
    },
    { ruso: 'большой', translit: 'bolʼshoy', espanol: 'grande (masc.)' },
    { ruso: 'маленькая', translit: 'malenʼkaya', espanol: 'pequeña (fem.)' },
    { ruso: 'хороший', translit: 'khoroshiy', espanol: 'bueno (masc.)' },
    {
      ruso: 'красивый',
      translit: 'krasivyy',
      espanol: 'bonito / guapo (masc.)',
    },
    {
      ruso: 'интересное',
      translit: 'interesnoye',
      espanol: 'interesante (neutro)',
    },
    { ruso: 'старые', translit: 'staryye', espanol: 'viejos/as (plural)' },
    { ruso: 'плохая', translit: 'plokhaya', espanol: 'mala (fem.)' },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta:
        '"Новый" es la forma masculina de "nuevo". ¿Cómo es la forma femenina?',
      opciones: ['новое', 'новые', 'новая', 'новой'],
      correcta: 'новая',
    },
    {
      id: 'q2',
      pregunta: '"Большое окно" significa:',
      opciones: [
        'una ventana pequeña',
        'una grande ventana',
        'la ventana grande',
        'ventanas grandes',
      ],
      correcta: 'la ventana grande',
    },
    {
      id: 'q3',
      pregunta: '¿Cuál es la terminación del adjetivo masculino estándar?',
      opciones: ['-ая', '-ое', '-ый/-ий/-ой', '-ые'],
      correcta: '-ый/-ий/-ой',
    },
    {
      id: 'q4',
      pregunta: '"Красивая девушка" significa:',
      opciones: [
        'un chico guapo',
        'una chica guapa',
        'chicas guapas',
        'un guapo chico',
      ],
      correcta: 'una chica guapa',
    },
    {
      id: 'q5',
      pregunta:
        '¿Cómo se dice "un libro interesante" (libro = книга, femenino)?',
      opciones: [
        'интересный книга',
        'интересная книга',
        'интересное книга',
        'интересные книга',
      ],
      correcta: 'интересная книга',
    },
    {
      id: 'q6',
      pregunta: '¿Cuál es la terminación del adjetivo neutro?',
      opciones: ['-ой', '-ая', '-ое/-ее', '-ые'],
      correcta: '-ое/-ее',
    },
    {
      id: 'q7',
      pregunta: '"Старый город" significa:',
      opciones: [
        'una ciudad vieja',
        'un pueblo pequeño',
        'la ciudad vieja / el casco antiguo',
        'ciudades viejas',
      ],
      correcta: 'la ciudad vieja / el casco antiguo',
    },
    {
      id: 'q8',
      pregunta:
        'Para el plural de todos los géneros, la terminación del adjetivo es:',
      opciones: ['-ый', '-ое', '-ые/-ие', '-ая'],
      correcta: '-ые/-ие',
    },
    {
      id: 'q9',
      pregunta: '"Маленький" (pequeño) con un sustantivo femenino es:',
      opciones: ['маленькой', 'маленькое', 'маленькая', 'маленький'],
      correcta: 'маленькая',
    },
    {
      id: 'q10',
      pregunta: '"Хорошие друзья" significa:',
      opciones: [
        'un buen amigo',
        'una buena amiga',
        'buenos amigos (plural)',
        'el mejor amigo',
      ],
      correcta: 'buenos amigos (plural)',
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
          🎨 Adjetivos — Concordancia de Género
        </h2>
        <p className="text-htb-text-dim">
          En ruso los adjetivos{' '}
          <span className="text-htb-green font-semibold">concuerdan</span> con
          el sustantivo en género (masculino, femenino, neutro) y número
          (singular, plural).
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
                Terminaciones según género
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                    <th className="text-left py-3 px-4 text-htb-green text-sm">
                      Género
                    </th>
                    <th className="text-left py-3 px-4 text-white text-sm">
                      Desinencia
                    </th>
                    <th className="text-left py-3 px-4 text-htb-text-dim text-sm">
                      Ejemplos
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {terminaciones.map((t, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-3 px-4 text-white font-semibold">
                        {t.genero}
                      </td>
                      <td className="py-3 px-4 text-htb-green font-bold font-mono">
                        {t.desinencia}
                      </td>
                      <td className="py-3 px-4 text-htb-text-dim text-sm">
                        {t.ejemplo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Adjetivos comunes por género
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                    <th className="text-left py-2 px-4 text-blue-400 text-sm">
                      Masculino
                    </th>
                    <th className="text-left py-2 px-4 text-pink-400 text-sm">
                      Femenino
                    </th>
                    <th className="text-left py-2 px-4 text-htb-green text-sm">
                      Neutro
                    </th>
                    <th className="text-left py-2 px-4 text-white text-sm">
                      Español
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {adjetivos.map((a, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-4 text-blue-300 font-bold">
                        <SpeakableText text={a.masc} />
                      </td>
                      <td className="py-2 px-4 text-pink-300 font-bold">
                        <SpeakableText text={a.fem} />
                      </td>
                      <td className="py-2 px-4 text-htb-green font-bold">
                        <SpeakableText text={a.neutro} />
                      </td>
                      <td className="py-2 px-4 text-white">{a.espanol}</td>
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

export default AdjetivosA1Exercise;
