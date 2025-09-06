import useCalendarContext from '../../../contexts/CaneldarContext';
import { getDate } from '../../../utils/date';
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
            {getDate(date)}
        </button>
    );
};
