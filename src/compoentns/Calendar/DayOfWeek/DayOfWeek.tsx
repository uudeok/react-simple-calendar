import { memo } from 'react';
import { WEEK } from '../../../constants';
import type { LocaleType } from '../../../types';
import { layout } from './style.css';

type Props = {
    locale: LocaleType;
};

const DayOfWeek = ({ locale }: Props) => {
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
