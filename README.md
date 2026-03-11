# Russian Learning Platform / Plataforma de Aprendizaje de Ruso

Plataforma web interactiva para aprender ruso con ejercicios de gramática, vocabulario y alfabeto cirílico.

## Características

- ✅ Aprendizaje del alfabeto cirílico
- ✅ Ejercicios de casos gramaticales rusos
- ✅ Práctica de verbos de movimiento
- ✅ Ejercicios interactivos con validación en tiempo real
- ✅ Explicaciones detalladas en español
- ✅ Interfaz moderna y responsiva

## Instalación

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en modo desarrollo:

```bash
npm run dev
```

3. Abrir en el navegador:

```
http://localhost:5173
```

## Construir para producción

```bash
npm run build
```

## Uso

1. Explora la introducción para conocer la plataforma
2. Selecciona una lección del menú lateral (alfabeto, gramática, vocabulario)
3. Completa los ejercicios interactivos
4. Verifica tus respuestas y aprende de las explicaciones
5. Practica regularmente para dominar el idioma ruso

## Tecnologías

- React 18
- Vite
- TailwindCSS
- React Router DOM

## Estructura del Proyecto

```
src/
├── components/
│   ├── Login.jsx           # Componente de autenticación
│   ├── Layout.jsx          # Layout principal
│   ├── Sidebar.jsx         # Menú lateral
│   └── ExerciseView.jsx    # Vista de ejercicios
├── context/
│   └── AuthContext.jsx     # Contexto de autenticación
├── data/
│   └── exercises.js        # Base de datos de ejercicios
├── App.jsx                 # Componente principal
├── main.jsx               # Punto de entrada
└── index.css              # Estilos globales
```
