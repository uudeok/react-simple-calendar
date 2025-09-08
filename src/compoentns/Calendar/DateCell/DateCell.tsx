import { memo } from 'react';
import useCalendarContext from '../../../contexts/CaneldarContext';
import { getDate } from '../../../utils/date';
import { datecell } from './style.css';
import { useCalendar } from '../../../hooks/useCalendar';

type Props = {
    date: Date;
    filterDate?: (date: Date) => boolean;
    minDate?: Date;
    maxDate?: Date;
    showToday?: boolean;
};

const DateCell = (props: Props) => {
    const { date, filterDate, minDate, maxDate, showToday } = props;

    const { setSelectedDate, onChange, selectedDate } = useCalendarContext();

    const { isMaxDate, isMinDate, isToday } = useCalendar(date);

    const handleDateClick = () => {
        setSelectedDate(date);
        onChange(date);
    };

    const isSelected = date.toDateString() === selectedDate.toDateString();
    const disabledByFilter = filterDate ? filterDate(date) : false;
    const disabled = disabledByFilter || isMaxDate(maxDate) || isMinDate(minDate);
    const addTodayStyles = showToday ? isToday() : false;

    return (
        <button
            onClick={handleDateClick}
            className={datecell({ selected: isSelected, disabled: disabled, isToday: addTodayStyles })}
            disabled={disabled}
            aria-label={date.toDateString()}
        >
            {getDate(date)}
        </button>
    );
};

export default memo(DateCell);
