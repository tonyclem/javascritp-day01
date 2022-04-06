// 5. Create a function that reverses an array
// This challenge is particularly helpful if you're planning to become a Data Scientist. Manipulating data is a significant part of the role, and building the foundations now will help you later down the road when you're working with large databases.

// Start small here and work your way up. Begin with an array of 5 numbers, and then try your program with a larger array to verify its success.

let numbers = [1, 2, 3, 4, 5];
function reversesArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(reversesArray(numbers));
