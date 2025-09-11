import { useState, type ReactNode } from 'react';
import { CalendarContext } from './CaneldarContext';
import type { CustomTheme } from '../types';

type Props = {
    initialDate: Date;
    children: ReactNode;
    customTheme?: CustomTheme;
};

const CalendarProvider = (props: Props) => {
    const { initialDate, children, customTheme } = props;
    const [selectedDate, setSelectedDate] = useState<Date>(initialDate || new Date());

    return (
        <CalendarContext.Provider value={{ selectedDate, setSelectedDate, customTheme }}>
            {children}
        </CalendarContext.Provider>
    );
};

export default CalendarProvider;
