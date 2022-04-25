function quickCheck(arr, elem) {
    // Only change code below this line
    let result = arr.indexOf(elem) >= 0;
    return result;
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


//   Example II

const funcSpread = (args, num) => {
    let arr = []
    while(args.length > 0) {
        arr.push(args.splice(0, num))
    }
    return arr;
}
console.log(funcSpread([4, 5,7, 3,8], 2));