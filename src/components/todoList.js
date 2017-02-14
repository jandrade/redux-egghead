import React, { Component } from 'react';

import Todo from './Todo';

/**
 * Todos collection (presentational component)
 * 
 * @param {Array} todos
 * @param {Event} onTodoClick
 */
const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
);

export default TodoList;