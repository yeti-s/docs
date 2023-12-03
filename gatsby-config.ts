import type { GatsbyConfig } from "gatsby";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'yeti-docs',
    siteUrl: `https://yeti-s.github.io/`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/yeti-s`
      },
      {
        name: 'instagram',
        url: `/`
      }
    ]
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name:'yeti-docs',
        short_name: 'yeti-docs',
        start_url: '/',
        display: `standalone`,
        icon: 'src/static/site-icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 704
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false
            }
          },
          `gatsby-remark-embed-video`
        ],
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex]
        }
      }
    },
    {
      resolve:'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './content'
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`
  ],
  trailingSlash: 'never'
}

export default config
