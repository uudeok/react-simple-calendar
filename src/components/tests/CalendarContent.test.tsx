import { render } from '@testing-library/react';
import { StartOfWeekValidatorError } from '../../constants';
import CalendarContent from '../Calendar/CalendarContent';
import { vi } from 'vitest';
import CalendarProvider from '../../contexts/CalendarProvider';
import ThemeProvider from '../../contexts/ThemeProvider';
import '@testing-library/jest-dom';

const JAN_15_2025 = new Date('2025-01-15');

describe('CalendarContent - StartOfWeekValidator', () => {
    it('startOfWeek가 number가 아니면 INVALID_TYPE 에러를 던진다', () => {
        expect(() =>
            render(
                <ThemeProvider>
                    <CalendarProvider initialDate={new Date(JAN_15_2025)}>
                        {/* @ts-expect-error: 테스트용으로 잘못된 타입 전달 */}
                        <CalendarContent onChange={vi.fn()} startOfWeek={'월요일'} />
                    </CalendarProvider>
                </ThemeProvider>
            )
        ).toThrow(StartOfWeekValidatorError.INVALID_TYPE.message);
    });

    it('startOfWeek가 0~6 범위를 벗어나면 OUT_OF_RANGE 에러를 던진다', () => {
        expect(() =>
            render(
                <ThemeProvider>
                    <CalendarProvider initialDate={new Date(JAN_15_2025)}>
                        {/* @ts-expect-error: 테스트용으로 잘못된 타입 전달 */}
                        <CalendarContent onChange={vi.fn()} startOfWeek={7} />
                    </CalendarProvider>
                </ThemeProvider>
            )
        ).toThrow(StartOfWeekValidatorError.OUT_OF_RANGE.message);
    });

    it('startOfWeek가 유효하면 정상 렌더링된다', () => {
        const { container } = render(
            <ThemeProvider>
                <CalendarProvider initialDate={new Date(JAN_15_2025)}>
                    <CalendarContent onChange={vi.fn()} startOfWeek={0} />
                </CalendarProvider>
            </ThemeProvider>
        );
        expect(container).toBeInTheDocument();
    });
});
