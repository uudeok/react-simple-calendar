import { assignInlineVars } from '@vanilla-extract/dynamic';
import useCalendarContext from '../../../contexts/CaneldarContext';
import { useCalendar } from '../../../hooks/useCalendar';
import type { CalendarOptional } from '../../../types';
import { getDisplayMonth, getYear } from '../../../utils/date';

import NavButton from '../../common/Button/NavButton';
import { layout, monthLabel, navGroup } from './style.css';
import { customThemeVars, theme } from '../../../styles/theme.css';

type CalendarNavProps = Pick<CalendarOptional, 'customNextButton' | 'customPrevButton'>;

const CalendarNav = (props: CalendarNavProps) => {
    const { customNextButton, customPrevButton } = props;

    const { selectedDate, setSelectedDate, customTheme } = useCalendarContext();

    const { goToNextMonth, goToPrevMonth } = useCalendar(selectedDate);

    const year = getYear(selectedDate);
    const month = getDisplayMonth(selectedDate);

    const handlePrevMonth = () => {
        const prevMonth = goToPrevMonth();
        setSelectedDate(prevMonth);
    };

    const handleNextMonth = () => {
        const nextMonth = goToNextMonth();
        setSelectedDate(nextMonth);
    };

    return (
        <div className={layout}>
            <div
                className={monthLabel}
                style={assignInlineVars({
                    [customThemeVars.color]: customTheme?.color ?? theme.colors.textPrimary,
                })}
            >
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
