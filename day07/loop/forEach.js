// Array.forEach()

const numbers = [1, 2, 3, 4];
let sum = 0;

numbers.forEach((x) => {
  sum += x;
});
console.log(sum); // -> 10

// custom forEach() implementation
function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
}

const numbers = [1, 2, 3, 4];
let sum = 0;

forEach(numbers, (x) => {
  sum += x;
});

console.log(sum); // -> 10
