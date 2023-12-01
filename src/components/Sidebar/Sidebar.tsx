import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import Navigation from '@src/components/Sidebar/Navigation';
import mediaqueries from '@src/styles/media';
import { useTheme, Theme } from '@emotion/react';

type Prpos = {
    navOpen: boolean
}

const LeftSidebar = ({navOpen}: Prpos) => {
  const theme = useTheme();
  
  return (
    <LeftSidebarWrapper>
      <LeftSidebarNav theme={theme} navOpen={navOpen}>
        <Navigation />
      </LeftSidebarNav>
    </LeftSidebarWrapper>
  );
};

const LeftSidebarWrapper = styled.aside`
  margin-left: -16rem;
  flex: 0 0 16rem;
  font-size: 0.875rem;
  ${mediaqueries.desktop_up`
    margin-left: 0;
  `};
`;

const LeftSidebarNav = styled.nav<{theme:Theme, navOpen:boolean}>`
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  width: 16rem;
  height: 100%;
  padding: 1rem 0;
  border-right: 0.1rem solid;
  border-right-color: ${p => p.theme.borderColor};
  
  background: ${p => p.theme.sidebar};
  transition: 0.25s var(--ease-in-out-quad);
  transform: ${p => (p.navOpen ? `translateX(16rem)` : null)};
  ${mediaqueries.desktop_up`
    transform: translateX(0);
    padding: 6.6rem 0 1rem;
  `};
`;

LeftSidebar.propTypes = {
  navOpen: PropTypes.bool
};

export default React.memo(LeftSidebar);