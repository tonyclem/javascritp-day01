// 9. Return a Boolean if a number is divisible by 10
// Here, you'll create a function that'll give you a "true" or "false" Boolean as its output. The inputted number should only return a "true" if it's divisible by 10. Otherwise, your program should return a "false" answer.

let num = 10;
const divisibleBy10 = (num) => {
  return num % 10 === 0;
};
console.log(divisibleBy10(num));
