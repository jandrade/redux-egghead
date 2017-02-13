import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

import { combineReducers, createStore } from 'redux';

import todos from './reducers/todo';
import visibilityFilter from './reducers/visibilityFilter';

import AddTodo from './components/addTodo';
import VisibleTodoList from './components/todoList';
import Footer from './components/footer';


/**
 * Main Application
 * 
 * @class TodoApp
 * @extends {React.Component}
 */
const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);


const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const render = () => {
    ReactDOM.render(
        <Provider store={createStore(todoApp)}>
            <TodoApp />
        </Provider>
        ,
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