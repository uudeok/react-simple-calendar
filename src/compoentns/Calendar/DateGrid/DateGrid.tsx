import { CALENDAR_TOTAL_CELLS } from '../../../constants';
import useCalendarContext from '../../../contexts/CaneldarContext';
import { useCalendar } from '../../../hooks/useCalendar';
import DateCell from '../DateCell/DateCell';
import { grid } from './style.css';

type DateGridProps = {
    filterDate?: (date: Date) => boolean;
    minDate?: Date;
    maxDate?: Date;
};

const DateGrid = (props: DateGridProps) => {
    const { filterDate, minDate, maxDate } = props;

    const { selectedDate } = useCalendarContext();

    const { generateDates } = useCalendar(selectedDate);

    const dates = generateDates(CALENDAR_TOTAL_CELLS);

    const isBeforeMinDate = (date: Date) => {
        if (!minDate) return false;
        return date < minDate;
    };

    const isAfterMaxDate = (date: Date) => {
        if (!maxDate) return false;
        return maxDate < date;
    };

    return (
        <div className={grid}>
            {dates.map((date, idx) => (
                <DateCell
                    key={idx}
                    date={date}
                    filterDate={filterDate}
                    isBeforeMinDate={isBeforeMinDate}
                    isAfterMaxDate={isAfterMaxDate}
                />
            ))}
        </div>
    );
};

export default DateGrid;
