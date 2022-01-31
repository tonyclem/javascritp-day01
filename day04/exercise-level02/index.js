// ==== Exercise 2 ======= //

let quote = "quote";
let teacher = "by John Holmes teaches us to";
let people = "one another";
console.log(
  `${quote} 'There is no exercise better for the heart than reaching down and lifting people up'. ${teacher} help ${people} .`
);

// Exercise 2a
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

// Exercise 2b
// typeof '10'
let number = "10";
console.log(typeof number); // string
let numberInt = parseInt(number);
console.log(numberInt); // 10

// Exercise 2b
//  parseFloat('9.8')
let numsFloat = "9.8";
console.log(typeof numsFloat); // string
let numbersFloat = parseFloat(++numsFloat);
console.log(numbersFloat); // 10

// // Exercise 2c
let py = "Python";
let jg = "jargon";
console.log(py.includes("on")); // true
console.log(jg.includes("on"));

// // Exercise  2d
let course = "I hope this course is not full of jargon";
console.log(course.includes("jargon")); // true

// Exercise 2c
// Generate a random number between 0 and 100 inclusively.
console.log(Math.random(5));
let generateRandon = Math.random(50);
let numRandon = generateRandon * 50;
console.log(numRandon);

// Generate a random number between 50 and 100 inclusively.
// let minNums = 50;
// let floorBt = Math.floor(Math.random(50) * 100);
// console.log(floorBt);

// Exercise 2d
//Generate a random number between 0 and 255 inclusively.
let generateNum3 = Math.floor(Math.random() * 255);
console.log(generateNum3);

// Exercise 2e
//Access the 'JavaScript' string characters using a random number.
let accessJs = "JavaScript";
console.log(Math.random("JavaScript"));

// Exercise 2f
// Use console.log() and escape characters to print the following pattern.
