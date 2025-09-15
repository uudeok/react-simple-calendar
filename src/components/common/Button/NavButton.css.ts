import { style } from '@vanilla-extract/css';
import { customThemeVars } from '../../../styles/theme.css';
import { typography } from '../../../styles/typography.css';

export const navButton = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    background: 'transparent',
    border: 'none',

    fontSize: typography.fontSize.heading,
    cursor: 'pointer',
    color: customThemeVars.highlightBg,

    transition: 'all 0.2s',
    fontWeight: typography.fontWeight.semiBold,
});
