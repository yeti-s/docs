import React from "react";
import styled from '@emotion/styled';

const Background = styled.span`
    border-radius: 0.25rem;
    background-color: ${p => p.theme.colors.textBackground};
    padding: 0.2rem;
`;

const BackgroundText = ({children}) => {
    return <Background>{children}</Background>
};
export default BackgroundText;