import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_SHUAL_TOKEN': JSON.stringify(process.env.VITE_SHUAL_TOKEN || ''),
    // Add other environment variables as needed
  },
});
