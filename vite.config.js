import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: [
      '.repl.co',
      '.replit.dev',
      '.replit.app'
    ],
    hmr: {
      clientPort: 5000
    }
  }
})
