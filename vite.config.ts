import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/rss-react/',
  build: {
    assetsDir: 'assets',
  },
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  }
})
