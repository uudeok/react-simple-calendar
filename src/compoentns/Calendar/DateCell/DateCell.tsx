import useCalendarContext from '../../../contexts/CaneldarContext';
import { getDisplayDate } from '../../../utils/date';
import { datecell } from './style.css';

type Props = {
    date: Date;
};

export const DateCell = (props: Props) => {
    const { date } = props;

    const { selectedDate, setSelectedDate } = useCalendarContext();

    const isSelected = selectedDate.toDateString() === date.toDateString();

    return (
        <button onClick={() => setSelectedDate(date)} className={datecell({ selected: isSelected })}>
            {getDisplayDate(date)}
        </button>
    );
};
