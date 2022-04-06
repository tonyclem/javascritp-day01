const fruitsArr = [
  { name: "Banana", type: "fruit" },
  { name: "Apple", type: "fruit" },
  { name: "Chocolate", type: "candy" },
  { name: "Orange", type: "fruit" },
];

const getArr1 = fruitsArr
  .map((fruits) => fruits.type)
  .reduce((acc, curr) => {
    acc.push(curr);
    return [...new Set(acc)];
  }, []);

// Example II same as above but using ES6
const getArr2 = (arr) => {
  return [
    ...arr.reduce((acc, curr) => {
      acc.add(curr.type);
      return acc;
    }, new Set()),
  ];
};
console.log(getArr2(fruitsArr));

// Example III
const getArr3 = (arr) => {
  let templeArr = arr.map((fruits) => fruits.type);
  return [...new Set(templeArr)];
};
getArr3(fruitsArr);

// Every method with includes
const isSubset = (arr1, arr2) => {
  return arr1.every((item) => arr2.includes(item));
};
console.log(isSubset([5, 6, 7], [5, 7, 6, 9]));

const students = [
  { name: "John", score: 50 },
  { name: "Peter", score: 60 },
  { name: "James", score: 55 },
];

const studentsScore = students.every((student) => student.score >= 50); // true

// Find method
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const inventoryFun = (arr) => {
  return arr.find((item) => item.quantity === 2);
};
console.log(inventoryFun(inventory));

const inventoryFun2 = inventory.find((item, i) => {
  if (item.quantity > 2 && i !== 0) return true;
});
