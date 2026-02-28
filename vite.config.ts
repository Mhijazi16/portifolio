import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      base: '/portifolio/',
      server: {
        port: 3000,
        host: '0.0.0.0',
        allowedHosts: ['luetta-popliteal-admittedly.ngrok-free.dev'],
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Optimize chunk size
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
          output: {
            // Manual chunks for better code splitting
            manualChunks: {
              'spline': ['@splinetool/react-spline'],
              'gemini': ['@google/genai'],
            }
          }
        },
        // Use esbuild for fast minification (Vite default)
        minify: 'esbuild'
      }
    };
});
