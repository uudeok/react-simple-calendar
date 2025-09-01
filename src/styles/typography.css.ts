import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const typography = createThemeContract({
    fontSize: {
        title: null,
        subtitle: null,
        text: null,
        caption: null,
    },
    fontWeight: {
        light: null,
        normal: null,
        bold: null,
    },
});

export const typographyTheme = createTheme(typography, {
    fontSize: {
        title: '2rem', // 24px
        subtitle: '1.25rem', // 20px
        text: '1rem', // 16px
        caption: '0.75rem', // 12px
    },
    fontWeight: {
        light: '300',
        normal: '500',
        bold: '900',
    },
});
