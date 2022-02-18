function map(arr, mapFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const mappedValue = mapFn(arr[i], i, arr);
    result.push(mappedValue);
  }
  return result;
}
const numbers3 = [1, 2, 3, 4];
const numbers4 = [1, 2, 3, 4];
const square2 = (x) => x * x;
const squaredNumbers2 = map(numbers3, square2);
console.log(squaredNumbers2); // 12 line of code [ 1, 4, 9, 16 ]

// same in little
const numbers5 = [1, 2, 3, 4];
const squaredNumbers5 = numbers5.map((x) => x * x);
console.log(squaredNumbers5); // 3 line of code [ 1, 4, 9, 16 ]

// exercise
const actual = [1, 2, 3, 4];
function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    // ?
    if (numbers[i] % 2 === 0) {
      // ?
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}
console.log(doubleEvenNumbers(actual));

const actual2 = [1, 2, 3, 4];
const newNumbers1 = [];
actual2.forEach((actual) => {
  if (actual % 2 === 0) {
    newNumbers1.push(actual * 2);
  }
});
console.log(newNumbers1);

const actual = doubleEvenNumbers([1, 2, 3, 4]);
console.log(actual);
function doubleEvenNumbers(numbers) {
  const newNumbers = [];
  numbers.filter((number) => number % 2 === 0);
  newNumbers.push(numbers * 2);
  console.log(numbers);
  console.log(newNumbers);
}
