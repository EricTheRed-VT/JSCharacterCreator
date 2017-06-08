'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { aReducer } from './reducers/a';

const rootReducer = combineReducers({
  a: aReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

module.exports = store;
