import React from 'react';
import styled from '@emotion/styled';


const Cols = ({size, children}) => 
    <ColWrapper size={size}> {children} </ColWrapper>
;

const ColWrapper = styled.div<{size:number}>`
    width: ${p=>p.size}%;
    padding: 1rem;
`

export default Cols;