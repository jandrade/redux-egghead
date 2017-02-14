import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

// components
import AddTodo from './components/addTodo';
import VisibleTodoList from './components/todoList';
import Footer from './components/footer';
// reducers
import rootReducer from './reducers/index';

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

const persistedState = {
    todos: [
        {
            id: 0,
            text: 'Welcome back!',
            completed: false
        }
    ]
};

const store = createStore(
    rootReducer,
    persistedState
);

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