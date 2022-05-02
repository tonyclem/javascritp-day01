// The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it.

const squareList = (arr) => {
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
