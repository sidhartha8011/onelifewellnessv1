import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'dist', // Change the output folder from 'dist' to 'build'
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // Automatically inject React for JSX
  },
}); 
