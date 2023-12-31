import React from 'react';
import styled from '@emotion/styled';


const TwoCols = ({align, children}) => 
    <TwoColsWrapper align={align}>{children}</TwoColsWrapper>
;

const TwoColsWrapper = styled.div<{align?:string}>`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: ${p=>p.align ? p.align : 'unset'};
`;


export default TwoCols;