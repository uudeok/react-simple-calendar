import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/theme.css';

export const calendarRoot = style({
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: theme.colors.shadeLight,
    color: theme.colors.textPrimary,
});
