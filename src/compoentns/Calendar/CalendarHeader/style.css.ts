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
    fontSize: typography.fontSize.subtitle,
    letterSpacing: '0.2px',
});

export const navButton = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    background: 'transparent',
    border: 'none',
    fontSize: typography.fontSize.subtitle,
    cursor: 'pointer',
    color: 'inherit',

    selectors: {
        '&:hover': {
            opacity: 0.8,
        },
    },
});
