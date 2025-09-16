import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin(),
        dts({
            insertTypesEntry: true, // 단일 타입 진입점 생성
            outDir: 'dist',
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/index.ts'),
            name: 'ReactSimpleCalendar', // UMD 전역 이름
            fileName: (format) => (format === 'es' ? 'index.js' : 'index.umd.cjs'),
            formats: ['es', 'umd'],
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
