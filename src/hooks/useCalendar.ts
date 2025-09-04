import useCalendarContext from '../contexts/CaneldarContext';

export const DISPLAY_DYAS = 42;

export const useCalendar = () => {
    const { selectedDate } = useCalendarContext();
};

// import { useState } from 'react';

// export const DISPLAY_DYAS = 42;

// export const useCalendar = (initialDate?: Date) => {
//     const [currentDate, setCurrentDate] = useState<Date>(initialDate || new Date());

//     const goToPrevMonth = () => {
//         const prev = new Date(currentDate);
//         prev.setMonth(prev.getMonth() - 1);
//         setCurrentDate(prev);
//     };

//     const goToNextMonth = () => {
//         const next = new Date(currentDate);
//         next.setMonth(next.getMonth() + 1);
//         setCurrentDate(next);
//     };

//     const renderDate = () => {
//         const year = currentDate.getFullYear();
//         const month = currentDate.getMonth();

//         const firstDayOfMonth = new Date(year, month, 1);
//         const startDay = firstDayOfMonth.getDay();
//         const startDate = new Date(year, month, 1 - startDay);

//         const days: Date[] = Array.from({ length: DISPLAY_DYAS }, (_, i) => {
//             const start = new Date(startDate);
//             start.setDate(startDate.getDate() + i);
//             return start;
//         });

//         console.log(days);
//     };

//     return { currentDate, goToPrevMonth, goToNextMonth, renderDate };
// };
