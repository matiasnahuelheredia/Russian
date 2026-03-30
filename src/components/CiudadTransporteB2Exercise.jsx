import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const quiz = [
  {
    id: 'q1',
    p: '"Маршрутка" es:',
    o: [
      'Bus nocturno',
      'Minibus con ruta fija (colectivo)',
      'Metro rápido',
      'Taxi compartido oficial',
    ],
    c: 'Minibus con ruta fija (colectivo)',
  },
  {
    id: 'q2',
    p: 'Para ir al centro en San Petersburgo se usa principalmente:',
    o: ['trolebús', 'tren de alta velocidad', 'metro', 'maршрутка solamente'],
    c: 'metro',
  },
  {
    id: 'q3',
    p: '"Повернуть направо" significa:',
    o: [
      'girar a la izquierda',
      'girar a la derecha',
      'seguir recto',
      'dar la vuelta',
    ],
    c: 'girar a la derecha',
  },
  {
    id: 'q4',
    p: '"На перекрёстке" se traduce como:',
    o: [
      'en el semáforo',
      'en el cruce/intersección',
      'en la rotonda',
      'en la parada',
    ],
    c: 'en el cruce/intersección',
  },
  {
    id: 'q5',
    p: '"Троллейбус" se mueve gracias a:',
    o: ['gasolina', 'cable eléctrico aéreo', 'rieles', 'batería solar'],
    c: 'cable eléctrico aéreo',
  },
  {
    id: 'q6',
    p: '¿Cómo se dice "parada de autobús" en ruso?',
    o: ['остановка автобуса', 'вокзал', 'аэропорт', 'пересадка'],
    c: 'остановка автобуса',
  },
  {
    id: 'q7',
    p: '"Пересадка" en el contexto del transporte significa:',
    o: ['ticket', 'demora', 'transbordo/cambio de línea', 'primer vagón'],
    c: 'transbordo/cambio de línea',
  },
  {
    id: 'q8',
    p: '"Прямо" en una dirección es:',
    o: ['a la izquierda', 'a la derecha', 'todo recto', 'atrás'],
    c: 'todo recto',
  },
  {
    id: 'q9',
    p: 'El sistema de transporte típicamente ruso (con rieles, sin motor propio, arrastrado por cables históricos) es:',
    o: ['трамвай', 'троллейбус', 'метро', 'маршрутка'],
    c: 'трамвай',
  },
  {
    id: 'q10',
    p: '"Как добраться до...?" significa:',
    o: [
      '¿Cómo se llama...?',
      '¿Cómo llegar a...?',
      '¿Dónde está...?',
      '¿A qué distancia está...?',
    ],
    c: '¿Cómo llegar a...?',
  },
];

const vocab = [
  { ru: 'метро', tl: 'metro', es: 'metro (subterráneo)' },
  { ru: 'трамвай', tl: 'tramvay', es: 'tranvía' },
  { ru: 'троллейбус', tl: 'trolleybus', es: 'trolebús' },
  { ru: 'маршрутка', tl: 'marshrutka', es: 'minibús de ruta fija' },
  { ru: 'остановка', tl: 'ostanovka', es: 'parada (de bus/tram)' },
  { ru: 'пересадка', tl: 'peresadka', es: 'transbordo/cambio de línea' },
  {
    ru: 'налево / направо',
    tl: 'nalevo / napravo',
    es: 'a la izquierda / derecha',
  },
  { ru: 'прямо', tl: 'pryamo', es: 'todo recto' },
  { ru: 'на перекрёстке', tl: 'na perekryostke', es: 'en el cruce' },
  { ru: 'светофор', tl: 'svetofor', es: 'semáforo' },
  {
    ru: 'Как добраться до...?',
    tl: 'Kak dobratsya do...?',
    es: '¿Cómo llegar a...?',
  },
  {
    ru: 'Где ближайшая остановка?',
    tl: 'Gde blizhaishaya ostanovka?',
    es: '¿Dónde está la parada más cercana?',
  },
];

const cards = [
  {
    ru: 'Как добраться до центра?',
    tl: 'Kak dobratsya do tsentra?',
    es: '¿Cómo llegar al centro?',
  },
  {
    ru: 'Нужно сделать пересадку на красной линии.',
    tl: 'Nuzhno sdelatʼ peresadku na krasnoy linii.',
    es: 'Hay que hacer transbordo en la línea roja.',
  },
  {
    ru: 'Повернуть налево на перекрёстке.',
    tl: 'Povernutʼ nalevo na perekryostke.',
    es: 'Girar a la izquierda en el cruce.',
  },
  {
    ru: 'Маршрутка ходит каждые 10 минут.',
    tl: 'Marshrutka khodit kazhdye 10 minut.',
    es: 'El minibús pasa cada 10 minutos.',
  },
  {
    ru: 'Остановка метро за углом.',
    tl: 'Ostanovka metro za uglom.',
    es: 'La estación de metro está a la vuelta de la esquina.',
  },
  {
    ru: 'Идите прямо до светофора.',
    tl: 'Idite pryamo do svetofora.',
    es: 'Vaya recto hasta el semáforo.',
  },
];

export default function CiudadTransporteB2Exercise() {
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
          🏙️ Ciudad y Transporte (Город и транспорт)
        </h2>
        <p className="text-htb-text-dim">
          Vocabulario para moverse por una ciudad rusa:{' '}
          <span className="text-htb-green font-bold">
            metro, трамвай, троллейбус, маршрутка
          </span>{' '}
          y expresiones de orientación (направо, налево, прямо).
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {vocab.map((v, i) => (
            <div
              key={i}
              className="bg-htb-card rounded-lg border border-gray-800 p-3 flex items-start gap-3"
            >
              <div className="flex-1">
                <p className="text-htb-green font-bold"><SpeakableText text={v.ru} /></p>
                <p className="text-htb-text-dim text-xs italic">{v.tl}</p>
              </div>
              <div className="text-right">
                <p className="text-white text-sm">{v.es}</p>
              </div>
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
