import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
    entry: 'index.js',
    format: 'iife', //cjs
    dest: 'examples/js/bundle.js',
    sourceMap: true,

    plugins: [
        replace({ // Replace any checks for node environment with the string `"production"`
            'process.env.NODE_ENV': "'production'",
        }),
        nodeResolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs()
    ]
};