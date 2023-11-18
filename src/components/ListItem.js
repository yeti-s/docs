import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const ListItem = ({ location, item }) => {
  return (
    <ListItemLink to={location.pathname + item.url}>
      {'\u00A0\u00A0'.repeat(item.depth)+(item.index+1)+'.\u00A0'}{item.title}
    </ListItemLink>
  );
};

const ListItemLink = styled(Link)`
  display: inline-block;
  width: 100%;
  color: ${p => p.theme.colors.text};
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color ${p => p.theme.transition};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primary};
  }
`;

ListItem.propTypes = {
  location: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

export default ListItem;
