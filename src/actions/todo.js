import { v4 } from 'node-uuid';

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
