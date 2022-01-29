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
let num = "10";
let numInt = parseInt(num);
console.log(numInt); // 10

//  Number
let num = "10";
let numInt = Number(num);
console.log(numInt); // 10

//  +num
let num = "10";
let numInt = +num;
console.log(numInt); // 10

// String to Float
// We can convert string float number to a float number.
// Any float number inside a quote is a string float number.
// An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:

// ParseFloat
let num = "9.81";
let numFloat = parseFloat(num);
console.log(numFloat); // 9.81

//  Number
let num = "9.81";
let numFloat = Number(num);
console.log(numFloat); // 9.81

// +num
let num = "9.81";
let numFloat = +num;
console.log(numInt); // 9.81

// Float to Int
// We can convert float numbers to integers. We use the following method to convert float to int:

// parseInt()

let num = 9.81;
let numInt = parseInt(num);
console.log(numInt); // 9
