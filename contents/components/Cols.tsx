import React from 'react';
import styled from '@emotion/styled';
import MediaSize from "@src/styles/media";

const Cols = ({size, children}) => 
    <ColWrapper size={size}> {children} </ColWrapper>
;

const ColWrapper = styled.div<{size:number}>`
    width: ${p=>p.size}%;
    padding: 1rem;
    @media (max-width: ${MediaSize.SD}px) {
        width: 100%;
    }
`

export default Cols;