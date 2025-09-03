import { navButton } from './NavButton.css';

type Props = {
    direction?: 'prev' | 'next';
};

const NavButton = (props: Props) => {
    const { direction = 'next' } = props;

    return <button className={navButton}>{direction === 'prev' ? '<' : '>'}</button>;
};

export default NavButton;
