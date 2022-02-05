function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

//   Example 2
// quickCheck2(arr, elem) {
//     return arr.indexOf(elem) >= 0 ? true : false;
//   }
//   console.log(quickCheck2(["squash", "onions", "shallots"], "mushrooms"));
