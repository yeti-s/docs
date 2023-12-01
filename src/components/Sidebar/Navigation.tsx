import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import NavItem, { Item } from '@src/components/Sidebar/NavItem';

type ItemTree = { [subject: string]: Item };

type Node = {
    id: string,
    frontmatter: {
        title: string,
        order: number | null
    },
    internal: { contentFilePath: string }
};

type QueryProps = {
    allMdx: {
        nodes: Array<Node>
    }
};

const sortItems = (a: Item, b: Item) => {
    const orderA = a.order ? a.order : 0;
    const orderB = b.order ? b.order : 0;
    if (orderA == orderB) {
        const titleA = a.title ? a.title : '';
        const titleB = b.title ? b.title : '';
        return titleA > titleB ? 1 : -1;
    }
    return orderA > orderB ? 1 : -1;
}

const createTree = (nodes: Array<Node>): Array<Item> => {
    if (nodes.length === 0) return [];

    const tree: ItemTree = {}
    nodes.forEach(node => {
        const id = node.id;
        const title = node.frontmatter.title;
        const order = node.frontmatter.order;
        const path = node.internal.contentFilePath;
        const parts = path.substring(path.indexOf('content/') + 8).split('/');
        if (parts.length < 2) return;

        const subject = parts[0];
        if (!tree[subject]) tree[subject] = {
            id: '-',
            title: '-',
            order: 0,
            children: []
        };
        if (parts[1].includes('index')) {
            tree[subject].id = id;
            tree[subject].title = title;
            tree[subject].order = order ? order : 0;
        }
        else {
            tree[subject].children.push({
                id: id,
                title: title,
                order: order ? order : 0,
                children: []
            })
        }
    })

    Object.values(tree).forEach(item => {
        item.children.sort(sortItems);
    })
    return Object.values(tree).sort(sortItems);
};

const Navigation = () => {
    const result: QueryProps = useStaticQuery(graphql`
        query {
            allMdx {
            nodes {
                id
                frontmatter {
                title
                order
                }
                internal {
                contentFilePath
                }
            }
            }
        }
    `);
    const { allMdx } = result;
    const [tree] = useState(() => {
        return createTree(allMdx.nodes);
    });

    return (
        <NavList>
            {
                tree.map(item => <NavItem item={item} key={item.id} />)
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