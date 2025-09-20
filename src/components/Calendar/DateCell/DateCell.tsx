import useCalendarContext from '../../../contexts/CaneldarContext';
import { formatDateToISO, getDate } from '../../../utils/date';
import { datecell, cellWrapper } from './DateCellStyle.css';
import { useCalendar } from '../../../hooks/useCalendar';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { customThemeVars, theme } from '../../../styles/theme.css';
import type { Holidays } from '../../../types/holiday';
import { memo } from 'react';

type Props = {
    date: Date;
    filterDate?: (date: Date) => boolean;
    minDate?: Date;
    maxDate?: Date;
    showToday?: boolean;
    onChange: (date: Date) => void;
    holidays?: Holidays;
};

const DateCell = (props: Props) => {
    const { date, filterDate, minDate, maxDate, showToday, onChange } = props;

    const { selectedDate, setSelectedDate, customTheme } = useCalendarContext();

    const { isMaxDate, isMinDate, isToday } = useCalendar(date);

    if (!(date instanceof Date)) {
        return null;
    }

    const handleDateClick = () => {
        setSelectedDate(date);
        onChange(date);
    };

    const isSelected = date.toDateString() === selectedDate.toDateString();
    const disabledByFilter = filterDate ? !filterDate(date) : false;
    const disabled = disabledByFilter || isMaxDate(maxDate) || isMinDate(minDate);
    const addTodayStyles = showToday ? isToday() : false;

    return (
        <div className={cellWrapper}>
            <button
                onClick={handleDateClick}
                style={assignInlineVars({
                    [customThemeVars.highlightBg]: customTheme?.highlightBg ?? theme.colors.hightlight,
                    [customThemeVars.highlightColor]: customTheme?.highlightColor ?? theme.colors.white,
                })}
                className={datecell({
                    selected: isSelected,
                    disabled: disabled,
                    isToday: addTodayStyles,
                })}
                disabled={disabled}
                aria-label={formatDateToISO(date)}
                aria-selected={isSelected}
            >
                {getDate(date)}
            </button>
        </div>
    );
};

export default memo(DateCell);
