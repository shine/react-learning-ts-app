import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allows us to use describe, it, expect globally
    environment: 'jsdom', // Use jsdom for the DOM environment
    setupFiles: './src/test/setup.ts', // A setup file to run before each test
  },
})
