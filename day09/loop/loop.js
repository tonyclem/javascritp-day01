// Link to course: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops
//   Example 2 from freecodeCamp
// Iterate Through All an Array's Items Using For Loops
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));

// Using a for loop, this function iterates through and accesses each element of the array, and subjects it to a simple test that we have created. In this way, we have easily and programmatically determined which data items are greater than 10, and returned a new array, [12, 14, 80], containing those items.
