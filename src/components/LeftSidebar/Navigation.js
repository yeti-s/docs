import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import NavItem from '@src/components/LeftSidebar/NavItem';

/**
 * This File was inspired by https://github.com/hasura/gatsby-gitbook-starter
 */

// sort items alphabetically.
const sortByTitle = (a, b) => {
  if (a.title && b.title) {
    let x = a.title.toLowerCase();
    let y = b.title.toLowerCase();
    if (x < y) return -1;
    if (x > y) return 1;
  }
  return 0;
}

const createTree = (edges, sidebarConfig) => {
  const originalData = sidebarConfig.ignoreIndex
    ? edges.filter(
      ({
        node: {
          fields: { slug }
        }
      }) => slug !== '/'
    )
    : edges;

  if (originalData.length === 0) {
    return [];
  }

  const tree = {}

  originalData.forEach(elem => {
    const title = elem.node.fields.title;
    const slug = elem.node.fields.slug;

    const parts = slug.split('/');
    const subject = parts[1];
    if (!tree[subject]) tree[subject] = {items:[]};

    // index file
    if (parts[parts.length - 1] === "index") {
      tree[subject].title = title;
      tree[subject].url = slug;
    }
    // sub content file
    else {
      tree[subject].items.push({
        url: slug,
        title: title
      })
    }
  });
  
  // sort items
  let no_children = [];
  let has_children = [];
  Object.values(tree).forEach(elem => {
    elem.items.sort(sortByTitle)
    if (elem.items.length == 0) no_children.push(elem);
    else has_children.push(elem);
  })

  return no_children.concat(has_children);
};

const Navigation = () => {
  const result = useStaticQuery(graphql`
    query {
      allSite {
        edges {
          node {
            siteMetadata {
              sidebarConfig {
                forcedNavOrder
                ignoreIndex
              }
            }
          }
        }
      }
      allMdx {
        edges {
          node {
            fields {
              slug
              title
            }
          }
        }
      }
    }
  `);
  const { allSite, allMdx } = result;
  const { sidebarConfig } = allSite.edges[0].node.siteMetadata;
  const [tree] = useState(() => {
    return createTree(allMdx.edges, sidebarConfig);
  });

  return (
    <NavList>
      {
        tree.map(item => <NavItem key={item.url} item={item} />)
      }
    </NavList>
  );
};

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default React.memo(Navigation);
