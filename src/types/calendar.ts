import type { FormatType, ValueOf } from '.';
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
    formatDate?: FormatType;
}

export interface CustomTheme {
    background?: string;
    color?: string;
    highlightBg?: string;
    highlightColor?: string;
}

export type CalendarProps = CalendarRequired & CalendarOptional;
