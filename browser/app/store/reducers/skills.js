"use strict";

/*    IMPORTS    */

import { Skills, skillAbilities } from "../../utils/enums/skills";

/*    INITIAL STATE    */

const initialState = {};

for ( let skill of Skills.list() ) {
  initialState[skill] = {
    proficient: false,
    ability: skillAbilities[skill]
  };
}

/*    ACTION TYPES    */

const ADD_SKILL = "ADD_SKILL";
const REM_SKILL = "REM_SKILL";

const SET_PROF = "SET_PROF";
const SET_ABIL = "SET_ABIL";

/*    ACTION CREATORS    */

const addSkill = (skill, abil) => ({
  type: ADD_SKILL,
  skill,
  abil
});

const removeSkill = skill => ({
  type: REM_SKILL,
  skill
});

const setProf = (skill, newProf) => ({
  type: SET_PROF,
  skill,
  newProf
});

const setAbil = (skill, newAbil) => ({
  type: SET_ABIL,
  skill,
  newAbil
});

/*    REDUCER    */

const skillsReducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
  case ADD_SKILL:
    newState[action.skill] = {
      modifier: 0,
      proficient: false,
      ability: action.abil
    };
    break;

  case REM_SKILL:
    delete newState[action.skill];
    break;

  case SET_PROF:
    newState[action.skill].proficient = action.newProf;
    break;

  case SET_ABIL:
    newState[action.skill].ability = action.newAbil;
    break;

  default: //did not match performable action type
    return state;
  }

  return newState;
};

/*    EXPORTS    */

export { addSkill, removeSkill, setMod, setProf, setAbil, skillsReducer };
