console.log(doubleEvenNumbers([1, 2, 3, 4]));

// function doubleEvenNumbers(numbers) {
//   const newNumbers = [];
//   numbers.filter((number) => {
//     if (number % 2 === 0) {
//       newNumbers.push(number * 2);
//     }
//   });
//   return newNumbers;
// }

// same code with the one at the top
function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  numbers.filter((number) => number % 2 === 0 && newNumbers.push(number * 2));
  return newNumbers;
}
