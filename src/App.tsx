import { useState } from 'react';
import { Calendar } from './compoentns/Calendar/Calendar';

function App() {
    const [date, setDate] = useState(new Date());

    const handleDate = (date: Date) => {
        setDate(date);
        console.log('선택한 날짜 : ', date);
    };

    return (
        <div style={{ display: 'flex', gap: '20px', width: '820px' }}>
            <Calendar date={date} onChange={handleDate} />
            <Calendar theme="dark" locale="en" date={date} onChange={handleDate} />
        </div>
    );
}

export default App;

/**
 * 1, 사용하는 쪽에서 너비를 조정할 수 있도록 함 -> 캘린더의 너비는 부모의 100% 이다.
 */
