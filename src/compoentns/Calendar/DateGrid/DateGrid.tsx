import { CALENDAR_TOTAL_CELLS } from '../../../constants';
import useCalendarContext from '../../../contexts/CaneldarContext';
import { useCalendar } from '../../../hooks/useCalendar';
import DateCell from '../DateCell/DateCell';
import { grid } from './style.css';

type DateGridProps = {
    filterDate?: (date: Date) => boolean;
    minDate?: Date;
    maxDate?: Date;
    showToday?: boolean;
};

const DateGrid = (props: DateGridProps) => {
    const { filterDate, minDate, maxDate, showToday } = props;

    const { selectedDate } = useCalendarContext();

    const { generateDates } = useCalendar(selectedDate);

    const dates = generateDates(CALENDAR_TOTAL_CELLS);

    return (
        <div className={grid}>
            {dates.map((date, idx) => (
                <DateCell
                    key={idx}
                    date={date}
                    filterDate={filterDate}
                    minDate={minDate}
                    maxDate={maxDate}
                    showToday={showToday}
                />
            ))}
        </div>
    );
};

export default DateGrid;
