import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme.css';
import { typography } from '../../../styles/typography.css';

export const datecell = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    aspectRatio: '1 / 1',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s',
    color: theme.colors.textPrimary,
    background: 'transparent',
    fontWeight: typography.fontWeight.semiBold,

    selectors: {
        '&:hover': {
            background: `var(--highlight-color, ${theme.colors.hightlight})`,
            color: '#fff',
        },
        '&:focus': {
            outline: `2px solid var(--highlight-color, ${theme.colors.hightlight})`,
        },
    },
});
