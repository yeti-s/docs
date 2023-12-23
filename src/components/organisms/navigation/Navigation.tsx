import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import ListItem from '@src/components/molecules/list/ListItem';
import ListSubItem from '@src/components/molecules/list/ListSubItem';
import NoneDecoLink from '@src/components/atoms/links/NoneDecoLink';
import Divider from '@src/components/molecules/list/Divider';

class Item {
    id:string;
    title:string;
    order: number;
    children: Array<Item>;

    constructor(id="", title="", order:number|null = null) {
        this.id = id;
        this.title = title;
        this.order = order ? order : Number.MAX_VALUE;
        this.children = [];
    }
}

type Subject = {
    [content:string]: Item
};

type ItemTree = { [subject: string]: Subject };


type Node = {
    id: string,
    frontmatter: {
        title: string,
        order: number | null
        subject: string | null
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

const createTree = (nodes: Array<Node>): Map<string, Map<string, Item>> => {
    const tree:Map<string, Map<string, Item>> = new Map();
    const contents:Map<string, Item> = new Map();
    if (nodes.length === 0) return tree;

    nodes.forEach(node => {
        const id = node.id;
        const title = node.frontmatter.title;
        const subject = node.frontmatter.subject ? node.frontmatter.subject : '';
        const order = node.frontmatter.order;
        const path = node.internal.contentFilePath;
        const parts = path.substring(path.indexOf('contents/') + 9).split('/');
        if (parts.length < 2) return;
        // add content to contents map
        const content = parts[0];
        if (!contents.has(content)) contents.set(content, new Item());
        const targetContent = contents.get(content);
        // main content
        if (parts[1].includes('index')) {
            targetContent!.id = id;
            targetContent!.title = title;
            targetContent!.order = order ? order : 0;
            // enroll main content to tree
            if (!tree.has(subject)) tree.set(subject, new Map());
            tree.get(subject)!.set(content, targetContent!);
        }
        // sub content
        else targetContent!.children.push(new Item(id, title, order));
    })

    for (let [_, subjectItem] of tree) {
        for (let [_, contentItem] of subjectItem) {
            contentItem.children.sort(sortItems);
        }
    }
    return tree;
};

const Navigation = () => {
    const result: QueryProps = useStaticQuery(query);
    const { allMdx } = result;
    const [tree] = useState(() => createTree(allMdx.nodes));

    const navItems = (): React.ReactNode => {
        const components = []

        for (let [subject, subjectItem] of tree) {
            components.push(<Divider>{subject}</Divider>)

            for (let [_, contentItem] of subjectItem) {
                const hasChildren = contentItem.children.length > 0;
                const subItems:Array<React.ReactNode> = contentItem.children.map(child => 
                    <NoneDecoLink to={`/${child.id}`}>{child.title}</NoneDecoLink>
                );
                components.push(
                    <ListItem key={contentItem.id} id={contentItem.id} subItems={hasChildren ? subItems : null}>
                        <NoneDecoLink to={`/${contentItem.id}`}>{contentItem.title}</NoneDecoLink>
                    </ListItem>
                )
            }
        }

        return (
            <>{components}</>
        )
    }

    return (
        <NavList>
            {navItems()}
        </NavList>
    );
};

const query = graphql`
query {
    allMdx(filter: {frontmatter: {visible: {eq: true}}}) {
        nodes {
            id
            frontmatter {
                title
                order
                subject
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