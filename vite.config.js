import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    port: 5000,
    strictPort: true,
    hmr: {
      clientPort: 5000,
      host: '0.0.0.0'
    }
  }
})
