export const WeekValidatorError = {
    NOT_ARRAY: { code: 'NOT_ARRAY', message: `"customWeek" must be an array of strings.` },
    INVALID_LENGTH: { code: 'INVALID_LENGTH', message: `"customWeek" must have exactly 7 items.` },
    NOT_STRING: { code: 'NOT_STRING', message: `"customWeek" must contain only strings.` },
} as const;

export const FormatDateError = {
    INVALID_DATE_FORMAT: { code: 'INVALID_DATE_FORMAT', message: `Invalid date format` },
} as const;

export const DateRangeValidatorErrors = {
    INVALID_MIN_DATE: { code: 'INVALID_MIN_DATE', message: 'Invalid minDate: must be a valid Date.' },
    INVALID_MAX_DATE: { code: 'INVALID_MAX_DATE', message: 'Invalid maxDate: must be a valid Date.' },
    MIN_GREATER_THAN_MAX: { code: 'MIN_GREATER_THAN_MAX', message: 'minDate cannot be greater than maxDate.' },
} as const;

export const StartOfWeekValidatorError = {
    INVALID_TYPE: { code: 'INVALID_TYPE', message: 'startOfWeek must be a number' },
    OUT_OF_RANGE: { code: 'OUT_OF_RANGE', message: 'startOfWeek must be between 0 and 6' },
} as const;
