import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@src/theme/theme';
import IndexPage from '@src/pages';

import { ThemeUIProvider } from 'theme-ui'


interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            {/* <ThemeUIProvider theme={theme}> */}
                <div>123123</div>
                {children}
            {/* </ThemeUIProvider> */}
        </>
    )

};

export default Layout;