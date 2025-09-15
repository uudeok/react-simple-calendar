import type { FormatType, ValueOf } from '.';
import type { LOCALE, THEME } from '../constants';
import type { Holidays } from './holiday';

export type LocaleType = ValueOf<typeof LOCALE>;

export type ThemeType = ValueOf<typeof THEME>;

export type WeekStart = 0 | 1 | 2 | 3 | 4 | 5 | 6;

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
    startOfWeek?: WeekStart;
    holidays?: Holidays;
}

export interface CustomTheme {
    background?: string;
    color?: string;
    highlightBg?: string;
    highlightColor?: string;
}

export type CalendarProps = CalendarRequired & CalendarOptional;
