import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const reference = [
  {
    title: 'Condicional con бы — formación',
    items: [
      'Pasado + бы → expresa hipótesis, deseos, consejos.',
      'Я хотел бы... — Me gustaría...',
      'Он пришёл бы — Él vendría (si pudiera).',
      'бы puede ir tras el verbo o en otra posición: Я бы хотел...',
    ],
  },
  {
    title: 'Estructura если бы ... то ...',
    items: [
      'Если бы + Past, то + Past + бы → Condición irreal.',
      'Если бы я знал, я бы сказал. — Si lo supiera, lo diría.',
      'Если бы она пришла, мы бы поговорили.',
      'Sin "то" también es correcto: Если бы я мог, я бы помог.',
    ],
  },
  {
    title: 'чтобы + Infinitivo / Pasado',
    items: [
      'чтобы + Inf. → propósito (mismo sujeto).',
      'Я учусь, чтобы знать русский. — Estudio para saber ruso.',
      'чтобы + Past → deseo/petición (distinto sujeto).',
      'Я хочу, чтобы ты пришёл. — Quiero que vengas.',
    ],
  },
  {
    title: 'Expresiones útiles con бы',
    items: [
      'Я бы хотел(а) + Inf. — Me gustaría...',
      'Мне бы хотелось + Inf. — Me gustaría (más suave).',
      'Если бы только... — Si tan sólo...',
      'Лучше бы... — Mejor hubiera... / Ojalá...',
    ],
  },
];

const quiz = [
  {
    id: 'q1',
    p: '"Если бы я знал, я бы сказал" es:',
    o: [
      'condición real (futuro)',
      'condición irreal (hipótesis en pasado)',
      'condición posible (presente)',
      'mandato',
    ],
    c: 'condición irreal (hipótesis en pasado)',
  },
  {
    id: 'q2',
    p: '¿Cuál es la posición obligatoria de "бы"?',
    o: [
      'siempre tras el verbo',
      'siempre antes del verbo',
      'no hay posición fija, se adhiere al primer elemento del predicado',
      'al final de la oración',
    ],
    c: 'no hay posición fija, se adhiere al primer elemento del predicado',
  },
  {
    id: 'q3',
    p: '"Я хочу, чтобы ты пришёл" — el verbo de la subordinada va en:',
    o: ['infinitivo', 'futuro', 'pasado', 'imperativo'],
    c: 'pasado',
  },
  {
    id: 'q4',
    p: '"Лучше бы он не говорил" expresa:',
    o: [
      'consejo para el futuro',
      'ojalá no hubiera dicho / hubiera sido mejor que no dijera',
      'prohibición',
      'duda',
    ],
    c: 'ojalá no hubiera dicho / hubiera sido mejor que no dijera',
  },
  {
    id: 'q5',
    p: '"Я учусь, чтобы знать русский" — ¿por qué infinitivo y no pasado?',
    o: [
      'porque es formal',
      'porque el sujeto de ambas cláusulas es el mismo',
      'porque знать es perfectivo',
      'es una excepción',
    ],
    c: 'porque el sujeto de ambas cláusulas es el mismo',
  },
  {
    id: 'q6',
    p: '"Мне бы хотелось поехать" — ¿qué matiz aporta esta forma frente a "Я бы хотел"?',
    o: [
      'es más directa',
      'es más suave / cortés',
      'es más urgente',
      'es negativa',
    ],
    c: 'es más suave / cortés',
  },
  {
    id: 'q7',
    p: 'Para forming el condicional se usa:',
    o: [
      'el infinitivo + бы',
      'el presente + бы',
      'el pasado + бы',
      'el futuro + бы',
    ],
    c: 'el pasado + бы',
  },
  {
    id: 'q8',
    p: '"Если бы только он приехал!" expresa:',
    o: [
      'condición real probable',
      'deseo / ojalá viniera',
      'orden',
      'consecuencia lógica',
    ],
    c: 'deseo / ojalá viniera',
  },
  {
    id: 'q9',
    p: 'En "Я бы хотел кофе" el бы va:',
    o: [
      'al final',
      'antes del verbo principal',
      'после хотел',
      'en cualquier posición dentro del predicado, aquí entre él y el verbo',
    ],
    c: 'en cualquier posición dentro del predicado, aquí entre él y el verbo',
  },
  {
    id: 'q10',
    p: '"Если бы у меня было время, я бы читал больше" — ¿cuántos verbos con бы hay?',
    o: ['uno', 'dos', 'tres', 'ninguno'],
    c: 'dos',
  },
];

export default function CondicionalB2Exercise() {
  const [tab, setTab] = useState('referencia');
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
          🔀 Modo Condicional B2 (Условное наклонение)
        </h2>
        <p className="text-htb-text-dim">
          Pasado + <span className="text-htb-green font-bold"><SpeakableText text="бы" /></span> para
          hipótesis, deseos y condiciones irreales.{' '}
          <span className="text-blue-400 font-bold"><SpeakableText text="если бы ... то ..." /></span> —
          Si hubiera/tuviera..., ... haría.
        </p>
      </div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {[
          ['referencia', '📚 Referencia'],
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
          {reference.map((sec, i) => (
            <div
              key={i}
              className="bg-htb-card rounded-lg border border-gray-800 p-4"
            >
              <h3 className="text-htb-green font-bold mb-3">{sec.title}</h3>
              <ul className="space-y-2">
                {sec.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm">
                    <span className="text-htb-green mt-0.5">▸</span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
