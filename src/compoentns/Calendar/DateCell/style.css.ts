import { theme } from '../../../styles/theme.css';
import { typography } from '../../../styles/typography.css';
import { recipe } from '@vanilla-extract/recipes';

export const datecell = recipe({
    base: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        aspectRatio: '1 / 1',
        borderRadius: '50%',
        cursor: 'pointer',
        border: 'none',
        background: 'transparent',
        color: theme.colors.textPrimary,
        fontSize: typography.fontSize.text,
        transition: 'background 0.2s, color 0.2s',
    },
    variants: {
        selected: {
            true: {
                background: theme.colors.hightlight,
                color: theme.colors.white,
            },
            false: {
                background: 'transparent',
                color: theme.colors.textPrimary,
            },
        },
    },
});
