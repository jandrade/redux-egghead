/**
 * @type {string}
 * Todo Identifier
 */
let nextTodoId = 0;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text: text,
    id: (nextTodoId++).toString()
});


export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});