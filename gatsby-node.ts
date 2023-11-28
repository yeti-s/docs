import { GatsbyNode, graphql } from "gatsby";
import { resolve } from 'path'
// import MDXTemplate from "./src/templates/MDXTemplate";
const MDXTemplate = resolve('./src/templates/MDXTemplate.tsx');

const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
    const request = await graphql<Queries.Query>(`
    {
        allMdx {
            nodes {
            id
            internal {
                contentFilePath
            }
            }
        }
    }`);

    if (request.errors) {
        reporter.panic('error loading content', request.errors);
        return;
    }

    // actions.createPage({
    //     path: '93413a95-e915-5022-9a23-3f979f58ad11',
    //     component: `${MDXTemplate}?__contentFilePath=/static/24b73280965cf7f2a22e655b96a7f610/index.mdx`,
    //     context: {
    //         id: '93413a95-e915-5022-9a23-3f979f58ad11'
    //     }
    // })

    request.data?.allMdx.nodes.forEach((node) => {
        actions.createPage({
            path: node.id,
            component: `${MDXTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: {
                id: node.id
            }
        })
    })
      

}

const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({actions}) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@src': resolve('./src'),
                '@content': resolve('./content')
            }
        }
    })
}

export { createPages, onCreateWebpackConfig }