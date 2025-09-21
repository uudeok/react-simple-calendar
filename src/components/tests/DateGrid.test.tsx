import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { DateRangeValidator } from '../../validators/DateRangeValidator';
import DateGrid from '../Calendar/DateGrid/DateGrid';
import CalendarProvider from '../../contexts/CalendarProvider';
import { DateRangeValidatorErrors } from '../../constants';

const JAN_15_2025 = new Date('2025-01-15');

describe('DateGrid 에서 date range 예외 발생 테스트', () => {
    let spy: ReturnType<typeof vi.spyOn>; // spy 타입을 반환 타입으로 지정

    beforeEach(() => {
        spy = vi.spyOn(DateRangeValidator, 'validate').mockReturnValue({
            isError: true,
            errorMessage: DateRangeValidatorErrors.MIN_GREATER_THAN_MAX.message,
            errorCode: DateRangeValidatorErrors.MIN_GREATER_THAN_MAX.code,
        });
    });

    afterEach(() => {
        spy.mockRestore(); // 테스트 끝나면 실제 함수로 복원
    });

    it('Validator가 에러를 반환하면 예외를 던진다', () => {
        expect(() =>
            render(
                <CalendarProvider initialDate={JAN_15_2025}>
                    <DateGrid onChange={vi.fn()} minDate={new Date('2025-01-01')} maxDate={new Date('2025-01-01')} />
                </CalendarProvider>
            )
        ).toThrow(DateRangeValidatorErrors.MIN_GREATER_THAN_MAX.message);
    });
});

describe('DateGrid 에서 min/maxDate 관련 Validator 테스트', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('min이 max보다 큰 경우 올바른 메시지를 반환', () => {
        expect(() =>
            render(
                <CalendarProvider initialDate={JAN_15_2025}>
                    <DateGrid onChange={vi.fn()} minDate={new Date('2025-02-01')} maxDate={new Date('2025-01-01')} />
                </CalendarProvider>
            )
        ).toThrow(DateRangeValidatorErrors.MIN_GREATER_THAN_MAX.message);
    });

    it('minDate 타입이 Date 가 아니면 INVALID_TYPE 에러를 던진다', () => {
        expect(() =>
            render(
                <CalendarProvider initialDate={JAN_15_2025}>
                    {/* @ts-expect-error: 테스트용으로 잘못된 타입 전달 */}
                    <DateGrid onChange={vi.fn()} minDate={123} />
                </CalendarProvider>
            )
        ).toThrow(DateRangeValidatorErrors.INVALID_MIN_DATE.message);
    });

    it('maxDate 타입이 Date 가 아니면 INVALID_TYPE 에러를 던진다', () => {
        expect(() =>
            render(
                <CalendarProvider initialDate={JAN_15_2025}>
                    {/* @ts-expect-error: 테스트용으로 잘못된 타입 전달 */}
                    <DateGrid onChange={vi.fn()} maxDate="abc" />
                </CalendarProvider>
            )
        ).toThrow(DateRangeValidatorErrors.INVALID_MAX_DATE.message);
    });
});
