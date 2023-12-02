import React, { useContext, useEffect, useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import styled from '@emotion/styled';
import { GlobalStateContext } from '@src/context/ContextProvier';

const getLineNumWidth = (code: string) => {
    return (
        0.5 + // Start with a base value
        code.split(/\r\n|\r|\n/) // Split by newlines
            .length // Get number of lines
            .toString().length * // Get number of digits
        // Reduce by 30%
        0.7
    )
};

const lineNumLangs = ['js', 'jsx', 'ts', 'tsx', 'javascript', 'typescript', 'c++', 'cpp', 'python', 'java'];

const CodeBlock = (props: JSX.IntrinsicElements['pre']) => {
    const [code, setCode] = useState('');
    const [lang, setLang] = useState('');
    const [lineNumWidth, setLineNumWidth] = useState(0);
    const theme = useContext(GlobalStateContext).isDarkMode ? themes.vsDark : themes.vsLight;

    useEffect(() => {
        if (React.isValidElement(props.children)) {
            const className = props.children.props.className;
            const code = props.children.props.children.trim();
            setCode(code);
            
            if (className) {
                const matches = className.match(/language-(?<lang>.*)/);
                const lang = matches ? matches.groups.lang : '';
                const lineNumWidth = lineNumLangs.includes(lang) ? getLineNumWidth(code) : 0

                setLang(lang);
                setLineNumWidth(lineNumWidth);
            }
        }
    }, [props])

    return (
        <Highlight theme={theme} code={code} language={lang}>
            {({ className, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            <LineNoWrapper width={lineNumWidth}>
                                <LineNo width={lineNumWidth}>
                                    {i + 1}
                                </LineNo>
                            </LineNoWrapper>
                            {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
                        </div>
                    ))}
                </Pre>
            )}
        </Highlight>
    )
};

const LineNoWrapper = styled.span<{width: number}>`
display: ${p=>p.width > 0 ? 'inline-block' : 'none'};
width: ${p=>p.width}em;
user-select: none;
color: #687B81;
`;

const LineNo = styled.span<{width: number}>`
display: inline-block;
width: ${p=>p.width / 2}em;
user-select: none;
color: #687B81;
text-align: right;
`;

const Pre = styled.pre`
& .token-line {
    line-height: 1.3em;
    height: 1.3em;
}
`;

export default CodeBlock;