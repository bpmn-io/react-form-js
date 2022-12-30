import pkg from './package.json';

import cjs from '@rollup/plugin-commonjs';

import { babel } from '@rollup/plugin-babel';

import nodeResolve from '@rollup/plugin-node-resolve';

import replace from '@rollup/plugin-replace';


export default [
  {
    input: './src/index.jsx',
    output: {
      name: 'ReactForm',
      file: 'dist/react-form.umd.js',
      format: 'umd'
    },
    plugins: pgl(),
    onwarn
  },
  {
    input: './src/index.jsx',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: pgl(),
    onwarn
  }
];


function pgl() {
  return [
    cjs(),
    nodeResolve(),
    replace({
      preventAssignment: false,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel({
      babelrc: false,
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      presets: [
        [ '@babel/env', { modules: false } ],
        'react-app'
      ]
    })
  ];
}

function onwarn(warning, warn) {

  // TODO(@barmac): remove once https://github.com/moment/luxon/issues/193 is resolved
  if (warning.code === 'CIRCULAR_DEPENDENCY') {
    if (warning.message.includes('luxon')) {
      return;
    }
  }

  if (warning.code === 'THIS_IS_UNDEFINED') {
    if (warning.id.includes('flatpickr')) {
      return;
    }
  }

  warn(warning);
}