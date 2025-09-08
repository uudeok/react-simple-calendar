import useCalendarContext from '../../../contexts/CaneldarContext';
import { getDate } from '../../../utils/date';
import { datecell } from './style.css';

type Props = {
    date: Date;
    filterDate?: (date: Date) => boolean;
};

const DateCell = (props: Props) => {
    const { date, filterDate } = props;

    const { setSelectedDate, onChange, selectedDate } = useCalendarContext();

    const handleDateClick = () => {
        setSelectedDate(date);
        onChange(date);
    };

    const isSelected = date.toDateString() === selectedDate.toDateString();

    const disabledDate = filterDate ? filterDate(date) : false;

    return (
        <button
            onClick={handleDateClick}
            className={datecell({ selected: isSelected, disabled: disabledDate })}
            disabled={disabledDate}
            aria-label={date.toDateString()}
        >
            {getDate(date)}
        </button>
    );
};

export default DateCell;
