import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';

// store
import configureStore from './configureStore';

const store = configureStore();

const render = () => {
    ReactDOM.render(
        <Root store={store} />
        ,
        document.getElementById('root')
    );
};

render();