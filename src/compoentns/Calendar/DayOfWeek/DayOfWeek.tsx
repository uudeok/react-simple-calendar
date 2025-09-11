import { memo } from 'react';
import { WEEK } from '../../../constants';
import { layout } from './style.css';
import type { LocaleType, WeekStart } from '../../../types';
import { WeekValidator } from '../../../validators';
import { validateWithFallback } from '../../../utils/validator/validatorHelper';

type DayOfWeekProps = {
    customWeek?: string[];
    locale?: LocaleType;
    startOfWeek?: WeekStart;
};

const DayOfWeek = (props: DayOfWeekProps) => {
    const { customWeek, locale = 'ko', startOfWeek = 0 } = props;

    const weeks = validateWithFallback(customWeek, WeekValidator, WEEK[locale]);

    const rotatedWeeks = [...weeks.slice(startOfWeek), ...weeks.slice(0, startOfWeek)];

    return (
        <div className={layout}>
            {rotatedWeeks.map((week) => (
                <span key={week}>{week}</span>
            ))}
        </div>
    );
};

export default memo(DayOfWeek);
