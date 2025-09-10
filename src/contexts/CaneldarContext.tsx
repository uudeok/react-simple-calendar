import { createContext, useContext } from 'react';
import type { CustomTheme } from '../types';

type CalendarContextType = {
    selectedDate: Date;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
    customTheme?: CustomTheme;
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

// import { createContext, useContext } from 'react';

// type CalendarContextType = {
//     selectedDate: Date;
//     setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
// };

// export const CalendarContext = createContext<CalendarContextType | null>(null);

// const useCalendarContext = () => {
//     const context = useContext(CalendarContext);

//     if (!context) {
//         throw new Error('useCalendarContext must be wrapped with CalendarProvider ');
//     }

//     return context;
// };

// export default useCalendarContext;
