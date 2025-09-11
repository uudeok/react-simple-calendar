export const WeekValidatorError = {
    NOT_ARRAY: { code: 'NOT_ARRAY', message: `"customWeek" must be an array of strings.` },
    INVALID_LENGTH: { code: 'INVALID_LENGTH', message: `"customWeek" must have exactly 7 items.` },
    NOT_STRING: { code: 'NOT_STRING', message: `"customWeek" must contain only strings.` },
} as const;

export const FormatDateError = {
    INVALID_DATE_FORMAT: { code: 'INVALID_DATE_FORMAT', message: `Invalid date format` },
} as const;
