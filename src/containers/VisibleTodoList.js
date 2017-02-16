import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { getVisibleTodos } from '../reducers';
import * as actions from '../actions/todo';
import TodoList from '../components/TodoList';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props;
    fetchTodos(filter);
  }

  render() {
    const { toggleTodo, ...rest } = this.props;

    console.log(...rest);
    return (
      <TodoList
        {...rest}
        onTodoClick={toggleTodo}
      />
    );
  }
}

VisibleTodoList.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  fetchTodos: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter
  };
};

// const mapDispatchToProps = (dispatch) => ({
//     onTodoClick(id) {
//         dispatch(toggleTodo(id));
//     }
// });

/**
 * TodoList Container component
 */
VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList));

export default VisibleTodoList;
