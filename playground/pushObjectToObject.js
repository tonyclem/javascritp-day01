let res = {};
const person = "Clement";
res["name"] = person;
console.log(res); // { name: 'Clement' }

// Example get different between to array of object method
const arr1 = [
  { id: 1, name: "Tom" },
  { id: 2, name: "John" },
];
const arr2 = [{ id: 1, name: "Tom" }];

function getDifference(array1, array2) {
  return array1.filter((object1) => {
    return !array2.find((object2) => {
      // some or find
      return object1.id === object2.id;
    });
  });
}

// 👇️ [{id: 2, name: 'John'}]
console.log(getDifference(arr1, arr2));

// Example
const arr1b = [{ id: 1, name: "Tom" }];
const arr2b = [
  { id: 1, name: "Tom" },
  { id: 2, name: "John" },
];

function getDifference2(array1, array2) {
  return array1.filter((object1) => {
    return !array2.some((object2) => {
      return object1.id === object2.id;
    });
  });
}

const difference = [
  ...getDifference2(arr1b, arr2b),
  ...getDifference2(arr2b, arr1b),
];
// 👇️ [{id: 2, name: 'John'}]
console.log(difference);
