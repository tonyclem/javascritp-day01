// 7. Create a function that filters out negative numbers
// In this challenge, you'll have a function that takes an array as an input and returns an array. But if all goes according to plan, it'll remove the negative numbers. This is another example of a task that'll be useful when combing through data and looking for clever ways to eliminate "bad data."

let filterArr = [1, 2, -3, -4, 5, -6, 7, 8, -9];

const filterFun = (arr) => {
  return arr.filter((item) => item >= 0);
};
console.log(filterFun(filterArr));
