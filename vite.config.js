import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages project site: https://<username>.github.io/coxba/
  base: '/coxba/',
  plugins: [react()],
  build: {
    target: 'es2018',
    chunkSizeWarningLimit: 900,
  },
})
