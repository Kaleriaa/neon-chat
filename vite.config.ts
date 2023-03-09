import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    server: {
        port: 3005,
    },
    base: '/neon-chat/',
    plugins: [react(), tsconfigPaths()],
})
