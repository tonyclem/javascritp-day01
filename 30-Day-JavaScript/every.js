const isSubset = (arr1, arr2) => {
  return arr2.every((item) => arr1.includes(item));
};
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7, 9], [5, 7, 6, 9]));

// Exercise 2
const students = [
  { name: "Clement", score: 90 },
  { name: "Fadi", score: 90 },
  { name: "James", score: 75 },
];

const isPassing = students.every((student) => student.score <= 75);
// console.log(isPassing);

const passFunc = (std, score) => {
  return std.every((student) => student.score <= score);
};
// console.log(passFunc(students, 75)); // passed

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 32];
let arrG = arr.every((elem, index, arr) => {
    console.log(` line: -> [[${index}] ${arr}] ${elem}`)
  return elem > 40;
});
console.log(arrG);
