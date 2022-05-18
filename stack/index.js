const func = () => console.log("hello world");
const func2 = () => console.log("hello world 2");
const func3 = () => console.log("hello world 3");
const func4 = () => console.log("hello world 4");

setTimeout(func3, 2000);
func();
Promise.resolve().then(func2);
func4();

// Stack

const stack = () => {
  console.log("hello stack");
};

const main = () => {
  stack();
};

main();
