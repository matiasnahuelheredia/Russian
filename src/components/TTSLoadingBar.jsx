import React, { useEffect, useState } from 'react';
import { useTTS } from '../context/TTSContext';

/**
 * TTSLoadingBar — floating indicator:
 *   1. While model downloads: shows download progress
 *   2. After model ready: shows background audio pre-caching progress
 *   3. When everything cached: fades out and unmounts
 */
export default function TTSLoadingBar() {
  const { status, overallProgress, fileProgress, precacheProgress } = useTTS();
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [phase, setPhase] = useState('loading'); // 'loading' | 'precaching' | 'done' | 'error'

  useEffect(() => {
    if (status === 'error') {
      setPhase('error');
      const t = setTimeout(() => setVisible(false), 4000);
      return () => clearTimeout(t);
    }
    if (status === 'ready') {
      // Move to precaching phase once model is loaded
      if (phase === 'loading') setPhase('precaching');
    }
  }, [status, phase]);

  // Watch precache progress — when done, fade out
  useEffect(() => {
    const { done, total } = precacheProgress;
    if (total > 0 && done >= total) {
      setPhase('done');
      setFadeOut(true);
      const t = setTimeout(() => setVisible(false), 2000);
      return () => clearTimeout(t);
    }
  }, [precacheProgress]);

  if (!visible) return null;

  const isError = phase === 'error';
  const isPrecaching = phase === 'precaching';
  const isDone = phase === 'done';

  // Current active files downloading
  const activeFiles = Object.entries(fileProgress)
    .filter(([, pct]) => pct < 100)
    .map(([file]) => file.split('/').pop());
  const mostRecentFile = activeFiles[activeFiles.length - 1] ?? null;

  // Precache progress bar values
  const { done: pcDone, total: pcTotal } = precacheProgress;
  const pcPct = pcTotal > 0 ? Math.round((pcDone / pcTotal) * 100) : 0;

  return (
    <div
      className={[
        'fixed bottom-4 right-4 z-50 w-80 rounded-xl shadow-2xl border text-sm',
        'bg-htb-card border-gray-700',
        'transition-all duration-700',
        fadeOut
          ? 'opacity-0 translate-y-4 pointer-events-none'
          : 'opacity-100 translate-y-0',
      ].join(' ')}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 pt-3 pb-1">
        <span
          className={[
            'text-base',
            isDone
              ? 'text-htb-green'
              : isError
                ? 'text-red-400'
                : 'animate-pulse text-htb-green',
          ].join(' ')}
        >
          {isError ? '⚠️' : isDone ? '✅' : '🎙️'}
        </span>
        <div className="flex-1">
          <p
            className={`font-semibold ${isError ? 'text-red-400' : 'text-white'}`}
          >
            {isError
              ? 'Error al cargar la voz IA'
              : isDone
                ? '¡Audio precargado!'
                : isPrecaching
                  ? 'Precargando audios en fondo…'
                  : 'Cargando voz IA en ruso…'}
          </p>
          <p className="text-htb-text-dim text-xs mt-0.5">
            {isError
              ? 'Comprueba tu conexión e intenta recargar'
              : isDone
                ? 'Todos los textos están listos para reproducir'
                : isPrecaching
                  ? `${pcDone} / ${pcTotal} textos cacheados — clic para escuchar ya`
                  : 'Se descargará una sola vez y quedará en caché'}
          </p>
        </div>
      </div>

      {/* Progress bar */}
      {!isError && (
        <div className="px-4 py-2">
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div
              className="h-2 rounded-full transition-all duration-300 bg-htb-green/80"
              style={{
                width: `${isPrecaching || isDone ? pcPct : overallProgress}%`,
              }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-htb-text-dim">
            <span className="truncate max-w-[200px]">
              {isPrecaching || isDone
                ? `🔊 Modelo MMS-TTS Russian`
                : mostRecentFile
                  ? `↓ ${mostRecentFile}`
                  : 'Iniciando descarga…'}
            </span>
            <span className="font-mono tabular-nums">
              {isPrecaching || isDone ? `${pcPct}%` : `${overallProgress}%`}
            </span>
          </div>
        </div>
      )}

      {/* Individual file rows (only while loading model) */}
      {phase === 'loading' &&
        !isError &&
        Object.keys(fileProgress).length > 0 && (
          <div className="px-4 pb-3 space-y-1">
            {Object.entries(fileProgress).map(([file, pct]) => (
              <div key={file} className="flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-htb-green/50" />
                <span className="text-htb-text-dim truncate flex-1">
                  {file.split('/').pop()}
                </span>
                <span className="font-mono tabular-nums text-htb-text-dim">
                  {Math.round(pct)}%
                </span>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}
