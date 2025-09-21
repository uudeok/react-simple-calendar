import { render, screen } from '@testing-library/react';
import DayOfWeek from '../Calendar/DayOfWeek/DayOfWeek';
import '@testing-library/jest-dom';

const WEEK = {
    ko: ['일', '월', '화', '수', '목', '금', '토'],
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

describe('DayOfWeek', () => {
    it('customWeek 없으면 default WEEK 가 렌더링 된다.', () => {
        render(<DayOfWeek />);

        WEEK.ko.forEach((day) => {
            expect(screen.getByText(day)).toBeInTheDocument();
        });
    });

    it('customWeek 가 있으면 그게 렌더링 된다.', () => {
        const custom = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

        render(<DayOfWeek customWeek={custom} />);

        custom.forEach((day) => {
            expect(screen.getByText(day)).toBeInTheDocument();
        });
    });

    it('startOfWeek 가 있으면 요일 순서가 회전됨', () => {
        render(<DayOfWeek startOfWeek={1} />);

        const spans = WEEK.ko.map((_, idx) => screen.getByLabelText(`day-${idx}`));

        const expectedOrder = ['월', '화', '수', '목', '금', '토', '일'];
        spans.forEach((span, i) => expect(span.textContent).toBe(expectedOrder[i]));
    });
});
