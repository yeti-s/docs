import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';

import LeftSidebar from '@src/components/Sidebar/Sidebar';

import mediaqueries from '@src/styles/media';
import themeMode from '@src/styles/theme';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@src/styles/GlobalStyle';
import Header from '@src/components/Header/Header';
import { GlobalStateContext } from '@src/context/ContextProvier';
import ContentTables from '@src/components/TableOfContent/TableOfContent';

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const [navOpen, setNavOpen] = useState(false);
    const isDarkMode = useContext(GlobalStateContext).isDarkMode;

    return (
        <>
            <ThemeProvider theme={isDarkMode ? themeMode.dark : themeMode.light}>
                <GlobalStyle />
                <Header navOpen={navOpen} setNavOpen={setNavOpen}/>
                <SiteWrapper>
                    <LeftSidebar navOpen={navOpen} />
                    {children}
                    {/* <ContentTables/> */}
                </SiteWrapper>
            </ThemeProvider>
        </>
    )

};


const SiteWrapper = styled.div`
    position: relative;
    display: flex;
    min-height: calc(100vh - 4.1rem);
    overflow-x: hidden;
`;


// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
//   tableOfContents: PropTypes.object.isRequired,
//   location: PropTypes.object.isRequired
// };

export default Layout;