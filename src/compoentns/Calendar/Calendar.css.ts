import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/theme.css';

export const calendarRoot = style({
    position: 'relative', // dropdown 기준
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    borderRadius: '12px',
    background: theme.colors.shadeLightest,
    color: theme.colors.textPrimary,
});

// export const calendarRoot = style({
//     display: 'flex',
//     flexDirection: 'column',
//     width: '100%',
//     borderRadius: '12px',
//     padding: '1rem',

//     background: theme.colors.shadeLightest,
//     color: theme.colors.textPrimary,
// });
