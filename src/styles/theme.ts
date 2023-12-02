import { Theme } from "@emotion/react";

interface ThemeGroup {
  light: Theme;
  dark: Theme;
}
/**
 * @light theme
 */

export const light: Theme = {
  text: '#000',
  background: '#fff',
  textBackground: '#ddd',
  primary: '#e63b19',
  secondary: '#c70d3a',
  sidebar: 'rgba(243, 243, 243, 0.38)',
  borderColor: 'rgba(0, 0, 0, 0.15)',
  codeBackground: '#eff1f3',
  blockquote: '#d0d7de' 
};

/**
 * @dark theme
 */

export const dark: Theme = {
  text: '#fff',
  background: 'hsl(230,25%,18%)',
  textBackground: '#040404',
  primary: 'hsl(260, 100%, 80%)',
  secondary: 'hsl(290, 100%, 80%)',
  sidebar: 'hsla(230, 20%, 0%, 20%)',
  borderColor: 'rgba(255, 255, 255, 0.15)',
  codeBackground: '#343942',
  blockquote: '#444c56' 
};

const themeMode: ThemeGroup = {
  light,
  dark,
};

export default themeMode;