import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme.css';
import { typography } from '../../../styles/typography.css';

export const container = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    textAlign: 'center',
    padding: '8px 0',
    fontSize: typography.fontSize.text,
    color: theme.colors.textPrimary,
});

export const weekCell = style({
    padding: '10px',
});
