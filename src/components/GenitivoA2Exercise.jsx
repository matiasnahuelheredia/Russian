import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const GenitivoA2Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const usos = [
    {
      uso: 'Posesión',
      estructura: 'у +ген. + есть',
      ejemplo: 'У меня есть книга.',
      trad: 'Tengo un libro.',
    },
    {
      uso: 'Ausencia / Negación',
      estructura: 'нет + ген.',
      ejemplo: 'У меня нет книги.',
      trad: 'No tengo libro.',
    },
    {
      uso: '¿De quién? Pertenencia',
      estructura: 'кого/чего',
      ejemplo: 'Это книга брата.',
      trad: 'Es el libro del hermano.',
    },
    {
      uso: 'Cantidad / Numeros',
      estructura: '2–4: ген. sg.  5+: ген. pl.',
      ejemplo: 'Два стула. Пять стульев.',
      trad: 'Dos sillas. Cinco sillas.',
    },
    {
      uso: 'После от, из, без, для, до',
      estructura: 'prepos. + ген.',
      ejemplo: 'Стакан воды. Письмо от друга.',
      trad: 'Un vaso de agua. Carta del amigo.',
    },
  ];

  const declinacion = [
    { tipo: 'Masc. consonante', nom: 'брат', gen: 'брата' },
    { tipo: 'Masc. -й', nom: 'музей', gen: 'музея' },
    { tipo: 'Masc. -ь', nom: 'день', gen: 'дня' },
    { tipo: 'Fem. -а', nom: 'сестра', gen: 'сестры' },
    { tipo: 'Fem. -я', nom: 'неделя', gen: 'недели' },
    { tipo: 'Fem. -ь', nom: 'ночь', gen: 'ночи' },
    { tipo: 'Neutro -о', nom: 'окно', gen: 'окна' },
    { tipo: 'Neutro -е', nom: 'море', gen: 'моря' },
  ];

  const flashCards = [
    {
      ruso: 'У меня есть машина.',
      translit: 'U menya yestʼ mashina.',
      espanol: 'Tengo coche.',
    },
    {
      ruso: 'У него нет денег.',
      translit: 'U nego net deneg.',
      espanol: 'Él no tiene dinero.',
    },
    {
      ruso: 'Это книга сестры.',
      translit: 'Eto kniga sestry.',
      espanol: 'Es el libro de la hermana.',
    },
    {
      ruso: 'Стакан воды.',
      translit: 'Stakan vody.',
      espanol: 'Un vaso de agua.',
    },
    {
      ruso: 'Письмо от друга.',
      translit: 'Pisʼmo ot druga.',
      espanol: 'Carta del amigo.',
    },
    { ruso: 'Два стула.', translit: 'Dva stula.', espanol: 'Dos sillas.' },
    {
      ruso: 'Пять студентов.',
      translit: 'Pyatʼ studentov.',
      espanol: 'Cinco estudiantes.',
    },
    { ruso: 'Без сахара.', translit: 'Bez sakhara.', espanol: 'Sin azúcar.' },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '"У меня есть" significa:',
      opciones: ['Yo tengo', 'Yo soy', 'Para mí', 'Conmigo'],
      correcta: 'Yo tengo',
    },
    {
      id: 'q2',
      pregunta: '¿Cuál es el genitivo de "брат" (hermano)?',
      opciones: ['брату', 'братом', 'брата', 'братe'],
      correcta: 'брата',
    },
    {
      id: 'q3',
      pregunta: '"У меня нет книги" — "книги" está en genitivo porque:',
      opciones: [
        'Es sujeto',
        'Hay negación con нет',
        'Hay posesión',
        'Es objeto directo',
      ],
      correcta: 'Hay negación con нет',
    },
    {
      id: 'q4',
      pregunta: '¿Cuál es el genitivo de "сестра"?',
      opciones: ['сестре', 'сестры', 'сестру', 'сестрой'],
      correcta: 'сестры',
    },
    {
      id: 'q5',
      pregunta: '"Стакан воды" — "воды" está en genitivo porque:',
      opciones: [
        'Es sujeto',
        'Expresa cantidad / porción',
        'Es objeto directo',
        'Hay negación',
      ],
      correcta: 'Expresa cantidad / porción',
    },
    {
      id: 'q6',
      pregunta: 'Con los números 2, 3, 4 el sustantivo va en:',
      opciones: [
        'nominativo singular',
        'genitivo singular',
        'genitivo plural',
        'dativo singular',
      ],
      correcta: 'genitivo singular',
    },
    {
      id: 'q7',
      pregunta: '"Без сахара" significa:',
      opciones: ['Con azúcar', 'Del azúcar', 'Sin azúcar', 'Para el azúcar'],
      correcta: 'Sin azúcar',
    },
    {
      id: 'q8',
      pregunta: '¿Cuál es el genitivo de "ночь" (noche)?',
      opciones: ['ночю', 'ночи', 'ночью', 'ноче'],
      correcta: 'ночи',
    },
    {
      id: 'q9',
      pregunta: '"Это машина друга" significa:',
      opciones: [
        'Este es mi amigo',
        'Es el coche del amigo',
        'El amigo tiene coche',
        'Me gusta el coche',
      ],
      correcta: 'Es el coche del amigo',
    },
    {
      id: 'q10',
      pregunta: '¿Cuál es el genitivo de "окно" (ventana)?',
      opciones: ['окну', 'окном', 'окна', 'окне'],
      correcta: 'окна',
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
          🔑 Caso Genitivo (Родительный падеж)
        </h2>
        <p className="text-htb-text-dim">
          El genitivo es el caso más versátil del ruso. Expresa{' '}
          <span className="text-htb-green font-bold">
            posesión, ausencia, cantidad y se usa con muchas preposiciones
          </span>
          . Es el segundo caso más frecuente después del nominativo.
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
                Usos del Genitivo
              </h3>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                  <th className="text-left py-2 px-3 text-htb-green">Uso</th>
                  <th className="text-left py-2 px-3 text-htb-text-dim">
                    Estructura
                  </th>
                  <th className="text-left py-2 px-3 text-white">Ejemplo</th>
                  <th className="text-left py-2 px-3 text-htb-text-dim">
                    Trad.
                  </th>
                </tr>
              </thead>
              <tbody>
                {usos.map((u, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-3 text-htb-green font-bold">
                      {u.uso}
                    </td>
                    <td className="py-2 px-3 text-htb-text-dim italic">
                      {u.estructura}
                    </td>
                    <td className="py-2 px-3 text-white font-medium">
                      {u.ejemplo}
                    </td>
                    <td className="py-2 px-3 text-htb-text-dim text-xs">
                      {u.trad}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Declinación Genitivo Singular
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {declinacion.map((d, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between py-2 px-4 border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                >
                  <span className="text-htb-text-dim text-sm">{d.tipo}</span>
                  <span className="text-htb-green font-bold"><SpeakableText text={d.nom} /></span>
                  <span className="text-white">→ {d.gen}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-htb-sidebar rounded-lg border border-htb-green/30 p-4">
            <p className="text-htb-green font-semibold mb-2">
              💡 Preposiciones que rigen Genitivo
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'у (en casa de / tengo)',
                'без (sin)',
                'для (para)',
                'до (hasta)',
                'из (de / desde)',
                'от (de / desde)',
                'с (desde)',
                'около (cerca de)',
                'после (después de)',
                'кроме (excepto)',
              ].map((p, i) => (
                <span
                  key={i}
                  className="bg-htb-card border border-gray-700 text-white text-xs px-2 py-1 rounded"
                >
                  {p}
                </span>
              ))}
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
            {flashcardFlipped
              ? '🇷🇺 Ejemplo en ruso'
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

export default GenitivoA2Exercise;
