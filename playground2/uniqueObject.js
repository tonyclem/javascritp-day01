const itemArray = [
  {
    company: "iphone",
    price: 400,
  },
  {
    company: "samsung",
    price: 200,
  },
  {
    company: "clement",
    price: 150,
  },
  {
    company: "iphone",
    price: 500,
  },
  {
    company: "iphone",
    price: 500,
  },
];

const uniqueValues = (items) => {
  let getItem = items.map((item) => item.company);
  return [...new Set(getItem)];
};
console.log(uniqueValues(itemArray));

// Example II
const uniqueValues2 = (arr) => {
  return [
    ...arr.reduce((acc, curr) => {
      acc.add(curr.company);
      return acc;
    }, new Set()),
  ];
};

console.log(uniqueValues2(itemArray));
