import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mixins': path.resolve(__dirname, './src/styles/mixins'),
      '@images': path.resolve(__dirname, './src/assets/images'),
    }
  }
})
