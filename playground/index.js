let market = [
  { product: "macBooks", price: 450 },
  { product: "books", price: 45 },
  { product: "microPhone", price: 50 },
  { product: "phone", price: 450 },
];

const sumAll = (arr) => {
  return arr.reduce((acc, idx) => acc + idx.price, 0);
};
console.log(sumAll(market));
