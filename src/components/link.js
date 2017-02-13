import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = ({
    dispatch,
    ownProps
}) => {
    return {
        onClick: () =>
            store.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: ownProps.filter
            }) 
    }
}

/**
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