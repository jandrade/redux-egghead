import todos from './reducers/todo';
import visibilityFilter from './reducers/visibilityFilter';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore } from 'redux';
/*
const todoApp = (state = {}, action) => {
    return {
        todos: todos(
            state.todos,
            action
        ),
        visibilityFilter: visibilityFilter(
            state.visibilityFilter,
            action
        )
    }
};
*/
const todoApp = combineReducers({
    todos,
    visibilityFilter
});
const store = createStore(todoApp);

let nextTodoId = 2;

class TodoApp extends Component {
    render() {
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
                    {this.props.todos.map(todo =>
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
            </div>
        );
    }
}

const render = () => {
    ReactDOM.render(
        <TodoApp
            todos={store.getState().todos} />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();

console.log('Initial state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});

console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Learn React'
});

console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching TOGGLE_TODO.');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 1
});

console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching SET_VISIBILITY_FILTER.');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});

console.log('Current state:');
console.log(store.getState());
console.log('--------------');