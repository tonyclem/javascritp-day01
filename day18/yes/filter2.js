const fruitBasket = [
  "apple",
  "lemon",
  "grapefruit",
  "lemon",
  "banana",
  "watermelon",
  "lemon",
];

let takeOutFruit;
function sanitizeFruitBasket(fruitBasket, takeOutFruitBasket) {
  takeOutFruitBasket = fruitBasket;
  let newArr = takeOutFruitBasket.filter((takeOutFruit) => {
    if (takeOutFruit === "lemon") {
      return false;
    }
    return true;
  });
  console.log(newArr);
}
sanitizeFruitBasket(fruitBasket, takeOutFruit);

//  exact quickly
// let grocery = fruitBasket.filter(function (takeOutFruit) {
//     if (takeOutFruit === "lemon") {
//       return false;
//     }
//     if (takeOutFruit !== "lemon") {
//       true;
//     }
//   });
//   return grocery;
