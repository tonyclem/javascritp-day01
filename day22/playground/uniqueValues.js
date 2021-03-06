const uniqueValues = (str) => {
  let values = [];
  for (let letter of str) {
    //     check if the index letter is'nt unique
    if (values.indexOf(letter) !== -1) {
      return false;
    }
    values.push(letter);
  }
  return true;
};

console.log(uniqueValues("abcde"));
console.log(uniqueValues("abcdea"));

// Example II with object
const uniqueValues2 = (str) => {
  let values = {};
  for (let letter of str) {
    //     check if the index letter is'nt unique
    if (values[letter]) {
      return false;
    }
    values[letter] = "exiting";
  }
  return true;
};

console.log(uniqueValues2("acbef"));

// Example III
const uniqueValues3 = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
};

console.log(uniqueValues3("abcdef"));

// Example III
const uniqueValues4 = (str) => {
  let letter = new Set();
  for (let elem of str) {
    if (letter.has(elem)) {
      return false;
    }
    letter.add(elem);
  }
  return true;
};

console.log(uniqueValues4("abcdea"));

// Example IIII
const uniqueValues5 = (str) => {
  return new Set(str).size === str.length;
};

console.log(uniqueValues5("acnbg"));
