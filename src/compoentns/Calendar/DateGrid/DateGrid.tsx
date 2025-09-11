import { CALENDAR_TOTAL_CELLS } from '../../../constants';
import useCalendarContext from '../../../contexts/CaneldarContext';
import { useCalendar } from '../../../hooks/useCalendar';
import type { WeekStart } from '../../../types';
import DateCell from '../DateCell/DateCell';
import { grid } from './style.css';

type DateGridProps = {
    filterDate?: (date: Date) => boolean;
    minDate?: Date;
    maxDate?: Date;
    showToday?: boolean;
    onChange: (date: Date) => void;
    startOfWeek?: WeekStart;
};

const DateGrid = (props: DateGridProps) => {
    const { filterDate, minDate, maxDate, showToday, onChange, startOfWeek } = props;

    const { selectedDate } = useCalendarContext();

    const { generateDates } = useCalendar(selectedDate);

    const dates = generateDates(CALENDAR_TOTAL_CELLS, startOfWeek);

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
                    onChange={onChange}
                />
            ))}
        </div>
    );
};

export default DateGrid;
