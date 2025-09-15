import type { ReactNode } from 'react';

export type HolidayItem = {
    date: Date;
    name: ReactNode;
};

export type Holidays = {
    items: HolidayItem[];
    type?: 'bottom' | 'tooltip';
};
