import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const vocab = [
  {
    prefix: 'по-',
    meaning: 'un rato / brevemente',
    ex: 'почитать — leer un poco',
    base: 'читать',
  },
  {
    prefix: 'за-',
    meaning: 'inicio de acción / cubrir',
    ex: 'запеть — empezar a cantar',
    base: 'петь',
  },
  {
    prefix: 'вы-',
    meaning: 'hacia fuera / lograr salir',
    ex: 'выйти — salir (a pie)',
    base: 'идти',
  },
  {
    prefix: 'при-',
    meaning: 'llegada / aproximación',
    ex: 'приехать — llegar (en vehículo)',
    base: 'ехать',
  },
  {
    prefix: 'у-',
    meaning: 'alejamiento / marcha',
    ex: 'уйти — irse (a pie)',
    base: 'идти',
  },
  {
    prefix: 'пере-',
    meaning: 'repetición / cruzar',
    ex: 'перечитать — releer',
    base: 'читать',
  },
  {
    prefix: 'про-',
    meaning: 'pasar por / transcurrir',
    ex: 'пройти — pasar / recorrer',
    base: 'идти',
  },
  {
    prefix: 'под-',
    meaning: 'aproximación / por debajo',
    ex: 'подойти — acercarse (a pie)',
    base: 'идти',
  },
  {
    prefix: 'от-',
    meaning: 'alejamiento desde un punto',
    ex: 'отойти — alejarse (a pie)',
    base: 'идти',
  },
  {
    prefix: 'раз-/рас-',
    meaning: 'dispersión / inicio intenso',
    ex: 'разговаривать — conversar',
    base: 'говорить',
  },
  {
    prefix: 'на-',
    meaning: 'acumulación / llenado',
    ex: 'написать — escribir (completar)',
    base: 'писать',
  },
  {
    prefix: 'до-',
    meaning: 'alcanzar el destino/fin',
    ex: 'дойти — llegar (a pie)',
    base: 'идти',
  },
  {
    prefix: 'вз-/вс-',
    meaning: 'hacia arriba',
    ex: 'взбежать — subir corriendo',
    base: 'бежать',
  },
  {
    prefix: 'объ-',
    meaning: 'rodear / alrededor',
    ex: 'объехать — rodear (en vehículo)',
    base: 'ехать',
  },
  {
    prefix: 'со-',
    meaning: 'junto / bajar desde',
    ex: 'сойти — bajar (a pie)',
    base: 'идти',
  },
];

const quiz = [
  {
    id: 'q1',
    p: '"Приехать" indica:',
    o: [
      'salir en vehículo',
      'llegar en vehículo',
      'circular en vehículo',
      'cruzar en vehículo',
    ],
    c: 'llegar en vehículo',
  },
  {
    id: 'q2',
    p: 'El prefijo "вы-" expresa:',
    o: ['llegada', 'movimiento hacia fuera', 'alejamiento', 'inicio'],
    c: 'movimiento hacia fuera',
  },
  {
    id: 'q3',
    p: '"Почитать" (по- + читать) indica:',
    o: [
      'releer',
      'escribir un poco',
      'leer un poco / un rato',
      'dejar de leer',
    ],
    c: 'leer un poco / un rato',
  },
  {
    id: 'q4',
    p: '"Перечитать" significa:',
    o: ['empezar a leer', 'leer rápido', 'releer', 'leer en voz alta'],
    c: 'releer',
  },
  {
    id: 'q5',
    p: '"Уйти" vs "Отойти" — ¿cuál implica un alejamiento breve/parcial?',
    o: ['уйти', 'отойти', 'ambos son iguales', 'ninguno'],
    c: 'отойти',
  },
  {
    id: 'q6',
    p: 'El prefijo "за-" en verbos como "заговорить" indica:',
    o: [
      'fin de la acción',
      'inicio de la acción',
      'repetición',
      'movimiento hacia fuera',
    ],
    c: 'inicio de la acción',
  },
  {
    id: 'q7',
    p: '"Написать" usa el prefijo "на-" para indicar:',
    o: [
      'escribir hacia arriba',
      'acumulación / completar la acción',
      'escribir de nuevo',
      'escribir brevemente',
    ],
    c: 'acumulación / completar la acción',
  },
  {
    id: 'q8',
    p: '"Подойти" (под- + идти) significa:',
    o: ['alejarse a pie', 'bajar a pie', 'acercarse a pie', 'cruzar a pie'],
    c: 'acercarse a pie',
  },
  {
    id: 'q9',
    p: '¿Qué prefijo añades a "идти" para decir "llegar a (a pie)"?',
    o: ['у-', 'пере-', 'до-', 'вы-'],
    c: 'до-',
  },
  {
    id: 'q10',
    p: '"Разговаривать" viene de "говорить" con el prefijo "раз-". Este prefijo indica aquí:',
    o: [
      'movimiento hacia fuera',
      'inicio intenso / dispersión de la communicación',
      'reprise',
      'fin',
    ],
    c: 'inicio intenso / dispersión de la communicación',
  },
];

export default function PrefijosVerbalesB2Exercise() {
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
          🔧 Prefijos Verbales B2 (Приставки глаголов)
        </h2>
        <p className="text-htb-text-dim">
          Los prefijos cambian el significado del verbo base y crean verbos
          perfectivos. Clave de movimiento:{' '}
          <span className="text-htb-green font-bold"><SpeakableText text="при-" /></span> (llegada) /{' '}
          <span className="text-blue-400 font-bold"><SpeakableText text="у-" /></span> (marcha) /{' '}
          <span className="text-yellow-400 font-bold"><SpeakableText text="вы-" /></span> (salida).
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
          <div className="grid grid-cols-3 gap-0 border-b border-gray-800 bg-htb-sidebar px-4 py-2">
            <span className="text-htb-green font-bold text-xs uppercase">
              Prefijo
            </span>
            <span className="text-htb-text-dim text-xs uppercase">
              Significado
            </span>
            <span className="text-htb-text-dim text-xs uppercase">Ejemplo</span>
          </div>
          {vocab.map((v, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 gap-0 px-4 py-2 border-b border-gray-800 ${i % 2 === 0 ? '' : 'bg-htb-sidebar/20'}`}
            >
              <span className="text-htb-green font-bold text-base">
                {v.prefix}
              </span>
              <span className="text-htb-text-dim text-sm">{v.meaning}</span>
              <span className="text-white text-sm">{v.ex}</span>
            </div>
          ))}
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
                <p className="text-4xl text-htb-green font-bold mb-2">
                  {vocab[fi].prefix}
                </p>
                <p className="text-white text-lg">{vocab[fi].meaning}</p>
                <p className="text-htb-text-dim text-sm italic">
                  {vocab[fi].ex}
                </p>
              </>
            ) : (
              <p className="text-2xl text-white text-center">{vocab[fi].ex}</p>
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
              {fi + 1} / {vocab.length}
            </span>
            <button
              onClick={() => {
                setFi((i) => Math.min(vocab.length - 1, i + 1));
                setFf(false);
              }}
              disabled={fi === vocab.length - 1}
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
