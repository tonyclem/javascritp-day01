// Array.reduce()

const numbers = [1, 2, 3, 4];

const sum = (a, b) => a + b;
const total = numbers.reduce(sum, 0);

console.log(total); // -> 10

// Example 2
// A custom reduce() implementation
function reduce(arr, reducerFn, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = reducerFn(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

const numbers2 = [1, 2, 3, 4];

const sum2 = (a, b) => a + b;
const total2 = reduce(numbers2, sum2, 0);

console.log(total2); // -> 10

// Example 3
const arr = [6, 3, 10, 1];

const evenNumbers = arr.reduce((acc, elem) => {
  if (elem % 2 === 0) {
    acc.push(elem);
  }
  return acc;
}, []);

console.log(evenNumbers); // -> [6, 10]

// Example 4
const arr4 = [6, 3, 10, 1];

const squares4 = arr4.reduce((acc, elem) => {
  acc.push(elem * elem);
  return acc;
}, []);

console.log(squares4); // -> [36, 9, 100, 1]

// Example 5
const arr5 = [
  { gender: "F", name: "Joyce" },
  { gender: "M", name: "Jim" },
  { gender: "F", name: "Lucy" },
  { gender: "F", name: "Janet" },
  { gender: "M", name: "Jack" },
  { gender: "M", name: "Ferdinand" },
];

const groupedNames = arr5.reduce((acc, elem) => {
  if (acc[elem.gender]) {
    acc[elem.gender].push(elem);
  } else {
    acc[elem.gender] = [elem];
  }
  return acc;
}, {});

console.log(groupedNames); // Outcome
// {
//     F: [
//       { gender: 'F', name: 'Joyce' },
//       { gender: 'F', name: 'Lucy' },
//       { gender: 'F', name: 'Janet' }
//     ],
//     M: [
//       { gender: 'M', name: 'Jim' },
//       { gender: 'M', name: 'Jack' },
//       { gender: 'M', name: 'Ferdinand' }
//     ]
//   }

// Example 6
// The methods map() and filter() each return a new array. This makes it possible to chain these methods and create a 'pipeline' of operations, to be applied in sequence. The reduce method can return anything, including an array. If a reduce method returns something other than an array it can only be located at the end of an array method chain. The same applied to forEach(): it doesn't return anything. Therefore, it can only be placed at the end of a chain.
const arr6 = [
  { gender: "F", name: "Joyce" },
  { gender: "M", name: "Jim" },
  { gender: "F", name: "Lucy" },
  { gender: "F", name: "Janet" },
  { gender: "M", name: "Jack" },
  { gender: "M", name: "Ferdinand" },
];

const groupedNames6 = arr6
  .filter((elem) => elem.name.startsWith("J"))
  .reduce((acc, elem) => {
    if (acc[elem.gender]) {
      acc[elem.gender].push(elem);
    } else {
      acc[elem.gender] = [elem];
    }
    return acc;
  }, {});

console.log(groupedNames6);
