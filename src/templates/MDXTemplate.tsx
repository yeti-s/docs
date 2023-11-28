import React, { useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql, Link } from "gatsby";
import Layout from "@src/layouts/Layout";
import { MDXProvider } from "@mdx-js/react";


type TableOfContentsItem = {
    url: string,
    title: string
}

type QueryProps = {
    mdx: {
        id: string,
        frontmatter: {
            title: string,
            description: string
        },
        tableOfContents: {
            items: Array<TableOfContentsItem>
        },
        body: string
    }

}

const MDXTemplate = ({ data: { mdx }, children }: PageProps<QueryProps>) => {

    useEffect(() => {
        console.log(mdx)
    }, [mdx])

    return (
        <Layout>
            <MDXProvider>
                {children}
            </MDXProvider>
        </Layout>

  ); 
} 


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


export default MDXTemplate;