//  =============== for .... of ======================= //
// The for...of statement iterates over values that the iterable object defines to be iterated over.

// You can use let instead of const too, if you reassign the variable inside the block.

const iterable1 = [10, 20, 30];

for (const value of iterable1) {
  console.log(value);
}

const iterable2 = [10, 20, 30];

for (let value of iterable2) {
  value += 1;
  console.log(value);
}

// You can iterate over the arguments object to examine all of the parameters passed into a JavaScript function:
(function () {
  for (const argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3); // 1,2,3

//   You can also iterate over generators, i.e. functions generating an iterable object:
function* fibonacci() {
  // a generator function
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (const n of fibonacci()) {
  console.log(n);
  // truncate the sequence at 1000
  if (n >= 1000) {
    break;
  }
}

//   Example You can also iterate over an object that explicitly implements the iterable protocol:
const iterable3 = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const value of iterable3) {
  console.log(value);
}

//   ============== for .... in  ================= //
// The for...in statement iterates over the enumerable properties of an object.
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

const iterable = [3, 5, 7];
iterable.foo = "hello";

for (const i in iterable) {
  console.log(i); // logs "0", "1", "2", "foo", "arrCustom", "objCustom"
}

for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs "0", "1", "2", "foo"
  }
}

for (const i of iterable) {
  console.log(i); // logs 3, 5, 7
}

// Example for in
var obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

// Example for in
var triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Output:
// "obj.color = red"
