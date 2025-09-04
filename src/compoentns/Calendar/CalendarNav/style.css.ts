import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { typography } from '../../../styles/typography.css';
import { theme } from '../../../styles/theme.css';

export const layout = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 12px',
});

export const monthLabel = recipe({
    base: {
        display: 'flex',
        alignItems: 'center',
        fontSize: typography.fontSize.subtitle,
        fontWeight: typography.fontWeight.bold,
    },
    variants: {
        clickable: {
            true: {
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '10px',
                backgroundColor: theme.colors.shadeLight,
                ':hover': {
                    backgroundColor: theme.colors.shadeDark,
                },
            },
            false: {}, // 아무 스타일 변화 없음
        },
    },
});

export const navGroup = style({
    display: 'flex',
    gap: '20px',
});
