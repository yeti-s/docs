import React from 'react';
import styled from '@emotion/styled';

type Props = {
    icon: React.ReactNode
    size?: number
}

const Icon = ({ icon, size = 22 }: Props) => {
    return <IconWrapper size={size}>{icon}</IconWrapper>
};

const IconWrapper = styled.span<{ size: number}>`
  display: inline-block;
  padding: 5px;
  width: ${p=>p.size}px;
  height: ${p=>p.size}px;
`;

export default Icon;