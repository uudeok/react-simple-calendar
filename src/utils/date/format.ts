import { getMonth } from './getter';

export const getDisplayMonth = (date: Date) => {
    const month = getMonth(date);
    return month.toString().padStart(2, '0');
};
