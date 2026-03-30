import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const PluralSustantivosA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const reglas = [
    {
      tipo: 'Masc. consonante',
      singular: 'стол',
      plural: 'столы',
      regla: '+ ы',
      color: 'blue',
    },
    {
      tipo: 'Masc. -й',
      singular: 'музей',
      plural: 'музеи',
      regla: '-й → и',
      color: 'blue',
    },
    {
      tipo: 'Masc. -ь',
      singular: 'словарь',
      plural: 'словари',
      regla: '-ь → и',
      color: 'blue',
    },
    {
      tipo: 'Fem. -а',
      singular: 'книга',
      plural: 'книги',
      regla: '-а → и',
      color: 'pink',
    },
    {
      tipo: 'Fem. -я',
      singular: 'неделя',
      plural: 'недели',
      regla: '-я → и',
      color: 'pink',
    },
    {
      tipo: 'Fem. -ь',
      singular: 'ночь',
      plural: 'ночи',
      regla: '-ь → и',
      color: 'pink',
    },
    {
      tipo: 'Neutro -о',
      singular: 'окно',
      plural: 'окна',
      regla: '-о → а',
      color: 'green',
    },
    {
      tipo: 'Neutro -е',
      singular: 'море',
      plural: 'моря',
      regla: '-е → я',
      color: 'green',
    },
  ];

  const exceptions = [
    {
      singular: 'брат',
      plural: 'братья',
      espanol: 'hermano → hermanos (irreg.)',
    },
    { singular: 'друг', plural: 'друзья', espanol: 'amigo → amigos (irreg.)' },
    { singular: 'ребёнок', plural: 'дети', espanol: 'niño → niños (irreg.)' },
    {
      singular: 'человек',
      plural: 'люди',
      espanol: 'persona → personas (irreg.)',
    },
    { singular: 'глаз', plural: 'глаза', espanol: 'ojo → ojos' },
    { singular: 'город', plural: 'города', espanol: 'ciudad → ciudades' },
  ];

  const flashCards = [
    { ruso: 'стол → столы', translit: 'stol → stoly', espanol: 'mesa → mesas' },
    {
      ruso: 'книга → книги',
      translit: 'kniga → knigi',
      espanol: 'libro → libros',
    },
    {
      ruso: 'окно → окна',
      translit: 'okno → okna',
      espanol: 'ventana → ventanas',
    },
    {
      ruso: 'музей → музеи',
      translit: 'muzey → muzei',
      espanol: 'museo → museos',
    },
    {
      ruso: 'словарь → словари',
      translit: 'slovarʼ → slovari',
      espanol: 'diccionario → diccionarios',
    },
    {
      ruso: 'ночь → ночи',
      translit: 'nochʼ → nochi',
      espanol: 'noche → noches',
    },
    {
      ruso: 'друг → друзья',
      translit: 'drug → druzʼya',
      espanol: 'amigo → amigos (irreg.)',
    },
    {
      ruso: 'ребёнок → дети',
      translit: 'rebyonok → deti',
      espanol: 'niño → niños (irreg.)',
    },
  ];

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cuál es el plural de "стол" (mesa)?',
      opciones: ['столы', 'столи', 'стола', 'столей'],
      correcta: 'столы',
    },
    {
      id: 'q2',
      pregunta: '¿Cuál es el plural de "книга" (libro)?',
      opciones: ['книги', 'книгы', 'книге', 'книгей'],
      correcta: 'книги',
    },
    {
      id: 'q3',
      pregunta: '¿Cuál es el plural de "окно" (ventana)?',
      opciones: ['окни', 'окны', 'окна', 'окное'],
      correcta: 'окна',
    },
    {
      id: 'q4',
      pregunta: '¿Cuál es el plural de "музей" (museo)?',
      opciones: ['музеи', 'музейы', 'музея', 'музеев'],
      correcta: 'музеи',
    },
    {
      id: 'q5',
      pregunta: '"Дети" es el plural irregular de:',
      opciones: ['друг', 'брат', 'ребёнок', 'человек'],
      correcta: 'ребёнок',
    },
    {
      id: 'q6',
      pregunta: '¿Cuál es el plural de "словарь" (diccionario)?',
      opciones: ['словарья', 'словари', 'словарей', 'словаре'],
      correcta: 'словари',
    },
    {
      id: 'q7',
      pregunta: 'Los sustantivos neutros en -о forman el plural con:',
      opciones: ['-ы', '-и', '-а', '-я'],
      correcta: '-а',
    },
    {
      id: 'q8',
      pregunta: '"Друзья" es el plural de:',
      opciones: ['брат', 'друг', 'человек', 'ребёнок'],
      correcta: 'друг',
    },
    {
      id: 'q9',
      pregunta: '¿Cuál es el plural de "ночь" (noche)?',
      opciones: ['ночы', 'ночи', 'ночья', 'ноча'],
      correcta: 'ночи',
    },
    {
      id: 'q10',
      pregunta: '"Люди" es el plural de:',
      opciones: ['ребёнок', 'брат', 'человек', 'друг'],
      correcta: 'человек',
    },
  ];

  const colorMap = {
    blue: 'text-blue-300',
    pink: 'text-pink-300',
    green: 'text-green-400',
  };
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
          🔢 Plural de Sustantivos
        </h2>
        <p className="text-htb-text-dim">
          El plural en ruso depende de la terminación del sustantivo. La
          desinencia más común es{' '}
          <span className="text-htb-green font-semibold"><SpeakableText text="-ы/-и" /></span> y para
          neutros <span className="text-htb-green font-semibold"><SpeakableText text="-а/-я" /></span>.
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
                Reglas por terminación
              </h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                  <th className="text-left py-2 px-4 text-htb-text-dim text-sm">
                    Tipo
                  </th>
                  <th className="text-left py-2 px-4 text-htb-green text-sm">
                    Singular
                  </th>
                  <th className="text-left py-2 px-4 text-white text-sm">
                    Plural
                  </th>
                  <th className="text-left py-2 px-4 text-htb-text-dim text-sm">
                    Regla
                  </th>
                </tr>
              </thead>
              <tbody>
                {reglas.map((r, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-4 text-htb-text-dim text-sm">
                      {r.tipo}
                    </td>
                    <td className={`py-2 px-4 font-bold ${colorMap[r.color]}`}>
                      <SpeakableText text={r.singular} />
                    </td>
                    <td className="py-2 px-4 text-white font-bold">
                      <SpeakableText text={r.plural} />
                    </td>
                    <td className="py-2 px-4 text-htb-green text-sm font-mono">
                      {r.regla}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                ⚠️ Plurales irregulares
              </h3>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                  <th className="text-left py-2 px-4 text-htb-green text-sm">
                    Singular
                  </th>
                  <th className="text-left py-2 px-4 text-white text-sm">
                    Plural
                  </th>
                  <th className="text-left py-2 px-4 text-htb-text-dim text-sm">
                    Español
                  </th>
                </tr>
              </thead>
              <tbody>
                {exceptions.map((e, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-4 text-htb-green font-bold">
                      <SpeakableText text={e.singular} />
                    </td>
                    <td className="py-2 px-4 text-white font-bold">
                      <SpeakableText text={e.plural} />
                    </td>
                    <td className="py-2 px-4 text-htb-text-dim text-sm italic">
                      {e.espanol}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-htb-sidebar rounded-lg border border-htb-green/30 p-4">
            <p className="text-htb-green font-semibold mb-1">
              💡 Regla de los 7 y 8
            </p>
            <p className="text-htb-text-dim text-sm">
              Después de г, к, х, ж, ш, щ, ч — se escribe{' '}
              <strong className="text-white"><SpeakableText text="-и" /></strong> (nunca -ы). Ej: книга →
              книги (no книгы).
            </p>
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
                <p className="text-htb-text-dim italic">
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
                Elige la respuesta correcta para cada pregunta.
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

export default PluralSustantivosA1Exercise;
