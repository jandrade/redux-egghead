import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * @type {string}
 * Todo Identifier
 */
let nextTodoId = 0;


const mapStateToProps = (
    state
) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};

const mapDispatchToProps = (
    dispatch
) => {
    return {
        onTodoClick: (id) => {
            dispatch({
                type: 'TOGGLE_TODO',
                id
            });
        }
    }
};

/**
 * Presentational component
 */
let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <input type="text" ref={node => {
                input = node;
            }} />
            <button onClick={() => {
                dispatch({
                    type: 'ADD_TODO',
                    text: input.value,
                    id: nextTodoId++
                });
                input.value = '';
            }}>
                Add todo
            </button>
        </div>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;