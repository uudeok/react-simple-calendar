import { useState } from 'react';

import { CalendarProps } from './types';
import Calendar from './components/Calendar/Calendar';

const App: React.FC<CalendarProps> = () => {
    const [date, setDate] = useState(new Date());

    const handleDate = (date: Date) => {
        setDate(date);
    };

    return (
        <div style={{ display: 'flex', gap: '50px', width: '400px', margin: 'auto' }}>
            <Calendar date={date} onChange={handleDate} />
        </div>
    );
};

export default App;
