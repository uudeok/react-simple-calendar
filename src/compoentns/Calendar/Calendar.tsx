import type { LocaleType, ThemeType } from '../../types';
import CalendarProvider from '../../contexts/CalendarProvider';
import CalendarContent from './CalendarContent';

interface CalendarRequired {
    date: Date;
    onChange: (date: Date) => void;
}

export interface CalendarOptional {
    theme?: ThemeType;
    locale?: LocaleType;
    customPrevButton?: React.ReactNode;
    customNextButton?: React.ReactNode;
    customWeek?: string[];
    filterDate?: (date: Date) => boolean;
    minDate?: Date;
    maxDate?: Date;
    showToday?: boolean;
}

export type CalendarProps = CalendarRequired & CalendarOptional;

export const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
    const { date, onChange, ...rest } = props;

    return (
        <CalendarProvider initialDate={date} onChange={onChange}>
            <CalendarContent {...rest} />
        </CalendarProvider>
    );
};

// import type { LocaleType, ThemeType } from '../../types';
// import CalendarProvider from '../../contexts/CalendarProvider';
// import CalendarContent from './CalendarContent';

// interface CalendarRequired {
//     date: Date;
//     onChange: (date: Date) => void;
// }

// export interface CalendarOptional {
//     theme?: ThemeType;
//     locale?: LocaleType;
//     customPrevButton?: React.ReactNode;
//     customNextButton?: React.ReactNode;
//     customWeek?: string[];
//     filterDate?: (date: Date) => boolean;
//     minDate?: Date;
//     maxDate?: Date;
// }

// export type CalendarProps = CalendarRequired & CalendarOptional;

// export const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
//     const { date, onChange, ...rest } = props;

//     return (
//         <CalendarProvider initialDate={date} onChange={onChange}>
//             <CalendarContent {...rest} />
//         </CalendarProvider>
//     );
// };
