import { memo } from 'react';
import useCalendarContext from '../../../contexts/CaneldarContext';
import { getDate } from '../../../utils/date';
import { datecell } from './style.css';
import { useCalendar } from '../../../hooks/useCalendar';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { customThemeVars, theme } from '../../../styles/theme.css';

type Props = {
    date: Date;
    filterDate?: (date: Date) => boolean;
    minDate?: Date;
    maxDate?: Date;
    showToday?: boolean;
    onChange: (date: Date) => void;
};

const DateCell = (props: Props) => {
    const { date, filterDate, minDate, maxDate, showToday, onChange } = props;

    const { setSelectedDate, selectedDate, customTheme } = useCalendarContext();

    const { isMaxDate, isMinDate, isToday } = useCalendar(date);

    const handleDateClick = () => {
        setSelectedDate(date);
        onChange(date);
    };

    const isSelected = date.toDateString() === selectedDate.toDateString();
    const disabledByFilter = filterDate ? filterDate(date) : false;
    const disabled = disabledByFilter || isMaxDate(maxDate) || isMinDate(minDate);
    const addTodayStyles = showToday ? isToday() : false;

    return (
        <button
            onClick={handleDateClick}
            style={assignInlineVars({
                [customThemeVars.highlightBg]: customTheme?.highlightBg ?? theme.colors.hightlight,
                [customThemeVars.highlightColor]: customTheme?.highlightColor ?? theme.colors.white,
            })}
            className={datecell({ selected: isSelected, disabled: disabled, isToday: addTodayStyles })}
            disabled={disabled}
            aria-label={date.toDateString()}
        >
            {getDate(date)}
        </button>
    );
};

export default memo(DateCell);
