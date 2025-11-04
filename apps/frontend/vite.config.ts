import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(dirname, 'src/components'),
      '@views': path.resolve(dirname, 'src/views'),
      '@hooks': path.resolve(dirname, 'src/hooks'),
      '@services': path.resolve(dirname, 'src/services'),
      '@types': path.resolve(dirname, 'src/types'),
    },
  },
})