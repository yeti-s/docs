import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Logo from '@src/static/Logo';

const LogoButton = () => {
    return (
        <LogoLink to="/">
            <Logo/>
        </LogoLink>
    )
};


const LogoLink = styled(Link)`
  display: block;
  text-decoration-line: none;
  font-size: 1.3rem
`;

export default LogoButton;