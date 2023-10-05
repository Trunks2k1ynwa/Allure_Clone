import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/components'),
      '@@': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '~': path.resolve(__dirname, './src')
    }
  }
})
