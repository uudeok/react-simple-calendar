import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
    colors: {
        shade1: null,
        shade2: null,
        shade3: null,
        shade4: null,
        shade5: null,
        shade6: null,
        shade7: null,
        shade8: null,
        text1: null,
        text2: null,
        gray1: null,
        gray2: null,
        gray3: null,
        gray4: null,
        gray5: null,
    },
});

// 라이트 테마
export const lightTheme = createTheme(vars, {
    colors: {
        shade1: '#FBFBFF',
        shade2: '#F8F8FE',
        shade3: '#EFEFF5',
        shade4: '#E7E7ED',
        shade5: '#E0E0E6',
        shade6: '#D8D8DE',
        shade7: '#CDCDD3',
        shade8: '#BABAC0',
        text1: '#202023',
        text2: '#636369',
        gray1: '#D4DAE1',
        gray2: '#C7CED8',
        gray3: '#B2BBC8',
        gray4: '#808A97',
        gray5: '#747E8A',
    },
});

// 다크 테마
export const darkTheme = createTheme(vars, {
    colors: {
        shade1: '#111115',
        shade2: '#19191B',
        shade3: '#222227',
        shade4: '#292930',
        shade5: '#303038',
        shade6: '#393941',
        shade7: '#474750',
        shade8: '#5F5F67',
        text1: '#EDEDF7',
        text2: '#B3B3BD',
        gray1: '#393941',
        gray2: '#474750',
        gray3: '#5F5F67',
        gray4: '#6D6D76',
        gray5: '#606068',
    },
});
