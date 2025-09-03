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
