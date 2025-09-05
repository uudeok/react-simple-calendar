import type { LocaleType, ThemeType } from '../../types';
import CalendarProvider from '../../contexts/CalendarProvider';
import CalendarContent from './CalendarContent';

interface CalendarProps {
    date: Date;
    onChange: (date: Date) => void;
    theme?: ThemeType;
    locale?: LocaleType;
    customPrevButton?: React.ReactNode;
    customNextButton?: React.ReactNode;
}

export const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
    const { date, onChange, ...rest } = props;

    return (
        <CalendarProvider initialDate={date} onChange={onChange}>
            <CalendarContent {...rest} />
        </CalendarProvider>
    );
};
