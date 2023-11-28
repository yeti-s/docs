interface HeadingStyle {
  fontFamily: string;
  lineHeight: string;
  fontWeight: string;
  mt: number;
  mb: number;
  '::before'?: {
    content: string;
    display: string;
    paddingTop: number;
    marginBottom: number;
    borderBottom: string;
    borderBottomColor: string;
  };
  fontSize?: number;
}

const headingBase: HeadingStyle = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
  mt: 0,
  mb: 3,
  '::before': {
    content: '" "',
    display: 'block',
    paddingTop: 30,
    marginBottom: 40,
    borderBottom: '1px solid',
    borderBottomColor: 'borderColor'
  }
};

interface Headings {
  h1: HeadingStyle;
  h2: HeadingStyle;
  h3: HeadingStyle;
  h4: HeadingStyle;
  h5: HeadingStyle;
  h6: HeadingStyle;
}

const headings: Headings = {
  h1: {
    ...headingBase,
    fontSize: 5
  },
  h2: {
    ...headingBase,
    fontSize: 4
  },
  h3: {
    ...headingBase,
    fontSize: 3
  },
  h4: {
    ...headingBase,
    fontSize: 2
  },
  h5: {
    ...headingBase,
    fontSize: 1
  },
  h6: {
    ...headingBase,
    fontSize: 0
  }
};

export default headings;