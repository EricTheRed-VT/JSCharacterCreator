const hashCode = str => {
  let hash = 0;
  if (str.length === 0) return hash;

  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

class Enum {
  // takes a variable number of strings
  constructor() {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] != "string")
        throw new Error(arguments[i] + " is not a valid Enum element name. Must be a string.");

      const elem = arguments[i].toUpperCase();
      if (!this[elem])
        this[elem] = hashCode(elem); //hashed to avoid cases like "Color.RED == 1"
    }

    Object.freeze(this); // don't allow changes to set of elements
  }

  hasElement(str) {
    return this[str.toUpperCase()] != false;
  }

  getName(code) {
    for ( let key of Object.keys(this) ) {
      if (this[key] === code) return key;
    }
    return "";
  }

  list() {
    return Object.values(this);
  }
}

export default Enum;
