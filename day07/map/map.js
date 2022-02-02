const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// Example 2
let numbers = [1, 4, 9];
let roots = numbers.map(function (num) {
  return Math.sqrt(num);
});

console.log(roots);
// expected output: Array [1,2,3]

// Example 3
const numbers3 = [1, 2, 3, 4];
const square = (x) => x * x;
const squaredNumbers = numbers3.map(square);

console.log(squaredNumbers);

// Example 4
function map(arr, mapFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const mappedValue = mapFn(arr[i], i, arr);
    result.push(mappedValue);
  }
  return result;
}

const numbers4 = [1, 2, 3, 4];
const square2 = (x) => x * x;
const squaredNumbers2 = map(numbers3, square2);

console.log(squaredNumbers2);
