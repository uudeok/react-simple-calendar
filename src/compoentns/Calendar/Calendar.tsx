import type { CalendarProps } from '../../types';
import CalendarProvider from '../../contexts/CalendarProvider';
import CalendarContent from './CalendarContent';

export const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
    const { date, onChange, customTheme, ...rest } = props;

    return (
        <CalendarProvider initialDate={date} customTheme={customTheme}>
            <CalendarContent onChange={onChange} {...rest} />
        </CalendarProvider>
    );
};

/**
 theme, locale 은 따로 context 만들기
 */
