import { header, date, navButton } from './style.css';

type Props = {
    customPrevButton?: React.ReactNode;
    customNextButton?: React.ReactNode;
};

const CalendarHeader = (props: Props) => {
    const { customNextButton, customPrevButton } = props;

    return (
        <div className={header}>
            {customPrevButton ? customPrevButton : <button className={navButton}>&lt;</button>}
            <div className={date}>2025.09</div>
            {customNextButton ? customNextButton : <button className={navButton}>&gt;</button>}
        </div>
    );
};

export default CalendarHeader;
