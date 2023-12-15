import React from 'react';
import styled from '@emotion/styled';

const GIF = ({src}) => <Layout><img src={src} alt="Otter dancing with a fish" /></Layout>;
const Layout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
export default GIF;