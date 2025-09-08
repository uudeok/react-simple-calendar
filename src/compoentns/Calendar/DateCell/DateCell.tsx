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
};

const DateCell = (props: Props) => {
    const { date, filterDate, minDate, maxDate } = props;

    const { setSelectedDate, onChange, selectedDate } = useCalendarContext();

    const { isMaxDate, isMinDate } = useCalendar(date);

    const handleDateClick = () => {
        setSelectedDate(date);
        onChange(date);
    };

    const isSelected = date.toDateString() === selectedDate.toDateString();
    const disabledByFilter = filterDate ? filterDate(date) : false;
    const disabled = disabledByFilter || isMaxDate(maxDate) || isMinDate(minDate);

    return (
        <button
            onClick={handleDateClick}
            className={datecell({ selected: isSelected, disabled: disabled })}
            disabled={disabled}
            aria-label={date.toDateString()}
        >
            {getDate(date)}
        </button>
    );
};

export default memo(DateCell);
