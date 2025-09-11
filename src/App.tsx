import { useState } from 'react';
import { Calendar } from './compoentns/Calendar/Calendar';

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
        <div style={{ display: 'flex', gap: '50px', width: '800px', margin: 'auto' }}>
            <Calendar
                date={date1}
                onChange={handleDate1}
                minDate={new Date(2025, 8, 1)}
                showToday
                customTheme={{
                    highlightBg: 'skyblue',
                }}
                startOfWeek={3}
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

/**

 * 
 *      highlight={[
        { date: "2023-08-15", name : "India's Independence Day" },
        { date: "2023-12-31", name: "New Year's Eve" },
        { date: "2023-12-25", name: "Christmas" },
        { date: "2024-01-01", name: "New Year's Day" },
        { date: "2023-11-23", name: "Thanksgiving Day" },
        { date: "2023-12-25", name: "Fake holiday" },
      ]}

      const dayPipe = pipe(
        addIsToday, // 오늘 날짜 여부 추가
        addIsWeekend, // 주말 여부 추가
        addIsSelected, // 선택된 날짜 여부 추가
        addIsHoliday, // 공휴일 여부 추가
        foramtDate // YYYY-MM-DD 와 같이 날짜형식 바꾸기
     )
 */

//      import { useState } from 'react';
// import { Calendar } from './compoentns/Calendar/Calendar';
// import { result5 } from './compoentns/Test';

// function App() {
//     const [date1, setDate1] = useState(new Date());
//     const [date2, setDate2] = useState(new Date(2025, 8, 16));

//     const handleDate1 = (date: Date) => {
//         setDate1(date);
//         console.log('선택한 날짜 : ', date);
//     };

//     const handleDate2 = (date: Date) => {
//         setDate2(date);
//         console.log('선택한 날짜 : ', date);
//     };

//     const isWeekday = (date: Date) => {
//         const day = date.getDay();
//         return day === 0 || day === 6;
//     };

//     console.log(result5);

//     return (
//         <div style={{ display: 'flex', gap: '50px', width: '860px', margin: 'auto' }}>
//             <Calendar date={date1} onChange={handleDate1} minDate={new Date(2025, 8, 1)} maxDate={new Date()} />
//             <Calendar
//                 date={date2}
//                 onChange={handleDate2}
//                 theme="dark"
//                 locale="en"
//                 customWeek={['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT']}
//                 filterDate={isWeekday}
//             />
//         </div>
//     );
// }

// export default App;
