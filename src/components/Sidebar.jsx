import React, { useState, useEffect } from 'react';

const Sidebar = ({ selectedTense, onSelectTense }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Recuperar las secciones expandidas desde localStorage
  const [expandedSections, setExpandedSections] = useState(() => {
    const saved = localStorage.getItem('expandedSections');
    if (saved) {
      return JSON.parse(saved);
    }
    // Valores por defecto si no hay nada guardado
    return {
      Beginner: true,
      'Beginner-Fundamentos': true,
      'Beginner-Situaciones': true,
      'Beginner-Gramatica': true,
      'A2-Elemental': true,
      'Beginner-Gramatica-Extra': true,
      'A1-Situaciones-Extra': true,
      'A1-Vocabulario': true,
      'A2-Gramatica': false,
      Intermediate: false,
      'B1-Gramatica': false,
      'Upper-Intermediate': false,
      Casos: false,
      Verbos: false,
      Vocabulary: false,
      Advanced: false,
      'C1-Gramatica': false,
      'C1-Vocabulario': false,
    };
  });

  // Guardar en localStorage cada vez que cambien las secciones expandidas
  useEffect(() => {
    localStorage.setItem('expandedSections', JSON.stringify(expandedSections));
  }, [expandedSections]);

  const tenses = [
    // Alfabeto y Fundamentos
    {
      id: 'cyrillic-alphabet',
      name: 'Alfabeto Cirílico',
      category: 'Fundamentos',
    },
    { id: 'pronunciation', name: 'Pronunciación', category: 'Fundamentos' },
    { id: 'basic-phrases', name: 'Frases Básicas', category: 'Fundamentos' },
    { id: 'numbers-counting', name: 'Números', category: 'Fundamentos' },

    // A1-Gramática
    { id: 'verb-be-a1', name: 'Verbo Быть', category: 'A1-Gramatica' },
    { id: 'pronombres-a1', name: 'Pronombres', category: 'A1-Gramatica' },
    {
      id: 'genero-sustantivos-a1',
      name: 'Género de Sustantivos',
      category: 'A1-Gramatica',
    },
    {
      id: 'conjugacion-a1',
      name: 'Conjugación de Verbos',
      category: 'A1-Gramatica',
    },
    { id: 'adjetivos-a1', name: 'Adjetivos Básicos', category: 'A1-Gramatica' },

    // A1-Gramática Extra
    {
      id: 'plural-sustantivos-a1',
      name: 'Plural de Sustantivos',
      category: 'A1-Gramatica-Extra',
    },
    { id: 'negacion-a1', name: 'La Negación', category: 'A1-Gramatica-Extra' },
    {
      id: 'preposiciones-a1',
      name: 'Preposiciones Básicas',
      category: 'A1-Gramatica-Extra',
    },
    { id: 'la-hora-a1', name: 'La Hora', category: 'A1-Gramatica-Extra' },
    {
      id: 'numeros-ordinales-a1',
      name: 'Números Ordinales',
      category: 'A1-Gramatica-Extra',
    },
    {
      id: 'casos-basicos-a1',
      name: 'Casos: Nom. y Acus.',
      category: 'A1-Gramatica-Extra',
    },

    // A1-Situaciones Extra
    {
      id: 'en-el-medico-a1',
      name: 'En el Médico',
      category: 'A1-Situaciones-Extra',
    },
    {
      id: 'pedir-ayuda-a1',
      name: 'Pedir Ayuda',
      category: 'A1-Situaciones-Extra',
    },
    { id: 'en-casa-a1', name: 'En Casa', category: 'A1-Situaciones-Extra' },
    {
      id: 'describir-personas-a1',
      name: 'Describir Personas',
      category: 'A1-Situaciones-Extra',
    },

    // A1-Vocabulario
    { id: 'colores-a1', name: 'Colores', category: 'A1-Vocabulario' },
    { id: 'cuerpo-a1', name: 'Partes del Cuerpo', category: 'A1-Vocabulario' },
    {
      id: 'dias-meses-a1',
      name: 'Días, Meses y Estaciones',
      category: 'A1-Vocabulario',
    },

    // A1-Situaciones
    { id: 'presentarte', name: 'Presentarte', category: 'A1-Situaciones' },
    { id: 'pedir-comida', name: 'Pedir Comida', category: 'A1-Situaciones' },
    { id: 'comprar-algo', name: 'Comprar Algo', category: 'A1-Situaciones' },
    {
      id: 'preguntar-direcciones',
      name: 'Preguntar Direcciones',
      category: 'A1-Situaciones',
    },

    // A2-Elemental
    { id: 'rutina-diaria', name: 'Rutina Diaria', category: 'A2' },
    { id: 'familia-trabajo', name: 'Familia y Trabajo', category: 'A2' },
    { id: 'pasado-ruso', name: 'Pasado en Ruso', category: 'A2' },
    { id: 'pedir-informacion', name: 'Pedir Información', category: 'A2' },

    // A2-Gramática
    { id: 'genitivo-a2', name: 'Caso Genitivo', category: 'A2-Gramatica' },
    { id: 'dativo-a2', name: 'Caso Dativo', category: 'A2-Gramatica' },
    {
      id: 'aspectos-intro-a2',
      name: 'Aspectos Verbales Intro',
      category: 'A2-Gramatica',
    },
    {
      id: 'adverbios-a2',
      name: 'Adverbios Esenciales',
      category: 'A2-Gramatica',
    },

    // B1-Gramática
    {
      id: 'verbos-movimiento-b1',
      name: 'Verbos de Movimiento',
      category: 'B1-Gramatica',
    },
    {
      id: 'verbos-reflexivos-b1',
      name: 'Verbos Reflexivos -ся',
      category: 'B1-Gramatica',
    },
    { id: 'comparativos-b1', name: 'Comparativos', category: 'B1-Gramatica' },

    // C1-Gramática
    {
      id: 'participios-c1',
      name: 'Participios (Причастия)',
      category: 'C1-Gramatica',
    },
    {
      id: 'gerundios-c1',
      name: 'Gerundios Verbales',
      category: 'C1-Gramatica',
    },
    {
      id: 'aspecto-verbal-c1',
      name: 'Aspecto Verbal Avanzado',
      category: 'C1-Gramatica',
    },
    {
      id: 'subjuntivo-c1',
      name: 'Condicional/Subjuntivo',
      category: 'C1-Gramatica',
    },
    { id: 'pasiva-c1', name: 'Voz Pasiva', category: 'C1-Gramatica' },
    {
      id: 'discurso-indirecto-c1',
      name: 'Discurso Indirecto',
      category: 'C1-Gramatica',
    },
    {
      id: 'numeros-casos-c1',
      name: 'Números y Casos',
      category: 'C1-Gramatica',
    },
    {
      id: 'negacion-avanzada-c1',
      name: 'Negación Avanzada',
      category: 'C1-Gramatica',
    },

    // Casos Gramaticales
    { id: 'nominative-case', name: 'Caso Nominativo', category: 'Casos' },
    { id: 'accusative-case', name: 'Caso Acusativo', category: 'Casos' },
    { id: 'genitive-case', name: 'Caso Genitivo', category: 'Casos' },
    { id: 'dative-case', name: 'Caso Dativo', category: 'Casos' },
    { id: 'instrumental-case', name: 'Caso Instrumental', category: 'Casos' },
    { id: 'prepositional-case', name: 'Caso Prepositivo', category: 'Casos' },

    // Verbos
    { id: 'present-tense-verbs', name: 'Presente', category: 'Verbos' },
    { id: 'past-tense-verbs', name: 'Pasado', category: 'Verbos' },
    { id: 'future-tense-verbs', name: 'Futuro', category: 'Verbos' },
    { id: 'verbs-of-motion', name: 'Verbos de Movimiento', category: 'Verbos' },
    { id: 'verb-aspects', name: 'Aspectos Verbales', category: 'Verbos' },
  ];

  const vocabularyTopics = [
    { id: 'family-relations', name: 'Familia y Relaciones' },
    { id: 'food-drinks', name: 'Comida y Bebidas' },
    { id: 'city-transport', name: 'Ciudad y Transporte' },
    { id: 'work-professions', name: 'Trabajo y Profesiones' },
    { id: 'travel-tourism', name: 'Viajes y Turismo' },
    { id: 'shopping-money', name: 'Compras y Dinero' },
  ];

  const vocabularyTopicsC1 = [
    { id: 'politica-sociedad-c1', name: 'Política y Sociedad' },
    { id: 'ciencia-tecnologia-c1', name: 'Ciencia y Tecnología' },
    { id: 'arte-cultura-c1', name: 'Arte y Cultura' },
    { id: 'naturaleza-medio-c1', name: 'Naturaleza y Medio Ambiente' },
    { id: 'salud-medicina-c1', name: 'Salud y Medicina' },
    { id: 'educacion-ciencia-c1', name: 'Educación y Ciencia' },
  ];

  const groupedTenses = tenses.reduce((acc, tense) => {
    if (!acc[tense.category]) {
      acc[tense.category] = [];
    }
    acc[tense.category].push(tense);
    return acc;
  }, {});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Helper function to check if an item matches search
  const matchesSearch = (text) => {
    if (!searchQuery) return true;
    return text.toLowerCase().includes(searchQuery.toLowerCase());
  };

  // Check if any child in a section matches search
  const sectionHasMatch = (items) => {
    if (!searchQuery) return true;
    return items.some((item) => matchesSearch(item.name || item));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white/10 backdrop-blur-sm text-white p-2.5 rounded-lg border border-white/20 hover:bg-white/20 transition-all shadow-lg"
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-64 bg-htb-sidebar text-htb-text transition-all duration-300 ease-in-out flex flex-col border-r border-gray-800`}
      >
        {/* Header - Hidden on mobile */}
        <div className="hidden md:block p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-htb-green rounded flex items-center justify-center">
              <span className="text-htb-bg text-xl font-bold">Р</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">
                Russian Learning
              </h1>
              <p className="text-xs text-htb-text-dim">
                Plataforma de Aprendizaje
              </p>
            </div>
          </div>
        </div>

        {/* Mobile spacing to avoid overlap with close button */}
        <div className="md:hidden h-16"></div>

        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {/* SEARCH BAR */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search exercises..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-htb-sidebar border border-gray-700 rounded-lg px-4 py-2 pl-10 text-sm text-white placeholder-htb-text-dim focus:outline-none focus:ring-2 focus:ring-htb-green focus:border-htb-green transition-all"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-htb-text-dim"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-htb-text-dim hover:text-htb-green transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* INTRODUCTION */}
          {matchesSearch('Introduction') && (
            <div>
              <button
                onClick={() => onSelectTense('introduction')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedTense === 'introduction'
                    ? 'bg-htb-green text-htb-bg'
                    : 'hover:bg-htb-card text-htb-text'
                }`}
              >
                <span>📖</span>
                <span>Introduction</span>
              </button>
            </div>
          )}

          {/* A1 INICIACIÓN */}
          {(matchesSearch('Iniciación') ||
            matchesSearch('Alfabeto') ||
            matchesSearch('Cirílico') ||
            matchesSearch('A1')) && (
            <div>
              <button
                onClick={() => toggleSection('Beginner')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-htb-card text-htb-text transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span>🌱</span>
                  <span>A1 - Iniciación</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedSections['Beginner'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedSections['Beginner'] && (
                <div className="mt-1 ml-6 space-y-1">
                  <button
                    onClick={() => toggleSection('Beginner-Fundamentos')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card text-htb-text-dim transition-colors"
                  >
                    <span>🔤 Fundamentos</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Beginner-Fundamentos']
                          ? 'rotate-180'
                          : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedSections['Beginner-Fundamentos'] && (
                    <div className="ml-4 space-y-1">
                      {groupedTenses['Fundamentos']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedTense === tense.id
                              ? 'bg-htb-green text-htb-bg'
                              : 'hover:bg-htb-card text-htb-text-dim'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Situaciones A1 */}
                  <button
                    onClick={() => toggleSection('Beginner-Situaciones')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card text-htb-text-dim transition-colors"
                  >
                    <span>🗣️ Situaciones</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Beginner-Situaciones']
                          ? 'rotate-180'
                          : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedSections['Beginner-Situaciones'] && (
                    <div className="ml-4 space-y-1">
                      {groupedTenses['A1-Situaciones']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedTense === tense.id
                              ? 'bg-htb-green text-htb-bg'
                              : 'hover:bg-htb-card text-htb-text-dim'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Gramática A1 */}
                  <button
                    onClick={() => toggleSection('Beginner-Gramatica')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card text-htb-text-dim transition-colors"
                  >
                    <span>📐 Gramática</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Beginner-Gramatica']
                          ? 'rotate-180'
                          : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedSections['Beginner-Gramatica'] && (
                    <div className="ml-4 space-y-1">
                      {groupedTenses['A1-Gramatica']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedTense === tense.id
                              ? 'bg-htb-green text-htb-bg'
                              : 'hover:bg-htb-card text-htb-text-dim'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Gramática Extra A1 */}
                  <button
                    onClick={() => toggleSection('Beginner-Gramatica-Extra')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card text-htb-text-dim transition-colors"
                  >
                    <span>📐 Gramática Avanzada</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Beginner-Gramatica-Extra']
                          ? 'rotate-180'
                          : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedSections['Beginner-Gramatica-Extra'] && (
                    <div className="ml-4 space-y-1">
                      {groupedTenses['A1-Gramatica-Extra']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedTense === tense.id
                              ? 'bg-htb-green text-htb-bg'
                              : 'hover:bg-htb-card text-htb-text-dim'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Más Situaciones A1 */}
                  <button
                    onClick={() => toggleSection('A1-Situaciones-Extra')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card text-htb-text-dim transition-colors"
                  >
                    <span>🗣️ Más Situaciones</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['A1-Situaciones-Extra']
                          ? 'rotate-180'
                          : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedSections['A1-Situaciones-Extra'] && (
                    <div className="ml-4 space-y-1">
                      {groupedTenses['A1-Situaciones-Extra']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedTense === tense.id
                              ? 'bg-htb-green text-htb-bg'
                              : 'hover:bg-htb-card text-htb-text-dim'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Vocabulario A1 */}
                  <button
                    onClick={() => toggleSection('A1-Vocabulario')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card text-htb-text-dim transition-colors"
                  >
                    <span>📖 Vocabulario</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['A1-Vocabulario'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedSections['A1-Vocabulario'] && (
                    <div className="ml-4 space-y-1">
                      {groupedTenses['A1-Vocabulario']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedTense === tense.id
                              ? 'bg-htb-green text-htb-bg'
                              : 'hover:bg-htb-card text-htb-text-dim'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* A2 ELEMENTAL */}
          {(matchesSearch('A2') ||
            matchesSearch('Elemental') ||
            matchesSearch('Rutina') ||
            matchesSearch('Familia') ||
            matchesSearch('Pasado') ||
            matchesSearch('Información')) && (
            <div>
              <button
                onClick={() => toggleSection('A2-Elemental')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-htb-card transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span>🌿</span>
                  <span className="text-htb-text">A2 - Elemental</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedSections['A2-Elemental'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {expandedSections['A2-Elemental'] && (
                <div className="mt-1 ml-6 space-y-1">
                  {/* A2 Situaciones */}
                  <div className="text-xs text-htb-text-dim px-3 py-1 uppercase tracking-wider">
                    🗣️ Situaciones
                  </div>
                  <div className="ml-4 space-y-1">
                    {groupedTenses['A2']?.map((tense) => (
                      <button
                        key={tense.id}
                        onClick={() => onSelectTense(tense.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedTense === tense.id
                            ? 'bg-htb-green text-htb-bg'
                            : 'hover:bg-htb-card text-htb-text-dim'
                        }`}
                      >
                        {tense.name}
                      </button>
                    ))}
                  </div>
                  {/* A2 Gramática subsection */}
                  <button
                    onClick={() => toggleSection('A2-Gramatica')}
                    className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-htb-card transition-colors mt-1"
                  >
                    <span className="text-htb-text-dim">📐 Gramática</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${expandedSections['A2-Gramatica'] ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedSections['A2-Gramatica'] && (
                    <div className="ml-4 space-y-1">
                      {groupedTenses['A2-Gramatica']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedTense === tense.id
                              ? 'bg-htb-green text-htb-bg'
                              : 'hover:bg-htb-card text-htb-text-dim'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* B1 INTERMEDIO RUSO */}
          {(matchesSearch('B1') ||
            matchesSearch('Intermedio B1') ||
            matchesSearch('Movimiento') ||
            matchesSearch('Reflexivos') ||
            matchesSearch('Comparativos')) && (
            <div>
              <button
                onClick={() => toggleSection('Intermediate')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-htb-card transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span>🌿</span>
                  <span className="text-htb-text">Intermedio B1</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedSections['Intermediate'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedSections['Intermediate'] && (
                <div className="ml-3 mt-1 space-y-1">
                  {/* Gramática B1 Ruso */}
                  <button
                    onClick={() => toggleSection('B1-Gramatica')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">📐 Gramática</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['B1-Gramatica'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedSections['B1-Gramatica'] && (
                    <div className="ml-3 space-y-0.5">
                      {groupedTenses['B1-Gramatica']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                            selectedTense === tense.id
                              ? 'bg-htb-green text-htb-bg font-medium'
                              : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* B2 INTERMEDIO */}
          {(matchesSearch('Intermedio') ||
            matchesSearch('B2') ||
            matchesSearch('Casos') ||
            matchesSearch('Verbos') ||
            matchesSearch('Vocabulario')) && (
            <div>
              <button
                onClick={() => toggleSection('Upper-Intermediate')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-htb-card transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span>🌳</span>
                  <span className="text-htb-text">Intermedio B2</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedSections['Upper-Intermediate'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedSections['Upper-Intermediate'] && (
                <div className="ml-3 mt-1 space-y-1">
                  {/* Casos Gramaticales */}
                  <button
                    onClick={() => toggleSection('Casos')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">
                      Casos Gramaticales
                    </span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Casos'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {expandedSections['Casos'] && (
                    <div className="ml-3 space-y-0.5">
                      {groupedTenses['Casos']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                            selectedTense === tense.id
                              ? 'bg-htb-green text-htb-bg font-medium'
                              : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Sistema Verbal */}
                  <button
                    onClick={() => toggleSection('Verbos')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">Sistema Verbal</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Verbos'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {expandedSections['Verbos'] && (
                    <div className="ml-3 space-y-0.5">
                      {groupedTenses['Verbos']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                            selectedTense === tense.id
                              ? 'bg-htb-green text-htb-bg font-medium'
                              : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Vocabulario B2 */}
                  <button
                    onClick={() => toggleSection('Vocabulary')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">Vocabulario</span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['Vocabulary'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {expandedSections['Vocabulary'] && (
                    <div className="ml-3 space-y-0.5">
                      {vocabularyTopics.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => onSelectTense(topic.id)}
                          className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                            selectedTense === topic.id
                              ? 'bg-htb-green text-htb-bg font-medium'
                              : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                          }`}
                        >
                          {topic.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* C1 AVANZADO RUSO */}
          {(matchesSearch('C1') ||
            matchesSearch('Avanzado') ||
            matchesSearch('Participios') ||
            matchesSearch('Gerundios') ||
            matchesSearch('Aspecto') ||
            matchesSearch('Subjuntivo') ||
            matchesSearch('Pasiva') ||
            matchesSearch('Discurso') ||
            matchesSearch('Negacion') ||
            matchesSearch('Politica') ||
            matchesSearch('Sociedad') ||
            matchesSearch('Ciencia') ||
            matchesSearch('Arte') ||
            matchesSearch('Cultura') ||
            matchesSearch('Naturaleza') ||
            matchesSearch('Salud') ||
            matchesSearch('Educacion')) && (
            <div>
              <button
                onClick={() => toggleSection('Advanced')}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-htb-card transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span>🚀</span>
                  <span className="text-htb-text">Avanzado C1</span>
                </div>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedSections['Advanced'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedSections['Advanced'] && (
                <div className="ml-3 mt-1 space-y-1">
                  {/* Gramática C1 */}
                  <button
                    onClick={() => toggleSection('C1-Gramatica')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">
                      📐 Gramática Avanzada
                    </span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['C1-Gramatica'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedSections['C1-Gramatica'] && (
                    <div className="ml-3 space-y-0.5">
                      {groupedTenses['C1-Gramatica']?.map((tense) => (
                        <button
                          key={tense.id}
                          onClick={() => onSelectTense(tense.id)}
                          className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                            selectedTense === tense.id
                              ? 'bg-htb-green text-htb-bg font-medium'
                              : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                          }`}
                        >
                          {tense.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Vocabulario C1 */}
                  <button
                    onClick={() => toggleSection('C1-Vocabulario')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-htb-card transition-colors"
                  >
                    <span className="text-htb-text-dim">
                      📖 Vocabulario Avanzado
                    </span>
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        expandedSections['C1-Vocabulario'] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {expandedSections['C1-Vocabulario'] && (
                    <div className="ml-3 space-y-0.5">
                      {vocabularyTopicsC1.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => onSelectTense(topic.id)}
                          className={`w-full text-left px-3 py-1.5 rounded text-xs transition-colors ${
                            selectedTense === topic.id
                              ? 'bg-htb-green text-htb-bg font-medium'
                              : 'text-htb-text-dim hover:text-htb-text hover:bg-htb-card'
                          }`}
                        >
                          {topic.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
