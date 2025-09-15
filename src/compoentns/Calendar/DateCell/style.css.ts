import { style } from '@vanilla-extract/css';
import { customThemeVars, theme } from '../../../styles/theme.css';
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

        selectors: {
            '&:hover:not([disabled])': {
                background: customThemeVars.highlightBg,
                color: customThemeVars.highlightColor,
            },
        },
    },
    variants: {
        selected: {
            true: {
                background: customThemeVars.highlightBg,
                color: customThemeVars.highlightColor,
                border: 'none',
            },
            false: {
                background: 'transparent',
                color: theme.colors.textPrimary,
            },
        },
        disabled: {
            true: {
                cursor: 'not-allowed',
                color: theme.colors.gray,
            },
            false: {},
        },
        isToday: {
            true: {
                border: `1px solid ${theme.colors.grayLight}`,
            },
        },
    },
    compoundVariants: [
        {
            variants: {
                selected: true,
                isToday: true,
            },
            style: {
                border: 'none', // 오늘 + 선택된 경우 border 제거
            },
        },
    ],
});

export const cellWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
});

export const holidayBottom = style({
    display: 'block',
    textAlign: 'center',
    fontSize: typography.fontSize.caption,
    color: theme.colors.textPrimary,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    height: '1rem', // 항상 일정한 높이 확보
});
