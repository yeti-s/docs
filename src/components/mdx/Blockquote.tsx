import React from "react";
import styled from "@emotion/styled";
import { MDXCommon1 } from "./Common";

const Blockquote = (props: JSX.IntrinsicElements['blockquote']) => <MDXBlockquote>{props.children}</MDXBlockquote>;

const MDXBlockquote = styled.blockquote`
    padding: 0 1em;
`

export default Blockquote;