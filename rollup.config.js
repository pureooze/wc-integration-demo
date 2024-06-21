import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import serve from 'rollup-plugin-serve';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default {
    input: './index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        resolve({
            extensions: ['.js', '.jsx']
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
            preventAssignment: true,
        }),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env', '@babel/preset-react']
        }),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'react': ['useState', 'useEffect', 'useContext', 'useReducer', 'useCallback', 'useMemo', 'useRef', 'useImperativeHandle', 'useLayoutEffect', 'useDebugValue'],
                'react-dom': ['render']
            }
        }),
        copy({
            targets: [
                { src: 'index.html', dest: 'dist' }
            ]
        }),
        postcss({
            extract: true,
            minimize: true,
        }),
        serve({
            open: true,
            contentBase: ['dist'],
            port: 8000
        })
    ]
};
