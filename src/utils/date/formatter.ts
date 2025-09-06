import type { FormatDateType } from '../../types/date';
import { getMonth, getYear } from './getter';

export const getDisplayMonth = (date: Date): string => {
    const month = getMonth(date) + 1;
    return month.toString().padStart(2, '0');
};

export const getDisplayDate = (date: Date): string => {
    const newDate = new Date(date).getDate();
    return newDate.toString().padStart(2, '0');
};

export const formatDate = (date: Date, format: FormatDateType) => {
    const year = getYear(date);
    const month = getDisplayMonth(date);
    const day = getDisplayDate(date);

    return format.replace('YYYY', year.toString()).replace('MM', month).replace('DD', day);
};
