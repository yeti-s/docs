import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { createAtom, SET_TABLE_OF_CONTENT } from "@src/context/atoms";
import NoneDecoLink from '@src/components/atoms/links/NoneDecoLink';
import ListSubItem from '@src/components/molecules/list/ListSubItem';

type Item = {
    url: string,
    title: string,
    index?: number,
    depth?: number
    items?: Array<Item>
};

class Table {
    url:string;
    title:string;
    index: number;
    depth: number;

    constructor(url:string, title:string, index:number, depth:number) {
        this.url = url;
        this.title = title;
        this.index = index;
        this.depth = depth;
    }
};


const TableOfContent = () => {
    const [tables, setTables] = useState<Array<Table>>([]);
    const items = useRecoilValue(createAtom(SET_TABLE_OF_CONTENT, []));

    useEffect(() => {
        const tables: Array<Table> = []
        const getTables = (items: Array<Item>, depth: number) => {
            if (!items) return;
            items.forEach((item, index) => {
                tables.push(new Table(item.url, item.title, index, depth));
                if (item.items) getTables(item.items, depth + 1);
            })
        }
        getTables(items, 0);
        setTables(tables);
    }, [items])

    return (
            <>
                <ToCTitle>CONTENTS</ToCTitle>
                <ToCList>
                    {tables.map(table => (
                        <ListSubItem key={table.depth + table.url}>
                            <NoneDecoLink to={table.url}>
                                {'\u00A0\u00A0'.repeat(table.depth) + (table.index + 1) + '.\u00A0'}{table.title}
                            </NoneDecoLink>
                        </ListSubItem>
                    ))}
                </ToCList>
            </>

    );
};

const ToCTitle = styled.p`
  margin: 0;
  font-size: 0.7rem;
  font-weight: 700;
`;

const ToCList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;


export default TableOfContent;