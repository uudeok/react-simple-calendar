const HOLIDAYS = [new Date(2025, 11, 25), new Date(2025, 8, 15)];

export type CalendarPlugin = {
    // 날짜 셀 스타일링
    getDayStyle?: (date: Date) => React.CSSProperties | undefined;
    // hover 이벤트
    onDayHover?: (date: Date) => React.CSSProperties | undefined;
    // holiday 설정
    onHoliday?: (dates: Date[], style?: React.CSSProperties) => React.CSSProperties | undefined;
};

type DayDecorateResult = {
    style: React.CSSProperties;
    onMouseEnter?: () => void;
};

const Test = () => {
    const pipeCalendarPlugins =
        (plugins: CalendarPlugin[]) =>
        (date: Date): DayDecorateResult => {
            return plugins.reduce(
                (acc, plugin) => {
                    const styleFromDay = plugin.getDayStyle?.(date) || {};

                    const styleFromHoliday = plugin.onHoliday?.([], {}) || {}; // placeholder, 실제 사용 시 날짜 배열과 스타일 전달

                    const hoverHandler = plugin.onDayHover ? () => plugin.onDayHover?.(date) : undefined;

                    return {
                        style: { ...acc.style, ...styleFromDay, ...styleFromHoliday },
                        onMouseEnter: hoverHandler || acc.onMouseEnter,
                    };
                },
                { style: {} } as DayDecorateResult
            );
        };

    const decorate = pipeCalendarPlugins([
        {
            onHoliday: (dates, style) => (date: Date) =>
                dates.some((d) => d.toDateString() === date.toDateString()) ? style : undefined,
        },
        {
            getDayStyle: () => ({ backgroundColor: '#f9fafb', color: 'orange' }),
        },
        {
            onDayHover: () => ({ backgroundColor: '#111827', color: '#f9fafb' }),
        },
    ]);

    const dayStyle = decorate(new Date(2025, 8, 15)).style;
    console.log(dayStyle);

    return (
        <div>
            <div></div>
        </div>
    );
};

export default Test;
