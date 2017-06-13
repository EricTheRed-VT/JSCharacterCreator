"use strict";

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import { abilitiesReducer } from "./reducers/abilities";
import { alignmentReducer } from "./reducers/alignment";

const rootReducer = combineReducers({
  abilities: abilitiesReducer,
  alignment: alignmentReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export default store;
