import React from 'react';

// components
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

/**
 * Main Application
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
