import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mon-projet-react/",
  test: {
    globals: true,        // Permet d'utiliser test(), expect() sans import explicite
    environment: 'jsdom', // Simule le DOM pour React
    include: ['src/**/*.test.{js,jsx}', 'src/**/*.spec.{js,jsx}'],
  },
})