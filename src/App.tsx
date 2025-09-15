import { useState } from 'react';
import Calendar from './components/Calendar/Calendar';
import { CalendarProps } from './types';

const App: React.FC<CalendarProps> = () => {
    const [date, setDate] = useState(new Date());

    const handleDate = (date: Date) => {
        setDate(date);
        console.log('선택한 날짜 : ', date);
    };

    const isWeekday = (date: Date) => {
        const day = date.getDay();
        return day === 0 || day === 6;
    };

    return (
        <div style={{ display: 'flex', gap: '50px', width: '400px', margin: 'auto' }}>
            <Calendar
                date={date}
                onChange={handleDate}
                minDate={new Date(2025, 8, 1)}
                showToday
                filterDate={isWeekday}
            />
        </div>
    );
};

export default App;
