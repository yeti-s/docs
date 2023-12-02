import React, { useContext } from 'react';
import styled from '@emotion/styled';


import themeMode from '@src/styles/theme';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@src/styles/GlobalStyle';
import { GlobalStateContext } from '@src/context/ContextProvier';

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const isDarkMode = useContext(GlobalStateContext).isDarkMode;

    return (
        <>
            <ThemeProvider theme={isDarkMode ? themeMode.dark : themeMode.light}>
                <GlobalStyle />
                    {children}
            </ThemeProvider>
        </>
    )

};


export default Layout;