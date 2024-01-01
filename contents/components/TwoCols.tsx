import React from 'react';
import styled from '@emotion/styled';
import MediaSize from "@src/styles/media";

const TwoCols = ({align, children}) => 
    <TwoColsWrapper align={align}>{children}</TwoColsWrapper>
;

const TwoColsWrapper = styled.div<{align?:string}>`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: ${p=>p.align ? p.align : 'unset'};
    @media (max-width: ${MediaSize.SD}px) {
        flex-direction: column;
    }
`;


export default TwoCols;