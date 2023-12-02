import { GatsbyNode, graphql } from "gatsby";
import { resolve } from 'path'
// import MDXTemplate from "./src/templates/MDXTemplate";
const MDXTemplate = resolve('./src/components/templates/MainTemplate.tsx');

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


    request.data?.allMdx.nodes.forEach((node) => {
        const relativePath = node.internal.contentFilePath?.split("content/")[1];
        const path = relativePath === "index.mdx" ? '/' : node.id;
        actions.createPage({
            path: path,
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