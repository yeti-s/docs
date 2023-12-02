import React from "react";
import styled from "@emotion/styled";
import { MDXCommon1 } from "./Common";

const List = (props: JSX.IntrinsicElements['ol']) => <MDXCommon1><MDXList>{props.children}</MDXList></MDXCommon1>;

const MDXList = styled.ol`
    padding-left: 2em;
`

export default List;