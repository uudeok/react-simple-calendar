import type { ReactNode } from 'react';
import { LocaleContext } from './LocaleContext';
import type { LocaleType } from '../types';

type Props = {
    children: ReactNode;
    locale: LocaleType;
};

const LocaleProvider = (props: Props) => {
    const { children, locale } = props;

    return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
};

export default LocaleProvider;
