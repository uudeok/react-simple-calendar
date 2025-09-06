import { getMonth, getYear } from './getter';

export const goToNextMonth = (date: Date): Date => {
    const next = new Date(date);
    next.setMonth(next.getMonth() + 1);
    return next;
};

export const goToPrevMonth = (date: Date): Date => {
    const prev = new Date(date);
    prev.setMonth(prev.getMonth() - 1);
    return prev;
};

export const generateDates = (date: Date, totalCells: number) => {
    const year = getYear(date);
    const month = getMonth(date);

    const firstDateOfMonth = new Date(year, month, 1); // 현재 월의 1일
    const firstWeekdayOfMonth = firstDateOfMonth.getDay(); // 현재 월의 1일 요일

    const startDate = new Date(year, month, 1 - firstWeekdayOfMonth);

    const dates: Date[] = Array.from({ length: totalCells }, (_, i) => {
        const start = new Date(startDate);
        start.setDate(startDate.getDate() + i);
        return start;
    });

    return dates;
};
