import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/my-portfolio/", // Replace with your repo name
  plugins: [react()],
});
