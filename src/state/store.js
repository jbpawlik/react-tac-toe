import { createStore, combineReducers, applyMiddle } from 'redux';
import thunk from 'redux-thunk';
import * reducers from './ducks';

const configureStore = (state = {}) => {
  const rootReducer = combineReducers(reducers);
  const middleware = [thunk];
  const store = createStore(rootReducer, state, applyMiddleware(...middleware));

  return store;
};

export {
  configureStore
};