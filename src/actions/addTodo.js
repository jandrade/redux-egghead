/**
 * @type {string}
 * Todo Identifier
 */
let nextTodoId = 0;

const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text: text,
        id: nextTodoId++
    };
};

export default addTodo;