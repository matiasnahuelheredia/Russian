import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

/**
 * TTS Status values:
 *   'idle'     — not started yet
 *   'loading'  — downloading / initialising model
 *   'ready'    — model loaded, can synthesise
 *   'speaking' — currently playing audio
 *   'error'    — something went wrong
 */
const TTSContext = createContext(null);

export function TTSProvider({ children }) {
  const workerRef = useRef(null);
  const audioCtxRef = useRef(null);
  const sourceRef = useRef(null); // currently playing BufferSourceNode
  const pendingResolvers = useRef({}); // id → { resolve, reject }
  // Store _playAudio in a ref so worker.onmessage always calls the latest version
  // (avoids stale closure captured at mount time)
  const _playAudioRef = useRef(null);

  const [status, setStatus] = useState('idle');
  const [overallProgress, setOverallProgress] = useState(0);
  const [fileProgress, setFileProgress] = useState({});
  const [currentText, setCurrentText] = useState(null);

  /* ──────────────────────────────────────────────────────────
     Boot the worker and start loading on mount
  ─────────────────────────────────────────────────────────── */
  useEffect(() => {
    const worker = new Worker(
      new URL('../workers/tts.worker.js', import.meta.url),
      { type: 'module' }
    );
    workerRef.current = worker;

    worker.onmessage = (e) => {
      const msg = e.data;

      switch (msg.type) {
        case 'initiate':
          setFileProgress((prev) => ({ ...prev, [msg.file]: 0 }));
          break;

        case 'progress':
          setFileProgress((prev) => {
            const next = { ...prev, [msg.file]: msg.progress };
            const vals = Object.values(next);
            const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
            setOverallProgress(Math.round(mean));
            return next;
          });
          break;

        case 'file_done':
          setFileProgress((prev) => {
            const next = { ...prev, [msg.file]: 100 };
            const vals = Object.values(next);
            const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
            setOverallProgress(Math.round(mean));
            return next;
          });
          break;

        case 'loaded':
          setStatus('ready');
          setOverallProgress(100);
          break;

        // Use the ref so we always invoke the latest _playAudio
        case 'audio':
          _playAudioRef.current?.(msg.audio, msg.sampling_rate, msg.id);
          break;

        case 'error':
          console.error('[TTS Worker]', msg.message);
          if (msg.id && pendingResolvers.current[msg.id]) {
            pendingResolvers.current[msg.id].reject(new Error(msg.message));
            delete pendingResolvers.current[msg.id];
          }
          if (!msg.id) setStatus('error');
          else {
            // Single synthesis error — reset to ready so user can retry
            setStatus('ready');
            setCurrentText(null);
          }
          break;

        default:
          break;
      }
    };

    worker.onerror = (err) => {
      console.error('[TTS Worker error]', err);
      setStatus('error');
    };

    setStatus('loading');
    worker.postMessage({ type: 'load' });

    return () => {
      worker.terminate();
      audioCtxRef.current?.close();
    };
  }, []);

  /* ──────────────────────────────────────────────────────────
     AudioContext — created on demand inside a user gesture
  ─────────────────────────────────────────────────────────── */
  const _ensureAudioCtx = () => {
    if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
      audioCtxRef.current = new (
        window.AudioContext || window.webkitAudioContext
      )();
    }
    return audioCtxRef.current;
  };

  /* ──────────────────────────────────────────────────────────
     Audio playback — called from worker.onmessage via ref
  ─────────────────────────────────────────────────────────── */
  const _playAudio = useCallback((float32Array, samplingRate, id) => {
    const ctx = audioCtxRef.current;
    if (!ctx) {
      console.error('[TTS] No AudioContext — was speak() called first?');
      setStatus('ready');
      setCurrentText(null);
      return;
    }

    const doPlay = () => {
      // Stop any currently playing audio
      if (sourceRef.current) {
        try {
          sourceRef.current.stop();
        } catch (_) {}
        sourceRef.current = null;
      }

      const buffer = ctx.createBuffer(1, float32Array.length, samplingRate);
      buffer.copyToChannel(float32Array, 0);

      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      sourceRef.current = source;

      source.onended = () => {
        sourceRef.current = null;
        setStatus('ready');
        setCurrentText(null);
        if (id && pendingResolvers.current[id]) {
          pendingResolvers.current[id].resolve();
          delete pendingResolvers.current[id];
        }
      };

      // Schedule slightly in the future so the audio scheduler has time to
      // queue the buffer before playback begins — prevents the first syllable
      // from being clipped (especially after an AudioContext resume).
      const SCHEDULE_AHEAD = 0.08; // 80 ms
      source.start(ctx.currentTime + SCHEDULE_AHEAD);
      setStatus('speaking');
    };

    // If context is suspended (autoplay policy), resume first then play.
    // After resume() resolves, currentTime may still be 0 for a tick, so we
    // wait one animation frame to let the clock stabilise before scheduling.
    if (ctx.state === 'suspended') {
      ctx
        .resume()
        .then(() => new Promise((r) => requestAnimationFrame(r)))
        .then(doPlay)
        .catch((err) => {
          console.error('[TTS] AudioContext resume failed:', err);
          setStatus('ready');
        });
    } else {
      doPlay();
    }
  }, []);

  // Keep the ref in sync with the latest version of _playAudio
  _playAudioRef.current = _playAudio;

  /* ──────────────────────────────────────────────────────────
     Public API
  ─────────────────────────────────────────────────────────── */

  /** Speak `text` in Russian. Returns a Promise that resolves when audio ends.
   *  MUST be called from a user-gesture handler (click, etc.)
   */
  const speak = useCallback(
    (text) => {
      if (!workerRef.current) return;
      if (status === 'loading' || status === 'idle' || status === 'error')
        return;
      if (!text || !text.trim()) return;

      // ── Critical: create / resume AudioContext HERE, inside the user gesture ──
      const ctx = _ensureAudioCtx();
      if (ctx.state === 'suspended') {
        ctx
          .resume()
          .catch((err) =>
            console.warn('[TTS] AudioContext resume in speak():', err)
          );
      }

      // Stop current speech if any
      if (sourceRef.current) {
        try {
          sourceRef.current.stop();
        } catch (_) {}
        sourceRef.current = null;
      }

      const id = `tts_${Date.now()}_${Math.random()}`;
      setCurrentText(text);
      setStatus('synthesizing');

      return new Promise((resolve, reject) => {
        pendingResolvers.current[id] = { resolve, reject };
        workerRef.current.postMessage({ type: 'synthesize', text, id });
      });
    },
    [status]
  );

  /** Stop any currently playing audio. */
  const stop = useCallback(() => {
    if (sourceRef.current) {
      try {
        sourceRef.current.stop();
      } catch (_) {}
      sourceRef.current = null;
    }
    setStatus('ready');
    setCurrentText(null);
  }, []);

  const value = {
    speak,
    stop,
    // 'idle' | 'loading' | 'ready' | 'synthesizing' | 'speaking' | 'error'
    status,
    overallProgress,
    fileProgress,
    currentText,
    isReady:
      status === 'ready' || status === 'synthesizing' || status === 'speaking',
    isLoading: status === 'loading' || status === 'idle',
    isSpeaking: status === 'speaking' || status === 'synthesizing',
  };

  return <TTSContext.Provider value={value}>{children}</TTSContext.Provider>;
}

/** Hook to consume the TTS context. */
export function useTTS() {
  const ctx = useContext(TTSContext);
  if (!ctx) throw new Error('useTTS must be used inside <TTSProvider>');
  return ctx;
}
