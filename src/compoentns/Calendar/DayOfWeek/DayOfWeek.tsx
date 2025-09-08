import { memo } from 'react';
import { WEEK } from '../../../constants';
import { layout } from './style.css';
import type { LocaleType } from '../../../types';
import { WeekValidator } from './validator';

type DayOfWeekProps = {
    customWeek?: string[];
    locale?: LocaleType;
};

const DayOfWeek = (props: DayOfWeekProps) => {
    const { customWeek, locale = 'ko' } = props;

    let weeks: string[];

    if (customWeek) {
        WeekValidator.validate(customWeek);
        weeks = customWeek;
    } else {
        weeks = WEEK[locale];
    }

    return (
        <div className={layout}>
            {weeks.map((week) => (
                <span key={week}>{week}</span>
            ))}
        </div>
    );
};

export default memo(DayOfWeek);

/** React.memo 를 써야할까?
 * 안써도 리렌더링이 되지 않음
 * 왜냐하면 상위 컴포넌트인 CalendarContent 에서 상태가 바뀌지 않으니까..
 * 근데 나중에 CalendarContent 에서 상태가 바뀐다면 DayOfWeek 컴포넌트는 리렌더링 될테니 React.memo 로 최적화 수행
 */
