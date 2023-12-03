import React from "react";
import styled from "@emotion/styled";
import UserIcon from "@src/static/UserIcon.mdx";
import Grid from "@src/components/atoms/grids/Grid";

type Props = {
    name: string;
};

const UserInfo = ({name}: Props) => {
    return (
        <Grid align={true}>
            <UserIconWrapper>
                <UserIcon/>
            </UserIconWrapper>
            {name}
        </Grid>
    )
};

const UserIconWrapper = styled.div`
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    padding-right: 0.4rem;
`;

export default UserInfo;