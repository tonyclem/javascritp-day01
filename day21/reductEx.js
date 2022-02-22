const industries = [
  { electronic: "computer", price: 300 },
  { electronic: "iphone", price: 100 },
  { electronic: "iron", price: 10 },
  { electronic: "television", price: 30 },
  { electronic: "refrigerator", price: 50 },
];

const ourProduct = (productions) => {
  return productions.reduce((items, production) => items + production.price, 0);
};
console.log(`your Total Price is: ${ourProduct(industries)}`);
