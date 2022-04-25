// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Clement"; // string
let lastName = "Sunday"; // string
let country = "Planet"; // string
let city = "weert"; // string
let age = 27; // number
let isMarried = true; // boolean

// Check if type of '10' is equal to 10
let num = "10"; // string

// Check if parseInt('9.8') is equal to 10
let numInt = parseInt("9.8"); // 9

// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
let oneE = 10;
if (oneE > 4) {
  console.log("yes is true:", true);
} else {
  console.log("No it's false:", false);
}

// Example 2

const x = (x, y) => x * y;
console.log(x(5, 5));

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

const myArray = [];

// Only change code below this line
let ib = 5;
while (ib >= 0) {
  myArray.push(ib);
  ib--;
}
console.log(myArray);

// Push the odd numbers from 9 through 1 to myArray using a for loop.
const myArrayA = [];

// Only change code below this line
for (let i = 9; i >= 1; i -= 2) {
  myArrayA.push(i);
}
console.log(myArrayA);

// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.

const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total = total + myArr[i];
}
console.log(total);

// esting For Loops
const arr = [
  [1, 2, 4],
  [3, 4, 5],
  [5, 6, 5],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

//   Nesting For Loops
// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
      console.log(product);
    }
  }
  return product;
}
multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

// 1
// 2
// 6
// 24
// 120
// 720
// 5040

// do while loop
// Setup
const myArrayC = [];
let ic = 10;

// Only change code below this line
do {
  myArrayC.push(ic);
  ic++;
} while (ic < 5);

console.log(myArrayC);
