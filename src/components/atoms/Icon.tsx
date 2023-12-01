import React from 'react';
import styled from '@emotion/styled';
import { useTheme, Theme } from '@emotion/react';

type Props = {
    icon: React.ReactNode
    size?: number
}

const Icon = ({ icon, size = 22 }: Props) => {
    const theme = useTheme();
    return <IconWrapper size={size} theme={theme}>{icon}</IconWrapper>
};

const IconWrapper = styled.span<{ size: number, theme:Theme}>`
  display: inline-block;
  padding: 5px;
  width: ${p=>p.size}px;
  height: ${p=>p.size}px;
  color: ${p=>p.theme.text}
`;

export default Icon;