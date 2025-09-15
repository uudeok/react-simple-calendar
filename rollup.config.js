import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { vanillaExtract } from '@vanilla-extract/rollup-plugin';
import terser from '@rollup/plugin-terser';

export default {
    // 라이브러리의 진입점
    input: 'src/index.ts',
    // 다양한 모듈 포맷으로 출력
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        },
    ],
    // 외부 종속성 설정
    // react, react-dom 등은 사용자의 프로젝트에 이미 설치되어 있다고 가정하고 번들링하지 않습니다.
    external: ['react', 'react-dom'],
    // 플러그인 설정
    plugins: [
        resolve(), // 외부 모듈을 번들링할 수 있도록 경로를 찾습니다.
        commonjs(), // CommonJS 모듈을 ES 모듈로 변환합니다.
        typescript({ tsconfig: './tsconfig.json' }), // 타입스크립트를 자바스크립트로 컴파일합니다.
        vanillaExtract(), // .css.ts 파일을 처리하고 CSS를 추출합니다.
        terser(), // 번들링된 파일을 압축하여 용량을 줄입니다.
    ],
};
