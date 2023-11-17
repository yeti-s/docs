import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github/index'
import styled from '@emotion/styled';

function getLineNoWidth(code) {
    return (
        0.5 + // Start with a base value
        code.split(/\r\n|\r|\n/) // Split by newlines
            .length // Get number of lines
            .toString().length * // Get number of digits
        // Reduce by 30%
        0.7
    )
}

export default (props) => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    const language = matches ? matches.groups.lang : undefined;

    const code = props.children.props.children.trim();
    const lineNoWidth = getLineNoWidth(code)
    const LineNoWrapper = styled.span`
        display: inline-block;
        width: ${lineNoWidth}em;
        user-select: none;
        color: #687B81;
    `;
    const LineNo = styled.span`
        display: inline-block;
        width: ${lineNoWidth / 2}em;
        user-select: none;
        color: #687B81;
        text-align: right;
    `;
    const Pre = styled.pre`
        text-align: left;
        margin: 1em 0;
        padding: 0.5em;
        overflow: auto;
        font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
        font-size: 85%;
        & .token-line {
            line-height: 1.3em;
            height: 1.3em;
        }
    `;

    return (
        <Highlight {...defaultProps} theme={theme} code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            <LineNoWrapper><LineNo>{i + 1}</LineNo></LineNoWrapper>
                            {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
                        </div>
                    ))}
                </Pre>
            )}
        </Highlight>
    )
}