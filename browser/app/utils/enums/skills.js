"use strict";

import Enum from "./class";
import { Abilities } from "./abilities";

const Skills = new Enum(
  "athletics", "acrobatics", "sleightOfHand", "stealth", "arcana",
  "history", "investigation", "nature", "religion", "animalHandling",
  "insight", "medicine", "perception", "survival", "deception",
  "intimidation", "performance", "persuasion", "strSave", "dexSave",
  "conSave", "intSave", "wisSave", "chaSave");


const skillAbilities = {};
skillAbilities[Skills.ATHLETICS] = Abilities.STR;

skillAbilities[Skills.ACROBATICS] = Abilities.DEX;
skillAbilities[Skills.SLEIGHTOFHAND] = Abilities.DEX;
skillAbilities[Skills.STEALTH] = Abilities.DEX;

skillAbilities[Skills.ARCANA] = Abilities.INT;
skillAbilities[Skills.HISTORY] = Abilities.INT;
skillAbilities[Skills.INVESTIGATION] = Abilities.INT;
skillAbilities[Skills.NATURE] = Abilities.INT;
skillAbilities[Skills.RELIGION] = Abilities.INT;

skillAbilities[Skills.ANIMALHANDLING] = Abilities.WIS;
skillAbilities[Skills.INSIGHT] = Abilities.WIS;
skillAbilities[Skills.MEDICINE] = Abilities.WIS;
skillAbilities[Skills.PERCEPTION] = Abilities.WIS;
skillAbilities[Skills.SURVIVAL] = Abilities.WIS;

skillAbilities[Skills.DECEPTION] = Abilities.CHA;
skillAbilities[Skills.INTIMIDATION] = Abilities.CHA;
skillAbilities[Skills.PERFORMANCE] = Abilities.CHA;
skillAbilities[Skills.PERSUASION] = Abilities.CHA;

skillAbilities[Skills.STRSAVE] = Abilities.STR;
skillAbilities[Skills.DEXSAVE] = Abilities.DEX;
skillAbilities[Skills.CONSAVE] = Abilities.CON;
skillAbilities[Skills.INTSAVE] = Abilities.INT;
skillAbilities[Skills.WISSAVE] = Abilities.WIS;
skillAbilities[Skills.CHASAVE] = Abilities.CHA;


export { Skills, skillAbilities };
