import { assignInlineVars } from '@vanilla-extract/dynamic';
import useCalendarContext from '../../contexts/CaneldarContext';
import { customThemeVars } from '../../styles/theme.css';
import { typographyTheme } from '../../styles/typography.css';
import type { CalendarOptional, CalendarRequired } from '../../types';
import { calendarRoot } from './Calendar.css';
import CalendarNav from './CalendarNav/CalendarNav';
import DateGrid from './DateGrid/DateGrid';
import DayOfWeek from './DayOfWeek/DayOfWeek';
import { theme as globalTheme } from '../../styles/theme.css';
import useThemeContext from '../../contexts/ThemeContext';

const CalendarContent = ({
    customPrevButton,
    customNextButton,
    customWeek,
    filterDate,
    minDate,
    maxDate,
    showToday,
    onChange,
    formatDate,
    startOfWeek,
    holidays,
}: CalendarOptional & Pick<CalendarRequired, 'onChange'>) => {
    const { customTheme } = useCalendarContext();
    const { themeClass } = useThemeContext();

    return (
        <div
            className={`${calendarRoot} ${themeClass} ${typographyTheme}`}
            style={assignInlineVars({
                [customThemeVars.background]: customTheme?.background ?? globalTheme.colors.shadeLightest,
                [customThemeVars.color]: customTheme?.color,
            })}
        >
            <CalendarNav
                customPrevButton={customPrevButton}
                customNextButton={customNextButton}
                formatDate={formatDate}
            />
            <DayOfWeek customWeek={customWeek} startOfWeek={startOfWeek} />

            <DateGrid
                filterDate={filterDate}
                minDate={minDate}
                maxDate={maxDate}
                showToday={showToday}
                onChange={onChange}
                startOfWeek={startOfWeek}
                holidays={holidays}
            />
        </div>
    );
};

export default CalendarContent;

/** Vanilla extract 는 빌드시에 전환되어서 런타임때 동적으로 뭐가 어려워 */
