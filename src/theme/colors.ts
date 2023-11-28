type ColorMode = {
  text: string;
  background: string;
  textBackground: string;
  primary: string;
  secondary: string;
  sidebar: string;
  borderColor: string;
};

type ColorScheme = {
  text: string;
  background: string;
  textBackground: string;
  primary: string;
  secondary: string;
  sidebar: string;
  borderColor: string;
  modes: {
    dark: ColorMode;
  };
};

const colorScheme: ColorScheme = {
  text: '#000',
  background: '#fff',
  textBackground: '#ddd',
  primary: '#e63b19',
  secondary: '#c70d3a',
  sidebar: 'rgba(243, 243, 243, 0.38)',
  borderColor: 'rgba(0, 0, 0, 0.15)',
  modes: {
    dark: {
      text: '#fff',
      background: 'hsl(230,25%,18%)',
      textBackground: '#040404',
      primary: 'hsl(260, 100%, 80%)',
      secondary: 'hsl(290, 100%, 80%)',
      sidebar: 'hsla(230, 20%, 0%, 20%)',
      borderColor: 'rgba(255, 255, 255, 0.15)'
    }
  }
};

export default colorScheme;