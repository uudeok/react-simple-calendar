import { createContext, useContext } from 'react';

type CalendarContextType = {
    selectedDate: Date;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
    onChange: (Date: Date) => void;
};

export const CalendarContext = createContext<CalendarContextType | null>(null);

const useCalendarContext = () => {
    const context = useContext(CalendarContext);

    if (!context) {
        throw new Error('useCalendarContext must be wrapped with CalendarProvider ');
    }

    return context;
};

export default useCalendarContext;
