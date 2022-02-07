// const number = [2, 4, 5, 6];

// const plusNumber = number.map((x) => x + 2);
// console.log(plusNumber);

// Example from freeCodeCamp
let users = [
  { firstName: "Susan", lastName: "Steward" },
  { firstName: "Daniel", lastName: "Longbottom" },
  { firstName: "Jacob", lastName: "Black" },
];

// mapNameTogether id
let userName = users.map((mapNameTogether) => {
  return `${mapNameTogether.firstName} ${mapNameTogether.lastName}`;
});

// console.log(userName);

// Example
let arr = [2, 3, 5, 7];

arr.map(function (element, index, array) {
  console.log(element); // it stand for the element
  console.log(index); // it stand for the index 0 1 2 3
  console.log(array); // it stand for the array [ 2, 3, 5, 7 ] in general
  return element;
}, 80);
