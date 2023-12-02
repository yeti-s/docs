import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import mediaqueries from '@src/styles/media';
import ListItem from '@src/components/TableOfContent/ListItem';
import { tableBodyClasses } from '@mui/material';

type Item = {
    url: string,
    title: string,
    index?: number,
    depth?: number
    items?: Array<Item>
};

type Table = {
    url: string,
    title: string,
    index: number,
    depth: number
}

type Props = {
    tableOfContents: Array<Item>
};

const ContentTables = ({ tableOfContents }: Props) => {
    const [tables, setTables] = useState<Array<Table>>([]);

    useEffect(() => {
        const tables: Array<Table> = []
        const getTables = (items: Array<Item>, depth: number) => {
            if (!items) return;
            items.forEach((item, index) => {
                item.index = index;
                item.depth = depth;
                tables.push({ url: item.url, title: item.title, index: item.index, depth: item.depth });
                if (item.items) getTables(item.items, depth + 1);
            })
        }
        getTables(tableOfContents, 0);
        setTables(tables);
    }, [tableOfContents])

    return (
        <RightSidebarWrapper>
            <RightSidebarNav>
                <RightSidebarTitle>Contents</RightSidebarTitle>
                <RightSidebarList>
                    {tables.map(table => (
                        <RightSidebarListItem key={table.depth + table.url}>
                            <ListItem url={table.url} title={table.title} depth={table.depth} index={table.index} />
                        </RightSidebarListItem>
                    ))}
                </RightSidebarList>
            </RightSidebarNav>
        </RightSidebarWrapper>
    );
};

const RightSidebarWrapper = styled.aside`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
`;

const RightSidebarNav = styled.nav`
  top: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  padding: 3rem 1rem;
`;

const RightSidebarTitle = styled.p`
  margin-top: 0;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const RightSidebarList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const RightSidebarListItem = styled.li`
  margin: 0.3rem 0;
`;


export default ContentTables;