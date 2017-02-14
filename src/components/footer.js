import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilterLink from './FilterLink';

/**
 * Footer component (presentational component)
 * 
 * @param {String} visibilityFilter
 * @param {Event} onFilterClick
 */
const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter='SHOW_ALL'
        >
            All
        </FilterLink>
        {' '}
        <FilterLink
            filter='SHOW_ACTIVE'
        >
            Active
        </FilterLink>
        {' '}
        <FilterLink
            filter='SHOW_COMPLETED'
        >
            Completed
        </FilterLink>
    </p>
);

export default Footer;