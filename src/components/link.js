import React, { Component } from 'react';
import { connect } from 'react-redux';

import setVisibilityFilter from '../actions/visibilityFilter';

/**
 * Link presentational component
 * @extends {React.Component} 
 */
const Link = ({
    active,
    onClick,
    children
}) => {
    if (active) {
        return <span>{children}</span>;
    }

    return (
        <a href="#"
            onClick={ e => {
                e.preventDefault();
                onClick();
            }}
        >{children}
        </a>
    );
};

const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: () =>
            dispatch(setVisibilityFilter(ownProps.filter)) 
    }
};

/**
 * Filter link Container
 * 
 * @class FilterLink
 * @extends {Component}
 */
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);


export default FilterLink;