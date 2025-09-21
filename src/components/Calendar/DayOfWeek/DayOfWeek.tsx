import { memo } from 'react';
import { WEEK } from '../../../constants';
import { layout } from './DateOfWeekStyle.css';
import type { WeekStart } from '../../../types';
import { validateWithFallback } from '../../../utils/validator/validatorHelper';
import useLocaleContext from '../../../contexts/LocaleContext';
import { WeekValidator } from '../../../validators/WeekValidator';

type DayOfWeekProps = {
    customWeek?: string[];
    startOfWeek?: WeekStart;
};

const DayOfWeek = (props: DayOfWeekProps) => {
    const { customWeek, startOfWeek = 0 } = props;
    const locale = useLocaleContext();

    const weeks = validateWithFallback(customWeek, WeekValidator, WEEK[locale]);

    const rotatedWeeks = [...weeks.slice(startOfWeek), ...weeks.slice(0, startOfWeek)];

    return (
        <div className={layout}>
            {rotatedWeeks.map((week, index) => (
                <span key={week} aria-label={`day-${index}`}>
                    {week}
                </span>
            ))}
        </div>
    );
};

export default memo(DayOfWeek);
