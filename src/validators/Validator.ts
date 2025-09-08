export interface Validator<T = unknown> {
    isValid(params: T): boolean;
    validate(params: T): { isError: boolean; errorCode?: string; errorMessage?: string };
}
