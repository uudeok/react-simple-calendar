// CalendarHeader.css.ts
import { style } from '@vanilla-extract/css';
import { typography } from '../../../styles/typography.css';

export const header = style({
    display: 'grid',
    gridTemplateColumns: '40px 1fr 40px',
    alignItems: 'center',
    gap: '8px',
});

export const date = style({
    textAlign: 'center',
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.subtitle,
    letterSpacing: '0.2px',
});

export const navBtn = style({
    position: 'relative',
    height: 40,
    border: '1px solid rgba(0,0,0,0.08)',
    borderRadius: 10,
    background: 'linear-gradient(180deg, #fff, #f7f7f9)',
    boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
    cursor: 'pointer',
    selectors: {
        '&:hover': { boxShadow: '0 2px 6px rgba(0,0,0,0.10)' },
        '&:active': { transform: 'translateY(1px)' },
        '&:focus-visible': {
            outline: '2px solid #4C8BF5',
            outlineOffset: 2,
        },
    },
});

/** 왼쪽 / 오른쪽 공통 ::before 위치 */
const arrowBase = {
    position: 'absolute' as const,
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '18px',
    lineHeight: 1,
    color: '#1f2937',
};

/** ← 방향 버튼 */
export const prev = style({
    justifySelf: 'start',
    width: 40,
    selectors: {
        '&::before': {
            content: '""',
            left: 12,
            ...arrowBase,
        },
    },
});

/** → 방향 버튼 */
export const next = style({
    justifySelf: 'end',
    width: 40,
    selectors: {
        '&::before': {
            content: '""',
            right: 12,
            ...arrowBase,
        },
    },
});

/* ---- 화살표 종류 (단/쌍) ---- */
/* 단일 화살표 ‹ › (U+2039, U+203A) */
export const prevSingle = style({
    selectors: { '&::before': { content: '"\\2039"' } },
});
export const nextSingle = style({
    selectors: { '&::before': { content: '"\\203A"' } },
});

/* 이중 화살표 « » (U+00AB, U+00BB)  = <<, >> 느낌 */
export const prevDouble = style({
    selectors: { '&::before': { content: '"\\00AB"' } },
});
export const nextDouble = style({
    selectors: { '&::before': { content: '"\\00BB"' } },
});
