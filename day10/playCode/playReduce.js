const arr = [1, 3, 5, 7, 8];

//  the current value stand for the element
const accNumbers = arr.reduce((accumulator, element) => {
  console.log("accumulator:", accumulator); // accumulator: 3 // accumulator: 15 // accumulator: 105
  console.log("element:", element); // element: 3 // element: 5 // element: 7 // element: 8
  return accumulator * element;
});

// link for example : https://www.codegrepper.com/code-examples/javascript/javascript+reduce+array+of+objects
// var objs = [
//   { name: "Peter", age: 35 },
//   { name: "John", age: 27 },
//   { name: "Jake", age: 28 },
// ];

// objs.reduce(function (accumulator, currentValue) {
//   return accumulator + currentValue.age;
//   console.log("accumulator:", currentValue.age);
// }, 0); // 35 + 27 + 28 = 90

// Example 2
// const posts = [
//   { id: 1, category: "frontend", title: "All About That Sass" },
//   { id: 2, category: "backend", title: "Beam me up, Scotty: Apache Beam tips" },
//   {
//     id: 3,
//     category: "frontend",
//     title: "Sanitizing HTML: Going antibactirial on XSS attacks",
//   },
// ];

// const categoryPosts = posts.reduce((acc, post) => {
//   let { id, category, title } = post;
//   return { ...acc, [category]: [...(acc[(category, title)] || []), id] };
// }, {});

// console.log(categoryPosts);
