import { useState, type ReactNode } from 'react';
import { CalendarContext } from './CaneldarContext';

type Props = {
    initialDate: Date;
    onChange: (date: Date) => void;
    children: ReactNode;
};

const CalendarProvider = (props: Props) => {
    const { initialDate, children, onChange } = props;
    const [selectedDate, setSelectedDate] = useState<Date>(initialDate || new Date());

    return (
        <CalendarContext.Provider value={{ selectedDate, setSelectedDate, onChange }}>
            {children}
        </CalendarContext.Provider>
    );
};

export default CalendarProvider;
