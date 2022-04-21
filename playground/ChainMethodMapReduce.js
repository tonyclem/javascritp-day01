const food = [
  { name: "Banana", type: "fruit" },
  { name: "Apple", type: "fruit" },
  { name: "Chocolate", type: "candy" },
  { name: "Orange", type: "fruit" },
];

// let result = [];
// This type of usage is very common
const foodStore = food
  .map((item) => item.type)
  .reduce((result, fruit) => {
    result.push(fruit);
    // return result;
    return [...new Set(result)];
  }, []);

// Example II
const food1 = [
  { name: "Banana", type: "fruit", good: true },
  { name: "biscuits", type: "sacks", good: false },
  { name: "Chocolate", type: "candy", good: false },
  { name: "Orange", type: "fruit", good: true },
];

const foodSt = (fd) => {
  return fd
    .map((f) => f.name)
    .forEach((element) => {
      console.log(element);
    });
};
// console.log(foodSt(food));

// Example III
const arrObj = [
  {
    name: "clement",
    surname: "Lion",
    age: 20,
    married: true,
  },
  {
    name: "tiger",
    surname: "tigons",
    age: 10,
    married: false,
  },
  {
    name: "Eagers",
    surname: "king Bird",
    age: 15,
    married: true,
  },
];

const kingName = (ani) => {
  let num = 20;
  ani.forEach((an) => {
    if (an.age < num) {
      let addNum = an.age;
      return (num += addNum);
    }
  });
  return num;
};
// console.log(kingName(arrObj));
const personObj = (arr) => {
  let addNum = 30;
  let addAll = arr.reduce((ar, idx) => ar + idx, 0);
  return (addNum += addAll);
};

// console.log(personObj(arrObj));

// Example IIII
const products = [
  {
    productId: 234435,
    colorId: 1,
    size: "11-M",
  },
  {
    productId: 443434,
    colorId: 2,
    size: "11-M",
  },
  {
    productId: 343434,
    colorId: 1,
    size: "11-L",
  },
  {
    productId: 322333,
    colorId: 2,
    size: "12-M",
  },
];

const fieldByIndex = (products, field) => {
  return products.reduce((acc, curr) => {
    const key = curr[field];
    const value = acc[key] ? [...acc[key], curr] : [curr];
    acc[key] = value;
    return acc;
  }, {});
};

console.log(fieldByIndex(products, "colorId"));

const places = {
  tours: {
    nearMe: {
      mumbai: {
        date: "Sun Dec 25",
        loc: "The Taj",
        cost: "3000.00",
      },
    },
  },
};
const paths = ["tours", "nearMe", "mumbai", "loc"];
function getLocation(places, paths) {
  return paths.reduce((object, path) => {
    return (object || {})[path];
  }, places);
}
// console.log(getLocation(places, paths));
