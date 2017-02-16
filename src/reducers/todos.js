import { combineReducers } from 'redux';
import todo from './todo';

const getAllTodos = (state) =>
  state.allIds.map(id => state.byId[id]);
/**
 * Filter the list of selected todos (selector)
 * @param {Array} todos Todos collection
 * @param {string} filter Filter to be applied
 *
 * @return {Array} Filtered todos
 */
export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);

  switch (filter) {
    case 'all':
      return allTodos;
    case 'active':
      return allTodos.filter(t => !t.completed);
    case 'completed':
      return allTodos.filter(t => t.completed);
    default:
      return allTodos;
  }
};

/**
 * Execute todos action
 * @param {object} state
 * @param {string} action
 */
const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id];
    default:
      return state;
  }
};

const todos = combineReducers({
  byId,
  allIds
});

export default todos;
