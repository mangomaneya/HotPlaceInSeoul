import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@router', replacement: '/src/router' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@store', replacement: '/src/store' },
      { find: '@utils', replacement: '/src/lib/utils' },
      { find: '@api', replacement: '/src/lib/api' },
      { find: '@hooks', replacement: '/src/lib/hooks' },
    ],
  },
});
