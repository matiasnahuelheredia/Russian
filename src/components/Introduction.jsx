import React, { useEffect, useRef } from 'react';

const Introduction = ({ onSelectTense }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(155, 245, 80, 0.6)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(155, 245, 80, ${
              0.15 * (1 - distance / 120)
            })`;
            ctx.lineWidth = 1;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Animated Network Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Animated Banner */}
        <div
          className="relative bg-htb-card border border-htb-green/30 rounded-lg shadow-2xl mb-4 sm:mb-6 overflow-hidden"
          style={{ minHeight: '160px', height: 'auto' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-htb-bg/40 to-htb-bg/90"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-6 sm:px-6">
            <div className="text-center mb-3 sm:mb-4">
              <div className="inline-block">
                <span
                  className="text-2xl sm:text-4xl lg:text-5xl font-bold text-htb-green animate-glow-pulse leading-tight"
                  style={{
                    textShadow:
                      '0 0 20px rgba(155, 245, 80, 0.6), 0 0 40px rgba(155, 245, 80, 0.3)',
                  }}
                >
                  Plataforma de Aprendizaje de Ruso
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 animate-fade-in-up w-full sm:w-auto">
              <div className="flex items-center gap-2 bg-htb-sidebar/80 border border-htb-green/30 rounded px-3 sm:px-4 py-1.5 sm:py-2 w-full sm:w-auto justify-center">
                <div className="w-2 h-2 bg-htb-green rounded-full animate-ping"></div>
                <span className="text-htb-green text-xs sm:text-sm font-mono">
                  РУССКИЙ ЯЗЫК - RUSSIAN LANGUAGE
                </span>
              </div>
              <div className="flex items-center gap-2 bg-htb-sidebar/80 border border-htb-green/30 rounded px-3 sm:px-4 py-1.5 sm:py-2 w-full sm:w-auto justify-center">
                <div className="w-2 h-2 bg-htb-green rounded-full animate-pulse"></div>
                <span className="text-htb-green text-xs sm:text-sm font-mono">
                  ГОТОВО К ОБУЧЕНИЮ
                </span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-htb-green/0 via-htb-green to-htb-green/0 animate-pulse"></div>
        </div>

        {/* Welcome Section */}
        <div className="bg-htb-card border border-htb-green/30 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-htb-green rounded-lg flex items-center justify-center shrink-0">
              <span className="text-htb-bg text-2xl sm:text-3xl font-bold">
                Р
              </span>
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                Добро пожаловать! Bienvenido a la Plataforma
              </h1>
              <p className="text-sm sm:text-base text-htb-text">
                Aprende Ruso de Forma Interactiva
              </p>
            </div>
          </div>

          <div className="space-y-4 text-htb-text leading-relaxed">
            <p>
              Bienvenido a una plataforma innovadora para aprender ruso diseñada
              para hispanohablantes. Esta plataforma combina el aprendizaje del
              alfabeto cirílico con gramática, vocabulario y expresiones
              cotidianas del ruso moderno.
            </p>

            <p>
              Todos los ejercicios han sido cuidadosamente elaborados para
              guiarte desde los fundamentos del alfabeto cirílico hasta
              estructuras gramaticales avanzadas. Aprenderás los 6 casos
              gramaticales, verbos de movimiento, aspectos verbales y
              vocabulario esencial para comunicarte en ruso.
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes glow-pulse {
            0%,
            100% {
              opacity: 1;
              filter: brightness(1);
            }
            50% {
              opacity: 0.85;
              filter: brightness(1.2);
            }
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-glow-pulse {
            animation: glow-pulse 3s ease-in-out infinite;
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out 0.5s both;
          }
        `}</style>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-6 hover:border-htb-green/30 transition-all">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-htb-green/20 rounded flex items-center justify-center shrink-0">
                <span className="text-htb-green text-lg sm:text-xl">АБВ</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Alfabeto Cirílico
              </h3>
            </div>
            <p className="text-htb-text text-sm">
              Domina las 33 letras del alfabeto ruso con ejercicios de lectura,
              escritura y pronunciación. Aprende a reconocer y escribir en
              cirílico desde el primer día.
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-6 hover:border-htb-green/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-htb-green/20 rounded flex items-center justify-center">
                <span className="text-htb-green text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Casos Gramaticales
              </h3>
            </div>
            <p className="text-htb-text text-sm">
              Comprende y practica los 6 casos rusos: Nominativo, Genitivo,
              Dativo, Acusativo, Instrumental y Prepositivo. Ejercicios
              progresivos con explicaciones claras en español.
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-6 hover:border-htb-green/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-htb-green/20 rounded flex items-center justify-center">
                <span className="text-htb-green text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Verbos y Aspectos
              </h3>
            </div>
            <p className="text-htb-text text-sm">
              Aprende el sistema verbal ruso: verbos de movimiento, aspectos
              perfectivos e imperfectivos, conjugaciones y verbos reflexivos con
              ejemplos prácticos.
            </p>
          </div>

          <div className="bg-htb-card border border-gray-800 rounded-lg p-6 hover:border-htb-green/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-htb-green/20 rounded flex items-center justify-center">
                <span className="text-htb-green text-xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Vocabulario Esencial
              </h3>
            </div>
            <p className="text-htb-text text-sm">
              Construye tu vocabulario con temas cotidianos: familia, comida,
              transporte, trabajo, viajes. Más de 2000 palabras organizadas por
              temas.
            </p>
          </div>
        </div>

        {/* Topics Covered */}
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            � Temas Cubiertos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h4 className="text-htb-green font-semibold mb-2">Fundamentos</h4>
              <ul className="space-y-1 text-sm text-htb-text">
                <li>• Alfabeto Cirílico (33 letras)</li>
                <li>• Pronunciación y acentuación</li>
                <li>• Sustantivos y género</li>
                <li>• Adjetivos básicos</li>
              </ul>
            </div>
            <div>
              <h4 className="text-htb-green font-semibold mb-2">Gramática</h4>
              <ul className="space-y-1 text-sm text-htb-text">
                <li>• Los 6 casos gramaticales</li>
                <li>• Conjugación verbal presente/pasado/futuro</li>
                <li>• Verbos de movimiento</li>
                <li>• Aspectos perfectivo/imperfectivo</li>
              </ul>
            </div>
            <div>
              <h4 className="text-htb-green font-semibold mb-2">Vocabulario</h4>
              <ul className="space-y-1 text-sm text-htb-text">
                <li>• Familia y relaciones</li>
                <li>• Comida y bebidas</li>
                <li>• Viajes y ciudad</li>
                <li>• Trabajo y estudios</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Russian Examples */}
        <div className="bg-htb-sidebar border border-htb-green/30 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            🎯 Ejemplos de Frases en Ruso
          </h2>
          <div className="space-y-3">
            <div className="bg-htb-card border border-gray-800 rounded p-3 sm:p-4">
              <p className="text-htb-green font-semibold mb-1 text-sm sm:text-base">
                Saludo:
              </p>
              <p className="text-white text-sm sm:text-base mb-1">
                <span className="font-semibold">Здравствуйте!</span>{' '}
                (Zdravstvuyte)
              </p>
              <p className="text-htb-text text-xs sm:text-sm italic">
                "¡Hola!" - Saludo formal
              </p>
            </div>
            <div className="bg-htb-card border border-gray-800 rounded p-4">
              <p className="text-htb-green font-semibold mb-1">Presentación:</p>
              <p className="text-white text-sm sm:text-base mb-1">
                <span className="font-semibold">Меня зовут Иван.</span> (Menya
                zovut Ivan)
              </p>
              <p className="text-htb-text text-sm italic">
                "Me llamo Iván." - Forma común de presentarse
              </p>
            </div>
            <div className="bg-htb-card border border-gray-800 rounded p-4">
              <p className="text-htb-green font-semibold mb-1">Pregunta:</p>
              <p className="text-white text-sm sm:text-base mb-1">
                <span className="font-semibold">Как дела?</span> (Kak dela?)
              </p>
              <p className="text-htb-text text-sm italic">
                "¿Cómo estás?" - Pregunta informal sobre el estado
              </p>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-htb-card border border-gray-800 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            🚀 Cómo Empezar
          </h2>
          <div className="space-y-3 text-htb-text">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-htb-green text-htb-bg rounded-full flex items-center justify-center font-bold shrink-0 text-sm sm:text-base">
                1
              </div>
              <div>
                <p className="font-semibold text-white">Elige un Tema</p>
                <p className="text-sm">
                  Selecciona del menú: Alfabeto Cirílico, Casos Gramaticales,
                  Verbos o Vocabulario
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-htb-green text-htb-bg rounded-full flex items-center justify-center font-bold shrink-0">
                2
              </div>
              <div>
                <p className="font-semibold text-white">
                  Completa los Ejercicios
                </p>
                <p className="text-sm">
                  Practica con ejercicios interactivos que incluyen traducción,
                  gramática y vocabulario
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-htb-green text-htb-bg rounded-full flex items-center justify-center font-bold shrink-0">
                3
              </div>
              <div>
                <p className="font-semibold text-white">
                  Recibe Feedback Inmediato
                </p>
                <p className="text-sm">
                  Verifica tus respuestas y lee explicaciones detalladas en
                  español
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-htb-green text-htb-bg rounded-full flex items-center justify-center font-bold shrink-0">
                4
              </div>
              <div>
                <p className="font-semibold text-white">
                  Practica Regularmente
                </p>
                <p className="text-sm">
                  La constancia es clave - practica 15-30 minutos diarios para
                  mejores resultados
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-htb-green/10 to-htb-green/5 border border-htb-green/50 rounded-lg p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
            ¿Listo para Comenzar?
          </h2>
          <p className="text-sm sm:text-base text-htb-text mb-4 sm:mb-6">
            Elige un tema del menú lateral para empezar tu viaje en el
            aprendizaje del ruso!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => onSelectTense('cyrillic-alphabet')}
              className="bg-htb-green hover:bg-htb-green-hover text-htb-bg px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
            >
              АБВ Empezar con el Alfabeto
            </button>
            <button
              onClick={() => onSelectTense('basic-phrases')}
              className="bg-htb-sidebar hover:bg-gray-700 border border-htb-green/30 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
            >
              💬 Frases Básicas
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-htb-text-dim text-sm">
            💡 <span className="text-htb-green font-semibold">Consejo:</span> El
            ruso tiene un sistema de casos único. No te preocupes si al
            principio parece complicado - ¡con práctica se vuelve natural!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
