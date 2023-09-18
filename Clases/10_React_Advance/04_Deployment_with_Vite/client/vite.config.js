import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Changing the default port from :5173 to :3000
  server: {
    port: 3000,
  },
  // Changing the default build directory from `dist` to `build`
  build: {
    outDir: 'build',
  },
})
