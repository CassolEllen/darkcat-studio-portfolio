import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project sites are served from
// https://<usuario>.github.io/<repo>/, so `base` must match the repo name.
export default defineConfig({
  plugins: [react()],
  base: '/top-landing-page/',
})
