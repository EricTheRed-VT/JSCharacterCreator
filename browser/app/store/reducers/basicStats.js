"use strict";

/*    IMPORTS    */

/*    INITIAL STATE    */

const initialState = {
  hitPoints: 0,
  armorClass: 0,
  profBonus: 0,
  speed: 0
};

/*    ACTION TYPES    */

const SET_HP = "SET_HP";
const SET_AC = "SET_AC";
const SET_PROF_BONUS = "SET_PROF_BONUS";
const SET_SPEED = "SET_SPEED";


/*    ACTION CREATORS    */

const setHP = newHP => ({
  type: SET_HP,
  newHP
});

const setAC = newAC => ({
  type: SET_AC,
  newAC
});

const setProfBonus = newBonus => ({
  type: SET_PROF_BONUS,
  newBonus
});

const setSpeed = newSpeed => ({
  type: SET_SPEED,
  newSpeed
});

/*    REDUCER    */

const basicStatsReducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
  case setHP:
    newState.hitPoints = action.newHP;
    break;

  case setAC:
    newState.armorClass = action.newAC;
    break;

  case setProfBonus:
    newState.profBonus = action.newBonus;
    break;

  case setSpeed:
    newState.speed = action.newSpeed;
    break;

  default:
    return state; //did not match performable action type
  }

  return newState;
};

/*    EXPORTS    */

export { setHP, setAC, setProfBonus, setSpeed, basicStatsReducer };
