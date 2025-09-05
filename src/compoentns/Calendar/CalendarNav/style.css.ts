import { style } from '@vanilla-extract/css';
import { typography } from '../../../styles/typography.css';
import { theme } from '../../../styles/theme.css';

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
});

export const navGroup = style({
    display: 'flex',
    gap: '20px',
});

export const dropdown = style({
    position: 'absolute',
    top: '100%',
    left: 0,

    backgroundColor: theme.colors.shadeLightest,
    borderRadius: '8px',

    width: '100%',
    padding: '8px',

    display: 'flex',
    flexDirection: 'column',
    height: '100%',
});
