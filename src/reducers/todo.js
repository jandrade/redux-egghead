/**
 * Filter the list of selected todos (selector)
 * @param {Array} todos Todos collection
 * @param {string} filter Filter to be applied
 *
 * @return {Array} Filtered todos
 */
export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state;
    case 'active':
      return state.filter(t => !t.completed);
    case 'completed':
      return state.filter(t => t.completed);
    default:
      return state;
  }
};

/**
 * Execute a single todo action
 * @param {object} state
 * @param {string} action
 */
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      /*
      return {
          ...state,
          completed: !state.completed
      };
      */
      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

/**
 * Execute todos action
 * @param {object} state
 * @param {string} action
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
