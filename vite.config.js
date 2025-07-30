import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/reactcicd/", // this must match your GitHub repo name
  plugins: [react()],
})
