// The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it.

const squareList1 = (arr) => {
  return arr.reduce((sqrIntegers, num) => {
    return Number.isInteger(num) && num > 0
      ? sqrIntegers.concat(num * num)
      : sqrIntegers;
  }, []);
};

const squareList = (arr) => {
  let newArr = arr
    .filter((num) => num > 0 && num % parseInt(num) === 0)
    .map((num) => Math.pow(num, 2));
  return newArr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers); // [25, 9]

// Regular Expressing
function sentensify(str) {
  let newStr = str.split(/\W/).join(" ");
  return newStr;
}
console.log(sentensify("May-the-force-be-with-you")); // May the force be with you

// Example 2
function urlSlug(title) {
  return title.toLowerCase().split(/\s+/).join("-");
}
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")); // a-mind-needs-books-like-a-sword-needs-a-whetstone

function urlSlug2(title) {
  return title
    .split(" ")
    .filter((substr) => substr !== "")
    .join("-")
    .toLowerCase();
}
