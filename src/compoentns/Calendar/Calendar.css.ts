import { style } from '@vanilla-extract/css';
import { customThemeVars } from '../../styles/theme.css';

export const calendarRoot = style({
    position: 'relative', // dropdown 기준
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    borderRadius: '12px',
    background: customThemeVars.background,
    color: customThemeVars.color,
    boxShadow: '0 2px 6px rgba(19, 8, 8, 0.1)',
});

// export const calendarRoot = style({
//     position: 'relative', // dropdown 기준
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '1rem',
//     borderRadius: '12px',
//     background: theme.colors.shadeLightest,
//     color: theme.colors.textPrimary,
//     boxShadow: '0 2px 6px rgba(19, 8, 8, 0.1)',
// });
