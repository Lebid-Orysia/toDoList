import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/react-plugin' // або ваш фреймворк

export default defineConfig({
  base: '/todolist/', 
  plugins: [react()],
})