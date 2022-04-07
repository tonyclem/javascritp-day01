// 6. Sort an array from lowest to highest
// You could create a function for this solution as well, but be sure to try your program with varying lengths and types of arrays. Try one with all integers, another with negative numbers, and another with decimals.

let arrNum = [10, 2, 5, 1, 9, 3, 7, 101, 18];
let arrNum2 = [2.3, 5.1, 1.9, 3.2, 7.2, 18.1, 101.1];
let arrNum3 = [-2 - 3, -1, -5, -7, -9, -101, -18];
function sortArrFromLow2Hight(arr) {
  return arr.sort((a, b) => a - b);
}

sortArrFromLow2Hight(arrNum3); // ?
