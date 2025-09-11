import type { Validator } from '../../validators/Validator';

export const validateWithFallback = <T>(value: T | undefined, validator: Validator<T>, fallback: T): T => {
    if (!value) return fallback;

    const result = validator.validate(value);

    if (result.isError) {
        console.error(result.errorMessage);
        return fallback;
    }

    return value;
};
