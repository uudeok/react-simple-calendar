import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { it, expect, vi } from 'vitest';
import Calendar from '../Calendar/Calendar';
import { ARIA_LABELS } from '../../constants/lang';

it('넘겨준 date 값으로 연도와 월을 표시한다', () => {
    const mockOnChange = vi.fn();
    const customDate = new Date('2025-01-01');

    render(<Calendar date={customDate} onChange={mockOnChange} />);

    expect(screen.getByText('2025.01')).toBeInTheDocument();
});

it('date를 바꿨을 때 onChange 콜백이 호출된다', () => {
    const mockOnChange = vi.fn();
    const customDate = new Date('2025-01-01');

    render(<Calendar date={customDate} onChange={mockOnChange} />);

    // 클릭할 날짜
    const selectedDate = new Date('2025-01-15');

    // Intl.DateTimeFormat으로 aria-label 생성
    const formattedLabel = new Intl.DateTimeFormat('ko', { dateStyle: 'full' }).format(selectedDate);
    const dayCell = screen.getByRole('button', { name: formattedLabel });

    fireEvent.click(dayCell);

    // 콜백이 호출됐는지 확인
    expect(mockOnChange).toHaveBeenCalled();

    // 호출된 인자가 Date 객체인지 확인
    expect(mockOnChange.mock.calls[0][0]).toBeInstanceOf(Date);

    // 호출된 인자의 값이 우리가 클릭한 날짜와 같은지 확인
    const clickedDate = mockOnChange.mock.calls[0][0];

    expect(clickedDate.getFullYear()).toBe(selectedDate.getFullYear());
    expect(clickedDate.getMonth()).toBe(selectedDate.getMonth());
    expect(clickedDate.getDate()).toBe(selectedDate.getDate());
});

it('사용자가 날짜를 클릭하면 해당 날짜가 선택 상태로 변경된다', () => {
    const mockOnChange = vi.fn();
    const customDate = new Date('2025-01-15');

    render(<Calendar date={customDate} onChange={mockOnChange} />);

    const targetDate = new Date('2025-01-20');
    const formattedLabel = new Intl.DateTimeFormat('ko', { dateStyle: 'full' }).format(targetDate);

    const selectedCell = screen.getByRole('button', { name: formattedLabel });
    fireEvent.click(selectedCell);

    expect(selectedCell).toHaveAttribute('aria-selected', 'true');
});

it('다음 달 버튼 클릭 시 월이 변경된다', () => {
    const mockOnChange = vi.fn();
    const customDate = new Date('2025-01-01');

    render(<Calendar date={customDate} onChange={mockOnChange} />);

    const nextBtn = screen.getByRole('button', { name: ARIA_LABELS.ko.nextButton });
    fireEvent.click(nextBtn);

    expect(screen.getByText('2025.02')).toBeInTheDocument();
});

it('이전 달 버튼 클릭 시 월이 변경된다', () => {
    const mockOnChange = vi.fn();
    const customDate = new Date('2025-01-01');

    render(<Calendar date={customDate} onChange={mockOnChange} />);

    const nextBtn = screen.getByRole('button', { name: ARIA_LABELS.ko.prevButton });
    fireEvent.click(nextBtn);

    expect(screen.getByText('2024.12')).toBeInTheDocument();
});
