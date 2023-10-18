module.exports = {
  siteMetadata: {
    title: `Document by yeti`,
    name: `yeti`,
    siteUrl: `https://yeti-s.github.io/`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/yeti-s`
      }
      // {
      //   name: `twitter`,
      //   url: `https://twitter.com/HuntaroSan`
      // }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/codeblock"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
