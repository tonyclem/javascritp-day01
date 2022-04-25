// Array.forEach()

const numbers1 = [1, 2, 3, 4];
let sum = 0;

numbers1.forEach((x) => {
  sum += x;
});
console.log(sum); 

// custom forEach() implementation
function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
}

const numbers = [1, 2, 3, 4];
let sum2 = 0;

forEach(numbers, (x) => {
  sum2 += x;
});

console.log(sum2); 
