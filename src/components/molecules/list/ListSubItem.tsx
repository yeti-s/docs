import React from "react";
import styled from "@emotion/styled";

type Props = {
    children: React.ReactNode
};

const ListSubItem = ({children}: Props) => {
    return (
        <ListSubRow>
            {children}
        </ListSubRow>
    )
};

const ListSubRow = styled.li`
    display: flex;
    width: 100%;
    padding: 0.3rem 0rem;
`;

export default React.memo(ListSubItem);