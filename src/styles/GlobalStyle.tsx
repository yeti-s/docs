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
      --sub-text-color: ${theme.subText};
      --primary: ${theme.primary};
      --code-background-color: ${theme.codeBackground};
      --codeblock-background-color: ${theme.codeBlockBackground};
      --blockquote-color: ${theme.blockquote};
      --blockquote-background-color: ${theme.blockquoteBackground};
      --siderbar-background-color: ${theme.sidebar};
      --comment-color: ${theme.commentColor};
      --card-background: ${theme.cardBackground};

      --error: ${theme.error};
      --info: ${theme.info};
      --warning: ${theme.warning};
      --success: ${theme.success};

      --error-color: rgb(95, 33, 32);
      --warning-color: rgb(102, 60, 0);
      --info-color: rgb(1, 67, 97);
      --success-color: rgb(30, 70, 32);
      --error-background-color: rgb(253, 237, 237);
      --warning-background-color: rgb(255 244 229);
      --info-background-color: rgb(229 246 253);
      --success-background-color: rgb(237 247 237);

      --header-height: 4.1rem;
      --sidebar-width: 16rem;
      --body-padding-top: calc(var(--header-height) + 2rem);

      --h1-size: 2rem;
      --h2-size: 1.5rem;
      --h3-size: 1.25em;
      --h4-size: 1em;
      --h5-size: 0.875em;
      --h6-size: 0.85em;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      line-height: 1.85rem;
      border-color: var(--border-color);
      background-color: var(--background-color);
      color: var(--text-color);
      font-family: sans-serif;
    }

    main {
      transition: all 0.25s var(--ease-in-out-quad);
    }

    aside {
      transition: margin 0.25s var(--ease-in-out-quad);
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
      border-bottom: 1px solid var(--border-color);
      font-size: var(--h1-size);
    }
    h2 {
      border-bottom: 1px solid var(--border-color);
      font-size: var(--h2-size);
    }
    h3 {
      font-size: var(--h3-size);
    }
    h4 {
      font-size: var(--h4-size);
    }
    h5 {
      font-size: var(--h5-size);
    }
    h6 {
      font-size: var(--h6-size);
    }

    button {
      color: inherit;
    }

    a {
      color: inherit;
      transition: all 0.25s var(--ease-in-out-quad);
      :hover, :focus {
        color: var(--primary)
      }
    }

    mark {
      color: inherit;
      background: linear-gradient(to top, #dbeaffc7 65%, transparent 65%);
    }


    svg {
      transition: all 0.25s var(--ease-in-out-quad);
    }
    svg:hover, svg:focus, svg.is-active {
      color: var(--primary);
    }

    code {
      padding: 0.2em 0.4em;
      margin: 0;
      font-size: 85%;
      white-space: break-spaces;
      border-radius: 6px;
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
      border-left: 0.25em solid var(--blockquote-color);
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
    
    .gatsby-resp-image-figcaption {
      text-align: center;
      font-style: italic;
      font-weight: bold;
      color: var(--text-color);
    }

    .sidebar {
      background: var(--siderbar-background-color);
      border-right: 0.1rem solid var(--border-color);
    }

    .navigation {
      background: var(--siderbar-background-color);
      border-right: 0.1rem solid var(--border-color);
    }

    .token {
      transition: all 0.2s var(--ease-out-quart);
    }

    .token-line {
      transition: all 0.2s var(--ease-out-quart);
    }

    .sub-text {
      color: var(--sub-text-color);
      transition: color 0.2s cubic-bezier(0.69, -0.02, 0.91, 0.4);
    }

    .hide_scroll::-webkit-scrollbar {
      display: none;
    }

  `} />
}

export default GlobalStyle