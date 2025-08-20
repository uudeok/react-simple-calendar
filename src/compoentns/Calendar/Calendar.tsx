import { lightTheme, darkTheme } from '../../styles/theme.css';
import { calendarRoot } from './Calendar.css';

type ThemeType = 'light' | 'dark';

interface CalendarProps {
    theme?: ThemeType;
}

export const Calendar: React.FC<CalendarProps> = ({ theme = 'light' }) => {
    const themeClass = theme === 'dark' ? darkTheme : lightTheme;

    return (
        <div className={`${calendarRoot} ${themeClass}`}>
            <div>월요일</div>
            <div>화요일</div>
            {/* ... 달력 내용 */}
        </div>
    );
};
