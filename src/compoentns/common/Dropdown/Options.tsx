import useDropdownContext from '../../../contexts/DropdownContext';
import { optionsList } from './dropdown.css';

const DropdownOptions = ({ children }: { children: React.ReactNode }) => {
    const { isOpen } = useDropdownContext();

    if (!isOpen) return null;

    return <div className={optionsList}>{children}</div>;
};

export default DropdownOptions;
