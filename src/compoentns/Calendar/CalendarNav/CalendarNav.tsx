import useCalendarContext from '../../../contexts/CaneldarContext';
import { getDisplayMonth, getYear, goToNextMonth, goToPrevMonth } from '../../../utils/date';

import NavButton from '../../common/Button/NavButton';
import { layout, monthLabel, navGroup } from './style.css';

type Props = {
    customPrevButton?: React.ReactNode;
    customNextButton?: React.ReactNode;
    showMonthAndYear?: boolean;
};

const CalendarNav = (props: Props) => {
    const { customNextButton, customPrevButton, showMonthAndYear = false } = props;

    const { selectedDate, setSelectedDate } = useCalendarContext();

    const year = getYear(selectedDate);
    const month = getDisplayMonth(selectedDate);

    const handlePrevMonth = () => {
        const prevMonth = goToPrevMonth(selectedDate);
        setSelectedDate(prevMonth);
    };

    const handleNextMonth = () => {
        const nextMonth = goToNextMonth(selectedDate);
        setSelectedDate(nextMonth);
    };

    return (
        <div className={layout}>
            <div className={monthLabel({ clickable: showMonthAndYear })}>
                <span>
                    {year}.{month}
                </span>
            </div>

            <div className={navGroup}>
                {customPrevButton ? customPrevButton : <NavButton direction="prev" onClick={handlePrevMonth} />}
                {customNextButton ? customNextButton : <NavButton onClick={handleNextMonth} />}
            </div>
        </div>
    );
};

export default CalendarNav;
