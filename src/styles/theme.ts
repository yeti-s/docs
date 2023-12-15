import { Theme } from "@emotion/react";

interface ThemeGroup {
  light: Theme;
  dark: Theme;
}
/**
 * @light theme
 */

export const light: Theme = {
  text: '#1F2328',
  subText: '#A7A7A7',
  background: '#fff',
  textBackground: '#ddd',
  primary: '#e63b19',
  secondary: '#c70d3a',
  sidebar: 'rgba(243, 243, 243, 0.38)',
  borderColor: 'rgba(0, 0, 0, 0.15)',
  codeBackground: 'rgba(175,184,193,0.2)',
  codeBlockBackground: '#f6f8fa',
  blockquote: '#d0d7de', 

  commentColor: '#1c813c',
  cardBackground: '#ffffff'
};

/**
 * @dark theme
 */

export const dark: Theme = {
  text: '#adbac7',
  subText: '#adbac7b5',
  background: '#22272e',
  textBackground: '#040404',
  primary: 'hsl(260, 100%, 80%)',
  secondary: 'hsl(290, 100%, 80%)',
  sidebar: '#2d333b',
  borderColor: 'rgba(255, 255, 255, 0.15)',
  codeBackground: 'rgba(99,110,123,0.4)',
  codeBlockBackground: '#2d333b',
  blockquote: '#444c56',

  commentColor: '#00b339',
  cardBackground: '#39393970'
};

const themeMode: ThemeGroup = {
  light,
  dark,
};

export default themeMode;