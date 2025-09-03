import { DateCell } from '../DateCell/DateCell';
import { grid } from './style.css';

const TOTAL_DATE = 42;

const fakeDate = Array.from({ length: TOTAL_DATE }, (_, i) => i + 1);

const DateGrid = () => {
    return (
        <div className={grid}>
            {fakeDate.map((date) => (
                <DateCell key={date} date={date} />
            ))}
        </div>
    );
};

export default DateGrid;
