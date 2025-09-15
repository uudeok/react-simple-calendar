import { assignInlineVars } from '@vanilla-extract/dynamic';
import useCalendarContext from '../../../contexts/CaneldarContext';
import { navButton } from './NavButton.css';
import { customThemeVars, theme } from '../../../styles/theme.css';

type Props = {
    direction?: 'prev' | 'next';
    onClick?: () => void;
};

const NavButton = (props: Props) => {
    const { direction = 'next', onClick } = props;
    const { customTheme } = useCalendarContext();

    return (
        <button
            className={navButton}
            onClick={onClick}
            style={assignInlineVars({
                [customThemeVars.highlightBg]: customTheme?.highlightBg ?? theme.colors.hightlight,
            })}
        >
            {direction === 'prev' ? '<' : '>'}
        </button>
    );
};

export default NavButton;
