import { style } from '@vanilla-extract/css';

export const grid = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '4px',
    padding: '8px',
});
