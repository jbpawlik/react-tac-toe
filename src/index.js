import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './state/store.js';
import App from './views/App.jsx';

const initialState = {};
 const store = configureStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);