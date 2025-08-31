import { memo } from 'react';
import { WEEK } from '../../../constants';
import type { LocaleType } from '../../../types';
import { container, weekCell } from './style.css';

type Props = {
    local: LocaleType;
};

const DayOfWeek = ({ local }: Props) => {
    const weeks = WEEK[local];

    return (
        <div className={container}>
            {weeks.map((week) => (
                <div key={week} className={weekCell}>
                    {week}
                </div>
            ))}
        </div>
    );
};

export default memo(DayOfWeek);
