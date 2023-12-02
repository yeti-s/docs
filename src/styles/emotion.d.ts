import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        text: string;
        background: string;
        textBackground: string;
        primary: string;
        secondary: string;
        sidebar: string;
        borderColor: string;
        codeBackground: string;
        blockquote: string;
    }
}