import React from 'react';
import styled from '@emotion/styled';

const ColorText = ({color, children}) => {
    return <ColorWrapper color={color}>{children}</ColorWrapper>
}

const ColorWrapper = styled.div`
    display: inline;
    color: ${props=> props.color};
`

export default ColorText;