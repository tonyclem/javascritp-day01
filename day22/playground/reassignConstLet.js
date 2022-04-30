// reassign const and let
const name = [
  { name: "clement" },
  { surName: "Sunday" },
  { job: "Web developer" },
];

let subject = ["hello", "home", "job"];
subject = name;
// console.log(subject); // the name override the Subject

// Filter
const filterAr = ["one", "two", "fh", "three", "four"];
const get = filterAr.filter(
  (arr) => arr === "one" || arr === "two" || arr === "fh"
);
// console.log(get);

// filter with arrow function
const filterObj = (n) => {
  return n > 19;
};
let num = [3, 5, 20].filter(filterObj);
// console.log(num);

// Filter Example 3
let fruits = ["apple", "banana", "grapes", "mango", "orange"];

const filterFruit = (arr, string = "") => {
  return arr.filter((ar) => {
    return ar.indexOf(string) !== -1;
  });
};

console.log(filterFruit(fruits, "ap"));
