import React from 'react';
import styled from '@emotion/styled';

const CardContainer = ({children}) => {
    return <Container>{children}</Container>
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`

export default CardContainer;