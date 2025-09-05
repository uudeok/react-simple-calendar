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
            <Calendar theme="dark" locale="en" date={date2} onChange={handleDate2} />
        </div>
    );
}

export default App;

/**
 * 1, 사용하는 쪽에서 너비를 조정할 수 있도록 함 -> 캘린더의 너비는 부모의 100% 이다.
 */
// <div style={{ display: 'flex', gap: '20px', width: '800px' }}>
