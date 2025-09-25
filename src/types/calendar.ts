import type { FormatType, ValueOf } from '.';
import type { LOCALE, THEME, WEEK_START } from '../constants';
import type { Holidays } from './holiday';

export type LocaleType = ValueOf<typeof LOCALE>;

export type ThemeType = ValueOf<typeof THEME>;

export type WeekStart = ValueOf<typeof WEEK_START>;

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
    keyboardNavigation?: boolean;
}

export interface CustomTheme {
    background?: string;
    color?: string;
    highlightBg?: string;
    highlightColor?: string;
}

export type CalendarProps = CalendarRequired & CalendarOptional;
