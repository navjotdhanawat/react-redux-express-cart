import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
const store = configureStore();
import { loadHomeItems } from './actions';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
store.dispatch(loadHomeItems());

// Root component
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
