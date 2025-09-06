import { memo } from 'react';
import { WEEK } from '../../../constants';
import { layout } from './style.css';
import type { CalendarOptional } from '../Calendar';

type DayOfWeekProps = Pick<CalendarOptional, 'locale'>;

const DayOfWeek = ({ locale = 'ko' }: DayOfWeekProps) => {
    const weeks = WEEK[locale];

    return (
        <div className={layout}>
            {weeks.map((week) => (
                <span key={week}>{week}</span>
            ))}
        </div>
    );
};

export default memo(DayOfWeek);
