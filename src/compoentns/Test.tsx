export type CellRenderer = (date: Date) => { disabled: boolean };

export const baseCellRenderer = (date: Date) => ({ disabled: false });

// minDate 데코레이터
export const withMinDate = (renderer: CellRenderer, minDate?: Date): CellRenderer => {
    return (date: Date) => {
        const base = renderer(date);
        const disabled = base.disabled || (minDate ? date < minDate : false);
        return { disabled };
    };
};

// maxDate 데코레이터
export const withMaxDate = (renderer: CellRenderer, maxDate?: Date): CellRenderer => {
    return (date: Date) => {
        const base = renderer(date);
        const disabled = base.disabled || (maxDate ? date > maxDate : false);
        return { disabled };
    };
};

// filterDate 데코레이터
export const withFilterDate = (renderer: CellRenderer, filterDate?: (date: Date) => boolean): CellRenderer => {
    return (date: Date) => {
        const base = renderer(date);
        const disabled = base.disabled || (filterDate ? filterDate(date) : false);
        return { disabled };
    };
};

export const pipeCellRenderers = (
    baseRenderer: CellRenderer,
    funcs: ((renderer: CellRenderer) => CellRenderer)[]
): CellRenderer => {
    return funcs.reduce((prev, fn) => fn(prev), baseRenderer);
};
