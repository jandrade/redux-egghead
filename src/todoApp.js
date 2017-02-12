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
    children
}) => {
    if (filter === currentFilter) {
        return <span>{children}</span>;
    }

    return (
        <a href="#"
            onClick={ e => {
                e.preventDefault();
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                });
            }}
        >{children}
        </a>
    );
};

/**
 * Main Application
 * 
 * @class TodoApp
 * @extends {React.Component}
 */
class TodoApp extends Component {
    /**
     * Renders the TodoApp component into the DOM
     * @abstract
     */
    render() {
        const {
            todos,
            visibilityFilter
        } = this.props;

        const visibleTodos = getVisibleTodos(
            todos,
            visibilityFilter
        );

        return (
            <div>
                <input type="text" ref={node => {
                    this.input = node;
                }}/>
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextTodoId++
                    });

                    this.input.value = '';
                }}>
                    Add todo
                </button>
                <ul>
                    {visibleTodos.map(todo =>
                        <li key={todo.id}
                            onClick={() => {
                                store.dispatch({
                                    type: 'TOGGLE_TODO',
                                    id: todo.id
                                });
                            }}
                            style={{
                                textDecoration:
                                    todo.completed ?
                                        'line-through' :
                                        'none'
                            }}
                        >
                            {todo.text}
                        </li>
                    )}
                </ul>
                <p>
                    Show:
                    {' '}
                    <FilterLink
                        filter='SHOW_ALL'
                        currentFilter={visibilityFilter}
                    >
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_ACTIVE'
                        currentFilter={visibilityFilter}
                    >
                        Active
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_COMPLETED'
                        currentFilter={visibilityFilter}
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        );
    }
}

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