import { css } from '@emotion/react';
import {theme} from '@src/theme/theme';

/**
 * This file was inspired by https://github.com/narative/gatsby-theme-novela
 */

const toEm = (size:number) => `${size / 16}em`;

export type MediaQueries = {[label: string]: any};

/**
 * All breakpoints can be found inside of theme.breakpoints.
 * Each is turned in to a min + 1 and max-width version.
 *
 * There are also break points to cover coarse and fine pointer devices
 *
 * @example
 *
 *    ${mediaqueries.phone` width: 100px; `};
 *    ${mediaqueries.tablet_up` width: 200px; `};
 */

const mediaqueries:MediaQueries = theme.breakpoints.reduce(
  (acc, [label, size], i) => ({
    ...acc,
    // max-width media query e.g. mediaqueries.desktop
    [label]: (...args: any) => css`
      @media (max-width: ${toEm(size)}) {
        ${css(...args)};
      }
    `,
    // min-width media query e.g. mediaqueries.desktop_up
    // This is the breakpoint prior's size +1
    [`${label}_up`]: (...args: any) => css`
      @media (min-width: ${toEm(theme.breakpoints[i - 1][1] + 1)}) {
        ${css(...args)};
      }
    `
  }),
  {}
);

export default mediaqueries;