import { THEME } from '../../constants';
import { darkTheme, lightTheme } from '../../styles/theme.css';
import { typographyTheme } from '../../styles/typography.css';
import type { CalendarOptional } from './Calendar';
import { calendarRoot } from './Calendar.css';
import CalendarNav from './CalendarNav/CalendarNav';
import DateGrid from './DateGrid/DateGrid';
import DayOfWeek from './DayOfWeek/DayOfWeek';

const CalendarContent = ({ theme, locale, customPrevButton, customNextButton }: CalendarOptional) => {
    const themeClass = theme === THEME.DARK ? darkTheme : lightTheme;

    return (
        <div className={`${calendarRoot} ${themeClass} ${typographyTheme}`}>
            <CalendarNav customPrevButton={customPrevButton} customNextButton={customNextButton} />
            <DayOfWeek locale={locale} />
            <DateGrid />
        </div>
    );
};

export default CalendarContent;
