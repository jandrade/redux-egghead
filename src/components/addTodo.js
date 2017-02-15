import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todo';

/**
 * Presentational component
 */
const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <form
      onSubmit={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}
    >
      <input ref={(node) => { input = node; }} />
      <button type="submit">
        Add todo
      </button>
    </form>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);
