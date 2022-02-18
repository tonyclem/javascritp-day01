// const students = [
//   { name: "Quincy", grade: 96 },
//   { name: "Jason", grade: 84 },
//   { name: "Alexis", grade: 100 },
//   { name: "Sam", grade: 65 },
//   { name: "Katie", grade: 90 },
// ];
// const studentGrades = students.filter((student) => student.grade >= 90);
// console.log(studentGrades);

// Exercise 2
const fruitBasket = [
  "apple",
  "lemon",
  "grapefruit",
  "lemon",
  "banana",
  "watermelon",
  "lemon",
];

// to be sanitized and a string indicating the name of the fruit to be taken out.
let takeOutFruit;
function sanitizeFruitBasket(fruitBasket, takeOutFruit) {
  let newArr = [];
  let grocery = fruitBasket.filter(function (takeOutFruit) {
    if (takeOutFruit === "lemon") {
      return false;
    }
    if (takeOutFruit !== "lemon") {
      true;
    }
  });
  //   return grocery; //?
  console.log(grocery);
}
sanitizeFruitBasket(fruitBasket, takeOutFruit); // ?

// Exercise 3

// let creatures = [
//   { name: "Shark", habitat: "Ocean" },
//   { name: "Whale", habitat: "Ocean" },
//   { name: "Lion", habitat: "Savanna" },
//   { name: "Monkey", habitat: "Jungle" },
// ];

// let aquaticCreatures = creatures.filter(function (creature) {
//   return creature.habitat !== "Ocean";
// });
// console.log(aquaticCreatures);

const array1 = [1, 4, 9, 16];

// pass a function to map
let map1 = array1.map((x) => x * 2);
console.log(array1);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
// array
let newMap = map1.map((y) => y * 2);
console.log(newMap);
