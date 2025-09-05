import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme.css';
import { typography } from '../../../styles/typography.css';

export const selectButton = style({
    padding: '14px 20px', // 높이와 패딩 증가
    borderRadius: '14px', // 부드러운 모서리
    border: '1px solid #ccc', // 약간 테두리 추가
    backgroundColor: theme.colors.shadeLightest,
    color: theme.colors.textPrimary,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between', // 텍스트와 화살표 구분
    alignItems: 'center',
    fontSize: typography.fontSize.text,
    fontWeight: typography.fontWeight.semiBold,
    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
    transition: 'all 0.2s',

    ':hover': {
        backgroundColor: theme.colors.shadeLight,
        boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
        transform: 'translateY(-1px)',
    },

    ':active': {
        backgroundColor: theme.colors.shadeDark,
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
        transform: 'translateY(0)',
    },
});

export const optionsList = style({
    position: 'absolute',
    top: '100%', // select 바로 아래
    left: 0,
    right: 0,
    maxHeight: '220px', // 필요시 scroll
    overflowY: 'auto',
    borderRadius: '12px',
    backgroundColor: theme.colors.shadeLightest,
    boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
    zIndex: 1000,
    marginTop: '4px', // 버튼과 살짝 간격
});

export const optionItem = style({
    padding: '12px 16px',
    cursor: 'pointer',
    color: theme.colors.textPrimary,
    fontSize: typography.fontSize.text,
    transition: 'background-color 0.2s, color 0.2s',

    selectors: {
        '&:hover': {
            backgroundColor: theme.colors.shadeLight,
        },
        '&[data-selected="true"]': {
            backgroundColor: theme.colors.hightlight,
            color: theme.colors.shadeLightest,
            fontWeight: 'bold',
        },
    },
});

// export const selectButton = style({
//     padding: '10px 16px',
//     borderRadius: '12px',
//     border: 'none',
//     backgroundColor: theme.colors.shadeLightest,
//     color: theme.colors.textPrimary,
//     cursor: 'pointer',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     fontSize: typography.fontSize.text,
//     fontWeight: typography.fontWeight.semiBold,
//     boxShadow: '0 1px 3px rgba(0,0,0,0.1)', // 살짝 뜬 느낌
//     transition: 'background-color 0.2s, transform 0.1s, box-shadow 0.2s',

//     ':hover': {
//         backgroundColor: theme.colors.shadeLight,
//         boxShadow: '0 2px 6px rgba(0,0,0,0.15)', // 살짝 강조
//         transform: 'translateY(-1px)', // 클릭하고 싶은 느낌
//     },

//     ':active': {
//         backgroundColor: theme.colors.shadeDark,
//         boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//         transform: 'translateY(0)',
//     },
// });

// export const optionsList = style({
//     position: 'absolute',
//     top: '100%',
//     left: 0,
//     right: 0,
//     height: '100%',

//     overflowY: 'auto',
//     borderRadius: '8px',
//     backgroundColor: theme.colors.shadeLight,
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     zIndex: 1000,
// });

// export const optionItem = style({
//     padding: '8px 12px',
//     cursor: 'pointer',
//     color: theme.colors.textPrimary,
//     transition: 'background-color 0.2s',

//     selectors: {
//         '&:hover': {
//             backgroundColor: theme.colors.shadeLight,
//         },
//         '&[data-selected="true"]': {
//             backgroundColor: theme.colors.hightlight,
//             color: theme.colors.shadeLightest,
//             fontWeight: 'bold',
//         },
//     },
// });
