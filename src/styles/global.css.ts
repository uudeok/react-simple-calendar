import { globalStyle } from '@vanilla-extract/css';

// 기본 박스 모델
globalStyle('*, *::before, *::after', {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
});

// html, body 기본 스타일
globalStyle('html, body', {
    height: '100%',
    lineHeight: 1.5,
    fontFamily: 'system-ui, sans-serif',
});

// 리스트, 링크, 이미지 기본 스타일
globalStyle('ul, ol', {
    listStyle: 'none',
});

globalStyle('a', {
    textDecoration: 'none',
    color: 'inherit',
});

globalStyle('img', {
    display: 'block',
    maxWidth: '100%',
});

// form 요소 스타일 초기화
globalStyle('button, input, select, textarea', {
    font: 'inherit',
    background: 'none',
    border: 'none',
    padding: 0,
    margin: 0,
    color: 'inherit',
});
