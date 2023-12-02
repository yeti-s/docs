import React from "react";
import styled from "@emotion/styled";

const Code = (props: JSX.IntrinsicElements['code']) => <MDX_Code>{props.children}</MDX_Code>;

const MDX_Code = styled.code`
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    border-radius: 6px;
`;

export default Code;
