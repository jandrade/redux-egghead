import React, { Component } from 'react';

// components
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';

/**
 * Main Application
 * 
 * @class App
 * @extends {React.Component}
 */
const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;