import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const typography = createThemeContract({
    fontSize: {
        title: null,
        heading: null,
        subtitle: null,
        text: null,
        caption: null,
    },
    fontWeight: {
        light: null,
        regular: null,
        medium: null,
        semiBold: null,
        bold: null,
    },
});

export const typographyTheme = createTheme(typography, {
    fontSize: {
        title: '2rem', // 24px
        heading: '1.5rem', // 24px (새로 추가)
        subtitle: '1.25rem', // 20px
        text: '1rem', // 16px
        caption: '0.75rem', // 12px
    },
    fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semiBold: '600',
        bold: '700',
    },
});
