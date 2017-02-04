import { createStore } from 'redux';
import counter from './src/counter.js';

const store = createStore(counter);

console.log(store.getState());

store.dispatch({ type: 'INCREMENT' });

console.log(store.getState());

const render = () => {
    document.body.innerText = store.getState()
};

store.subscribe(render);

render();

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});