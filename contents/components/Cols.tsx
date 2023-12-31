import React from 'react';
import styled from '@emotion/styled';


const Cols = ({children}) => 
    <ColWrapper> {children} </ColWrapper>
;

const ColWrapper = styled.div`
    width: 50%;
    padding: 1rem;
`

export default Cols;