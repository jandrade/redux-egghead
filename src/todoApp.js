import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

// components
import AddTodo from './components/addTodo';
import VisibleTodoList from './components/todoList';
import Footer from './components/footer';
// reducers
import reducers from './reducers/index';

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

const render = () => {
    ReactDOM.render(
        <Provider store={createStore(reducers)}>
            <TodoApp />
        </Provider>
        ,
        document.getElementById('root')
    );
};

render();