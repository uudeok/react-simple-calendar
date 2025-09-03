import NavButton from '../../common/Button/NavButton';
import { layout, monthLabel, navGroup } from './style.css';

type Props = {
    customPrevButton?: React.ReactNode;
    customNextButton?: React.ReactNode;
};

const CalendarNav = (props: Props) => {
    const { customNextButton, customPrevButton } = props;

    return (
        <div className={layout}>
            <div className={monthLabel}>
                <span>2025.09</span>
                <NavButton />
            </div>

            <div className={navGroup}>
                {customPrevButton ? customPrevButton : <NavButton direction="prev" />}
                {customNextButton ? customNextButton : <NavButton />}
            </div>
        </div>
    );
};

export default CalendarNav;
