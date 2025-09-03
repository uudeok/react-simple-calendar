import { style } from '@vanilla-extract/css';
import { typography } from '../../../styles/typography.css';

export const header = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 12px',
});

export const date = style({
    display: 'flex',
    alignItems: 'center',

    fontSize: typography.fontSize.subtitle,
    fontWeight: typography.fontWeight.bold,
});

export const navGroup = style({
    display: 'flex',
    gap: '20px',
});
