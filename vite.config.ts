import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig({
    plugins: [react(), vanillaExtractPlugin(), dts()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),

            name: 'ReactSimpleCalendar', // UMD 빌드 시 전역 이름
            formats: ['es', 'umd', 'cjs'],
            fileName: (format) => `index.${format}.js`, // 출력 파일 이름
        },
        rollupOptions: {
            external: ['react', 'react-dom'], // peerDependencies 제외
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
