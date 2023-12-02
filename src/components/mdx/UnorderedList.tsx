import React from "react";
import styled from "@emotion/styled";
import { MDXCommon1 } from "./Common";

const UnorderedList = (props: JSX.IntrinsicElements['ul']) => <MDXCommon1><MDXUnorderedList>{props.children}</MDXUnorderedList></MDXCommon1>;

const MDXUnorderedList = styled.ul`
    padding-left: 2em;
`

export default UnorderedList;