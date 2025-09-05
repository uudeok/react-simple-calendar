import useDropdownContext from '../../../contexts/DropdownContext';
import { selectButton } from './dropdown.css';

type Props = {
    placeholder?: string;
};

const DropdownSelect = (props: Props) => {
    const { placeholder } = props;

    const { toggleDropdown, selectedOption } = useDropdownContext();

    return (
        <button onClick={toggleDropdown} className={selectButton}>
            {selectedOption ?? placeholder}
        </button>
    );
};

export default DropdownSelect;
