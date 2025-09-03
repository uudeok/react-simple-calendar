import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme.css';
import { typography } from '../../../styles/typography.css';

export const navButton = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    background: 'transparent',
    border: 'none',

    fontSize: typography.fontSize.subtitle,
    cursor: 'pointer',
    color: theme.colors.hightlight,

    transition: 'all 0.2s',
    fontWeight: typography.fontWeight.semiBold,
});
