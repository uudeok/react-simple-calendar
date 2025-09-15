import { StartOfWeekValidatorError, WEEK_START } from '../constants';
import type { WeekStart } from '../types';
import type { Validator } from './Validator';

export const StartOfWeekValidator: Validator<WeekStart> = {
    isValid: (startOfWeek) =>
        typeof startOfWeek === 'number' && startOfWeek >= WEEK_START.SUNDAY && startOfWeek <= WEEK_START.SATURDAY,

    validate: (startOfWeek) => {
        if (typeof startOfWeek !== 'number') {
            return {
                isError: true,
                errorCode: StartOfWeekValidatorError.INVALID_TYPE.code,
                errorMessage: StartOfWeekValidatorError.INVALID_TYPE.message,
            };
        }
        if (startOfWeek < 0 || startOfWeek > 6) {
            return {
                isError: true,
                errorCode: StartOfWeekValidatorError.OUT_OF_RANGE.code,
                errorMessage: StartOfWeekValidatorError.OUT_OF_RANGE.message,
            };
        }
        return { isError: false };
    },
};
