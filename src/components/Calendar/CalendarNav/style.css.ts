import { style } from '@vanilla-extract/css';
import { typography } from '../../../styles/typography.css';
import { customThemeVars } from '../../../styles/theme.css';

export const layout = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 12px',
    position: 'relative',
});

export const monthLabel = style({
    display: 'flex',
    alignItems: 'center',
    fontSize: typography.fontSize.subtitle,
    fontWeight: typography.fontWeight.bold,

    color: customThemeVars.color,
});

export const navGroup = style({
    display: 'flex',
    gap: '20px',
});
