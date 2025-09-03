import { datecell } from './style.css';

type Props = {
    cell: number;
};

export const DateCell = (props: Props) => {
    const { cell } = props;

    return (
        <div className={datecell}>
            <span>{cell}</span>
        </div>
    );
};
