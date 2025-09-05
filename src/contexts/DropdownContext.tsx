import { createContext, useContext } from 'react';

type DropdownContextType = {
    isOpen: boolean;
    toggleDropdown: () => void;
    selectedOption: string | null;
    selectOption: (value: string) => void;
};

export const DropdownContext = createContext<DropdownContextType | null>(null);

const useDropdownContext = () => {
    const context = useContext(DropdownContext);
    if (!context) {
        throw new Error('useDrodownContext must be wrapped in DropdownProvider');
    }

    return context;
};

export default useDropdownContext;
