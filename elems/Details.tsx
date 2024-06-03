import React from 'react';
import styled from '@emotion/styled';

const Details = ({title, children}) => 
    <DetailsWrapper>
        <details>
            <summary>{title}</summary>
            <ChildrenWrapper>
                {children}
            </ChildrenWrapper>
        </details>
    </DetailsWrapper>


const DetailsWrapper = styled.summary`
    margin-bottom: 16px;
    margin-left: 1rem;
`

const ChildrenWrapper = styled.div`
    margin-top: -16px;
`

export default Details;