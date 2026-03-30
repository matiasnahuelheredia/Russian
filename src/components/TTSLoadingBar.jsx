import React, { useEffect, useState } from 'react';
import { useTTS } from '../context/TTSContext';

/**
 * TTSLoadingBar — floating indicator shown while the AI TTS model
 * is downloading and initialising. Fades away once ready.
 */
export default function TTSLoadingBar() {
  const { status, overallProgress, fileProgress } = useTTS();
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // When fully loaded, start fade-out then unmount
  useEffect(() => {
    if (status === 'ready') {
      setFadeOut(true);
      const t = setTimeout(() => setVisible(false), 1800);
      return () => clearTimeout(t);
    }
    if (status === 'error') {
      const t = setTimeout(() => setVisible(false), 4000);
      return () => clearTimeout(t);
    }
  }, [status]);

  if (!visible) return null;

  const isError = status === 'error';
  const isReady = status === 'ready';

  // Current active files downloading
  const activeFiles = Object.entries(fileProgress)
    .filter(([, pct]) => pct < 100)
    .map(([file]) => file.split('/').pop()); // basename only

  const mostRecentFile = activeFiles[activeFiles.length - 1] ?? null;

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
            isReady
              ? 'text-htb-green'
              : isError
                ? 'text-red-400'
                : 'animate-pulse text-htb-green',
          ].join(' ')}
        >
          {isError ? '⚠️' : isReady ? '✅' : '🎙️'}
        </span>
        <div className="flex-1">
          <p
            className={`font-semibold ${isError ? 'text-red-400' : 'text-white'}`}
          >
            {isError
              ? 'Error al cargar la voz IA'
              : isReady
                ? '¡Voz IA lista!'
                : 'Cargando voz IA en ruso…'}
          </p>
          {!isReady && !isError && (
            <p className="text-htb-text-dim text-xs mt-0.5">
              Se descargará una sola vez y quedará en caché
            </p>
          )}
          {isError && (
            <p className="text-red-300 text-xs mt-0.5">
              Comprueba tu conexión e intenta recargar
            </p>
          )}
          {isReady && (
            <p className="text-htb-text-dim text-xs mt-0.5">
              Haz clic en cualquier texto ruso para escucharlo
            </p>
          )}
        </div>
      </div>

      {/* Progress bar */}
      {!isError && (
        <div className="px-4 py-2">
          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div
              className={[
                'h-2 rounded-full transition-all duration-500',
                isReady ? 'bg-htb-green' : 'bg-htb-green/70',
              ].join(' ')}
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-htb-text-dim">
            <span className="truncate max-w-[180px]">
              {isReady
                ? 'Modelo MMS-TTS Russian'
                : mostRecentFile
                  ? `↓ ${mostRecentFile}`
                  : 'Iniciando descarga…'}
            </span>
            <span className="font-mono tabular-nums">{overallProgress}%</span>
          </div>
        </div>
      )}

      {/* Individual file rows (only while loading) */}
      {!isReady && !isError && Object.keys(fileProgress).length > 0 && (
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
