import { assignInlineVars } from '@vanilla-extract/dynamic';
import useCalendarContext from '../../../contexts/CaneldarContext';
import { useCalendar } from '../../../hooks/useCalendar';
import type { CalendarOptional } from '../../../types';
import NavButton from '../../common/Button/NavButton';
import { layout, monthLabel, navGroup } from './style.css';
import { customThemeVars, theme } from '../../../styles/theme.css';
import { FORMAT_DATE } from '../../../constants';
import { format } from 'date-fns';
import { validateOrFallback } from '../../../utils/validator/validatorHelper';
import { FormatDateValidator } from '../../../validators/FormatDateValidator';

type CalendarNavProps = Pick<CalendarOptional, 'customNextButton' | 'customPrevButton' | 'formatDate'>;

const CalendarNav = ({ customNextButton, customPrevButton, formatDate }: CalendarNavProps) => {
    const { selectedDate, setSelectedDate, customTheme } = useCalendarContext();

    const { goToNextMonth, goToPrevMonth } = useCalendar(selectedDate);

    const safeFormat = validateOrFallback(formatDate, FormatDateValidator, FORMAT_DATE['yyyy.MM']);

    const displayLabel = format(selectedDate, safeFormat);

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
                <span>{displayLabel}</span>
            </div>

            <div className={navGroup}>
                {customPrevButton ? customPrevButton : <NavButton direction="prev" onClick={handlePrevMonth} />}
                {customNextButton ? customNextButton : <NavButton onClick={handleNextMonth} />}
            </div>
        </div>
    );
};

export default CalendarNav;
