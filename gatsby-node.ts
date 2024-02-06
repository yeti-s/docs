import { GatsbyNode, graphql } from "gatsby";
import { resolve } from 'path'
const MDXTemplate = resolve('./src/components/templates/MainTemplate.tsx');

const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
        type MdxFrontmatter @dontInfer {
            title: String!
            date: String
            description: String
            subject: String
            category: String
            visible: Boolean
            order: Int
        }

        type Mdx implements Node {
            frontmatter: MdxFrontmatter
        }
    `;
    createTypes(typeDefs);
};

const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }) => {
    const request = await graphql<Queries.Query>(`
    {
        allMdx {
            nodes {
                id
                frontmatter {
                    subject
                }
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
        const filename = node.internal.contentFilePath?.split('/').pop()?.split('.')[0];
        const subject = node.frontmatter?.subject;
        const path = `${subject}/${filename}`.replaceAll('/index', '');

        actions.createPage({
            path: path === 'index' ? '/' : path,
            component: `${MDXTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: {
                id: node.id
            }
        })
    })
}


const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@src': resolve('./src'),
                '@contents': resolve('./contents'),
                '@elements': resolve('./contents/elements')
            }
        }
    })
}

export { createPages, onCreateWebpackConfig, createSchemaCustomization}