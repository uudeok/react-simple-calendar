import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin(),
        dts({
            insertTypesEntry: true, // 타입 정의 진입점을 생성합니다.
            rollupTypes: true, // 모든 타입을 단일 d.ts 파일로 묶습니다.
            outDir: 'dist', // 출력 디렉토리를 지정합니다.
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/index.ts'),
            name: 'ReactSimpleCalendar', // UMD 빌드 시 전역 이름
            fileName: (format) => {
                if (format === 'es') return 'index.js';
                if (format === 'umd') return 'index.umd.cjs'; // 확장자를 .cjs로 변경
                return `index.${format}.js`;
            },
            formats: ['es', 'umd'], // 포맷을 명시적으로 설정
        },
        rollupOptions: {
            external: ['react', 'react-dom'], // peerDependencies 제외
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
                exports: 'named',
            },
        },
    },
});
