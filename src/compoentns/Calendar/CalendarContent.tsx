import { LOCALE, THEME } from '../../constants';
import { darkTheme, lightTheme } from '../../styles/theme.css';
import { typographyTheme } from '../../styles/typography.css';
import type { LocaleType, ThemeType } from '../../types';
import { calendarRoot } from './Calendar.css';
import CalendarNav from './CalendarNav/CalendarNav';
import DateGrid from './DateGrid/DateGrid';
import DayOfWeek from './DayOfWeek/DayOfWeek';

type LayoutProps = {
    theme?: ThemeType;
    locale?: LocaleType;
    customPrevButton?: React.ReactNode;
    customNextButton?: React.ReactNode;
};

const CalendarContent = ({ theme, locale = LOCALE.ko, customPrevButton, customNextButton }: LayoutProps) => {
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
