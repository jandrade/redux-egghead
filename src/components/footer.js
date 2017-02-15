import React from 'react';

import FilterLink from './FilterLink';

/**
 * Footer component (presentational component)
 */
const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="all">
      All
    </FilterLink>
    {' '}
    <FilterLink filter="active">
      Active
    </FilterLink>
    {' '}
    <FilterLink filter="completed">
      Completed
    </FilterLink>
  </p>
);

export default Footer;
