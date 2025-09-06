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
