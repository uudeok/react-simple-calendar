import { createContext, useContext } from 'react';
import type { LocaleType } from '../types';
import { LOCALE } from '../constants';

export const LocaleContext = createContext<LocaleType>(LOCALE.ko);

const useLocaleContext = () => {
    const context = useContext(LocaleContext);

    if (!context) {
        throw new Error('useLocaleContext must be wrapped with LocaleProvider ');
    }

    return context;
};

export default useLocaleContext;
