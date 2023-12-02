import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type Props = {
    url:string,
    title:string,
    depth:number,
    index:number
};

const TableItem = ({ url, title, depth, index }: Props) => {
    return (
        <TableItemWrapper>
            <TableItemLink to={url}>
                {'\u00A0\u00A0'.repeat(depth) + (index + 1) + '.\u00A0'}{title}
            </TableItemLink>
        </TableItemWrapper>
    );
};

const TableItemLink = styled(Link)`
  display: inline-block;
  width: 100%;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TableItemWrapper = styled.li`
  margin: 0.3rem 0;
`;

export default TableItem;