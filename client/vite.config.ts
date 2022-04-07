import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import Pages from 'vite-plugin-pages'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), legacy(), Pages()],
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        secure: false,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
