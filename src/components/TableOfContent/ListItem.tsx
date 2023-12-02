import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

type Props = {
    url:string,
    title:string,
    depth:number,
    index:number
};

const ListItem = ({ url, title, depth, index }: Props) => {
    return (
        <ListItemLink to={url}>
            {'\u00A0\u00A0'.repeat(depth) + (index + 1) + '.\u00A0'}{title}
        </ListItemLink>
    );
};

const ListItemLink = styled(Link)`
  display: inline-block;
  width: 100%;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s ease-out;;
`;

export default ListItem;