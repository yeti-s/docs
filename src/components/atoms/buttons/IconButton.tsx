import React, { MouseEventHandler } from "react";
import styled from "@emotion/styled";

type Props = {
    icon: React.ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const IconButton = ({icon, onClick}: Props) => <ButtonWrapper onClick={onClick}>{icon}</ButtonWrapper>;

const ButtonWrapper = styled.button`
    background: none;
    border: none;
    :hover {
        cursor: pointer;
    }
`

export default IconButton;