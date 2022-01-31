// In addition, you can execute the function immediately after creating it:
// An anonymous function is not accessible after its initial creation. Therefore, you often need to assign it to a variable.
let sum = (function (a, b) {
  return a + b;
})(10, 20);
console.log(sum); // 30

// Function 2
function sum2(a, b) {
  return a + b;
}
console.log(sum2(5, 5)); // 10

let show = function (a, b) {
  console.log("Anonymous function");
  return a * b;
};
console.log(show(4, 5)); // 20
show(); // Annonymous

//   Arrow Function
let show2 = () => {
  console.log("Anonymous function2");
};
