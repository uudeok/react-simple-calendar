export const goToPrevDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);

export const goToNextDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);

export const goToPrevWeek = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);

export const goToNextWeek = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);

export const goToPrevMonth = (date: Date) => {
    const prev = new Date(date);
    prev.setMonth(prev.getMonth() - 1);
    return prev;
};

export const goToNextMonth = (date: Date) => {
    const next = new Date(date);
    next.setMonth(next.getMonth() + 1);
    return next;
};
