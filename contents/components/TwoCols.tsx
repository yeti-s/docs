import React from 'react';
import styled from '@emotion/styled';


const TwoCols = ({children}) => 
    <TwoColsWrapper>{children}</TwoColsWrapper>
;

const TwoColsWrapper = styled.div`
    width: 100%;
    display: flex;
`;


export default TwoCols;