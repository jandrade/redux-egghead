import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals'
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
    entry: 'index.js',
    format: 'iife', //cjs
    external: [ 'react' ],
    dest: 'examples/js/bundle.js',
    sourceMap: true,

    plugins: [
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        globals(),
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [ [ 'es2015', { modules: false } ], 'react' ],
            plugins: [ 'external-helpers' ]
        }),
        replace({ // Replace any checks for node environment with the string `"production"`
            'process.env.NODE_ENV': "'production'",
        })
    ]
};