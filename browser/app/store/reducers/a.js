'use strict';

/*    IMPORTS    */

/*    INITIAL STATE    */

const initialState = {};

/*    ACTION CONSTANTS    */

const THING = "THING";

/*    ACTION CREATORS    */

const doThing = newData => {
  return {
    type: THING,
    thingData: newData
  };
};

/*    THUNK ACs    */

const doThunk = () => {
  return dispatch => {
    console.log("thunking");
    //do stuff
    dispatch(doThing({}));
  };
};

/*    REDUCER    */

const aReducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
  case THING:
    newState.thing = action.thingData;
    break;

  default: //did not match performable action type
    return state;
  }

  return newState;
};

/*    EXPORTS    */

export { THING, doThing, doThunk, aReducer };
