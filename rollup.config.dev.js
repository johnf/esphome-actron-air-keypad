import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import serve from 'rollup-plugin-serve';

export default {
  input: 'src/actron-air-esphome-card.ts',
  output: {
    file: 'dist/actron-air-esphome-card.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs(),
    typescript(),
    json(),
    serve({
      contentBase: ['dist'],
      host: 'localhost',
      port: 5000,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }),
  ],
};
