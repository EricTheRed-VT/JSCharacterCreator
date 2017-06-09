"use strict";

//my version of a JS enum
const GoodEvil = {
  GOOD: Symbol("good"),
  NEUTRAL: Symbol("neutral"),
  EVIL: Symbol("evil"),
  ANY: Symbol("any"),
  UNALIGNED: Symbol("unaligned")
};
Object.freeze(GoodEvil);
