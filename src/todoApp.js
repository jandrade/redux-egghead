import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

import throttle from 'lodash/throttle';

// components
import AddTodo from './components/addTodo';
import VisibleTodoList from './components/todoList';
import Footer from './components/footer';
// reducers
import rootReducer from './reducers/index';

import { loadState, saveState } from './helpers/localStorage';

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

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState
);

store.subscribe(throttle(() => {
    saveState({
        todos: store.getState().todos
    });
}, 1000));

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <TodoApp />
        </Provider>
        ,
        document.getElementById('root')
    );
};

render();