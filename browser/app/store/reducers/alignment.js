"use strict";

/*    IMPORTS    */
import { LCAxis, GEAxis } from "../../utils/enums/alignment";

/*    INITIAL STATE    */

const initialState = {
  lawChaos: LCAxis.NEUTRAL,
  goodEvil: GEAxis.NEUTRAL
};

/*    ACTION TYPES    */

const SET_LC = "SET_LC";
const SET_GE = "SET_GE";


/*    ACTION CREATORS    */

const setLC = newLC => ({
  type: SET_LC,
  newLC
});

const setGE = newGE => ({
  type: SET_GE,
  newGE
});

/*    REDUCER    */

const alignmentReducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
  case setLC:
    newState.lawChaos = action.newLC;
    break;
  case setGE:
    newState.goodEvil = action.newGE;
    break;
  default:
    return state; //did not match performable action type
  }

  return newState;
};

/*    EXPORTS    */

export { setLC, setGE, alignmentReducer };
