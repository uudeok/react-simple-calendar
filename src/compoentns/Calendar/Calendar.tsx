import { lightTheme, darkTheme } from '../../styles/theme.css';
import type { LocaleType } from '../../types';
import DateGrid from './DateGrid/DateGrid';
import DayOfWeek from './DayOfWeek/DayOfWeek';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import { calendarRoot } from './Calendar.css';

type ThemeType = 'light' | 'dark';

interface CalendarProps {
    theme?: ThemeType;
    local?: LocaleType;
}

export const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
    const { theme = 'light', local = 'ko' } = props;

    const themeClass = theme === 'dark' ? darkTheme : lightTheme;

    return (
        <div className={`${calendarRoot} ${themeClass}`}>
            <CalendarHeader />
            <DayOfWeek local={local} />
            <DateGrid />
        </div>
    );
};
