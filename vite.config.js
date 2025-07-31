import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/reactcicd/", // must match your GitHub repo name exactly
  plugins: [react()],
})
