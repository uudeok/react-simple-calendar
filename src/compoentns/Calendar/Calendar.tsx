import type { CalendarProps } from '../../types';
import CalendarProvider from '../../contexts/CalendarProvider';
import CalendarContent from './CalendarContent';
import ThemeProvider from '../../contexts/ThemeProvider';

export const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
    const { date, onChange, customTheme, theme, ...rest } = props;

    return (
        <ThemeProvider defaultTheme={theme}>
            <CalendarProvider initialDate={date} customTheme={customTheme}>
                <CalendarContent onChange={onChange} {...rest} />
            </CalendarProvider>
        </ThemeProvider>
    );
};

/** locale 도 별도의 Context 로 관리
 *  추후 다국어 지원이 많아질경우
 *  locale 인 경우, 전역으로 적용되어야 함
 *
 *  theme 도 마찬가지로 전역으로 적용되어야 함
 *  현재는 customTheme 을 prop 으로 받고 있는데,
 *  theme 에다가 customTheme 을 넣어도 되지 않을까?
 */
