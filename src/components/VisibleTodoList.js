import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todo';

import TodoList from './TodoList';

/**
 * Filter the list of selected todos
 * @param {Array} todos Todos collection
 * @param {string} filter Filter to be applied
 * 
 * @return {Array} Filtered todos
 */
const getVisibleTodos = (
    todos,
    filter
) => {
    switch(filter) {
        case 'all':
            return todos;
        case 'active':
            return todos.filter(
                t => !t.completed
            );
        case 'completed':
            return todos.filter(
                t => t.completed
            );
        default:
            return todos;
    }
};

const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            ownProps.filter
        )
    };
};

const mapDispatchToProps = (
    dispatch
) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
};

/**
 * TodoList Container component 
 */
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;