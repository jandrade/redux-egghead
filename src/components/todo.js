import React, { Component } from 'react';

/**
 * Todo Item (presentational component)
 * @param {Object} todo
 * @param {boolean} completed
 * @param {String} text
 */
const Todo = ({
    onClick,
    completed,
    text
}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration:
                completed ?
                    'line-through' :
                    'none'
        }}
    >
        {text}
    </li>
);

export default Todo;