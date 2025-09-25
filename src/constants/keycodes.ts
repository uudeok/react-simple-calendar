import { ValueOf } from '../types';

export const KEY_CODES = {
    LEFT: 'ArrowLeft',
    RIGHT: 'ArrowRight',
    UP: 'ArrowUp',
    DOWN: 'ArrowDown',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown',
    ENTER: 'Enter',
    SPACE: ' ',
} as const;

export type KeyCode = ValueOf<typeof KEY_CODES>;
