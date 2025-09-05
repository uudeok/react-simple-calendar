import { getMonth } from './getter';

export const getDisplayMonth = (date: Date) => {
    const month = getMonth(date) + 1;
    return month.toString().padStart(2, '0');
};

export const getDisplayDate = (date: Date) => {
    const displayDate = new Date(date).getDate();
    return displayDate;
};
