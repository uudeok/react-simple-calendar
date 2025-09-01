import { header, navBtn, next, nextDouble, prev, prevDouble, date } from './style.css';

const CalendarHeader = () => {
    return (
        <div className={header}>
            <button className={`${navBtn} ${prev} ${prevDouble}`} aria-label="이전 달"></button>
            <div className={date}>2025.09</div>
            <button className={`${navBtn} ${next} ${nextDouble}`} aria-label="다음 달" />
        </div>
    );
};

export default CalendarHeader;
