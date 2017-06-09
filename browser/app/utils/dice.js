function roll(nDice, nSides, rollMod = 0, removeHigh = true, nRemove = 0) {
  // handle degenerate/invalid inputs
  if (!nDice || nDice == nRemove) return 0;
  if (nSides == 1) return nDice;
  if (nSides < 0 || nRemove < 0 || nDice < nRemove) {
    throw new Error("Dice Error: Quantity of dice must not be negative.\n" +
      "Quantity of dice removed must be less than quantity rolled.\n" +
      "Number of sides must be greater than 0.");
  }

  //optimization due to commonality of single-die rolls
  if (nDice == 1) return ~~Math.random() * nSides + 1 + rollMod;

  const rolls = [];
  for (var i = 0; i < nDice; i++) rolls.push(~~Math.random() * nSides + 1);

  rolls.sort().splice((removeHigh ? nDice - nRemove : 0), nRemove);

  return rolls.reduce((a, b) => a + b) + rollMod;
}

//common D&D5e roll types
const rollCheck = rollMod => roll(1, 20, rollMod);
const rollAdv = rollMod => roll(2, 20, rollMod, false, 1);
const rollDisadv = rollMod => roll(2, 20, rollMod, true, 1);

export { roll, rollCheck, rollAdv, rollDisadv };
