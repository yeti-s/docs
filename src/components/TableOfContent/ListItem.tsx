import { useTheme, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

type Props = {
    url:string,
    title:string,
    depth:number,
    index:number
};

const ListItem = ({ url, title, depth, index }: Props) => {
    const theme = useTheme()
    return (
        <ListItemLink to={url} theme={theme}>
            {'\u00A0\u00A0'.repeat(depth) + (index + 1) + '.\u00A0'}{title}
        </ListItemLink>
    );
};

const ListItemLink = styled(Link)<{theme:Theme}>`
  display: inline-block;
  width: 100%;
  color: ${p => p.theme.text};
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s ease-out;;
  &:hover,
  &:focus {
    color: ${p => p.theme.primary};
  }
`;

export default ListItem;