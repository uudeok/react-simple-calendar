import { FORMAT_DATE, FormatDateError } from '../constants';
import type { FormatType } from '../types';
import type { Validator } from './Validator';

const allowedFormats = Object.keys(FORMAT_DATE);

export const FormatDateValidator: Validator<FormatType> = {
    isValid: (value) => allowedFormats.includes(value),

    validate(value) {
        if (!this.isValid(value)) {
            return {
                isError: true,
                errorCode: FormatDateError.INVALID_DATE_FORMAT.code,
                errorMessage: `${
                    FormatDateError.INVALID_DATE_FORMAT.message
                } "${value}". Allowed formats: ${allowedFormats.join(', ')}`,
            };
        }

        return { isError: false };
    },
};
