import React from "react";
import styled from "@emotion/styled";

const H1 = (props: JSX.IntrinsicElements['h1']) => <MDX_Heading><MDX_H1 id={props.id}>{props.children}</MDX_H1></MDX_Heading>;
const H2 = (props: JSX.IntrinsicElements['h2']) => <MDX_Heading><MDX_H2 id={props.id}>{props.children}</MDX_H2></MDX_Heading>;
const H3 = (props: JSX.IntrinsicElements['h3']) => <MDX_Heading><MDX_H3 id={props.id}>{props.children}</MDX_H3></MDX_Heading>;
const H4 = (props: JSX.IntrinsicElements['h4']) => <MDX_Heading><MDX_H4 id={props.id}>{props.children}</MDX_H4></MDX_Heading>;
const H5 = (props: JSX.IntrinsicElements['h5']) => <MDX_Heading><MDX_H5 id={props.id}>{props.children}</MDX_H5></MDX_Heading>;
const H6 = (props: JSX.IntrinsicElements['h6']) => <MDX_Heading><MDX_H6 id={props.id}>{props.children}</MDX_H6></MDX_Heading>;

const MDX_H1 = styled.h1`
    padding-bottom: 0.3em;
    font-size: 2em;
`;

const MDX_H2 = styled.h1`
    padding-bottom: 0.3em;
    font-size: 1.5em;
`;

const MDX_H3 = styled.h1`
    font-size: 1.25em;
`;

const MDX_H4 = styled.h1`
    font-size: 1em;
`;

const MDX_H5 = styled.h1`
    font-size: 0.875em;
`;

const MDX_H6 = styled.h1`
    font-size: 0.85em;
`;

// github common heading style
const MDX_Heading = styled.div`
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: var(--base-text-weight-semibold, 600);
    line-height: 1.25;
`

export {H1, H2, H3, H4, H5, H6};