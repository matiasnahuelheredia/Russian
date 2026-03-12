import React, { useState } from 'react';

const quiz = [
  {
    id: 'q1',
    p: '"Паспорт" en contexto de viaje equivale a:',
    o: ['billete de avión', 'pasaporte', 'visa', 'seguro de viaje'],
    c: 'pasaporte',
  },
  {
    id: 'q2',
    p: '"Бронировать гостиницу" significa:',
    o: [
      'pagar el hotel',
      'reservar el hotel',
      'cancelar el hotel',
      'buscar el hotel',
    ],
    c: 'reservar el hotel',
  },
  {
    id: 'q3',
    p: '"Таможня" es:',
    o: ['aduana', 'agencia de viajes', 'aeropuerto', 'control de pasaportes'],
    c: 'aduana',
  },
  {
    id: 'q4',
    p: '"Достопримечательности" son:',
    o: [
      'souvenirs',
      'guías turísticos',
      'lugares de interés/atracciones turísticas',
      'folletos',
    ],
    c: 'lugares de interés/atracciones turísticas',
  },
  {
    id: 'q5',
    p: '"Обменять валюту" significa:',
    o: [
      'gastar moneda extranjera',
      'cambiar de moneda',
      'llevar moneda',
      'pagar en efectivo',
    ],
    c: 'cambiar de moneda',
  },
  {
    id: 'q6',
    p: '"Экскурсия" es:',
    o: ['equipaje', 'excursión/visita guiada', 'entrada/billete', 'itinerario'],
    c: 'excursión/visita guiada',
  },
  {
    id: 'q7',
    p: '"Перелёт" es:',
    o: [
      'viaje en tren',
      'vuelo (viaje aéreo)',
      'travesía en barco',
      'viaje en autobús',
    ],
    c: 'vuelo (viaje aéreo)',
  },
  {
    id: 'q8',
    p: '"Сувениры" se compran normalmente:',
    o: [
      'en el aeropuerto, antes de salir',
      'en tiendas turísticas como recuerdo',
      'solo en museos',
      'en el avión',
    ],
    c: 'en tiendas turísticas como recuerdo',
  },
  {
    id: 'q9',
    p: '"Виза" en el contexto de viajes a Rusia es:',
    o: [
      'moneda rusa',
      'tipo de pasaporte',
      'permiso oficial de entrada al país',
      'seguro médico',
    ],
    c: 'permiso oficial de entrada al país',
  },
  {
    id: 'q10',
    p: '"Путешествовать" significa:',
    o: [
      'emigrar',
      'viajar (en general)',
      'trabajar en el extranjero',
      'estudiar en otro país',
    ],
    c: 'viajar (en general)',
  },
];

const vocab = [
  { ru: 'паспорт', tl: 'pasport', es: 'pasaporte' },
  { ru: 'виза', tl: 'viza', es: 'visa/visado' },
  { ru: 'таможня', tl: 'tamozhnya', es: 'aduana' },
  { ru: 'бронировать', tl: 'bronirovatʼ', es: 'reservar (imp.)' },
  {
    ru: 'достопримечательности',
    tl: 'dostoprimechatelnosti',
    es: 'lugares de interés',
  },
  { ru: 'экскурсия', tl: 'ekskursiya', es: 'excursión guiada' },
  { ru: 'перелёт', tl: 'perelot', es: 'vuelo' },
  { ru: 'сувенир', tl: 'suvenir', es: 'souvenir/recuerdo' },
  { ru: 'обменять валюту', tl: 'obmenyatʼ valyutu', es: 'cambiar dinero' },
  { ru: 'путешествовать', tl: 'puteshestvovat', es: 'viajar' },
  { ru: 'чемодан', tl: 'chemodan', es: 'maleta' },
  { ru: 'регистрация', tl: 'registratsiya', es: 'check-in / registro' },
];

const cards = [
  {
    ru: 'Не забудь взять паспорт!',
    tl: 'Ne zabudʼ vzyatʼ pasport!',
    es: '¡No olvides llevar el pasaporte!',
  },
  {
    ru: 'Мы забронировали гостиницу.',
    tl: 'My zabronirovalli gostinitsu.',
    es: 'Reservamos el hotel.',
  },
  {
    ru: 'Хочу посмотреть достопримечательности.',
    tl: 'Khochu posmotretʼ dostoprimechatelnosti.',
    es: 'Quiero ver los lugares de interés.',
  },
  {
    ru: 'Нужна виза для въезда в Россию.',
    tl: 'Nuzhna viza dlya vyezda v Rossiyu.',
    es: 'Se necesita visa para entrar a Rusia.',
  },
  {
    ru: 'На таможне проверяют документы.',
    tl: 'Na tamozhne proveryayut dokumenty.',
    es: 'En la aduana revisan los documentos.',
  },
  {
    ru: 'Мы купили сувениры на рынке.',
    tl: 'My kupili suveniry na rynke.',
    es: 'Compramos souvenirs en el mercado.',
  },
];

export default function ViajesTurismoB2Exercise() {
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
          ✈️ Viajes y Turismo (Путешествия и туризм)
        </h2>
        <p className="text-htb-text-dim">
          Vocabulario esencial para viajar:{' '}
          <span className="text-htb-green font-bold">
            паспорт, виза, таможня, бронировать
          </span>{' '}
          y los grandes destinos turísticos rusos con достопримечательности.
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
                <p className="text-htb-green font-bold">{v.ru}</p>
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
