import colors from '@src/theme/colors';
import headings from '@src/theme/headings';
// import { Theme } from 'theme-ui';

type Breakpoint = [string, number];

interface Theme {
    initialColorMode: string;
    colors: typeof colors;
    fonts: {
        body: string;
        heading: string;
        monospace: string;
    };
    fontSizes: number[];
    fontWeights: {
        body: number;
        heading: number;
        bold: number;
    };
    lineHeights: {
        body: number;
        heading: number;
    };
    letterSpacings: {
        body: string;
        caps: string;
    };
    breakpoints: Breakpoint[];
    transition: string;
    styles: {
        root: {
            fontFamily: string;
            lineHeight: string;
            fontWeight: string;
        };
        p: {
            my: number;
        };
        a: {
            color: string;
            transition: string;
            ':hover,:focus': {
                color: string;
            };
        };
        pre: {
            fontFamily: string;
            fontSize: string;
            tabSize: number;
            hyphens: string;
            overflow: string;
            borderRadius: number;
            p: number;
            my: number;
        };
        inlineCode: {
            color: string;
            background: string;
            borderRadius: number;
            px: string;
            py: string;
        };
        table: {
            width: string;
            borderCollapse: string;
            borderSpacing: number;
        };
        th: {
            textAlign: string;
            borderBottomStyle: string;
        };
        td: {
            textAlign: string;
            borderBottomStyle: string;
        };
    };
}

const systemFonts = '-apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif';

const transition = '0.2s ease-out';

const theme: Theme = {
    initialColorMode: `dark`,
    colors,
    fonts: {
        body: systemFonts,
        heading: systemFonts,
        monospace: 'Menlo, monospace'
    },
    fontSizes: [12, 14, 16, 24, 28, 36, 48, 64],
    fontWeights: {
        body: 400,
        heading: 700,
        bold: 700
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125
    },
    letterSpacings: {
        body: 'normal',
        caps: '0.2em'
    },
    breakpoints: [
        ['phone_small', 320],
        ['phone', 376],
        ['phablet', 540],
        ['tablet', 735],
        ['desktop', 1070],
        ['desktop_medium', 1280],
        ['desktop_large', 1440]
    ],
    transition,
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
            ...headings
        },
        ...headings,
        p: {
            my: 4
        },
        a: {
            color: 'secondary',
            transition: `color ${transition}`,
            ':hover,:focus': {
                color: 'text'
            }
        },
        pre: {
            fontFamily: `"Operator Mono", monospace`,
            fontSize: '0.9rem',
            tabSize: 4,
            hyphens: `none`,
            overflow: `auto`,
            borderRadius: 6,
            p: 3,
            my: 4
        },
        inlineCode: {
            color: `primary`,
            background: `rgba(233, 218, 172, 0.15)`,
            borderRadius: 3,
            px: `0.4rem`,
            py: `0.2rem`
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid'
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid'
        }
    }
};

export default theme;