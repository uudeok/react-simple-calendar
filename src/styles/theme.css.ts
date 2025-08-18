import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const theme = createThemeContract({
    colors: {
        shadeLightest: null,
        shadeLight: null,
        shadeDark: null,
        shadeDarkest: null,
        textPrimary: null,
        textSecondary: null,
        grayLight: null,
        gray: null,
        grayDark: null,
        grayDarker: null,
        grayDarkest: null,
    },
});

// 라이트 테마
export const lightTheme = createTheme(theme, {
    colors: {
        shadeLightest: '#FBFBFF',
        shadeLight: '#EFEFF5',
        shadeDark: '#E0E0E6',
        shadeDarkest: '#BABAC0',
        textPrimary: '#202023',
        textSecondary: '#636369',
        grayLight: '#D4DAE1',
        gray: '#C7CED8',
        grayDark: '#B2BBC8',
        grayDarker: '#808A97',
        grayDarkest: '#747E8A',
    },
});

// 다크 테마
export const darkTheme = createTheme(theme, {
    colors: {
        shadeLightest: '#111115',
        shadeLight: '#222227',
        shadeDark: '#303038',
        shadeDarkest: '#5F5F67',
        textPrimary: '#EDEDF7',
        textSecondary: '#B3B3BD',
        grayLight: '#393941',
        gray: '#474750',
        grayDark: '#5F5F67',
        grayDarker: '#6D6D76',
        grayDarkest: '#606068',
    },
});
