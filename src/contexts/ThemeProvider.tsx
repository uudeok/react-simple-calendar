import { useEffect, useMemo, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import type { ThemeType } from '../types';
import { THEME } from '../constants';
import { darkTheme, lightTheme } from '../styles/theme.css';

type ThemeProviderProps = {
    defaultTheme?: ThemeType;
    children: React.ReactNode;
};

const ThemeProvider = ({ defaultTheme = THEME.LIGHT, children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeType>(defaultTheme);

    useEffect(() => {
        setTheme(defaultTheme);
    }, [defaultTheme]);

    const themeClass = theme === THEME.DARK ? darkTheme : lightTheme;

    const value = useMemo(() => ({ theme, setTheme, themeClass }), [theme, themeClass]);

    return <ThemeContext.Provider value={value}> {children}</ThemeContext.Provider>;
};

export default ThemeProvider;
