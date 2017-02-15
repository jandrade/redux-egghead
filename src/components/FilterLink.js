import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/**
 * Creates a link to filter results
 * @param {String} filter The filter to be applied
 * @param {String} children Node children, represented as text in this case
 */
const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </Link>
);

FilterLink.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  children: PropTypes.node.isRequired
};

export default FilterLink;
