import { memo } from 'react';
import { WEEK } from '../../../constants';
import { layout } from './style.css';
import type { WeekStart } from '../../../types';
import { WeekValidator } from '../../../validators';
import { validateWithFallback } from '../../../utils/validator/validatorHelper';
import useLocaleContext from '../../../contexts/LocaleContext';

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
            {rotatedWeeks.map((week) => (
                <span key={week}>{week}</span>
            ))}
        </div>
    );
};

export default memo(DayOfWeek);
