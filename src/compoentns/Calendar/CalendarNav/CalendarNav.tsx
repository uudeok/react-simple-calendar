import useCalendarContext from '../../../contexts/CaneldarContext';
import { getDisplayMonth, getYear, goToNextMonth, goToPrevMonth } from '../../../utils/date';

import NavButton from '../../common/Button/NavButton';
import type { CalendarOptional } from '../Calendar';
import { layout, monthLabel, navGroup } from './style.css';

type CalendarNavProps = Pick<CalendarOptional, 'customNextButton' | 'customPrevButton'>;

const CalendarNav = (props: CalendarNavProps) => {
    const { customNextButton, customPrevButton } = props;

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
            <div className={monthLabel}>
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
