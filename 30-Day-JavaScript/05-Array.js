const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
let peoAge = people.some((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});
console.log(peoAge);

// Solution II 
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);

const peopleFun = (arr, age) => {
  return arr.map((person) => {
    const currentYear = new Date().getFullYear();
    if (currentYear - person.year >= age) {
      return `Yes ${person.name} is ${currentYear - person.year} years old`;
    } else {
      return `Sorry is ${person.name} is ${
        currentYear - person.year
      } years old`;
    }
  });
};
console.log(peopleFun(people, 19));

// Array.prototype.every() // is everyone 19 or older?
const everyOlder = people.every((person) => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});
console.log(everyOlder);

// extract Solution
const isAdult2 = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findCommentFunc = (arr, id) => {
  return arr.find((comment) => comment.id === id);
};

const findComment = comments.find((comment) => {
  return comment.id === 823423;
});
console.log("yeah is:", findComment);

// Array.prototype.findIndex()
// Find the comment with this ID
const checkIndex = (arr, num) => {
  return arr.findIndex((a) => a.id === 823423);
};
console.log(checkIndex(comments))



const findIndexArr = comments.findIndex((comment) => {
  return comment.id === 823423;
});
console.log("yeah is existing:", findIndexArr);

const findIndex = (arr, id) => {
  return arr.findIndex((comment) => {
    return comment.id === id;
  });
};
console.log(findIndex(comments, 823423));

// Exercises
// delete the comment with the ID of 823423
const deleteCommentA = comments.filter((comment) => {
  return comment.id !== 823423;
});
console.log(deleteCommentA)

const deleteComment = (arr, id) => {
  return arr.filter((comment) => {
    return comment.id !== id;
  });
};
console.log(deleteComment(comments, 823423));
