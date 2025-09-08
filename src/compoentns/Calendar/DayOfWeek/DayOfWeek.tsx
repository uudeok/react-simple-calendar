import { memo } from 'react';
import { WEEK } from '../../../constants';
import { layout } from './style.css';
import type { LocaleType } from '../../../types';
import { WeekValidator } from '../../../validators';
import { validateOrFallback } from '../../../utils/validator/validatorHelper';

type DayOfWeekProps = {
    customWeek?: string[];
    locale?: LocaleType;
};

const DayOfWeek = (props: DayOfWeekProps) => {
    const { customWeek, locale = 'ko' } = props;

    const weeks = validateOrFallback(customWeek, WeekValidator, WEEK[locale]);

    return (
        <div className={layout}>
            {weeks.map((week) => (
                <span key={week}>{week}</span>
            ))}
        </div>
    );
};

export default memo(DayOfWeek);
