import React, { MouseEventHandler } from "react";
import styled from "@emotion/styled";

type Props = {
    trueIcon: React.ReactNode,
    falseIcon: React.ReactNode,
    state: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>
}

const ToggleButton = ({trueIcon, falseIcon, state, onClick}: Props) => {
    return (
        <IconButton onClick ={onClick}>
            {state ? trueIcon : falseIcon}
        </IconButton>
    )
};

const IconButton = styled.button`
    background: none;
    border: none;
    :hover {
        cursor: pointer;
    }
`

export default ToggleButton;