import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';

// components
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';

// store
import configureStore from './configureStore';

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

const store = configureStore();

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