import { getDisplayDate } from '../../../utils/date';
import { datecell } from './style.css';

type Props = {
    date: Date;
};

export const DateCell = (props: Props) => {
    const { date } = props;

    return (
        <div className={datecell}>
            <span>{getDisplayDate(date)}</span>
        </div>
    );
};
