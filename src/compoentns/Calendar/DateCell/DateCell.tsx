import { datecell } from './style.css';

type Props = {
    date: number;
};

export const DateCell = (props: Props) => {
    const { date } = props;

    return (
        <div className={datecell}>
            <span>{date}</span>
        </div>
    );
};
