import { memo } from 'react';
import useCalendarContext from '../../../contexts/CaneldarContext';
import { getDate } from '../../../utils/date';
import { datecell } from './style.css';

type Props = {
    date: Date;
    filterDate?: (date: Date) => boolean;
    isBeforeMinDate: (date: Date) => boolean;
    isAfterMaxDate: (date: Date) => boolean;
};

const DateCell = (props: Props) => {
    const { date, filterDate, isBeforeMinDate, isAfterMaxDate } = props;

    const { setSelectedDate, onChange, selectedDate } = useCalendarContext();

    const handleDateClick = () => {
        setSelectedDate(date);
        onChange(date);
    };

    const isSelected = date.toDateString() === selectedDate.toDateString();
    const disabledByFilter = filterDate ? filterDate(date) : false;
    const disabled = disabledByFilter || isBeforeMinDate(date) || isAfterMaxDate(date);

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
