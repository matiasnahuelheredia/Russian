import { pipeline, env } from '@huggingface/transformers';

// Use cached models in the browser (IndexedDB), never from local filesystem
env.allowLocalModels = false;
env.useBrowserCache = true;

let synthesizer = null;
let isReady = false;

// ─── Level-1 cache: in-memory Map (instant repeat within a session) ──────────
// Stores { audio: Float32Array, sampling_rate: number }
const memCache = new Map();

// ─── Level-2 cache: IndexedDB (persists across reloads) ──────────────────────
const IDB_NAME = 'tts-audio-cache';
const IDB_STORE = 'audio';
const IDB_VERSION = 1;

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, IDB_VERSION);
    req.onupgradeneeded = (e) => {
      e.target.result.createObjectStore(IDB_STORE);
    };
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror = (e) => reject(e.target.error);
  });
}

async function idbGet(key) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const req = tx.objectStore(IDB_STORE).get(key);
      req.onsuccess = (e) => resolve(e.target.result ?? null);
      req.onerror = (e) => reject(e.target.error);
    });
  } catch {
    return null;
  }
}

async function idbPut(key, value) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(IDB_STORE, 'readwrite');
      const req = tx.objectStore(IDB_STORE).put(value, key);
      req.onsuccess = () => resolve();
      req.onerror = (e) => reject(e.target.error);
    });
  } catch {
    // Cache write failure is non-fatal — continue without caching
  }
}

// Normalise text key: trim + collapse whitespace
const cacheKey = (text) => text.trim().replace(/\s+/g, ' ');

// ─── Send audio back to the main thread ──────────────────────────────────────
// We must clone the buffer if we're sending a cached copy (can't transfer a
// buffer that the cache still holds a reference to).
function sendAudio(audio, sampling_rate, id, isClone = false) {
  const buffer = isClone ? audio.slice(0).buffer : audio.buffer;
  self.postMessage(
    { type: 'audio', audio: new Float32Array(buffer), sampling_rate, id },
    [buffer]
  );
}

/**
 * Receives messages from the main thread:
 *   { type: 'load' }
 *   { type: 'synthesize', text: string, id: string }
 */
self.onmessage = async (event) => {
  const { type, text, id } = event.data;

  if (type === 'load') {
    try {
      synthesizer = await pipeline('text-to-speech', 'Xenova/mms-tts-rus', {
        progress_callback: (progressInfo) => {
          if (progressInfo.status === 'progress') {
            self.postMessage({
              type: 'progress',
              file: progressInfo.file || '',
              progress: progressInfo.progress ?? 0,
              loaded: progressInfo.loaded ?? 0,
              total: progressInfo.total ?? 0,
            });
          } else if (progressInfo.status === 'initiate') {
            self.postMessage({ type: 'initiate', file: progressInfo.file || '' });
          } else if (progressInfo.status === 'done') {
            self.postMessage({ type: 'file_done', file: progressInfo.file || '' });
          }
        },
      });
      isReady = true;
      self.postMessage({ type: 'loaded' });
    } catch (err) {
      self.postMessage({ type: 'error', message: err.message });
    }

  } else if (type === 'synthesize') {
    if (!isReady || !synthesizer) {
      self.postMessage({ type: 'error', message: 'Modelo no cargado aún', id });
      return;
    }

    const key = cacheKey(text);

    // ── L1: memory cache ──────────────────────────────────────────────────────
    if (memCache.has(key)) {
      const { audio, sampling_rate } = memCache.get(key);
      sendAudio(audio, sampling_rate, id, /* isClone */ true);
      return;
    }

    // ── L2: IndexedDB cache ───────────────────────────────────────────────────
    const cached = await idbGet(key);
    if (cached) {
      const audio = new Float32Array(cached.audioBuffer);
      // Warm L1 so next play is synchronous
      memCache.set(key, { audio: audio.slice(0), sampling_rate: cached.sampling_rate });
      sendAudio(audio, cached.sampling_rate, id, /* isClone */ false);
      return;
    }

    // ── Synthesise (cache miss) ───────────────────────────────────────────────
    try {
      const output = await synthesizer(text, { speaker_id: 0 });
      const { audio, sampling_rate } = output;

      // Store a copy in L1 memory cache
      memCache.set(key, { audio: audio.slice(0), sampling_rate });

      // Store in L2 IndexedDB (non-blocking, fire-and-forget)
      idbPut(key, { audioBuffer: audio.slice(0).buffer, sampling_rate });

      // Transfer the original buffer to the main thread (zero-copy)
      self.postMessage(
        { type: 'audio', audio, sampling_rate, id },
        [audio.buffer]
      );
    } catch (err) {
      self.postMessage({ type: 'error', message: err.message, id });
    }
  }
};
