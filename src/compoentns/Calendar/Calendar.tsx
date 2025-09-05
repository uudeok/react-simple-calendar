import { lightTheme, darkTheme } from '../../styles/theme.css';
import type { LocaleType, ThemeType } from '../../types';
import DateGrid from './DateGrid/DateGrid';
import DayOfWeek from './DayOfWeek/DayOfWeek';
import CalendarNav from './CalendarNav/CalendarNav';
import { calendarRoot } from './Calendar.css';
import { typographyTheme } from '../../styles/typography.css';
import { LOCALE, THEME } from '../../constants';
import CalendarProvider from '../../contexts/CalendarProvider';

interface CalendarProps {
    date: Date;
    onChange: (date: Date) => void;
    theme?: ThemeType;
    locale?: LocaleType;
    customPrevButton?: React.ReactNode;
    customNextButton?: React.ReactNode;
}

export const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
    const { date, onChange, theme = THEME.LIGHT, locale = LOCALE.ko, customPrevButton, customNextButton } = props;

    const themeClass = theme === THEME.DARK ? darkTheme : lightTheme;

    return (
        <CalendarProvider initialDate={date} onChange={onChange}>
            <div className={`${calendarRoot} ${themeClass} ${typographyTheme}`}>
                <CalendarNav customNextButton={customNextButton} customPrevButton={customPrevButton} />
                <DayOfWeek locale={locale} />

                <DateGrid />
            </div>
        </CalendarProvider>
    );
};
