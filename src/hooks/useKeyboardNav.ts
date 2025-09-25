import { useEffect } from 'react';
import useCalendarContext from '../contexts/CaneldarContext';

import { goToNextDay, goToNextMonth, goToNextWeek, goToPrevDay, goToPrevMonth, goToPrevWeek } from '../utils/date';
import { KEY_CODES } from '../constants';

export const useKeyboardNav = (enableKeyboardNavigation: boolean) => {
    const { selectedDate, setSelectedDate } = useCalendarContext();

    useEffect(() => {
        if (!enableKeyboardNavigation) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case KEY_CODES.LEFT:
                    setSelectedDate(goToPrevDay(selectedDate));
                    break;
                case KEY_CODES.RIGHT:
                    setSelectedDate(goToNextDay(selectedDate));
                    break;
                case KEY_CODES.UP:
                    e.preventDefault();
                    setSelectedDate(goToPrevWeek(selectedDate));
                    break;
                case KEY_CODES.DOWN:
                    e.preventDefault();
                    setSelectedDate(goToNextWeek(selectedDate));
                    break;
                case KEY_CODES.PAGE_UP:
                    e.preventDefault();
                    setSelectedDate(goToPrevMonth(selectedDate));
                    break;
                case KEY_CODES.PAGE_DOWN:
                    e.preventDefault();
                    setSelectedDate(goToNextMonth(selectedDate));
                    break;
                case KEY_CODES.ENTER:
                case KEY_CODES.SPACE:
                    break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [enableKeyboardNavigation, selectedDate, setSelectedDate]);
};
