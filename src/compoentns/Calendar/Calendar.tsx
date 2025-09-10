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
 * 전역에서 필요한 상태는 Context 로 관리
 * 일부 컴포넌트에서 필요한 상태,로직은 prop 으로 주입
 */
