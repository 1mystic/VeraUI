import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    dts({ rollupTypes: true })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VeramindReact',
      fileName: (format) => `index.${format === 'cjs' ? 'cjs' : 'js'}`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        }
      }
    }
  }
});
