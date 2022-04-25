// Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

let obj1 = {
  name: "John",
  age: 30,
};

let obj2 = {
  name: "John",
  age: 30,
};
const compareObjects = (obj1, obj2) => {
  // return JSON.stringify(obj1) === JSON.stringify(obj2); // as the same as below
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

// Example II
// const x = [1, 2, 3, 4, 5];
// const [y, z, a, b] = x;

// Example III
const user = {
  id: 42,
  displayName: "j dave",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};
const func = ({ id }) => {
  return id;
};
// console.log(func(user));

const func2 = ({ displayName: name }) => {
  return name;
};
// console.log(func2(user));

const func3 = ({ fullName: { firstName: first, lastName: last } }) => {
  return `${first} is and lastName ${last}`;
};
// console.log(func3(user));

// Example IV
function map(arr, mapFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const mappedValue = mapFn(arr[i]);
    result.push(mappedValue);
  }
  return result;
}

const numbers3 = [1, 2, 3, 4];
const square2 = (x) => x * x;
const squaredNumbers2 = map(numbers3, square2);
console.log(squaredNumbers2);