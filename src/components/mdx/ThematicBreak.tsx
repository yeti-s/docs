import React from "react";
import styled from "@emotion/styled";

const ThematicBreak = (props:JSX.IntrinsicElements['hr']) => <MDXThematicBreak>{props.children}</MDXThematicBreak>;

const MDXThematicBreak = styled.hr`
    height: 1px;
    padding: 0;
    margin: 24px 0;
    border: 0;
`;

export default ThematicBreak;