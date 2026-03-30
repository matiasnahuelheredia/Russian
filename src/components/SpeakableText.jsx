import React, { useEffect } from 'react';
import { useTTS } from '../context/TTSContext';

/**
 * SpeakableText — wraps any Russian text and plays it via AI TTS on click.
 *
 * Props:
 *   text       {string}  — Russian text to synthesise
 *   className  {string}  — extra Tailwind classes
 *   as         {string}  — HTML tag to render, default 'span'
 *   showIcon   {boolean} — show speaker icon (default true)
 */
export default function SpeakableText({
  text,
  className = '',
  as: Tag = 'span',
  showIcon = true,
  children,
}) {
  const { speak, status, currentText, isReady, registerForPrecache } = useTTS();

  // Register this text for background pre-caching as soon as the component mounts
  useEffect(() => {
    if (text && text.trim()) registerForPrecache(text.trim());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  // 'synthesizing' = sent to worker, waiting for audio
  // 'speaking'     = audio is playing
  const isThisActive =
    (status === 'speaking' || status === 'synthesizing') &&
    currentText === text;
  const isModelLoading = status === 'loading' || status === 'idle';
  const isGlobalBusy = status === 'synthesizing' || status === 'speaking';

  const handleClick = (e) => {
    e.stopPropagation();
    if (!isReady) return;
    // If this exact text is already playing, clicking again is a no-op
    if (isThisActive) return;
    speak(text);
  };

  const title = isModelLoading
    ? 'Cargando modelo de voz IA… espera un momento'
    : isThisActive
      ? status === 'synthesizing'
        ? 'Generando audio…'
        : 'Reproduciendo…'
      : isGlobalBusy
        ? 'Reproduciendo otra frase…'
        : '🔈 Clic para escuchar en ruso';

  return (
    <Tag
      role={isReady ? 'button' : undefined}
      tabIndex={isReady ? 0 : undefined}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleClick(e);
      }}
      title={title}
      className={[
        'group inline-flex items-center gap-1',
        'transition-all duration-150 rounded-sm',
        isReady && !isGlobalBusy ? 'cursor-pointer' : 'cursor-default',
        isThisActive
          ? 'text-htb-green'
          : isReady
            ? 'hover:text-htb-green'
            : 'opacity-60',
        isReady
          ? 'border-b border-dotted border-htb-green/40 hover:border-htb-green'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Main text */}
      <span>{children ?? text}</span>

      {/* Speaker / spinner icon */}
      {showIcon && (
        <span
          className={[
            'text-xs select-none transition-all duration-150 flex-shrink-0',
            isThisActive
              ? 'opacity-100 text-htb-green'
              : isReady
                ? 'opacity-0 group-hover:opacity-70 text-htb-green'
                : 'opacity-0',
          ].join(' ')}
          aria-hidden="true"
        >
          {status === 'synthesizing' && isThisActive
            ? '⏳'
            : isThisActive
              ? '🔊'
              : '🔈'}
        </span>
      )}
    </Tag>
  );
}
