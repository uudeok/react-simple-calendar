import type { FormatType } from '../../types/date';
import { getMonth, getYear } from './getter';
import { monthNamesShort, monthNamesFull, FORMAT_DATE } from '../../constants';

export const getDisplayMonth = (date: Date): string => {
    const month = getMonth(date) + 1;
    return month.toString().padStart(2, '0');
};

export const getDisplayDate = (date: Date): string => {
    const newDate = new Date(date).getDate();
    return newDate.toString().padStart(2, '0');
};

export const formatSelectedDate = (date: Date, format: FormatType) => {
    const year = getYear(date);
    const month = getMonth(date);

    switch (format) {
        case FORMAT_DATE['yyyy/MM']:
            return `${year}/${(month + 1).toString().padStart(2, '0')}`;
        case FORMAT_DATE['yyyy.MM']:
            return `${year}.${(month + 1).toString().padStart(2, '0')}`;
        case FORMAT_DATE['MMMM yyyy']:
            return `${monthNamesFull[month]} ${year}`;
        case FORMAT_DATE['MMM yyyy']:
            return `${monthNamesShort[month]} ${year}`;
        default:
            return `${year}/${(month + 1).toString().padStart(2, '0')}`;
    }
};

export const formatDateToISO = (date: Date): string => {
    return date.toISOString().split('T')[0];
};
