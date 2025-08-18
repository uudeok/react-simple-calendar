import { createThemeContract } from '@vanilla-extract/css';

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

export const typographyValues = {
    fontSize: {
        title: '1.5rem', // 24px
        subtitle: '1.25rem', // 20px
        text: '1rem', // 16px
        caption: '0.75rem', // 12px
    },
    fontWeight: {
        light: '300',
        normal: '400',
        bold: '700',
    },
};
