//  Changing Data Type (Casting)
// Casting: Converting one data type to another data type.
//  We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error

//   String to Int
// We can convert string number to a number.
// Any number inside a quote is a string number.
// An example of a string number: '10', '5', etc. We can convert string to number using the following methods:

// parseInt()
// Number()
// Plus sign(+)
// parseFloat()

// parseInt
let num1 = "10";
let numInt1 = parseInt(num1);
console.log(numInt1); // 10

//  Number
let num2 = "10";
let numInt2 = Number(num2);
console.log(numInt2); // 10

//  +num
let num3 = "10";
let numInt3 = +num3;
console.log(numInt3); // 10

// String to Float
// We can convert string float number to a float number.
// Any float number inside a quote is a string float number.
// An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:

// ParseFloat
let num4 = "9.81";
let numFloat4 = parseFloat(num4);
console.log(numFloat4); // 9.81

//  Number
let num5 = "9.81";
let numFloat5 = Number(num5);
console.log(numFloat5); // 9.81

// +num
let num6 = "9.81";
let numFloat6 = +num6;
console.log(numFloat6); // 9.81

// Float to Int
// We can convert float numbers to integers. We use the following method to convert float to int:

// parseInt()

let num = 9.81;
let numInt = parseInt(num);
console.log(numInt); // 9
