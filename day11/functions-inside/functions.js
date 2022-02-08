// const sum = (a, b) => {
//   const multiple = (x) => {
//     return x * x;
//   };
//   return multiple(a) + multiple(b);
// };

// console.log(sum(5, 5));

function createLocalScope() {
  const localVariable =
    "this variable can only be accessed within this function";
  console.log(localVariable);

  const localOnlyHere = "This variable can only be accessed here, nowhere else";
  console.log(localOnlyHere);
}

function createAnotherLocalScope() {
  const localVariable =
    "Even though this variable has the same name, it has nothing to do with the other localVariable, because it doesn't exist outside of that function";
  console.log(localVariable);
}

createLocalScope();
createAnotherLocalScope();

//
const globalVariable = "This variable can be accessed wherever in the code";

function accessGlobalVariable() {
  console.log(globalVariable);
}
console.log(globalVariable);
accessGlobalVariable();
