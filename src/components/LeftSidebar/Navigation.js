import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import NavItem from './NavItem';

/**
 * This File was inspired by https://github.com/hasura/gatsby-gitbook-starter
 */

const calculateTreeData = (edges, sidebarConfig) => {
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
    return { items: [] };
  }

  const tree = originalData.reduce(
    (
      accu,
      {
        node: {
          fields: { slug, title }
        }
      }
    ) => {
      let { items: prevItems } = accu;
      const parts = slug.split('/');
      if (parts.length > 2 && parts[parts.length-1] === 'index')  // is index?
      {
        {
          const existingItem = prevItems.find(({ label }) => label === parts[1]);
          if (existingItem) {
            existingItem.url = slug;
            existingItem.title = title;
          }
        }
      }
      else {
        for (const part of parts.slice(1, -1)) {
          let tmp = prevItems.find(({ label }) => label === part);
          if (tmp) {
            if (!tmp.items) {
              tmp.items = [];
            }
          } else {
            tmp = { label: part, items: [] };
            prevItems.push(tmp);
          }
          prevItems = tmp.items;
        }

        prevItems.push({
          label: parts[parts.length - 1],
          url: slug,
          items: [],
          title
        });
      }
      return accu;
    },
    { items: [] }
  );
  const forcedNavOrder = sidebarConfig.forcedNavOrder || [];
  const tmp = [...forcedNavOrder];
  tmp.reverse();
  return tmp.reduce((accu, slug) => {
    const parts = slug.split('/');
    let { items: prevItems } = accu;
    for (const part of parts.slice(1, -1)) {
      let tmp = prevItems.find(({ label }) => label === part);
      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = { label: part, items: [] };
        prevItems.push(tmp);
      }
      prevItems = tmp.items;
    }
    const index = prevItems.findIndex(({ label }) => label === parts[parts.length - 1]);
    accu.items.unshift(prevItems.splice(index, 1)[0]);
    return accu;
  }, tree);
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
  const [treeData] = useState(() => {
    return calculateTreeData(allMdx.edges, sidebarConfig);
  });

  // sort items alphabetically.
  const sortByTitle = (a, b) => {
    let x = a.title.toLowerCase();
    let y = b.title.toLowerCase();
    if (x<y) return -1;
    if (x>y) return 1;
    return 0;
  }

  return (
    <NavList>
      {
        treeData.items.sort(sortByTitle).map(item => {
          item.items.sort(sortByTitle);
          return <NavItem key={item.url} item={item} />
        })
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
