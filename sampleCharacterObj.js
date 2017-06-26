const me = {
  abilities: { // map of ability names to abil objs
    strength: new Ability(),
    dexterity: new Ability(),
    //etc.
  },
  race: new Race(/*me*/),
  classes: { // map of class names to class objs
    paladin: new Paladin(/*me*/) // inherit from PlayerCharacterClass class
    // class objects will be complicated
  },
  alignment: { // enums
    lawOrChaos: LEAxis.LAWFUL,
    goodOrEvil: GEAxis.GOOD
  }
  skills: { // map of skill names to skill objs
    //etc.
  }
}
