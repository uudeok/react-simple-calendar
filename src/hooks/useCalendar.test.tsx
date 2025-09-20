import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';
import { useCalendar } from './useCalendar';

const JAN_15_2025 = new Date('2025-01-15');

describe('useCalendar', () => {
    it('goToNextMonth 는 다음 달의 Date 객체를 반환한다', () => {
        const { result } = renderHook(() => useCalendar(new Date(JAN_15_2025)));
        const next = result.current.goToNextMonth();

        expect(next.getFullYear()).toBe(2025);
        expect(next.getMonth()).toBe(1); // 0-based, → 2월
    });

    it('goToPrevMonth는 이전 달의 Date 객체를 반환한다', () => {
        const { result } = renderHook(() => useCalendar(new Date(JAN_15_2025)));
        const prev = result.current.goToPrevMonth();
        expect(prev.getFullYear()).toBe(2024);
        expect(prev.getMonth()).toBe(11); // 12월
    });

    it('generateDates는 지정된 개수만큼 Date 배열을 생성한다', () => {
        const TOTAL_CELLS = 42; // 총 렌더렝 되는 날짜 갯수
        const START_WEEK = 0; // 일요일

        const { result } = renderHook(() => useCalendar(new Date(JAN_15_2025)));
        const dates = result.current.generateDates(TOTAL_CELLS, START_WEEK);

        expect(dates).toHaveLength(TOTAL_CELLS);
        expect(dates[0]).toBeInstanceOf(Date);
    });

    /** 현재 date가 2025-01-15 이면 minDate 인 2025-02-01 보다 이전이므로 isMinDate = true 가 된다  */
    it('isMinDate는 현재 date가 minDate보다 이전이면 true를 반환한다', () => {
        const { result } = renderHook(() => useCalendar(new Date(JAN_15_2025)));
        expect(result.current.isMinDate(new Date('2025-02-01'))).toBe(true);
        expect(result.current.isMinDate(new Date('2024-12-01'))).toBe(false);
    });

    /** 현재 date가 2025-01-15 이면 maxDate 인 2024-12-01 보다 이후라서 isMaxDate = true 가 된다   */
    it('isMaxDate는 현재 date가 maxDate보다 이후면 true를 반환한다', () => {
        const { result } = renderHook(() => useCalendar(new Date(JAN_15_2025)));
        expect(result.current.isMaxDate(new Date('2024-12-01'))).toBe(true);
        expect(result.current.isMaxDate(new Date('2025-02-01'))).toBe(false);
    });

    it('isToday는 오늘 날짜와 같으면 true를 반환한다', () => {
        const today = new Date();
        const { result } = renderHook(() => useCalendar(today));

        expect(result.current.isToday()).toBe(true);

        const other = new Date(today);
        other.setDate(today.getDate() - 1);
        const { result: otherResult } = renderHook(() => useCalendar(other));
        expect(otherResult.current.isToday()).toBe(false);
    });
});
