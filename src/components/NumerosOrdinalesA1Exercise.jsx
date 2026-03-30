import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const NumerosOrdinalesA1Exercise = () => {
  const [activeTab, setActiveTab] = useState('referencia');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  const ordinales = [
    {
      num: '1°',
      masc: 'первый',
      fem: 'первая',
      neutro: 'первое',
      espanol: 'primero/a',
    },
    {
      num: '2°',
      masc: 'второй',
      fem: 'вторая',
      neutro: 'второе',
      espanol: 'segundo/a',
    },
    {
      num: '3°',
      masc: 'третий',
      fem: 'третья',
      neutro: 'третье',
      espanol: 'tercero/a',
    },
    {
      num: '4°',
      masc: 'четвёртый',
      fem: 'четвёртая',
      neutro: 'четвёртое',
      espanol: 'cuarto/a',
    },
    {
      num: '5°',
      masc: 'пятый',
      fem: 'пятая',
      neutro: 'пятое',
      espanol: 'quinto/a',
    },
    {
      num: '6°',
      masc: 'шестой',
      fem: 'шестая',
      neutro: 'шестое',
      espanol: 'sexto/a',
    },
    {
      num: '7°',
      masc: 'седьмой',
      fem: 'седьмая',
      neutro: 'седьмое',
      espanol: 'séptimo/a',
    },
    {
      num: '8°',
      masc: 'восьмой',
      fem: 'восьмая',
      neutro: 'восьмое',
      espanol: 'octavo/a',
    },
    {
      num: '9°',
      masc: 'девятый',
      fem: 'девятая',
      neutro: 'девятое',
      espanol: 'noveno/a',
    },
    {
      num: '10°',
      masc: 'десятый',
      fem: 'десятая',
      neutro: 'десятое',
      espanol: 'décimo/a',
    },
  ];

  const ejemplos = [
    { ruso: 'первый этаж', translit: 'pervyy etazh', espanol: 'primer piso' },
    {
      ruso: 'второй класс',
      translit: 'vtoroy klass',
      espanol: 'segundo grado',
    },
    {
      ruso: 'третья улица',
      translit: 'tretʼya ulitsa',
      espanol: 'tercera calle',
    },
    { ruso: 'пятое место', translit: 'pyatoye mesto', espanol: 'quinto lugar' },
  ];

  const flashCards = ordinales.map((o) => ({
    ruso: o.masc,
    translit: '',
    espanol: o.espanol,
  }));

  const questions = [
    {
      id: 'q1',
      pregunta: '¿Cómo se dice "primero" (masc.) en ruso?',
      opciones: ['первая', 'первый', 'первое', 'один'],
      correcta: 'первый',
    },
    {
      id: 'q2',
      pregunta: '"Второй" significa:',
      opciones: ['primero', 'tercero', 'segundo', 'cuarto'],
      correcta: 'segundo',
    },
    {
      id: 'q3',
      pregunta: '¿Cuál es la forma FEMENINA de "третий"?',
      opciones: ['третья', 'третьая', 'третее', 'третий'],
      correcta: 'третья',
    },
    {
      id: 'q4',
      pregunta: '"Пятый" (masc.) significa:',
      opciones: ['cuarto', 'quinto', 'sexto', 'séptimo'],
      correcta: 'quinto',
    },
    {
      id: 'q5',
      pregunta: '¿Cómo se dice "décimo" (masc.)?',
      opciones: ['девятый', 'десятый', 'восьмой', 'седьмой'],
      correcta: 'десятый',
    },
    {
      id: 'q6',
      pregunta: '"первый этаж" significa:',
      opciones: [
        'último piso',
        'segundo piso',
        'primer piso',
        'piso de arriba',
      ],
      correcta: 'primer piso',
    },
    {
      id: 'q7',
      pregunta:
        'Los ordinales concuerdan en género. ¿Cuál es la forma NEUTRA de "четвёртый"?',
      opciones: ['четвёртая', 'четвёртое', 'четвёртый', 'четвёртого'],
      correcta: 'четвёртое',
    },
    {
      id: 'q8',
      pregunta: '"Седьмой" significa:',
      opciones: ['sexto', 'séptimo', 'octavo', 'noveno'],
      correcta: 'séptimo',
    },
    {
      id: 'q9',
      pregunta: '¿Cómo se dice "octavo" (masc.)?',
      opciones: ['седьмой', 'восьмой', 'девятый', 'шестой'],
      correcta: 'восьмой',
    },
    {
      id: 'q10',
      pregunta: '"Третья улица" ¿por qué usa "третья" y no "третий"?',
      opciones: [
        'Porque улица es neutro',
        'Porque улица es femenino',
        'Porque улица es plural',
        'Es un error',
      ],
      correcta: 'Porque улица es femenino',
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
          🔢 Números Ordinales
        </h2>
        <p className="text-htb-text-dim">
          Los ordinales del 1° al 10°. Se usan igual que los adjetivos:
          concuerdan en{' '}
          <span className="text-htb-green font-bold">género y número</span> con
          el sustantivo al que acompañan.
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
                Tabla de ordinales (1°–10°)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700 bg-htb-sidebar/50">
                    <th className="text-left py-2 px-3 text-htb-text-dim">#</th>
                    <th className="text-left py-2 px-3 text-htb-green">
                      Masculino
                    </th>
                    <th className="text-left py-2 px-3 text-pink-400">
                      Femenino
                    </th>
                    <th className="text-left py-2 px-3 text-blue-400">
                      Neutro
                    </th>
                    <th className="text-left py-2 px-3 text-white">Español</th>
                  </tr>
                </thead>
                <tbody>
                  {ordinales.map((o, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                    >
                      <td className="py-2 px-3 text-htb-text-dim font-bold">
                        {o.num}
                      </td>
                      <td className="py-2 px-3 text-htb-green font-bold">
                        <SpeakableText text={o.masc} />
                      </td>
                      <td className="py-2 px-3 text-pink-400"><SpeakableText text={o.fem} /></td>
                      <td className="py-2 px-3 text-blue-400"><SpeakableText text={o.neutro} /></td>
                      <td className="py-2 px-3 text-white">{o.espanol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Ejemplos en contexto
              </h3>
            </div>
            <table className="w-full">
              <tbody>
                {ejemplos.map((e, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-4 text-htb-green font-bold">
                      <SpeakableText text={e.ruso} />
                    </td>
                    <td className="py-2 px-4 text-htb-text-dim italic text-sm">
                      {e.translit}
                    </td>
                    <td className="py-2 px-4 text-white text-sm">
                      {e.espanol}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-htb-sidebar rounded-lg border border-htb-green/30 p-4">
            <p className="text-htb-green font-semibold mb-2">
              ⚠️ Irregular: третий
            </p>
            <p className="text-htb-text-dim text-sm">
              "Tercero" es especial:{' '}
              <span className="text-white"><SpeakableText text="третий / третья / третье" /></span> (nota
              la ь intermediа — forma suave).
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
              <p className="text-4xl text-htb-green font-bold">
                {flashCards[flashcardIndex].ruso}
              </p>
            ) : (
              <p className="text-2xl text-white">
                {flashCards[flashcardIndex].espanol} (masc.)
              </p>
            )}
          </div>
          <p className="text-center text-htb-text-dim text-sm mb-4">
            {flashcardFlipped
              ? '🇷🇺 Ruso (masc.)'
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

export default NumerosOrdinalesA1Exercise;
