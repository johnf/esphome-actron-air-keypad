import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/actron-air-esphome-card.ts',
  output: {
    file: 'dist/actron-air-esphome-card.js',
    format: 'es',
    sourcemap: false,
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript(),
    json(),
    terser({
      format: {
        comments: false,
      },
    }),
  ],
};
