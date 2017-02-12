import todos from './reducers/todo';
import visibilityFilter from './reducers/visibilityFilter';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore } from 'redux';

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

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
 * TodoList Container component
 * 
 * @class VisibleTodoList
 * @extends {Component}
 */
class VisibleTodoList extends Component {
    componentDidMount() {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() => 
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { store } = this.props;
        const state = store.getState();

        return (
            <TodoList
                todos={getVisibleTodos(
                    state.todos,
                    state.visibilityFilter
                )}
                onTodoClick={id => {
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    });
                }}
            />
        );
    }
}

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

/**
 * @extends {React.Component} 
 */
const Link = ({
    active,
    onClick,
    children
}) => {
    if (active) {
        return <span>{children}</span>;
    }

    return (
        <a href="#"
            onClick={ e => {
                e.preventDefault();
                onClick();
            }}
        >{children}
        </a>
    );
};

/**
 * Filter link Container
 * 
 * @class FilterLink
 * @extends {Component}
 */
class FilterLink extends Component {
    componentDidMount() {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const { store } = props;
        const state = store.getState();

        return (
            <Link
                active={
                    props.filter === 
                    state.visibilityFilter
                }
                onClick={() =>
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter: props.filter
                    })
                }
            >
                {props.children}
            </Link>
        );
    }
}

/**
 * Footer component (presentational component)
 * 
 * @param {String} visibilityFilter
 * @param {Event} onFilterClick
 */
const Footer = ({
    store
}) => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter='SHOW_ALL'
            store={store}
        >
            All
        </FilterLink>
        {' '}
        <FilterLink
            filter='SHOW_ACTIVE'
            store={store}
        >
            Active
        </FilterLink>
        {' '}
        <FilterLink
            filter='SHOW_COMPLETED'
            store={store}
        >
            Completed
        </FilterLink>
    </p>
);

/**
 * Presentational component
 */
const AddTodo = ({
    store
}) => {
    let input;

    return (
        <div>
            <input type="text" ref={node => {
                input = node;
            }} />
            <button onClick={() => {
                store.dispatch({
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

/**
 * Main Application
 * 
 * @class TodoApp
 * @extends {React.Component}
 */
const TodoApp = ({
    store
}) => (
    <div>
        <AddTodo store={store} />
        <VisibleTodoList store={store} />
        <Footer store={store} />
    </div>
);

const render = () => {
    ReactDOM.render(
        <TodoApp
            store={createStore(todoApp)}
        />,
        document.getElementById('root')
    );
};

render();

// Populate Todo App
/*
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
*/