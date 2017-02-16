import { v4 } from 'node-uuid';
import * as api from '../api';

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
});

export const fetchTodos = (filter) =>
  api.fetchTodos(filter).then(response =>
    receiveTodos(filter, response)
  );

/**
 * Creates a new todo
 *
 * @param {String} text
 * @return {Object} Created todo
 */
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  text,
  id: v4()
});

/**
 * Marks a todo as completed/active
 *
 * @param {String} id
 * @return {Object} Toggled todo
 */
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});
