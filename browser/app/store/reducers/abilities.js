"use strict";

/*    IMPORTS    */

/*    INITIAL STATE    */

class Ability {
  constructor() {
    this.base = 0;
    this.raceAdj = 0;
    this.tempAdj = 0;
  }
}

const initialState = {
  strength: new Ability(),
  dexterity: new Ability(),
  constitution: new Ability(),
  intelligence: new Ability(),
  wisdom: new Ability(),
  charisma: new Ability()
};

/*    ACTION TYPES    */

const SET_BASE = "SET_BASE";
const SET_RACE_ADJ = "SET_RACE_ADJ";
const SET_TEMP_ADJ = "SET_TEMP_ADJ";

/*    ACTION CREATORS    */

const setBase = (abilName, newScore) => ({
  type: SET_BASE,
  abilName,
  newScore
});

const setRaceAdj = (abilName, newRAdj) => ({
  type: SET_RACE_ADJ,
  abilName,
  newRAdj
});

const setTempAdj = (abilName, newTAdj) => ({
  type: SET_TEMP_ADJ,
  abilName,
  newTAdj
});

/*    REDUCER    */

const abilitiesReducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
  case SET_BASE:
    newState[action.abilName].base = action.newScore;
    break;

  case SET_RACE_ADJ:
    newState[action.abilName].raceAdj = action.newRAdj;
    break;

  case SET_TEMP_ADJ:
    newState[action.abilName].tempAdj = action.newTAdj;
    break;

  default: //did not match performable action type
    return state;
  }

  return newState;
};

/*    EXPORTS    */

export { setBase, setTempAdj, setRaceAdj, abilitiesReducer };
