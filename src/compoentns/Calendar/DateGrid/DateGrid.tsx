import { CALENDAR_TOTAL_CELLS } from '../../../constants';
import useCalendarContext from '../../../contexts/CaneldarContext';
import { useCalendar } from '../../../hooks/useCalendar';
import type { WeekStart } from '../../../types';
import type { Holidays } from '../../../types/holiday';
import { DateRangeValidator } from '../../../validators/DateRangeValidator';
import DateCell from '../DateCell/DateCell';
import { grid } from './style.css';

type DateGridProps = {
    filterDate?: (date: Date) => boolean;
    minDate?: Date;
    maxDate?: Date;
    showToday?: boolean;
    onChange: (date: Date) => void;
    startOfWeek?: WeekStart;
    holidays?: Holidays;
};

const DateGrid = (props: DateGridProps) => {
    const { filterDate, minDate, maxDate, showToday, onChange, startOfWeek, holidays } = props;

    const { selectedDate } = useCalendarContext();

    const { generateDates } = useCalendar(selectedDate);

    const dates = generateDates(CALENDAR_TOTAL_CELLS, startOfWeek);

    const { isError, errorMessage } = DateRangeValidator.validate({ minDate, maxDate });

    if (isError) {
        throw new Error(errorMessage);
    }

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
                    holidays={holidays}
                    onChange={onChange}
                />
            ))}
        </div>
    );
};

export default DateGrid;
