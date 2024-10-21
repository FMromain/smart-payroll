// https://github.com/vitejs/vite/discussions/3448
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

// ----------------------------------------------------------------------

export default defineConfig({
  // Vite plugins to include React and jsconfigPaths
  plugins: [react(), jsconfigPaths()],

  // Base URL for the app (hardcoded to '/free' in your case)
  base: '/free',

  // Define global window object to avoid compatibility issues with libraries using 'global'
  define: {
    global: 'window'
  },

  // Resolve configuration for module paths
  resolve: {
    alias: [
      {
        // Handles tilde (~) imports from node_modules
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1')
      },
      {
        // Allows importing from 'src' folder using 'src/...' paths
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/$1')
      }
    ]
  },

  // Server configuration for development
  server: {
    // Automatically open the browser when server starts
    open: true,
    // Set default development server port to 3000
    port: 3000
  },

  // Preview configuration (similar to server but for production preview)
  preview: {
    // Automatically open the browser when preview starts
    open: true,
    // Set default preview server port to 3000
    port: 3000
  }
});
