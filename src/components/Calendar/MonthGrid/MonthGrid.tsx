import { monthsGrid, monthItem } from './style.css';

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MonthGrid = () => {
    return (
        <ul className={monthsGrid}>
            {MONTHS.map((month) => (
                <li key={month} className={monthItem}>
                    {month}월
                </li>
            ))}
        </ul>
    );
};

export default MonthGrid;
