import { pipeline, env } from '@huggingface/transformers';

// Use cached models in the browser (IndexedDB), never from local filesystem
env.allowLocalModels = false;
env.useBrowserCache = true;

let synthesizer = null;
let isReady = false;

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
          // progressInfo shape: { status, name, file, progress, loaded, total }
          if (progressInfo.status === 'progress') {
            self.postMessage({
              type: 'progress',
              file: progressInfo.file || '',
              progress: progressInfo.progress ?? 0,
              loaded: progressInfo.loaded ?? 0,
              total: progressInfo.total ?? 0,
            });
          } else if (progressInfo.status === 'initiate') {
            self.postMessage({
              type: 'initiate',
              file: progressInfo.file || '',
            });
          } else if (progressInfo.status === 'done') {
            self.postMessage({
              type: 'file_done',
              file: progressInfo.file || '',
            });
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
    try {
      // Run TTS — output has .audio (Float32Array) and .sampling_rate
      const output = await synthesizer(text, { speaker_id: 0 });
      // Transfer the buffer to avoid copying large arrays
      self.postMessage(
        {
          type: 'audio',
          audio: output.audio,
          sampling_rate: output.sampling_rate,
          id,
        },
        [output.audio.buffer]
      );
    } catch (err) {
      self.postMessage({ type: 'error', message: err.message, id });
    }
  }
};
