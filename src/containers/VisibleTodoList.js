import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getVisibleTodos } from '../reducers';
import { toggleTodo } from '../actions/todo';
import TodoList from '../components/TodoList';

const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state, params.filter || 'all')
});

// const mapDispatchToProps = (dispatch) => ({
//     onTodoClick(id) {
//         dispatch(toggleTodo(id));
//     }
// });

/**
 * TodoList Container component
 */
const VisibleTodoList = withRouter(connect(mapStateToProps, { onTodoClick: toggleTodo })(TodoList));

export default VisibleTodoList;
