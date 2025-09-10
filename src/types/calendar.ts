import type { ValueOf } from '.';
import type { LOCALE, THEME } from '../constants';

export type LocaleType = ValueOf<typeof LOCALE>;

export type ThemeType = ValueOf<typeof THEME>;

export interface CalendarRequired {
    date: Date;
    onChange: (date: Date) => void;
}

export interface CalendarOptional {
    theme?: ThemeType;
    locale?: LocaleType;
    customPrevButton?: React.ReactNode;
    customNextButton?: React.ReactNode;
    customWeek?: string[];
    filterDate?: (date: Date) => boolean;
    minDate?: Date;
    maxDate?: Date;
    showToday?: boolean;
    customTheme?: CustomTheme;
}

export interface CustomTheme {
    background?: string;
    color?: string;
    hoverBg?: string;
    hoverColor?: string;
    selectedBg?: string;
    selectedColor?: string;
}

// export interface CustomTheme {
//     background?: CSSProperties['background'];
//     color?: CSSProperties['color'];
//     hoverBg?: CSSProperties['background'];
//     hoverColor?: CSSProperties['color'];
//     selectedBg?: CSSProperties['background'];
//     selectedColor?: CSSProperties['color'];
// }

export type CalendarProps = CalendarRequired & CalendarOptional;
