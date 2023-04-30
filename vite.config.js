import { resolve } from 'node:path'
import macrosPlugin from 'vite-plugin-babel-macros';

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import * as packageJson from './package.json'
// https://vitejs.dev/config/

export default defineConfig(() => ({
  plugins: [
    react(),
    macrosPlugin()
  ],
  build: {
    lib: {
      entry: resolve('src', 'component/index.js'),
      name: 'ReactViteLibrary',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `react-vite-library.${format}.js`,
    },
    manifest: true,
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  }
}))