import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/Russian/' : '/',

  // Required for @huggingface/transformers (ONNX-based models) in the browser.
  // The library must NOT be pre-bundled by Vite because it uses dynamic imports
  // and ships its own WASM files that need to be served as-is.
  optimizeDeps: {
    exclude: ['@huggingface/transformers'],
  },

  // Allow Web Workers authored as ES modules
  worker: {
    format: 'es',
  },
});
