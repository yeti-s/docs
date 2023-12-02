import React from 'react';
import {  Global, css, useTheme } from '@emotion/react';

const GlobalStyle = () => {
  const theme = useTheme();
  return <Global styles={css`
    :root {
      --ease-in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
      --ease-in-quart: cubic-bezier(0.895, 0.03, 0.685, 0.22);
      --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      --ease-out-quart: cubic-bezier(0.165, 0.84, 0.44, 1);
      --ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
      --ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    :root {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      border-color: ${theme.borderColor};
      font-family: '-apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif';
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
      font-size: 30px;
      ${head}
    }
    h1::after {
      ${headBefore}
      border-bottom-color: ${theme.borderColor};
    }

    h2 {
      font-size: 25px;
      ${head}
    }
    h2::after {
      ${headBefore}
      border-bottom-color: ${theme.borderColor};
    }

    h3 {
      font-size: 20px;
      ${head}
    }
    h3::after {
      ${headBefore}
      border-bottom-color: ${theme.borderColor};
    }

    h4 {
      font-size: 17px;
      ${head}
    }

    h5 {
      font-size: 14px;
      ${head}
    }

    a {
      color: ${theme.text};
      trainsition: 0.2s;
      :hover, :focus {
        color: ${theme.primary}
      }
    }

    body {
      color: ${theme.text};
      background-color: ${theme.background};
    }

    svg {
      color: ${theme.text};
      transition: color 0.2s ease-out;
    }
    svg:hover, svg:focus, svg.is-active {
      color: ${theme.primary}
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1rem;
      z-index: 5;
      background: ${theme.background};
      transition: all 0.25s var(--ease-in-out-quad);
      border-bottom: 1px solid ${theme.borderColor};
    }

    /* custom class */
    .sidebar {
      background: ${theme.sidebar};
      border-right: 0.1rem solid ${theme.borderColor};
    }

  `} />
}

const head = `
  line-height: 1.125;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 16px;
`

const headBefore = `
  content: ' ';
  display: block;
  padding-top: 30px;
  margin-bottom: 40px;
  border-bottom: 1px solid;
`

export default GlobalStyle