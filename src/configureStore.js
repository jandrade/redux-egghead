// libs
import { createStore } from 'redux';
import throttle from 'lodash/throttle';

// reducers
import rootReducer from './reducers/index';

// utils
import { loadState, saveState } from './helpers/localStorage';

const configureStore = () => {
    const persistedState = loadState();

    const store = createStore(
        rootReducer,
        persistedState
    );

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        });
    }, 1000));

    return store;
}

export default configureStore;