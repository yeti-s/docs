import React from "react";
import type { GatsbyBrowser } from "gatsby"
import { ContextProvider } from './src/context/ContextProvier';
import { RecoilRoot } from "recoil";

export const wrapRootElement: GatsbyBrowser["wrapPageElement"] = ({element}) => {
    return (
        <ContextProvider>
            <RecoilRoot>
                {element}
            </RecoilRoot>
        </ContextProvider>
    )

}