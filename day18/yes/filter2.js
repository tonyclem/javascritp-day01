const fruitBasket = [
  "apple",
  "lemon",
  "grapefruit",
  "lemon",
  "banana",
  "watermelon",
  "lemon",
  "apple",
];

// function sanitizeFruitBasket(myArray, fruit) {
//   myArray.push(fruit);
//   const newArray = myArray.filter((element) => element != "lemon");
//   console.log(fruit);
//   return newArray;
// }
// console.log(sanitizeFruitBasket(fruitBasket));
// console.log(sanitizeFruitBasket(fruitBasket, "apple"));
// console.log(sanitizeFruitBasket(fruitBasket, "pear"));

function sanitizeFruitBasket(arrOfFruit, removeFruit) {
  let newArr = arrOfFruit.filter((element) => {
    if (element === removeFruit) {
      console.log(removeFruit);
      return false;
    }
    return true;
  });

  return newArr;
}
console.log(sanitizeFruitBasket(fruitBasket, "lemon"));
