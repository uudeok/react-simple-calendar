import { assignInlineVars } from '@vanilla-extract/dynamic';
import useCalendarContext from '../../../contexts/CaneldarContext';
import { navButton } from './NavButton.css';
import { customThemeVars, theme } from '../../../styles/theme.css';
import { ARIA_LABELS } from '../../../constants/lang';
import useLocaleContext from '../../../contexts/LocaleContext';

type Props = {
    direction?: 'prev' | 'next';
    onClick?: () => void;
};

const NavButton = (props: Props) => {
    const { direction = 'next', onClick } = props;
    const { customTheme } = useCalendarContext();

    const locale = useLocaleContext();

    return (
        <button
            aria-label={direction === 'prev' ? ARIA_LABELS[locale].prevButton : ARIA_LABELS[locale].nextButton}
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
