import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      "@helpers": path.resolve(__dirname, './src/helpers'),
      "@pages": path.resolve(__dirname, './src/pages'),
      "@layouts": path.resolve(__dirname, './src/layouts'),
      "@assets": path.resolve(__dirname, './src/assets'),
      '@shared': path.resolve(__dirname, './src/shared')
    }
  },
  plugins: [react()],
})
