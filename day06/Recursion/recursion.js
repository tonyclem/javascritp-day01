function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
// However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
  if (n <= 0) {
    return n;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
console.log(sum);

// Example

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); //[1, 2, 3, 4, 5]

// We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.

// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    let countUpArray = countdown(n - 1);
    countUpArray.unshift(n);
    return countUpArray;
  }
}
console.log(countdown(5));

// Example OR
// Only change code below this line
function countdown2(n) {
  if (n < 1) {
    return [];
  } else {
    let countUpArray = countdown2(n - 1);
    countUpArray.splice(0, 0, n);
    return countUpArray;
  }
}
console.log(countdown2(5));

//  or
function countdown3(n) {
  return n < 1 ? [] : [n].concat(countdown3(n - 1));
}

// or
function countdown4(n) {
  return n < 1 ? [] : [n, ...countdown4(n - 1)];
}

// We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

// Solutions From freecodecamp

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    let number = rangeOfNumbers(startNum, endNum - 1);
    number.push(endNum);
    return number;
  }
}

console.log(rangeOfNumbers(6, 9));
// console output
// [ 6, 7, 8, 9 ]

// Same Example
function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];
}
