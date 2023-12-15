import React from "react";
import styled from "@emotion/styled";

type Props = {
    children: React.ReactNode
};

const Divider = ({children}: Props) => {
    return (
        <DividerRow>
            {children}
        </DividerRow>
    )
};

const DividerRow = styled.li`
    display: flex;
    width: 100%;
    padding: 0.3rem 1.2rem 0.5rem 1.5rem;
    color: var(--sub-text-color);
`;

export default React.memo(Divider);