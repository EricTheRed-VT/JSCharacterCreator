"use strict";

import { Enum } from "./";

const LCAxis = new Enum("Lawful", "Neutral", "Chaotic", "any", "unaligned");
const GEAxis = new Enum("Good", "Neutral", "Evil", "any", "unaligned");

export { LCAxis, GEAxis };
