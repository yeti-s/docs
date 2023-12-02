import React from "react";
import styled from "@emotion/styled";

const P = (props: JSX.IntrinsicElements['p']) => <MDX_P>{props.children}</MDX_P>;

const MDX_P = styled.p`
    margin-top: 0;
    margin-bottom: 16px;
`

export default P;