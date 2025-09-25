import { assignInlineVars } from '@vanilla-extract/dynamic';
import useCalendarContext from '../../../contexts/CaneldarContext';
import type { CalendarOptional } from '../../../types';
import NavButton from '../../common/Button/NavButton';
import { layout, monthLabel, navGroup } from './CalendarStyle.css';
import { customThemeVars, theme } from '../../../styles/theme.css';
import { FORMAT_DATE } from '../../../constants';
import { validateWithFallback } from '../../../utils/validator/validatorHelper';
import { FormatDateValidator } from '../../../validators/FormatDateValidator';
import { formatSelectedDate, goToNextMonth, goToPrevMonth } from '../../../utils/date';
import useLocaleContext from '../../../contexts/LocaleContext';

type CalendarNavProps = Pick<CalendarOptional, 'customNextButton' | 'customPrevButton' | 'formatDate'>;

const CalendarNav = ({ customNextButton, customPrevButton, formatDate }: CalendarNavProps) => {
    const { selectedDate, setSelectedDate, customTheme } = useCalendarContext();

    const locale = useLocaleContext();

    const safeFormat = validateWithFallback(formatDate, FormatDateValidator, FORMAT_DATE['yyyy.MM']);
    const displayLabel = formatSelectedDate(selectedDate, safeFormat);

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
            <div
                className={monthLabel}
                style={assignInlineVars({
                    [customThemeVars.color]: customTheme?.color ?? theme.colors.textPrimary,
                })}
                aria-label={new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(selectedDate)}
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
