import { memo } from 'react';
import { WEEK } from '../../../constants';
import type { LocaleType } from '../../../types';
import { container, weekCell } from './style.css';

type Props = {
    locale: LocaleType;
};

const DayOfWeek = ({ locale }: Props) => {
    const weeks = WEEK[locale];

    return (
        <div className={container}>
            {weeks.map((week) => (
                <span key={week} className={weekCell}>
                    {week}
                </span>
            ))}
        </div>
    );
};

export default memo(DayOfWeek);
