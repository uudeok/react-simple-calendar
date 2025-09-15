import { DateRangeValidatorErrors } from '../constants';
import type { Validator } from './Validator';

export type DateRange = {
    minDate?: Date;
    maxDate?: Date;
};

export const DateRangeValidator: Validator<DateRange> = {
    isValid: ({ minDate, maxDate }) => {
        if ((minDate && !(minDate instanceof Date)) || (minDate && isNaN(minDate.getTime()))) {
            return false;
        }
        if ((maxDate && !(maxDate instanceof Date)) || (maxDate && isNaN(maxDate.getTime()))) {
            return false;
        }
        if (minDate && maxDate && minDate > maxDate) {
            return false;
        }
        return true;
    },

    validate: ({ minDate, maxDate }) => {
        if (minDate && (!(minDate instanceof Date) || isNaN(minDate.getTime()))) {
            return {
                isError: true,
                errorCode: DateRangeValidatorErrors.INVALID_MIN_DATE.code,
                errorMessage: DateRangeValidatorErrors.INVALID_MIN_DATE.message,
            };
        }

        if (maxDate && (!(maxDate instanceof Date) || isNaN(maxDate.getTime()))) {
            return {
                isError: true,
                errorCode: DateRangeValidatorErrors.INVALID_MAX_DATE.code,
                errorMessage: DateRangeValidatorErrors.INVALID_MAX_DATE.message,
            };
        }

        if (minDate && maxDate && minDate > maxDate) {
            return {
                isError: true,
                errorCode: DateRangeValidatorErrors.MIN_GREATER_THAN_MAX.code,
                errorMessage: DateRangeValidatorErrors.MIN_GREATER_THAN_MAX.message,
            };
        }

        return { isError: false };
    },
};
