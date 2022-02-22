let shopping = "sunday";
function market(item) {
  let name = "clement";
  function details() {
    console.log(name);
  }
  return details();
}
market();

// Example
// function makeCounter() {
//   let count = "sunday";
//   return function () {
//     return count;
//   };
// }
// let counter = makeCounter();
// console.log(counter);

// Experiment 3
function multiple(x) {
  function fn(y) {
    return x * y;
  }
  return fn;
}
let display = multiple(5);
console.log(display(3));
console.log(display(9));
console.log(display(20));
console.log(display(5));
