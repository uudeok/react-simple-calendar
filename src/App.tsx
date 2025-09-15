import { useState } from 'react';
import { Calendar } from './components/Calendar/Calendar';

function App() {
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date(2025, 8, 16));

    const handleDate1 = (date: Date) => {
        setDate1(date);
        console.log('선택한 날짜 : ', date);
    };

    const handleDate2 = (date: Date) => {
        setDate2(date);
        console.log('선택한 날짜 : ', date);
    };

    const isWeekday = (date: Date) => {
        const day = date.getDay();
        return day === 0 || day === 6;
    };

    return (
        <div style={{ display: 'flex', gap: '50px', width: '820px', margin: 'auto' }}>
            <Calendar
                date={date1}
                onChange={handleDate1}
                minDate={new Date(2025, 8, 1)}
                showToday
                customTheme={{
                    highlightBg: 'skyblue',
                }}
                filterDate={isWeekday}
            />

            <Calendar
                date={date2}
                onChange={handleDate2}
                theme="dark"
                locale="en"
                customWeek={['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT']}
                filterDate={isWeekday}
                showToday
                formatDate="MMMM yyyy"
                startOfWeek={1}
            />
        </div>
    );
}

export default App;
