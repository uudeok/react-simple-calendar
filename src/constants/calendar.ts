import type { LocaleType } from '../types';

export const LOCALE = {
    ko: 'ko',
    en: 'en',
} as const;

export const WEEK: Record<LocaleType, string[]> = {
    ko: ['일', '월', '화', '수', '목', '금', '토'],
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

export const THEME = {
    LIGHT: 'light',
    DARK: 'dark',
} as const;

export const WEEK_START = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
} as const;

export const CALENDAR_TOTAL_CELLS = 42;
