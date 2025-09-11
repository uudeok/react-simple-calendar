import { createContext, useContext } from 'react';
import type { ThemeType } from '../types';

export type ThemeContextType = {
    theme: ThemeType;
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
    themeClass: string;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useThemeContext must be wrapped with ThemeProvider');
    }

    return context;
};

export default useThemeContext;
