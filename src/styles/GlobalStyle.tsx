import React from 'react';
import {  Global, css, useTheme } from '@emotion/react';

const GlobalStyle = () => {
  const theme = useTheme();
  return <Global styles={css`


    :root {
      box-sizing: border-box;

      --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
      --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
      --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
      --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
      --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);

      --border-color: ${theme.borderColor};
      --background-color: ${theme.background};
      --text-color: ${theme.text};
      --primary: ${theme.primary};
      --code-background-color: ${theme.codeBackground};
      --codeblock-background-color: ${theme.codeBlockBackground};
      --blockquote-background-color: ${theme.blockquote};
      --siderbar-background-color: ${theme.sidebar};

      --error-color: rgb(95, 33, 32);
      --warning-color: rgb(102, 60, 0);
      --info-color: rgb(1, 67, 97);
      --success-color: rgb(30, 70, 32);
      --error-background-color: rgb(253, 237, 237);
      --warning-background-color: rgb(255 244 229);
      --info-background-color: rgb(229 246 253);
      --success-background-color: rgb(237 247 237);


    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      border-color: var(--border-color);
      background-color: var(--background-color);
      color: var(--text-color);
      font-family: -apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif;
    }

    main {
      transition: all 0.25s var(--ease-in-out-quad);
    }

    aside {
      transition: all 0.25s var(--ease-in-out-quad);
    }

    /* https://github.com/gatsbyjs/gatsby/issues/15486 */
    .gatsby-resp-image-image {
      width: 100%;
      height: 100%;
      margin: 0;
      vertical-align: middle;
      position: absolute;
      top: 0;
      left: 0;
    }

    h1 {
      border-bottom: 1px solid var(--border-color)
    }
    h2 {
      border-bottom: 1px solid var(--border-color)
    }

    a {
      color: var(--text-color);
      transition: all 0.25s var(--ease-in-out-quad);
      :hover, :focus {
        color: var(--primary)
      }
    }


    svg {
      color: var(--text-color);
      transition: all 0.25s var(--ease-in-out-quad);
    }
    svg:hover, svg:focus, svg.is-active {
      color: var(--primary);
    }

    code {
      font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
      font-size: 12px;
      background-color: var(--code-background-color);
    }

    tt {
      font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
      font-size: 12px;
    }

    samp {
      font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
      font-size: 12px;
    }

    hr {
      background-color: var(--border-color)
    }

    blockquote {
      margin: 0;
      border-left: 0.25em solid var(--blockquote-background-color);
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1rem;
      z-index: 5;
      background: var(--background-color);
      border-bottom: 1px solid var(--border-color);
      height: 4.1rem;
    }

    pre {
      text-align: left;
      margin: 1em 0;
      padding: 0.5em;
      border-radius: 6px;
      overflow: auto;
      background-color: var(--codeblock-background-color);
      font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
      font-size: 85%;
    }

    /* custom class */
    .sidebar {
      background: var(--siderbar-background-color);
      border-right: 0.1rem solid var(--border-color);
    }

    .token {
      transition: all 0.2s var(--ease-out-quart);
    }

    .token-line {
      transition: all 0.2s var(--ease-out-quart);
    }

  `} />
}

export default GlobalStyle