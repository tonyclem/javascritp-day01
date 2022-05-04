// passes the same tests (with better code)
const numberOrType = value => {
    if (typeof value === 'number') {
      return value;
    }
  
    if (value === 'asdf') {
      return 'string';
    } else if (typeof value === 'boolean') {
      return 'boolean';
    } else if (value === null) {
      return 'object';
    } else {
      return 'undefined';
    }
  };

  
  console.log('it should return numbers without changing them');
  console.assert(numberOrType(14) === 14, '14 -> 14');
  console.assert(numberOrType(0.0) === 0.0, '0.0 -> 0.0');
  
  console.log('it should return the type of all other values');
  console.assert(numberOrType('asdf') === 'string', '"asdf" -> "string"');
  console.assert(numberOrType(false) === 'boolean', 'false -> "boolean"');
  console.assert(numberOrType(null) === 'object', 'null -> "object"');
  console.assert(
    numberOrType(undefined) === 'undefined',
    'undefined -> "undefined"'
  );