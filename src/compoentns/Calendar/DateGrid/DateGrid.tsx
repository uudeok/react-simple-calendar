import { CALENDAR_TOTAL_CELLS } from '../../../constants';
import useCalendarContext from '../../../contexts/CaneldarContext';
import { generateDates } from '../../../utils/date';
import { DateCell } from '../DateCell/DateCell';
import { grid } from './style.css';

const DateGrid = () => {
    const { selectedDate } = useCalendarContext();

    const dates = generateDates(selectedDate, CALENDAR_TOTAL_CELLS);

    return (
        <div className={grid}>
            {dates.map((date, idx) => (
                <DateCell key={idx} date={date} />
            ))}
        </div>
    );
};

export default DateGrid;
