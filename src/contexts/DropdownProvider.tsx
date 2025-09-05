import { useState, type ReactNode } from 'react';
import { DropdownContext } from './DropdownContext';
import DropdownSelect from '../compoentns/common/Dropdown/Select';
import DropdownOption from '../compoentns/common/Dropdown/Option';
import DropdownOptions from '../compoentns/common/Dropdown/Options';

const Dropdown = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (value: string) => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <DropdownContext.Provider value={{ isOpen, toggleDropdown, selectedOption, selectOption }}>
            {children}
        </DropdownContext.Provider>
    );
};

export { Dropdown, DropdownSelect, DropdownOption, DropdownOptions };
