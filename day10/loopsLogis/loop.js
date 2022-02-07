// Example work to solve

const drinkTypes = ["cola", "lemonade", "water"];
let drinkTray = [];
for (let i = 0; i < 5; i++) {
  let drinkBar = drinkTypes[Math.floor(Math.random() * drinkTypes.length)];
  drinkTray.push(drinkBar);
  let instaRandom = Math.floor(Math.random() - (2 - 1 + 1) + 1);
  instaRandom = drinkTray;
  if (instaRandom[i]) {
    console.log(`"Hey guys, I brought a ${drinkTray[i]}`);
  }
}

var min = 1;
var max = 90;
var stop = 6; //Number of numbers to extract

var numbers = [];

for (let i = 0; i < stop; i++) {
  var n = Math.floor(Math.random() * max) + min;
  var check = numbers.includes(n);

  if (check === false) {
    numbers.push(n);
  } else {
    while (check === true) {
      n = Math.floor(Math.random() * max) + min;
      check = numbers.includes(n);
      if (check === false) {
        numbers.push(n);
      }
    }
  }
}

sort();

// Example random drink with function

const drinkTypes = ["cola", "lemonade", "water"];
const randomDrink = () => {
  const randomDrinkType =
    drinkTypes[Math.floor(Math.random() * drinkTypes.length)];
  return randomDrinkType;
};
const populateDrink = () => {
  let cola = 0;
  let lemonade = 0;
  let water = 0;
  let drink = [];
  while (drink.length < 5) {
    const getDrink = randomDrink();
    if (getDrink === "cola" && cola < 2) {
      cola++;
      drink.push(getDrink);
    } else if (getDrink === "lemonade" && lemonade < 2) {
      lemonade++;
      drink.push(getDrink);
    } else if (getDrink === "water" && water < 2) {
      water++;
      drink.push(getDrink);
    }
  }
  // eslint-disable-next-line array-callback-return
  drink.map((item) => {
    console.log(`Hey guys, I brought a ${item}`);
  });
};
populateDrink();

//  Exampl 2 form Ata

let newArr = [];
while (newArr.length < 5) {
  let randomNum = Math.floor(Math.random() * drinkTypes.length);
  if (
    newArr.indexOf(drinkTypes[randomNum]) == -1 ||
    newArr.indexOf(drinkTypes[randomNum]) ==
      newArr.lastIndexOf(drinkTypes[randomNum])
  ) {
    newArr.push(drinkTypes[randomNum]);
  } else {
    continue;
  }
}
