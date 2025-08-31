import { lightTheme, darkTheme } from '../../styles/theme.css';
import { calendarRoot } from './Calendar.css';
import DateGrid from './DateGrid';
import DayOfWeek from './DayOfWeek';
import CalendarHeader from './Header';

type ThemeType = 'light' | 'dark';

interface CalendarProps {
    theme?: ThemeType;
}

export const Calendar: React.FC<CalendarProps> = ({ theme = 'light' }) => {
    const themeClass = theme === 'dark' ? darkTheme : lightTheme;

    return (
        <div className={`${calendarRoot} ${themeClass}`}>
            <CalendarHeader />
            <DayOfWeek />
            <DateGrid />
        </div>
    );
};
