export const goToNextMonth = (date: Date): Date => {
    const next = new Date(date);
    next.setMonth(next.getMonth() + 1);
    return next;
};

export const goToPrevMonth = (date: Date): Date => {
    const prev = new Date(date);
    prev.setMonth(prev.getMonth() - 1);
    return prev;
};
