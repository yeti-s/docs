import React, { useEffect } from "react";
import styled from "@emotion/styled";

import Layout from "@src/Layout";
import Navigation from "@src/components/organisms/navigation/Navigation";
import TableOfContent from "@src/components/organisms/toc/TableOfContent";
import Header from "@src/components/organisms/header/Header";
import ContentTitle from "@src/components/organisms/content/ContentTitle";

import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { createAtom, TOGGLE_WIDE, TOGGLE_NAV, SET_TABLE_OF_CONTENT } from "@src/context/atoms";
import MediaSize from "@src/styles/media";
import 'katex/dist/katex.min.css'

/* ---custom MDX components--- */
import P from "@src/components/mdx/Paragraph";
import { H1, H2, H3, H4, H5, H6 } from "@src/components/mdx/Heading";
import ThematicBreak from "@src/components/mdx/ThematicBreak";
import Blockquote from "@src/components/mdx/Blockquote";
import List from "@src/components/mdx/List";
import UnorderedList from "@src/components/mdx/UnorderedList";
import CodeBlock from "@src/components/mdx/CodeBlock";
import Code from "@src/components/mdx/Code";


type Item = {
    url:string,
    title:string,
    index?:number,
    depth?:number
    items?:Array<Item>
};

type QueryProps = {
    mdx: {
        id: string,
        frontmatter: {
            title: string,
            description: string
        },
        tableOfContents: {
            items: Array<Item>
        },
        body: string
    },
    file: {
        modifiedTime: string
    }
}

const MainTemplate = ({ data: { mdx, file }, children }: PageProps<QueryProps>) => {
    const isWide = useRecoilValue(createAtom(TOGGLE_WIDE, false));
    const isNavOpened = useRecoilValue(createAtom(TOGGLE_NAV, false));
    const tocSetter = useSetRecoilState(createAtom(SET_TABLE_OF_CONTENT, mdx.tableOfContents.items));

    useEffect(() => {
        tocSetter(mdx.tableOfContents.items);
    }, [mdx])

    return (
        <Layout>
            <HeaderInterface>
                <Header/>
            </HeaderInterface>
            <BodyInterface>
                <NavigationInterface className="navigation" isNavOpened={isNavOpened}>
                    <Fixer className="hide_scroll">
                        <Navigation/>
                    </Fixer>
                </NavigationInterface>
                <ContentInterface isNavOpened={isNavOpened}>
                    <ContentWrapper isWide={isWide}>
                        <ContentTitle title={mdx.frontmatter.title} modifiedTime={file.modifiedTime}/>
                        <MDXProvider components={{
                            p: P,
                            h1: H1,
                            h2: H2,
                            h3: H3,
                            h4: H4,
                            h5: H5,
                            h6: H6,
                            hr: ThematicBreak,
                            blockquote: Blockquote,
                            ul: UnorderedList,
                            ol: List,
                            pre: CodeBlock,
                            code: Code
                        }}>
                            {children}
                        </MDXProvider>
                    </ContentWrapper>
                </ContentInterface>
                <TableInterface>
                    <TableFixer>
                        <TableOfContent/>
                    </TableFixer>
                </TableInterface>
            </BodyInterface>
        </Layout>
    )
};

export const query = graphql`
query($id: String!, $relativePath: String!) {
    mdx(id: {eq: $id}) {
        id
        body
        tableOfContents
        frontmatter {
                description
                title
        }
    }
    file(relativePath: {eq: $relativePath}) {
        modifiedTime
    }
}`;

const HeaderInterface = styled.div`
    display: flex;
    height: var(--header-height);
    z-index: 5;
    padding: 0.6rem 2rem 0.6rem 0.6rem;
    position: fixed;
    width: 100%;
    background: var(--background-color);
    border-bottom: 1px solid var(--border-color);
`;

const BodyInterface = styled.div`
    position: relative;
    display: flex;
    min-height: calc(100vh - var(--header-height));
    overflow-x: hidden;
`;

const NavigationInterface = styled.aside<{isNavOpened?:boolean}>`
    margin-left: ${p=>p.isNavOpened ? '0' : 'calc(-1 * var(--sidebar-width))'};
    flex: 0 0 var(--sidebar-width);
    font-size: 0.875rem;
    overflow-x: hidden;
    overflow-y: auto;
    transition: margin 0.25s var(--ease-in-out-quad);
    @media (min-width: ${MediaSize.IPAD_PRO}px) {
        margin-left: 0;
    }
`;

const Fixer = styled.nav`
    overflow-y: auto;
    height: 100%;
    padding: var(--body-padding-top) 0 3rem 0;
    position: fixed;
    width: var(--sidebar-width);
    &:-webkit-scrollbar {
        display: none;
    }
`


const ContentWrapper = styled.main<{isWide: boolean }>`
    padding: 1rem;
    width: 100%;
    @media (min-width: ${MediaSize.IPAD_AIR}px) {
        width: ${p=>p.isWide? '90%' : '65%'};
    }
`;

const ContentInterface = styled.main<{isNavOpened?: boolean}>`
    width: calc(100% - 2 * var(--sidebar-width));
    padding-top: var(--body-padding-top);
    flex-grow: 1;
    min-width: 20rem;
    display: flex;
    justify-content: center;
    opacity: ${p => (p.isNavOpened ? 0.3 : 1)};
    @media (min-width: ${MediaSize.IPAD_PRO}px) {
        opacity: 1;
    }
`;


const TableInterface = styled.aside`
    font-size: 0.75rem;
    font-weight: bold;
    overflow-x: hidden;
    overflow-y: auto;
    padding-top: var(--body-padding-top);
    width: 0;
    transition: width 0.25s var(--ease-in-out-quad);
    @media (min-width: ${MediaSize.HD}px) {
        width: var(--sidebar-width);
    }
`;

const TableFixer = styled(Fixer)`
    padding: 0 1rem 0 1rem;
`


export default MainTemplate;