/* setTimeout and setInterval */

// setTimeout
var timeoutID = setTimeout(bye, 3000);

console.log("hello");

// this clear the time out
// clearTimeout(timeoutID);

function bye() {
  console.log("goodbye");
}

// setInterval

// var count = 0;
// var intId = setInterval(counter, 1000);

// Infinity counting
// function counter() {
//   console.log(++count);
// }
