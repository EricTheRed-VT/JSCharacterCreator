"use strict";

/*    IMPORTS    */

import { Abilities } from "../../utils/enums/abilities";

/*    INITIAL STATE    */

const initialState = {};

for ( let ability of Abilities.list() ) {
  initialState[ability] = {
    base: 0,
    raceAdj: 0,
    tempAdj: 0
  };
}

/*    ACTION TYPES    */

const SET_BASE = "SET_BASE";
const SET_RACE_ADJ = "SET_RACE_ADJ";
const SET_TEMP_ADJ = "SET_TEMP_ADJ";

/*    ACTION CREATORS    */

const setBase = (abil, newScore) => ({
  type: SET_BASE,
  abil,
  newScore
});

const setRaceAdj = (abil, newRAdj) => ({
  type: SET_RACE_ADJ,
  abil,
  newRAdj
});

const setTempAdj = (abil, newTAdj) => ({
  type: SET_TEMP_ADJ,
  abil,
  newTAdj
});

/*    REDUCER    */

const abilitiesReducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
  case SET_BASE:
    newState[action.abil].base = action.newScore;
    break;

  case SET_RACE_ADJ:
    newState[action.abil].raceAdj = action.newRAdj;
    break;

  case SET_TEMP_ADJ:
    newState[action.abil].tempAdj = action.newTAdj;
    break;

  default: //did not match performable action type
    return state;
  }

  return newState;
};

/*    EXPORTS    */

export { setBase, setTempAdj, setRaceAdj, abilitiesReducer };
