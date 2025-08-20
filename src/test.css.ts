import { style } from '@vanilla-extract/css';
import { theme } from './styles/theme.css';
import { typographyValues } from './styles/typography.css';

export const testBox = style({
    width: '250px',
    height: '150px',
    backgroundColor: theme.colors.shadeDarkest,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    padding: '16px',
    gap: '8px',
});

export const title = style({
    fontSize: typographyValues.fontSize.title,
    fontWeight: typographyValues.fontWeight.bold,
    color: theme.colors.textPrimary, // 테마 텍스트 색상 적용
});

export const subtitle = style({
    fontSize: typographyValues.fontSize.subtitle,
    fontWeight: typographyValues.fontWeight.normal,
    color: theme.colors.textSecondary,
});

export const paragraph = style({
    fontSize: typographyValues.fontSize.text,
    fontWeight: typographyValues.fontWeight.normal,
    color: theme.colors.textPrimary,
});

export const caption = style({
    fontSize: typographyValues.fontSize.caption,
    fontWeight: typographyValues.fontWeight.light,
    color: theme.colors.textSecondary,
});
