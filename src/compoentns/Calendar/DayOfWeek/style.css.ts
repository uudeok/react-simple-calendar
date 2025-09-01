import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme.css';

export const container = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    textAlign: 'center',
    padding: '8px 0',

    color: theme.colors.textPrimary,
});

export const weekCell = style({
    padding: '10px',
});
