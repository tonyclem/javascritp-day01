// Find
const inventoryName = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}
// console.log(inventoryName.find(isCherries)); //  {name: 'cherries', quantity: 5} 

// Exercise 2
function filteredArray(arr, elem) {
  let newArr = [];
  arr.forEach((item) => {
    if (item.indexOf(elem) === -1) {
      newArr.push(item);
    }
  });
  return newArr;
}
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9],[4,10,5]], 3));

// Exercise 3
const eyeColor = "eyeColor";
const tekkenCharacter = {
  player: "Hwoarang",
  fightingStyle: "Tae Kwon Doe",
  human: true,
};
tekkenCharacter.favoriteGame = "Chess";
tekkenCharacter["professional"] = "Computer Programmer";
tekkenCharacter[eyeColor] = "Brown";
// console.log(tekkenCharacter);

// Exercise 4
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}
let fruit = checkInventory("apples");
// console.log(fruit);

const getCurrentFood = (food) => {
  return food;
};
let selectedFood = getCurrentFood("apples");
let inventory = foods[selectedFood];
// console.log(inventory);

// Exercise 5

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

//   Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise
// users.hasOwnProperty('Alan');
function isEveryoneHere(userObj) {
  return (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  );
}

// console.log(isEveryoneHere(users));

// Exercise 6
const users2 = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

//  count the users online
function countOnline(usersObj) {
  let count = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      count++;
    }
  }
  return count;
}
//   console.log(countOnline(users2));

//   Exercise 7
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
//   console.log(addFriend(user, 'Pete'));

//  Exercise 8
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => "greenTea";
// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => "blackTea";

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];
  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

// console.log(
//   tea4GreenTeamFCC,
//   tea4BlackTeamFCC
// );
