import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { peerDependencies } from './package.json'
import generatePackageJson from 'rollup-plugin-generate-package-json'
// dont generate stories types
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts', // Specifies the entry point for building the library.
      name: '@sector.siit/mlz-ui', // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ['cjs', 'es'], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
      output: [
        {
          exports: 'named',
          format: 'cjs',
          banner: "'use client'",
        },
        {
          exports: 'named',
          format: 'es',
          banner: "'use client'",
        },
      ],
      plugins: [
        generatePackageJson({
          outputFolder: 'dist',
          baseContents: (pkg) => {
            return {
              ...pkg,
              scripts: {},
              devDependencies: {},
              main: 'index.cjs.js',
              module: 'index.es.js',
              typings: 'index.d.ts',
              types: 'index.d.ts',
            }
          },
        }),
      ],
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [dts()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
})
