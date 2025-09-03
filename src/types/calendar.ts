import type { ValueOf } from '.';
import type { LOCALE, THEME } from '../constants';

export type LocaleType = ValueOf<typeof LOCALE>;

export type ThemeType = ValueOf<typeof THEME>;
