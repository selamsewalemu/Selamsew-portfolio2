import { defineConfig } from 'vite'
import react from '@vitejs/react-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Selamsew211/',  // <-- ADD THIS LINE WITH YOUR REPOSITORY NAME
})
