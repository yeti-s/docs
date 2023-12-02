import React from "react";
import styled from "@emotion/styled";

import Layout from "@src/Layout";
import Navigation from "@src/components/organisms/navigation/Navigation";
import ContentTables from "@src/components/TableOfContent/TableOfContent";
import Header from "@src/components/Header/Header";

import type { PageProps } from "gatsby";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
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
    }
}

const MainTemplate = ({ data: { mdx }, children }: PageProps<QueryProps>) => {

    return (
        <Layout>
            <HeaderInterface>
                <Header navOpen={true} setNavOpen={()=>{}}/>
            </HeaderInterface>
            <BodyInterface>
                <NavigationInterface className="navigation">
                    <Navigation/>
                </NavigationInterface>
                <ContentInterface>
                    <ContentWrapper>
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
                    <ContentTables tableOfContents={mdx.tableOfContents.items}/>
                </TableInterface>
            </BodyInterface>
        </Layout>
    )
};

export const query = graphql`
query($id: String!) {
  mdx(id: {eq: $id}) {
    id
    body
    tableOfContents
    frontmatter {
      description
      title
    }
  }
}`;

const HeaderInterface = styled.header<{navOpen?: boolean }>`
`;

const BodyInterface = styled.div`
    position: relative;
    display: flex;
    min-height: calc(100vh - 4.1rem);
    overflow-x: hidden;
`;

const NavigationInterface = styled.aside<{navOpen?:boolean}>`
  margin-left: ${p=>p.navOpen ? '0' : '-16rem'};
  flex: 0 0 16rem;
  font-size: 0.875rem;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 2rem 0;
  @media (min-width: 1024px) {
    margin-left: 0;
  }
`;


const ContentWrapper = styled.main<{ wider?: boolean }>`
    padding: 2rem 1rem 2rem;
    width: 100%;
    @media (min-width: 760px) {
        width: ${p=>p.wider? '100%' : '60%'};
    }
`;

const ContentInterface = styled.main<{navOpen?: boolean}>`
    flex-grow: 1;
    min-width: 20rem;
    display: flex;
    justify-content: center;
    opacity: ${p => (p.navOpen ? 0.3 : 1)};
    // transform: ${p => (p.navOpen ? `translateX(16rem)` : null)};
`;


const TableInterface = styled.aside`
  font-size: 0.75rem;
  font-weight: bold;
  width: 0;
  @media (min-width: 1280px) {
    width: 16rem;
  }
`;



export default MainTemplate;