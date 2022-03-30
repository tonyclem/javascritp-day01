function areThereDuplicates(...arguments) {
  let collection = {};

  for (let val in arguments) {
    collection[arguments[val]] = collection[arguments[val] || 0] + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }

  return false;
}
console.log(areThereDuplicates("a", "b", "c", "a"));

// Example II
const duplicate = (...arg) => {
  arg.sort((a, b) => a > b);

  let start = 0;
  let next = 1;

  while (next < arg.length) {
    if (arg[start] === arg[next]) {
      return true;
    }
    next++;
    start++;
  }
  return false;
};
console.log(duplicate(2, 4, 4));
