import React from 'react';
import styled from '@emotion/styled';

const Image = ({src}) => <Layout><ImageWrapper src={src}/></Layout>;
const ImageWrapper = styled.img`
    width: 100%;
`
const Layout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
export default Image;