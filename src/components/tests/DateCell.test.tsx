import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { it, expect, vi, MockedFunction } from 'vitest';

import DateCell from '../Calendar/DateCell/DateCell';
import useCalendarContext from '../../contexts/CaneldarContext';
import { useCalendar } from '../../hooks/useCalendar';
import { WeekStart } from '../../types';

vi.mock('../../contexts/CaneldarContext');
vi.mock('../../hooks/useCalendar');
type UseCalendarReturn = ReturnType<typeof useCalendar>;

describe('DateCell', () => {
    const SELETED_DATE = new Date('2025-01-15');
    const SAMPLE_DATE = new Date('2025-01-15');
    const DAY_OF_TODAY = 15;

    const mockSetSelectedDate = vi.fn();

    const mockedUseCalendarContext = useCalendarContext as MockedFunction<typeof useCalendarContext>;
    const mockedUseCalendar = useCalendar as MockedFunction<(date: Date) => UseCalendarReturn>;

    beforeEach(() => {
        vi.clearAllMocks();

        mockedUseCalendarContext.mockReturnValue({
            selectedDate: new Date(SELETED_DATE),
            setSelectedDate: mockSetSelectedDate,
            customTheme: {
                highlightBg: '#000',
                highlightColor: '#fff',
            },
        });

        mockedUseCalendar.mockImplementation((date: Date) => ({
            goToNextMonth: vi.fn(() => SAMPLE_DATE),
            goToPrevMonth: vi.fn(() => SAMPLE_DATE),
            generateDates: vi.fn((totalCells: number, startOfWeek: WeekStart = 0) => [SAMPLE_DATE]),

            isMaxDate: vi.fn(() => false),
            isMinDate: vi.fn(() => false),
            isToday: vi.fn(() => date.getDate() === DAY_OF_TODAY), // 예시: 15일이면 today 처리
        }));
    });

    it('props로 전달된 date 타입이 유효하지 않은 경우, null을 리턴한다.', () => {
        const INVALID_DATE = '2025-01-20';

        const mockOnChange = vi.fn();

        // @ts-expect-error: 테스트용으로 잘못된 타입 전달
        const { container } = render(<DateCell date={INVALID_DATE} onChange={mockOnChange} />);

        expect(container.firstChild).eq(null);
    });

    it('filterDate가 없으면 항상 enabled 된다.', () => {
        const FILTERED_DATE_STRING = '2025-01-10';
        const FILTERED_DATE = new Date(FILTERED_DATE_STRING);

        const mockOnChange = vi.fn();

        render(<DateCell date={FILTERED_DATE} onChange={mockOnChange} />);

        const disabledCell = screen.getByRole('button', { name: FILTERED_DATE_STRING });

        // disabled 여부 확인
        expect(disabledCell).toBeEnabled();
    });

    it('filterDate로 비활성화된 날짜는 클릭할 수 없다', () => {
        const FILTERED_DATE_STRING = '2025-01-10';
        const FILTERED_DATE = new Date(FILTERED_DATE_STRING);

        const mockOnChange = vi.fn();

        // 10일이면 false -> disabled, 나머지는 true
        const filterDate = (date: Date) => date.getDate() !== 10;

        render(<DateCell date={FILTERED_DATE} onChange={mockOnChange} filterDate={filterDate} />);

        const disabledCell = screen.getByRole('button', { name: FILTERED_DATE_STRING });

        // disabled 여부 확인
        expect(disabledCell).toBeDisabled();
    });
});
