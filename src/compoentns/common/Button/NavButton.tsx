import { navButton } from './NavButton.css';

type Props = {
    direction?: 'prev' | 'next';
    onClick?: () => void;
};

const NavButton = (props: Props) => {
    const { direction = 'next', onClick } = props;

    return (
        <button className={navButton} onClick={onClick}>
            {direction === 'prev' ? '<' : '>'}
        </button>
    );
};

export default NavButton;
