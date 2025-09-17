import { useState } from 'react';

import { CalendarProps } from './types';
import Calendar from './components/Calendar/Calendar';

const App: React.FC<CalendarProps> = () => {
    const [date, setDate] = useState(new Date());
    const [date2, setDate2] = useState(new Date());

    const handleDate = (date: Date) => {
        setDate(date);
    };

    const handleDate2 = (date: Date) => {
        setDate2(date);
    };

    const isWeekDay = (date: Date) => {
        const isWeekend = date.getDate() === 1 || date.getDate() === 0;

        return isWeekend;
    };

    return (
        <>
            <h2
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    margin: '50px auto',
                    fontSize: '2.2rem',
                    fontWeight: '500',
                    color: '#333',
                    lineHeight: '1.3',
                }}
            >
                🗓️ Lightweight <strong style={{ color: '#0070f3' }}>React Mini Datepicker Calendar</strong>
            </h2>

            <div style={{ display: 'flex', gap: '50px', width: '820px', margin: '50px auto' }}>
                <Calendar date={date} onChange={handleDate} filterDate={isWeekDay} />

                <Calendar
                    date={date2}
                    onChange={handleDate2}
                    theme="dark"
                    locale="en"
                    startOfWeek={1}
                    formatDate="MMMM yyyy"
                />
            </div>
        </>
    );
};

export default App;
