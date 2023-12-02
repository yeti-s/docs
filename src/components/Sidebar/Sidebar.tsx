import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import Navigation from '@src/components/organisms/navigation/Navigation';
import mediaqueries from '@src/styles/media';

type Prpos = {
    navOpen: boolean
}

const LeftSidebar = ({navOpen}: Prpos) => {
  
  return (
    <LeftSidebarWrapper>
      <LeftSidebarNav className='sidebar' navOpen={navOpen}>
        <Navigation />
      </LeftSidebarNav>
    </LeftSidebarWrapper>
  );
};

const LeftSidebarWrapper = styled.aside`
  margin-left: -16rem;
  flex: 0 0 16rem;
  font-size: 0.875rem;
  @media (min-width: 1024px) {
    margin-left: 0;
  }
`;

const LeftSidebarNav = styled.nav<{navOpen:boolean}>`
  top: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  width: 16rem;
  height: 100%;
  padding: 2rem 0;
  transform: ${p => (p.navOpen ? `translateX(16rem)` : null)};
`;

LeftSidebar.propTypes = {
  navOpen: PropTypes.bool
};

export default React.memo(LeftSidebar);