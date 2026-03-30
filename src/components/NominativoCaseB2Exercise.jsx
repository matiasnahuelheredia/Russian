import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const quiz = [
  {
    id: 'q1',
    p: '¿Qué caso es el sujeto de la oración?',
    o: ['Acusativo', 'Dativo', 'Nominativo', 'Genitivo'],
    c: 'Nominativo',
  },
  {
    id: 'q2',
    p: '"Кто это?" — ¿qué respuesta usaría nominativo?',
    o: ['Врача', 'Врачу', 'Врач', 'Врачом'],
    c: 'Врач',
  },
  {
    id: 'q3',
    p: '"Это моя сестра." — "сестра" está en:',
    o: ['Acusativo', 'Nominativo', 'Dativo', 'Instrumental'],
    c: 'Nominativo',
  },
  {
    id: 'q4',
    p: '¿Cuál es la desinencia del nominativo plural de sustantivos masculinos en consonante?',
    o: ['-у', '-е', '-ы/-и', '-а'],
    c: '-ы/-и',
  },
  {
    id: 'q5',
    p: '"Студенты учатся." — "студенты" es el:',
    o: [
      'Objeto directo',
      'Sujeto (nominativo)',
      'Complemento indirecto',
      'Predicado nominal',
    ],
    c: 'Sujeto (nominativo)',
  },
  {
    id: 'q6',
    p: '¿Nominativo plural de "город" (ciudad)?',
    o: ['городи', 'города', 'городе', 'городам'],
    c: 'города',
  },
  {
    id: 'q7',
    p: '"Он хороший учитель." — "учитель" está en nominativo porque:',
    o: [
      'Es objeto directo',
      'Es predicado nominal',
      'Hay negación',
      'Va con preposición',
    ],
    c: 'Es predicado nominal',
  },
  {
    id: 'q8',
    p: '¿Nominativo plural de "книга"?',
    o: ['книги', 'книгу', 'книге', 'книгой'],
    c: 'книги',
  },
  {
    id: 'q9',
    p: '"Что лежит на столе?" — ¿qué caso tendrá la respuesta (el sujeto)?',
    o: ['Dativo', 'Prepositivo', 'Nominativo', 'Genitivo'],
    c: 'Nominativo',
  },
  {
    id: 'q10',
    p: '¿Nominativo plural de "слово" (palabra)?',
    o: ['слова', 'слове', 'слову', 'словом'],
    c: 'слова',
  },
];

const ref = [
  { caso: 'Sujeto', ej: 'Студент читает.', t: 'El estudiante lee.' },
  { caso: 'Predicado nominal', ej: 'Он врач.', t: 'Él es médico.' },
  { caso: 'Después de "это есть"', ej: 'Это Москва.', t: 'Esto es Moscú.' },
  { caso: 'Comas vocativas', ej: 'Мама, иди сюда!', t: 'Mamá, ven aquí.' },
];

const plural = [
  { tipo: 'Masc. conson.', sg: 'студент', pl: 'студенты' },
  { tipo: 'Masc. -й', sg: 'музей', pl: 'музеи' },
  { tipo: 'Masc. -ь', sg: 'день', pl: 'дни' },
  { tipo: 'Fem. -а', sg: 'женщина', pl: 'женщины' },
  { tipo: 'Fem. -я', sg: 'неделя', pl: 'недели' },
  { tipo: 'Fem. -ь', sg: 'тетрадь', pl: 'тетради' },
  { tipo: 'Neutro -о', sg: 'слово', pl: 'слова' },
  { tipo: 'Neutro -е', sg: 'здание', pl: 'здания' },
];

const cards = [
  { ru: 'Кто это?', tl: 'Kto eto?', es: '¿Quién es este?' },
  { ru: 'Это мой брат.', tl: 'Eto moy brat.', es: 'Este es mi hermano.' },
  {
    ru: 'Студенты учатся.',
    tl: 'Studenty uchatsya.',
    es: 'Los estudiantes estudian.',
  },
  {
    ru: 'Она хорошая учительница.',
    tl: 'Ona khoroshaya uchitelʼnitsa.',
    es: 'Ella es una buena maestra.',
  },
  { ru: 'Что это такое?', tl: 'Chto eto takoye?', es: '¿Qué es esto?' },
  {
    ru: 'Города большие.',
    tl: 'Goroda bolʼshiye.',
    es: 'Las ciudades son grandes.',
  },
];

export default function NominativoCaseB2Exercise() {
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
          📌 Caso Nominativo (Именительный падеж)
        </h2>
        <p className="text-htb-text-dim">
          El nominativo es el caso base. Responde a{' '}
          <span className="text-htb-green font-bold">
            кто? (¿quién?) / что? (¿qué?)
          </span>
          . Es el caso del sujeto y del predicado nominal.
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
        <div className="space-y-4">
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Usos del Nominativo
              </h3>
            </div>
            <table className="w-full text-sm">
              <tbody>
                {ref.map((r, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-3 text-htb-green font-bold">
                      {r.caso}
                    </td>
                    <td className="py-2 px-3 text-white font-medium"><SpeakableText text={r.ej} /></td>
                    <td className="py-2 px-3 text-htb-text-dim italic">
                      {r.t}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
            <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
              <h3 className="text-htb-green font-semibold">
                Nominativo Plural
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {plural.map((p, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 py-2 px-4 border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                >
                  <span className="text-htb-text-dim text-xs w-28">
                    {p.tipo}
                  </span>
                  <span className="text-htb-green font-bold">{p.sg}</span>
                  <span className="text-htb-text-dim">→</span>
                  <span className="text-white font-bold"><SpeakableText text={p.pl} /></span>
                </div>
              ))}
            </div>
          </div>
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
                <p className="text-2xl text-htb-green font-bold mb-2 text-center">
                  {cards[fi].ru}
                </p>
                <p className="text-htb-text-dim italic text-sm text-center">
                  {cards[fi].tl}
                </p>
              </>
            ) : (
              <p className="text-xl text-white text-center">{cards[fi].es}</p>
            )}
          </div>
          <p className="text-center text-htb-text-dim text-sm mb-4">
            {ff ? '🇷🇺 Ruso' : '🇪🇸 Español — clic para ver'}
          </p>
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
              {fi + 1} / {cards.length}
            </span>
            <button
              onClick={() => {
                setFi((i) => Math.min(cards.length - 1, i + 1));
                setFf(false);
              }}
              disabled={fi === cards.length - 1}
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
                        Tu respuesta: {ans[q.id] || '(sin responder)'}
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
              <p className="text-htb-text-dim text-sm mb-6">
                Elige la respuesta correcta.
              </p>
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
