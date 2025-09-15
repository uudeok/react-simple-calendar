import type { CalendarProps } from '../../types';
import CalendarProvider from '../../contexts/CalendarProvider';
import CalendarContent from './CalendarContent';
import ThemeProvider from '../../contexts/ThemeProvider';
import LocaleProvider from '../../contexts/LocaleProvider';
import { LOCALE } from '../../constants';

const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
    const { date, onChange, customTheme, theme, locale, ...rest } = props;

    return (
        <ThemeProvider defaultTheme={theme}>
            <LocaleProvider locale={locale ?? LOCALE.ko}>
                <CalendarProvider initialDate={date} customTheme={customTheme}>
                    <CalendarContent onChange={onChange} {...rest} />
                </CalendarProvider>
            </LocaleProvider>
        </ThemeProvider>
    );
};

export default Calendar;
