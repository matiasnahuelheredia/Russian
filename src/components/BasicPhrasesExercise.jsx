import React, { useState } from 'react';
import SpeakableText from './SpeakableText';

const categories = [
  {
    id: 'greetings',
    label: 'Saludos y Despedidas',
    phrases: [
      { ru: 'Привет', translit: 'Privyet', es: 'Hola (informal)' },
      { ru: 'Здравствуйте', translit: 'Zdravstvuyte', es: 'Hola (formal)' },
      { ru: 'Доброе утро', translit: 'Dobroye utro', es: 'Buenos días' },
      { ru: 'Добрый день', translit: 'Dobryj denʼ', es: 'Buenas tardes' },
      {
        ru: 'Добрый вечер',
        translit: 'Dobryj vecher',
        es: 'Buenas noches (saludo)',
      },
      {
        ru: 'Спокойной ночи',
        translit: 'Spokojnoj nochi',
        es: 'Buenas noches (despedida)',
      },
      { ru: 'До свидания', translit: 'Do svidaniya', es: 'Adiós (formal)' },
      { ru: 'Пока', translit: 'Poka', es: 'Adiós (informal)' },
      { ru: 'До скорого', translit: 'Do skorogo', es: 'Hasta pronto' },
    ],
  },
  {
    id: 'courtesy',
    label: 'Cortesía',
    phrases: [
      { ru: 'Пожалуйста', translit: 'Pozhalujsta', es: 'Por favor / De nada' },
      { ru: 'Спасибо', translit: 'Spasibo', es: 'Gracias' },
      {
        ru: 'Большое спасибо',
        translit: 'Bolʼshoye spasibo',
        es: 'Muchas gracias',
      },
      { ru: 'Извините', translit: 'Izvinite', es: 'Disculpe / Lo siento' },
      { ru: 'Простите', translit: 'Prostite', es: 'Perdón (formal)' },
      { ru: 'Ничего', translit: 'Nichevo', es: 'No pasa nada' },
      { ru: 'Не за что', translit: 'Ne za chto', es: 'No hay de qué' },
    ],
  },
  {
    id: 'introductions',
    label: 'Presentaciones',
    phrases: [
      {
        ru: 'Как вас зовут?',
        translit: 'Kak vas zovut?',
        es: '¿Cómo se llama usted? (formal)',
      },
      {
        ru: 'Как тебя зовут?',
        translit: 'Kak tebya zovut?',
        es: '¿Cómo te llamas? (informal)',
      },
      { ru: 'Меня зовут...', translit: 'Menya zovut...', es: 'Me llamo...' },
      { ru: 'Очень приятно', translit: 'Ochen priyatno', es: 'Mucho gusto' },
      { ru: 'Откуда вы?', translit: 'Otkuda vy?', es: '¿De dónde es usted?' },
      { ru: 'Я из Испании', translit: 'Ya iz Ispanii', es: 'Soy de España' },
      {
        ru: 'Сколько вам лет?',
        translit: 'Skolʼko vam let?',
        es: '¿Cuántos años tiene?',
      },
      { ru: 'Мне ... лет', translit: 'Mne ... let', es: 'Tengo ... años' },
    ],
  },
  {
    id: 'questions',
    label: 'Preguntas Esenciales',
    phrases: [
      { ru: 'Что это?', translit: 'Chto eto?', es: '¿Qué es esto?' },
      { ru: 'Где...?', translit: 'Gde...?', es: '¿Dónde está...?' },
      { ru: 'Когда?', translit: 'Kogda?', es: '¿Cuándo?' },
      { ru: 'Почему?', translit: 'Pochemu?', es: '¿Por qué?' },
      { ru: 'Как?', translit: 'Kak?', es: '¿Cómo?' },
      {
        ru: 'Сколько стоит?',
        translit: 'Skolʼko stoit?',
        es: '¿Cuánto cuesta?',
      },
      {
        ru: 'Вы говорите по-испански?',
        translit: 'Vy govorite po-ispanski?',
        es: '¿Habla español?',
      },
      { ru: 'Я не понимаю', translit: 'Ya ne ponimayu', es: 'No entiendo' },
      {
        ru: 'Повторите, пожалуйста',
        translit: 'Povtorite, pozhalujsta',
        es: 'Repita, por favor',
      },
    ],
  },
  {
    id: 'status',
    label: 'Estado y Bienestar',
    phrases: [
      { ru: 'Как дела?', translit: 'Kak dela?', es: '¿Cómo estás?' },
      {
        ru: 'Как вы поживаете?',
        translit: 'Kak vy pozhivaete?',
        es: '¿Cómo está usted? (formal)',
      },
      {
        ru: 'Хорошо, спасибо',
        translit: 'Khorosho, spasibo',
        es: 'Bien, gracias',
      },
      { ru: 'Очень хорошо', translit: 'Ochen khorosho', es: 'Muy bien' },
      { ru: 'Неплохо', translit: 'Neplokho', es: 'No está mal' },
      { ru: 'Плохо', translit: 'Plokho', es: 'Mal' },
      {
        ru: 'Я устал / устала',
        translit: 'Ya ustal / ustala',
        es: 'Estoy cansado / cansada',
      },
    ],
  },
  {
    id: 'colors',
    label: 'Colores',
    phrases: [
      { ru: 'красный', translit: 'krasnyj', es: 'rojo' },
      { ru: 'синий', translit: 'sinij', es: 'azul (oscuro)' },
      { ru: 'голубой', translit: 'goluboy', es: 'azul (claro)' },
      { ru: 'зелёный', translit: 'zelyonyj', es: 'verde' },
      { ru: 'жёлтый', translit: 'zholtyj', es: 'amarillo' },
      { ru: 'оранжевый', translit: 'oranzhevyj', es: 'naranja' },
      { ru: 'фиолетовый', translit: 'fioletovyj', es: 'morado / violeta' },
      { ru: 'розовый', translit: 'rozovyj', es: 'rosa' },
      { ru: 'белый', translit: 'belyj', es: 'blanco' },
      { ru: 'чёрный', translit: 'chornyj', es: 'negro' },
      { ru: 'серый', translit: 'seryj', es: 'gris' },
      { ru: 'коричневый', translit: 'korichnevyj', es: 'marrón' },
    ],
  },
  {
    id: 'days',
    label: 'Días y Tiempo',
    phrases: [
      { ru: 'понедельник', translit: 'ponedelʼnik', es: 'lunes' },
      { ru: 'вторник', translit: 'vtornik', es: 'martes' },
      { ru: 'среда', translit: 'sreda', es: 'miércoles' },
      { ru: 'четверг', translit: 'chetverg', es: 'jueves' },
      { ru: 'пятница', translit: 'pyatnitsa', es: 'viernes' },
      { ru: 'суббота', translit: 'subbota', es: 'sábado' },
      { ru: 'воскресенье', translit: 'voskresenʼye', es: 'domingo' },
      { ru: 'сегодня', translit: 'segodnya', es: 'hoy' },
      { ru: 'вчера', translit: 'vchera', es: 'ayer' },
      { ru: 'завтра', translit: 'zavtra', es: 'mañana' },
      { ru: 'неделя', translit: 'nedelya', es: 'semana' },
      { ru: 'месяц', translit: 'mesyats', es: 'mes' },
      { ru: 'год', translit: 'god', es: 'año' },
    ],
  },
  {
    id: 'basic_vocab',
    label: 'Vocabulario Básico',
    phrases: [
      { ru: 'да', translit: 'da', es: 'sí' },
      { ru: 'нет', translit: 'net', es: 'no' },
      { ru: 'может быть', translit: 'mozhet bytʼ', es: 'quizás' },
      { ru: 'большой', translit: 'bolʼshoj', es: 'grande' },
      { ru: 'маленький', translit: 'malenʼkij', es: 'pequeño' },
      { ru: 'хороший', translit: 'khoroshij', es: 'bueno' },
      { ru: 'плохой', translit: 'plokhoj', es: 'malo' },
      { ru: 'новый', translit: 'novyj', es: 'nuevo' },
      { ru: 'старый', translit: 'staryj', es: 'viejo' },
      { ru: 'дорогой', translit: 'dorogoj', es: 'caro' },
      { ru: 'дешёвый', translit: 'deshyovyj', es: 'barato' },
      { ru: 'открыто', translit: 'otkryto', es: 'abierto' },
      { ru: 'закрыто', translit: 'zakryto', es: 'cerrado' },
    ],
  },
];

// All phrases flattened for quiz
const allPhrases = categories.flatMap((c) => c.phrases);

const quizQuestions = [
  {
    id: 'qb01',
    text: '¿Cómo se dice "Hola (formal)" en ruso?',
    options: ['...', 'Привет', 'Здравствуйте', 'Пока', 'До свидания'],
    correctAnswer: 'Здравствуйте',
  },
  {
    id: 'qb02',
    text: '¿Qué significa "Спасибо"?',
    options: ['...', 'Por favor', 'Perdón', 'Gracias', 'Hola'],
    correctAnswer: 'Gracias',
  },
  {
    id: 'qb03',
    text: '¿Cómo se dice "Adiós (formal)"?',
    options: ['...', 'Привет', 'До свидания', 'Пока', 'Пожалуйста'],
    correctAnswer: 'До свидания',
  },
  {
    id: 'qb04',
    text: '¿Qué significa "Как дела?"?',
    options: [
      '...',
      '¿Cómo te llamas?',
      '¿De dónde eres?',
      '¿Cómo estás?',
      '¿Cuántos años tienes?',
    ],
    correctAnswer: '¿Cómo estás?',
  },
  {
    id: 'qb05',
    text: '¿Cómo se dice "No entiendo"?',
    options: ['...', 'Я не понимаю', 'Я устал', 'Извините', 'Повторите'],
    correctAnswer: 'Я не понимаю',
  },
  {
    id: 'qb06',
    text: '¿Qué significa "Пожалуйста"?',
    options: ['...', 'Gracias', 'Por favor / De nada', 'Perdón', 'Buenos días'],
    correctAnswer: 'Por favor / De nada',
  },
  {
    id: 'qb07',
    text: '¿Cómo se dice "Mucho gusto"?',
    options: ['...', 'Спасибо', 'Извините', 'Очень приятно', 'Хорошо'],
    correctAnswer: 'Очень приятно',
  },
  {
    id: 'qb08',
    text: '¿Qué significa "Доброе утро"?',
    options: [
      '...',
      'Buenas tardes',
      'Buenos días',
      'Buenas noches',
      'Hasta pronto',
    ],
    correctAnswer: 'Buenos días',
  },
  {
    id: 'qb09',
    text: '¿Cómo se dice "¿Cuánto cuesta?"?',
    options: ['...', 'Как дела?', 'Откуда вы?', 'Сколько стоит?', 'Что это?'],
    correctAnswer: 'Сколько стоит?',
  },
  {
    id: 'qb10',
    text: '¿Qué significa "Меня зовут..."?',
    options: [
      '...',
      '¿Cómo te llamas?',
      'Me llamo...',
      'Soy de...',
      'Tengo ... años',
    ],
    correctAnswer: 'Me llamo...',
  },
  {
    id: 'qb11',
    text: '¿Cómo se dice "Repita, por favor"?',
    options: [
      '...',
      'Пожалуйста',
      'Повторите, пожалуйста',
      'Простите',
      'Извините',
    ],
    correctAnswer: 'Повторите, пожалуйста',
  },
  {
    id: 'qb12',
    text: '¿Qué significa "Хорошо"?',
    options: ['...', 'Mal', 'No está mal', 'Bien', 'Muy bien'],
    correctAnswer: 'Bien',
  },
  {
    id: 'qb13',
    text: '¿Cómo se dice "rojo" en ruso?',
    options: ['...', 'синий', 'зелёный', 'красный', 'белый'],
    correctAnswer: 'красный',
  },
  {
    id: 'qb14',
    text: '¿Qué color es "жёлтый"?',
    options: ['...', 'verde', 'naranja', 'azul', 'amarillo'],
    correctAnswer: 'amarillo',
  },
  {
    id: 'qb15',
    text: '¿Cómo se dice "negro" en ruso?',
    options: ['...', 'белый', 'серый', 'чёрный', 'коричневый'],
    correctAnswer: 'чёрный',
  },
  {
    id: 'qb16',
    text: '¿Qué significa "зелёный"?',
    options: ['...', 'azul', 'verde', 'gris', 'morado'],
    correctAnswer: 'verde',
  },
  {
    id: 'qb17',
    text: '¿Cómo se dice "viernes" en ruso?',
    options: ['...', 'среда', 'четверг', 'пятница', 'суббота'],
    correctAnswer: 'пятница',
  },
  {
    id: 'qb18',
    text: '¿Qué día es "воскресенье"?',
    options: ['...', 'sábado', 'domingo', 'lunes', 'viernes'],
    correctAnswer: 'domingo',
  },
  {
    id: 'qb19',
    text: '¿Cómo se dice "ayer" en ruso?',
    options: ['...', 'завтра', 'сегодня', 'вчера', 'неделя'],
    correctAnswer: 'вчера',
  },
  {
    id: 'qb20',
    text: '¿Qué significa "да"?',
    options: ['...', 'no', 'quizás', 'sí', 'también'],
    correctAnswer: 'sí',
  },
  {
    id: 'qb21',
    text: '¿Cómo se dice "barato" en ruso?',
    options: ['...', 'дорогой', 'новый', 'дешёвый', 'старый'],
    correctAnswer: 'дешёвый',
  },
  {
    id: 'qb22',
    text: '¿Qué significa "большой"?',
    options: ['...', 'pequeño', 'bueno', 'nuevo', 'grande'],
    correctAnswer: 'grande',
  },
];

const colorHex = {
  красный: '#e53e3e',
  синий: '#2b6cb0',
  голубой: '#63b3ed',
  зелёный: '#38a169',
  жёлтый: '#ecc94b',
  оранжевый: '#ed8936',
  фиолетовый: '#805ad5',
  розовый: '#f687b3',
  белый: '#f7fafc',
  чёрный: '#1a202c',
  серый: '#a0aec0',
  коричневый: '#8b5e3c',
};

const BasicPhrasesExercise = () => {
  const [activeTab, setActiveTab] = useState('reference');
  const [activeCategory, setActiveCategory] = useState('greetings');
  const [flipped, setFlipped] = useState({});
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showAnswersFull, setShowAnswersFull] = useState(false);

  const toggleFlip = (idx) =>
    setFlipped((prev) => ({ ...prev, [idx]: !prev[idx] }));

  const handleAnswerChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setShowResults(false);
    setShowAnswersFull(false);
  };

  const calculateScore = () =>
    quizQuestions.filter((q) => answers[q.id] === q.correctAnswer).length;

  const handleScore = () => {
    setShowResults(true);
    setShowAnswersFull(false);
  };
  const handleStartAgain = () => {
    setAnswers({});
    setShowResults(false);
    setShowAnswersFull(false);
  };
  const handleShowAnswers = () => {
    setShowAnswersFull(true);
    setShowResults(false);
  };

  const getAnswerStatus = (id) => {
    if (showAnswersFull) return 'show-answer';
    if (!showResults) return '';
    const q = quizQuestions.find((q) => q.id === id);
    return answers[id] === q.correctAnswer ? 'correct' : 'incorrect';
  };

  const score = showResults ? calculateScore() : null;
  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4">
      <div className="bg-htb-card rounded-lg border border-gray-800 p-4 sm:p-6 mb-4 sm:mb-6">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Frases Básicas – <em className="text-htb-green">Основные фразы</em>
          </h2>
          <p className="text-sm sm:text-base text-htb-text-dim">
            Las expresiones más esenciales del ruso cotidiano.
          </p>
        </div>

        {/* Main tabs */}
        <div className="flex gap-2 mb-6 border-b border-gray-700">
          {[
            { key: 'reference', label: '📖 Referencia' },
            { key: 'flashcards', label: '🃏 Flashcards' },
            { key: 'quiz', label: '✏️ Ejercicio' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors focus:outline-none ${
                activeTab === tab.key
                  ? 'text-htb-green border-b-2 border-htb-green bg-htb-sidebar'
                  : 'text-htb-text-dim hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ─── REFERENCE TAB ─── */}
        {activeTab === 'reference' && (
          <div>
            {/* Category pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors focus:outline-none ${
                    activeCategory === c.id
                      ? 'bg-htb-green text-htb-bg'
                      : 'bg-htb-sidebar text-htb-text-dim border border-gray-700 hover:border-htb-green/50 hover:text-white'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Color cards – special layout for colors category */}
            {activeCategory === 'colors' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-2">
                {currentCategory.phrases.map((p, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-gray-700 overflow-hidden hover:border-htb-green/60 transition-colors"
                  >
                    <div
                      className="h-16 w-full"
                      style={{ backgroundColor: colorHex[p.ru] || '#888' }}
                    />
                    <div className="bg-htb-sidebar px-3 py-2">
                      <p className="text-white font-bold text-base">
                        <SpeakableText text={p.ru} />
                      </p>
                      <p className="text-htb-text-dim text-xs italic">
                        {p.translit}
                      </p>
                      <p className="text-htb-green text-xs mt-0.5">{p.es}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-htb-sidebar border-b border-gray-700">
                      <th className="px-4 py-2 text-left text-htb-green font-semibold">
                        Ruso
                      </th>
                      <th className="px-4 py-2 text-left text-htb-green font-semibold">
                        Transliteración
                      </th>
                      <th className="px-4 py-2 text-left text-htb-green font-semibold">
                        Español
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentCategory.phrases.map((p, i) => (
                      <tr
                        key={i}
                        className={`border-b border-gray-800 ${i % 2 === 0 ? 'bg-htb-bg' : 'bg-htb-sidebar/40'} hover:bg-htb-green/10 transition-colors`}
                      >
                        <td className="px-4 py-3 text-white font-medium text-base">
                          <SpeakableText text={p.ru} />
                        </td>
                        <td className="px-4 py-3 text-htb-text-dim italic">
                          {p.translit}
                        </td>
                        <td className="px-4 py-3 text-htb-text">{p.es}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ─── FLASHCARDS TAB ─── */}
        {activeTab === 'flashcards' && (
          <div>
            <p className="text-htb-text-dim text-sm mb-4">
              Haz clic en una tarjeta para ver la traducción.
            </p>
            {/* Category pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCategory(c.id);
                    setFlipped({});
                  }}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors focus:outline-none ${
                    activeCategory === c.id
                      ? 'bg-htb-green text-htb-bg'
                      : 'bg-htb-sidebar text-htb-text-dim border border-gray-700 hover:border-htb-green/50 hover:text-white'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentCategory.phrases.map((p, i) => (
                <button
                  key={i}
                  onClick={() => toggleFlip(i)}
                  className={`text-left rounded-lg border p-4 transition-colors focus:outline-none ${
                    flipped[i]
                      ? 'bg-htb-green/15 border-htb-green'
                      : 'bg-htb-sidebar border-gray-700 hover:border-htb-green/50'
                  }`}
                >
                  {!flipped[i] ? (
                    <div>
                      <p className="text-white text-xl font-bold mb-1">
                        <SpeakableText text={p.ru} />
                      </p>
                      <p className="text-htb-text-dim text-sm italic">
                        {p.translit}
                      </p>
                      <p className="text-htb-green text-xs mt-2">
                        Toca para ver traducción
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-htb-green text-xl font-bold mb-1">
                        {p.es}
                      </p>
                      <p className="text-htb-text-dim text-sm">
                        <SpeakableText text={p.ru} /> · <em>{p.translit}</em>
                      </p>
                      <p className="text-htb-text-dim text-xs mt-2">
                        Toca para ocultar
                      </p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ─── QUIZ TAB ─── */}
        {activeTab === 'quiz' && (
          <div>
            <p className="text-htb-text-dim text-sm mb-4">
              Elige la respuesta correcta para cada pregunta.
            </p>

            {showResults && (
              <div className="mb-6 p-4 rounded-lg bg-htb-sidebar border-2 border-htb-green">
                <p className="text-xl font-semibold text-white mb-2">
                  Puntuación: {score}/{quizQuestions.length}
                </p>
                <ul className="list-disc list-inside text-htb-text text-sm">
                  <li>0–4 Sigue practicando 💪</li>
                  <li>5–8 ¡Bien hecho! 👍</li>
                  <li>9–11 ¡Muy bien! 🌟</li>
                  <li>12/12 ¡Excelente! 🏆</li>
                </ul>
              </div>
            )}

            <div className="space-y-4 mb-6">
              {quizQuestions.map((question, index) => {
                const status = getAnswerStatus(question.id);
                const isCorrect = status === 'correct';
                const isIncorrect = status === 'incorrect';
                const shouldShowAnswer = status === 'show-answer';

                return (
                  <div
                    key={question.id}
                    className="bg-htb-sidebar p-4 rounded-lg border border-gray-800"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-htb-green font-bold text-lg">
                        {index + 1}.
                      </span>
                      <span className="text-white text-lg flex-1">
                        {question.text}
                      </span>
                    </div>
                    <div className="ml-7 flex items-center gap-3">
                      <select
                        value={
                          shouldShowAnswer
                            ? question.correctAnswer
                            : answers[question.id] || ''
                        }
                        onChange={(e) =>
                          handleAnswerChange(question.id, e.target.value)
                        }
                        disabled={showAnswersFull}
                        className={`w-full max-w-md px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-htb-green bg-htb-bg text-white transition-colors ${
                          isCorrect
                            ? 'border-htb-green bg-htb-green/20'
                            : isIncorrect
                              ? 'border-red-500 bg-red-500/20'
                              : shouldShowAnswer
                                ? 'border-htb-green bg-htb-green/20'
                                : 'border-gray-700 hover:border-htb-green/50'
                        }`}
                      >
                        {question.options.map((option, idx) => (
                          <option
                            key={idx}
                            value={option === '...' ? '' : option}
                            className="bg-htb-bg text-white"
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                      {isCorrect && (
                        <span className="text-htb-green font-bold whitespace-nowrap">
                          ✓ Correcto
                        </span>
                      )}
                      {isIncorrect && (
                        <span className="text-red-500 font-bold whitespace-nowrap">
                          ✗ Incorrecto
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleScore}
                className="px-6 py-2 bg-htb-green text-htb-bg rounded-lg font-medium hover:bg-htb-green/90 transition-colors focus:outline-none focus:ring-2 focus:ring-htb-green focus:ring-offset-2 focus:ring-offset-htb-bg"
              >
                Ver Puntuación
              </button>
              <button
                onClick={handleStartAgain}
                className="px-6 py-2 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-htb-bg border border-gray-600"
              >
                Reiniciar
              </button>
              <button
                onClick={handleShowAnswers}
                className="px-6 py-2 bg-htb-sidebar text-htb-green rounded-lg font-medium hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-htb-green focus:ring-offset-2 focus:ring-offset-htb-bg border border-htb-green/30"
              >
                Ver Respuestas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicPhrasesExercise;
