import NavNextButton from '../../common/Button/NavNextButton';
import NavPreButton from '../../common/Button/NavPrevButton';
import { header, date, navGroup } from './style.css';

type Props = {
    customPrevButton?: React.ReactNode;
    customNextButton?: React.ReactNode;
};

const CalendarHeader = (props: Props) => {
    const { customNextButton, customPrevButton } = props;

    return (
        <div className={header}>
            <div className={date}>
                <span>2025.09</span>
                <NavNextButton />
            </div>

            <div className={navGroup}>
                {customPrevButton ? customPrevButton : <NavPreButton />}
                {customNextButton ? customNextButton : <NavNextButton />}
            </div>
        </div>
    );
};

export default CalendarHeader;
