import { WeekValidatorError } from '../constants';
import type { Validator } from './Validator';

export const WeekValidator: Validator<string[]> = {
    isValid: (week) => Array.isArray(week) && week.length === 7 && week.every((day) => typeof day === 'string'),

    validate: (week) => {
        if (!Array.isArray(week)) {
            return {
                isError: true,
                errorCode: WeekValidatorError.NOT_ARRAY.code,
                errorMessage: WeekValidatorError.NOT_ARRAY.message,
            };
        }

        if (week.length !== 7) {
            return {
                isError: true,
                errorCode: WeekValidatorError.INVALID_LENGTH.code,
                errorMessage: `${WeekValidatorError.INVALID_LENGTH.message}. Received: ${week.length}`,
            };
        }

        if (!week.every((day) => typeof day === 'string')) {
            return {
                isError: true,
                errorCode: WeekValidatorError.NOT_STRING.code,
                errorMessage: WeekValidatorError.NOT_STRING.message,
            };
        }

        return { isError: false };
    },
};
