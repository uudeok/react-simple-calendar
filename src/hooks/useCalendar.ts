import type { WeekStart } from '../types';
import { getMonth, getYear } from '../utils/date';

const today = new Date();

export const useCalendar = (date: Date) => {
    const goToPrevMonth = () => {
        const prev = new Date(date);
        prev.setMonth(prev.getMonth() - 1);
        return prev;
    };

    const goToNextMonth = () => {
        const next = new Date(date);
        next.setMonth(next.getMonth() + 1);
        return next;
    };

    const generateDates = (totalCells: number, startOfWeek: WeekStart = 0) => {
        const year = getYear(date);
        const month = getMonth(date);

        const firstDateOfMonth = new Date(year, month, 1); // 현재 월의 1일
        const firstWeekdayOfMonth = firstDateOfMonth.getDay(); // 현재 월의 1일 요일

        const offset = (firstWeekdayOfMonth - startOfWeek + 7) % 7;
        const startDate = new Date(year, month, 1 - offset);

        const dates: Date[] = Array.from({ length: totalCells }, (_, i) => {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            return date;
        });

        return dates;
    };

    const isMinDate = (minDate?: Date) => {
        return minDate ? date < minDate : false;
    };

    const isMaxDate = (maxDate?: Date) => {
        return maxDate ? date > maxDate : false;
    };

    const isToday = () => {
        const matchMonth = date.getMonth() !== today.getMonth();
        const matchYear = date.getFullYear() !== today.getFullYear();

        if (matchMonth || matchYear) return false;

        const matchToday = date.getDate() === today.getDate();

        return matchToday;
    };

    return { goToPrevMonth, goToNextMonth, generateDates, isMaxDate, isMinDate, isToday };
};

//    const generateDates = (totalCells: number) => {
//         const year = getYear(date);
//         const month = getMonth(date);

//         const firstDateOfMonth = new Date(year, month, 1); // 현재 월의 1일
//         const firstWeekdayOfMonth = firstDateOfMonth.getDay(); // 현재 월의 1일 요일

//         const startDate = new Date(year, month, 1 - firstWeekdayOfMonth);

//         const dates: Date[] = Array.from({ length: totalCells }, (_, i) => {
//             const start = new Date(startDate);
//             start.setDate(startDate.getDate() + i);
//             return start;
//         });

//         return dates;
//     };
