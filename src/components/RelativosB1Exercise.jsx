import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const quiz = [
  {
    id: 'q1',
    p: '"Книга, _____ я читал, интересная." — ¿qué forma de который?',
    o: ['который', 'которого', 'которую', 'которым'],
    c: 'которую',
  },
  {
    id: 'q2',
    p: '"Студент, _____ я помог, сдал экзамен." — ¿caso de который?',
    o: [
      'Nominativo: который',
      'Dativo: которому',
      'Genitivo: которого',
      'Instrumental: которым',
    ],
    c: 'Dativo: которому',
  },
  {
    id: 'q3',
    p: '"Дом, в _____ я живу, большой." — ¿forma correcta?',
    o: ['который', 'котором', 'которого', 'которому'],
    c: 'котором',
  },
  {
    id: 'q4',
    p: '"Девушка, _____ я познакомился, умная." — ¿forma?',
    o: ['которую', 'которой', 'которой (inst.)', 'которым'],
    c: 'которой (inst.)',
  },
  {
    id: 'q5',
    p: '¿Cómo varía который?',
    o: [
      'No varía',
      'Varía solo en género',
      'Varía en género, número Y caso',
      'Solo varía en número',
    ],
    c: 'Varía en género, número Y caso',
  },
  {
    id: 'q6',
    p: '"Люди, _____ живут здесь, добрые." — ¿forma?',
    o: ['который', 'которые', 'которых', 'которым'],
    c: 'которые',
  },
  {
    id: 'q7',
    p: '"Подруга, _____ книгу я взял, учится в университете." — ¿caso?',
    o: ['Nominativo', 'Genitivo (cuya)', 'Dativo', 'Acusativo'],
    c: 'Genitivo (cuya)',
  },
  {
    id: 'q8',
    p: '"Фильм, о _____ мы говорили, вышел." — ¿forma?',
    o: ['который', 'котором', 'которого', 'которому'],
    c: 'котором',
  },
  {
    id: 'q9',
    p: 'Para objetos inanimados en Acusativo, который se comporta como:',
    o: ['animado', 'inanimado', 'siempre -ого', 'siempre -ым'],
    c: 'inanimado',
  },
  {
    id: 'q10',
    p: '"Врач, _____ лечил меня, очень хороший." — ¿forma?',
    o: ['которому', 'которого', 'который', 'которым'],
    c: 'который',
  },
];

const decl = [
  { c: 'Nom.', m: 'который', f: 'которая', n: 'которое', pl: 'которые' },
  { c: 'Gen.', m: 'которого', f: 'которой', n: 'которого', pl: 'которых' },
  { c: 'Dat.', m: 'которому', f: 'которой', n: 'которому', pl: 'которым' },
  { c: 'Acc.(inan.)', m: 'который', f: 'которую', n: 'которое', pl: 'которые' },
  {
    c: 'Acc.(anim.)',
    m: 'которого',
    f: 'которую',
    n: 'которого',
    pl: 'которых',
  },
  { c: 'Inst.', m: 'которым', f: 'которой', n: 'которым', pl: 'которыми' },
  { c: 'Prep.', m: 'котором', f: 'которой', n: 'котором', pl: 'которых' },
];

const cards = [
  {
    ru: 'Книга, которую я купил, очень интересная.',
    tl: 'Kniga, kotoruyu ya kupil, ochenʼ interesnaya.',
    es: 'El libro que compré es muy interesante.',
  },
  {
    ru: 'Студент, которому я помог, сдал экзамен.',
    tl: 'Student, kotoromu ya pomog, sdal ekzamen.',
    es: 'El estudiante al que ayudé aprobó el examen.',
  },
  {
    ru: 'Дом, в котором я живу, большой.',
    tl: 'Dom, v kotorom ya zhivu, bolʼshoy.',
    es: 'La casa en la que vivo es grande.',
  },
  {
    ru: 'Люди, с которыми я работаю, умные.',
    tl: 'Lyudi, s kotorymi ya rabotayu, umnyye.',
    es: 'Las personas con las que trabajo son inteligentes.',
  },
  {
    ru: 'Подруга, книгу которой я взял, студентка.',
    tl: 'Podruga, knigu kotoroy ya vzyal, studentka.',
    es: 'La amiga cuyo libro tomé es estudiante.',
  },
  {
    ru: 'Фильм, о котором мы говорили, вышел.',
    tl: 'Filʼm, o kotorom my govorili, vyshel.',
    es: 'La película de la que hablábamos ha salido.',
  },
];

export default function RelativosB1Exercise() {
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
          🔗 Pronombres Relativos — который
        </h2>
        <p className="text-htb-text-dim">
          <span className="text-htb-green font-bold"><SpeakableText text="который" /></span> (que, el
          cual) declina en género, número y caso. El caso depende de su función
          en la oración subordinada; el género y número dependen del
          antecedente.
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
        <div className="bg-htb-card rounded-lg border border-gray-800 overflow-hidden">
          <div className="p-3 border-b border-gray-800 bg-htb-sidebar">
            <h3 className="text-htb-green font-semibold">
              Declinación de который
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 bg-htb-sidebar/50 text-xs">
                  <th className="text-left py-2 px-3 text-htb-text-dim">
                    Caso
                  </th>
                  <th className="text-left py-2 px-3 text-htb-green">Masc.</th>
                  <th className="text-left py-2 px-3 text-blue-400">Fem.</th>
                  <th className="text-left py-2 px-3 text-yellow-400">
                    Neutro
                  </th>
                  <th className="text-left py-2 px-3 text-pink-400">Plural</th>
                </tr>
              </thead>
              <tbody>
                {decl.map((d, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
                  >
                    <td className="py-2 px-3 text-htb-text-dim text-xs">
                      {d.c}
                    </td>
                    <td className="py-2 px-3 text-htb-green font-bold">
                      {d.m}
                    </td>
                    <td className="py-2 px-3 text-blue-400 font-bold">{d.f}</td>
                    <td className="py-2 px-3 text-yellow-400 font-bold">
                      {d.n}
                    </td>
                    <td className="py-2 px-3 text-pink-400 font-bold">
                      <SpeakableText text={d.pl} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                <p className="text-xl text-htb-green font-bold mb-2 text-center">
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
