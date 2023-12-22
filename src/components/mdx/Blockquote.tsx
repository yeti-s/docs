import React from "react";
import styled from "@emotion/styled";
import { MDXCommon1 } from "./Common";

const Blockquote = (props: JSX.IntrinsicElements['blockquote']) => 
    <MDXBlockquote><MDXBlockquoteBackground>{props.children}</MDXBlockquoteBackground></MDXBlockquote>;

const MDXBlockquote = styled.blockquote`
    padding: 0 1em;
`

const MDXBlockquoteBackground = styled.div`
    background-color: var(--blockquote-background-color);
`

export default Blockquote;