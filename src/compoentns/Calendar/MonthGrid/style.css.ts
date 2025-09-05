import { style } from '@vanilla-extract/css';
import { theme } from '../../../styles/theme.css';

export const monthsGrid = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gap: '8px',
    flex: 1, // 남은 공간 모두 차지
});

export const monthItem = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '6px',
    cursor: 'pointer',
    color: theme.colors.textPrimary,
    border: `1px solid ${theme.colors.grayLight}`,
    transition: 'background-color 0.2s, color 0.2s',

    ':hover': {
        backgroundColor: theme.colors.shadeLight,
    },

    selectors: {
        '&[data-selected="true"]': {
            backgroundColor: theme.colors.hightlight,
            color: theme.colors.shadeLightest,
            fontWeight: 'bold',
        },
    },
});

// export const monthsGrid = style({
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '8px',
//     marginTop: '3px',

//     backgroundColor: theme.colors.shadeLightest,
//     height: '100%',
// });

// export const monthItem = style({
//     // padding: '1.3rem',
//     textAlign: 'center',

//     borderRadius: '6px',
//     cursor: 'pointer',
//     color: theme.colors.textPrimary,
//     border: `1px solid ${theme.colors.grayLight}`,
//     transition: 'background-color 0.2s, color 0.2s',

//     ':hover': {
//         backgroundColor: theme.colors.shadeLight,
//     },

//     selectors: {
//         '&[data-selected="true"]': {
//             backgroundColor: theme.colors.hightlight,
//             color: theme.colors.shadeLightest,
//             fontWeight: 'bold',
//         },
//     },
// });
