const food = [
  { name: "Banana", type: "fruit" },
  { name: "Apple", type: "fruit" },
  { name: "Chocolate", type: "candy" },
  { name: "Orange", type: "fruit" },
];

// Answer I
let foodArr = food
  .map((item) => item.type)
  .reduce((result, fruit) => {
    result.push(fruit);
    return [...new Set(result)];
  }, []);

// Answer II
const foodArr2 = (food = ["candy"]) => {
  const result = [];
  food.forEach((item) => {
    if (result.indexOf(item.type) === -1) {
      result.push(item.type);
    }
  });
  return result;
};
// console.log(foodArr2(food));

// Answer III
const foodFunc = (food) => {
  return food.reduce((result, item) => {
    if (result[item.type]) {
      result[item.type]++;
    } else {
      result[item.type] = 1;
    }
    return result;
  }, {});
};
// console.log(foodFunc(food));

// Answer IIII
const foodFunc2 = (food = ["candy"]) => {
  const result = {};
  for (let i = 0; i < food.length; i++) {
    if (result[food[i].type]) {
      result[food[i].type]++;
    } else {
      result[food[i].type] = 1;
    }
  }
  return result;
};
// console.log(foodFunc2(food));

// Answer IV
const foodFunc3 = (food = ["candy"]) => {
  const result = {};
  food.forEach((item) => {
    if (result[item.type]) {
      result[item.type]++;
    } else {
      result[item.type] = 1;
    }
  });
  return result;
};
// console.log(foodFunc3(food));

// Answer V
const foodFunc4 = (food = ["candy"]) => {
  const result = {};
  food.forEach((item) => {
    return (result[item.type] = result[item.type] ? result[item.type] + 1 : 1);
  });
  return result;
};
// console.log(foodFunc4(food));

// Exercise 2
let countBits = function (n) {
  // Program Me
  return n
    .toString(2)
    .split("")
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);
};

console.log(countBits('96'));
