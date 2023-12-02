import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import Logo from '@src/static/Logo';

const LogoWrapper = () => {
    return (
        <StyledLogoWrapper>
            <LogoLink to="/">
              <Logo/>
            </LogoLink>
        </StyledLogoWrapper>
    )
};

const StyledLogoWrapper = styled.div`
  p {
    margin: 0;
    font-size: 1.6rem;
  }
`;

const LogoLink = styled(Link)`
  display: block;
  text-decoration-line: none;
`;

export default LogoWrapper;