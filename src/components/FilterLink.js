import { connect } from 'react-redux';

import Link from './Link';
import { setVisibilityFilter } from '../actions/visibilityFilter';

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