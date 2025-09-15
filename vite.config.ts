import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'path';

export default defineConfig({
    plugins: [react(), vanillaExtractPlugin()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'), // 배포 진입점
            name: 'ReactSimpleCalendar', // UMD 빌드 시 전역 이름
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
        sourcemap: true, // 선택 사항: 디버깅용
    },
});
