import React, { MouseEventHandler } from 'react';
import styled from '@emotion/styled';

type Props = {
    icon1: React.ReactNode,
    icon2: React.ReactNode,
    state: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>
}

const ToggleButton = ({ icon1, icon2, state, onClick} :Props) => {
  return (
    <StyledButtonCollapse onClick={onClick}>
        { state ? <Icon>{icon1}</Icon> :<Icon>{icon2}</Icon>}
    </StyledButtonCollapse>
  );
};

const Icon = styled.span`
  display: inline-block;
  padding: 5px;
  width: 22px;
  height: 22px;
`;

const StyledButtonCollapse = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 0.8rem;
  height: 37px;
  background: none;
  border: 0;
  cursor: pointer;
  font-size: 1rem;
`;

export default ToggleButton;