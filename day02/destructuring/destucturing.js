//  ================ Destructuring =================== //

// here is the link: https://www.learn-js.org/en/Destructuring

// With destructuring we can extract data from a deeper level inside an array / object with a more concise syntax, even giving this 'extracted' data some other name in the same operation.

// In JavaScript we can achieve this in a very simply way:

// Consider this object
const person = {
  head: {
    eyes: "x",
    mouth: {
      teeth: "x",
      tongue: "x",
    },
  },
  body: {
    shoulders: "x",
    chest: "x",
    arms: "x",
    hands: "x",
    legs: "x",
  },
};

// If we want to get head, the old way:
let head = person.head;

// ES6 Destructuring
let { head } = person;

// We can give other name as if a variable was declared, in the same line
let { head: myHead } = person;

// So we can do...
console.log(myHead); // prints '{ eyes, mouth: { ... } }'

// Example 2
let numbers = ["2", "3", "7"];

// Old way
let two = numbers[0];
let three = numbers[1];

// ES6 Destructuring
let [twoss, threess] = numbers;

// We can give them other names too
let [twos: positionZero, threes: positionOne] = numbers;

console.log(positionZero); // prints '2'
console.log(positionOne); // prints '3'

// Example 3
// Old way
function getHeadAndBody(person) {
  let headAndBody = {
    head: person.head,
    body: person.body,
  };

  return headAndBody;
}

// ES6 Destructuring
function getHeadAndBody({ head, body }) {
  return { head, body };
}

// With arrow functions
let getHeadAndBody = ({ head, body }) => {
  head, body;
};

// Warning: Be careful with destructuring, if you aren't sure if the function is going to receive an object with those parameters,
// it's better to use the old way in order to not incurring in head / body is undefined errors.
// You can avoid that type of errors while using ES6 Destructuring giving default parameters to the function,
//  so you can be sure that properties will exist, not being obliged to rely on the parameters received.
