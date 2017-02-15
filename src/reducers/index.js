import { combineReducers } from 'redux';

import todos from './todo';

/**
 * Root reducers
 */
const reducers = combineReducers({ todos });

export default reducers;
