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
    display: flex;
    min-height: 100vh;
    overflow-x: hidden;
`;

const SiteContentWrapper = styled.div`
    flex-grow: 1;
    min-width: 20rem;
    display: flex;
    justify-content: center
`;

const SiteContent = styled.main<{ navOpen: boolean }>`
    padding: 2rem 1rem 2rem;
    transition: 0.25s var(--ease-in-out-quad);
    opacity: ${p => (p.navOpen ? 0.3 : 1)};
    transform: ${p => (p.navOpen ? `translateX(16rem)` : null)};
    width: 100%;
    ${mediaqueries.desktop_up`
        transform: translateX(0);
        opacity: 1;
        padding: 7rem 3rem 3rem;
        width: 90%
    `};
`;

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
//   tableOfContents: PropTypes.object.isRequired,
//   location: PropTypes.object.isRequired
// };

export default Layout;