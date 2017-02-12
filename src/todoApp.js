import todos from './reducers/todo';
import visibilityFilter from './reducers/visibilityFilter';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore } from 'redux';

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(todoApp);

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
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            );
        default:
            return todos;
    }
};

/**
 * @type {string}
 * Todo Identifier
 */
let nextTodoId = 2;

/**
 * @extends {React.Component} 
 */
const FilterLink = ({
    filter,
    currentFilter,
    onClick,
    children
}) => {
    if (filter === currentFilter) {
        return <span>{children}</span>;
    }

    return (
        <a href="#"
            onClick={ e => {
                e.preventDefault();
                onClick(filter);
            }}
        >{children}
        </a>
    );
};

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

const Footer = ({
    visibilityFilter,
    onFilterClick
}) => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter='SHOW_ALL'
            onClick={onFilterClick}
            currentFilter={visibilityFilter}
        >
            All
        </FilterLink>
        {' '}
        <FilterLink
            filter='SHOW_ACTIVE'
            onClick={onFilterClick}
            currentFilter={visibilityFilter}
        >
            Active
        </FilterLink>
        {' '}
        <FilterLink
            filter='SHOW_COMPLETED'
            onClick={onFilterClick}
            currentFilter={visibilityFilter}
        >
            Completed
        </FilterLink>
    </p>
);

const AddTodo = ({
    onAddClick
}) => {
    let input;

    return (
        <div>
            <input type="text" ref={node => {
                input = node;
            }}/>
            <button onClick={() => {
                onAddClick(input.value);
                input.value = '';
            }}>
                Add todo
            </button>
        </div>
    );
};

/**
 * Main Application
 * 
 * @class TodoApp
 * @extends {React.Component}
 */
const TodoApp = ({
    todos,
    visibilityFilter
}) => (
    <div>
        <AddTodo
            onAddClick={ text => {
                store.dispatch({
                    type: 'ADD_TODO',
                    text,
                    id: nextTodoId++
                });
            }}
        />
        <TodoList
            todos={getVisibleTodos(
                todos,
                visibilityFilter
            )}
            onTodoClick={id => {
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id: id
                });
            }}
        />
        <Footer
            visibilityFilter={visibilityFilter}
            onFilterClick={filter => {
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                });
            }}
        />
    </div>
);

const render = () => {
    ReactDOM.render(
        <TodoApp
            {...store.getState()}
        />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();

// Populate Todo App
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});

store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Learn React'
});

store.dispatch({
    type: 'TOGGLE_TODO',
    id: 1
});