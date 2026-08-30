import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { prerenderMeta } from './scripts/prerender.mjs'

export default defineConfig({
  plugins: [
    react(),
    prerenderMeta(),
  ],
})