export interface DateData {
    date: Date;
    isToday: boolean;
    isWeekend: boolean;
    isBlocked: boolean; // disabled
    customStyles?: string[];
}

export type DateProcessor = (data: DateData) => DateData;

export const addIsWeekend: DateProcessor = (data: DateData) => {
    const day = data.date.getDay();
    const isWeekend = day === 0 || day === 6; // 0은 일요일, 6은 토요일

    return { ...data, isWeekend, isBlocked: isWeekend };
};

export const addIsToday: DateProcessor = (data: DateData) => {
    const today = new Date();
    const isToday =
        data.date.getFullYear() === today.getFullYear() &&
        data.date.getMonth() === today.getMonth() &&
        data.date.getDate() === today.getDate();
    return { ...data, isToday };
};

export const addBlockedDate = (data: DateData, condition: (date: Date) => boolean): DateData => {
    if (condition(data.date)) {
        return { ...data, isBlocked: true };
    }
    return data;
};

export const pipe =
    (...fns: DateProcessor[]) =>
    (initial: DateData) =>
        fns.reduce((cur, func) => func(cur), initial);

export const myDateProcessor = pipe(
    addIsToday, // 현재 날짜 여부 추가
    addIsWeekend // 주말 여부 추가 및 차단
);

export const result5 = myDateProcessor({
    isBlocked: false,
    isToday: false,
    isWeekend: false,
    date: new Date(),
});
