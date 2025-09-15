import useDropdownContext from '../../../contexts/DropdownContext';
import { optionItem } from './dropdown.css';

const DropdownOption = ({ value }: { value: string }) => {
    const { selectOption } = useDropdownContext();

    return (
        <div onClick={() => selectOption(value)} className={optionItem}>
            {value}
        </div>
    );
};

export default DropdownOption;
