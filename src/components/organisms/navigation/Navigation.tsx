import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import ListItem from '@src/components/molecules/list/ListItem';
import NoneDecoLink from '@src/components/atoms/links/NoneDecoLink';
import Divider from '@src/components/molecules/list/Divider';

class Item {
    id: string;
    title: string;
    path: string;
    order: number;
    
    constructor(id:string, title:string, path:string, order:number|null=null) {
        this.id = id;
        this.title = title;
        this.path = path;
        this.order = order ? order : Number.MAX_VALUE;
    }
}

class MainItem extends Item {
    children: Array<Item>;

    constructor(id:string, title:string, path:string, order:number|null=null, children:Array<Item>) {
        super(id, title, path, order);
        this.children = children;
    }
}

type Node = {
    id: string,
    frontmatter: {
        title: string,
        subject: string | null,
        category: string | null,
        order: number | null
    },
    internal: {contentFilePath: string}
};

type QueryProps = {
    allMdx: {
        nodes: Array<Node>
    }
};

const sortItems = (a: Item, b: Item) => {
    if (a instanceof MainItem && b instanceof MainItem) {
        // no child item has high priority
        const hasAChild = a.children.length > 0;
        const hasBChild = b.children.length > 0;
        if (hasAChild && !hasBChild) return 1;
        if (!hasAChild && hasBChild) return -1;
    }
    // same orders, than compare title
    if (a.order == b.order)  return a.title > b.title ? 1 : -1;
    // low order has high priority 
    return a.order > b.order ? 1 : -1;
}

const createCategoryMainItemsMap = (nodes: Array<Node>): Map<string, Array<MainItem>> => {
    const subjectItemsMap:Map<string, Array<Item>> = new Map();
    const categoryMainItemsMap:Map<string, Array<MainItem>> = new Map();
    if (nodes.length === 0) return categoryMainItemsMap;

    nodes.forEach(node => {
        const id = node.id;
        const title = node.frontmatter.title;
        const category = node.frontmatter.category;
        const subject = node.frontmatter.subject;
        const order = node.frontmatter.order;
        
        // main item
        if (category) {
            if (!categoryMainItemsMap.has(category))
                categoryMainItemsMap.set(category, new Array<MainItem>());

            const path = `/${title}`;
            categoryMainItemsMap.get(category!)!.push(new MainItem(id, title, path, order, subjectItemsMap.get(title)!));
        }
        // sub item
        else if (subject) {
            if (!subjectItemsMap.has(subject))
                subjectItemsMap.set(subject, new Array<Item>());

            const items = subjectItemsMap.get(subject!)!;
            const path = `/${subject}/${title}`;
            items.push(new Item(id, title, path, order));
        }
        // main page or invalid item
        else {}
    })

    for (let [_, mainItems] of categoryMainItemsMap) {
        mainItems.sort(sortItems);
        for (let mainItem of mainItems)
            mainItem.children.sort(sortItems);
    }

    return categoryMainItemsMap;
};

const Navigation = () => {
    const result: QueryProps = useStaticQuery(query);
    const { allMdx } = result;
    const [categoryMainItemsMap] = useState(() => createCategoryMainItemsMap(allMdx.nodes));

    const navItems = (): React.ReactNode => {
        const components = []

        for (let [category, mainItems] of categoryMainItemsMap) {
            components.push(<Divider>{category}</Divider>)

            for (let mainItem of mainItems) {
                const hasChildren = mainItem.children.length > 0;
                const items:Array<React.ReactNode> = mainItem.children.map(item => 
                    <NoneDecoLink key={item.id} to={item.path}>{item.title}</NoneDecoLink>
                );
                components.push(
                    <ListItem key={mainItem.id} id={mainItem.id} subItems={hasChildren ? items : null}>
                        <NoneDecoLink to={mainItem.path}>{mainItem.title}</NoneDecoLink>
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
                category
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