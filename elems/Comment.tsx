import React from 'react';
import styled from '@emotion/styled';

const Comment = ({children}) => {
    return <ColorWrapper>{children}</ColorWrapper>
}

const ColorWrapper = styled.code`
    display: block;
    width: 100%;
    padding: 0.2rem 0.4rem 0rem;
    color: var(--comment-color);
`

export default Comment;