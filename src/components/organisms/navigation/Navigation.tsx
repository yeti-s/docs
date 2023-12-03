import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import ListItem from '@src/components/molecules/list/ListItem';
import ListSubItem from '@src/components/molecules/list/ListSubItem';
import NoneDecoLink from '@src/components/atoms/links/NoneDecoLink';

type ItemTree = { [subject: string]: Item };

class Item {
    id:string;
    title:string;
    order: number;
    children: Array<Item>;

    constructor(id="", title="", order:number|null = null) {
        this.id = id
        this.title = title
        this.order = order ? order : Number.MAX_VALUE;
        this.children = [];
    }
}

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
    // no child item has high priority
    const hasAChild = a.children.length > 0;
    const hasBChild = b.children.length > 0;
    if (hasAChild && !hasBChild) return 1;
    if (!hasAChild && hasBChild) return -1;
    // same orders, than compare title
    if (a.order == b.order)  return a.title > b.title ? 1 : -1;
    // low order has high priority 
    return a.order > b.order ? 1 : -1;
}

const createTree = (nodes: Array<Node>): Array<Item> => {
    if (nodes.length === 0) return [];

    const tree: ItemTree = {}
    nodes.forEach(node => {
        const id = node.id;
        const title = node.frontmatter.title;
        const order = node.frontmatter.order;
        const path = node.internal.contentFilePath;
        const parts = path.substring(path.indexOf('contents/') + 8).split('/');
        if (parts.length < 2) return;

        const subject = parts[0];
        if (subject === '') return; // index.mdx
        if (!tree[subject]) tree[subject] = new Item();
        if (parts[1].includes('index')) {
            tree[subject].id = id;
            tree[subject].title = title;
            tree[subject].order = order ? order : 0;
        }
        else tree[subject].children.push( new Item(id, title, order));
    })

    Object.values(tree).forEach(item => {
        item.children.sort(sortItems);
    })
    return Object.values(tree).sort(sortItems);
};

const Navigation = () => {
    const result: QueryProps = useStaticQuery(query);
    const { allMdx } = result;
    const [tree] = useState(() => createTree(allMdx.nodes));

    return (
        <NavList>
            {
                tree.map(item => {
                        const hasChildren = item.children.length > 0;
                        const subItems:React.ReactNode = 
                        <>
                            {item.children.map(child => 
                                <ListSubItem key={child.id}>
                                    <NoneDecoLink to={`/${child.id}`}>
                                        {child.title}
                                    </NoneDecoLink>
                                </ListSubItem>
                            )}
                        </>

                        return (
                            <ListItem key={item.id} id={item.id} subItems={hasChildren ? subItems : null}>
                                <NoneDecoLink to={`/${item.id}`}>{item.title}</NoneDecoLink>
                            </ListItem>
                        )
                })
            }
        </NavList>
    );
};

const query = graphql`
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
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
`;

export default React.memo(Navigation);