import { useState } from 'react';
import { Calendar } from './compoentns/Calendar/Calendar';

function App() {
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());

    const handleDate1 = (date: Date) => {
        setDate1(date);
        console.log('선택한 날짜 : ', date);
    };

    const handleDate2 = (date: Date) => {
        setDate2(date);
        console.log('선택한 날짜 : ', date);
    };

    return (
        <div style={{ display: 'flex', gap: '50px', width: '860px', margin: 'auto' }}>
            <Calendar date={date1} onChange={handleDate1} />
            <Calendar
                theme="dark"
                locale="ko"
                date={date2}
                onChange={handleDate2}
                customWeek={['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', '2']}
            />
        </div>
    );
}

export default App;
