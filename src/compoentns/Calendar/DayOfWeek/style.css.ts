import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme.css';
import { typography } from '../../../styles/typography.css';

export const layout = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    textAlign: 'center',
    padding: '8px 0',

    color: theme.colors.textSecondary,
    fontSize: typography.fontSize.text,
});
