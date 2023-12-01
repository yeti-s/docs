import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { useTheme, Theme } from '@emotion/react';
import Logo from '@src/static/Logo';

const LogoWrapper = () => {
    const theme = useTheme();

    return (
        <StyledLogoWrapper>
            <LogoLink theme={theme} to="/">
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

const LogoLink = styled(Link)<{theme:Theme}>`
  display: block;
  text-decoration-line: none;
  color: ${p => p.theme.text};
  transition: color 0.2s ease-out;
  &:hover,
  &:focus {
    color: ${p => p.theme.primary};
  }
`;

export default LogoWrapper;