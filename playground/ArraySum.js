const arrSum = (arr) => {
  const high = Math.max(...arr);
  const sum = arr.reduce((acc, num) => acc + num, 0) - high;
  return sum === high;
};
console.log(arrSum([2, 3, 10, 15]));

const arrSum2 = (arr) => {
  let sumArr = arr.sort((a, b) => a - b);
  let largest = sumArr.pop();
  let resultNum = 0;
  sumArr.forEach((sumA) => (resultNum += sumA));
  return largest === resultNum;
};
console.log(arrSum2([5, 5, 5, 15]));
console.log(arrSum2([5, 5, 15, 24]));

// Example III
const arrSum3 = () => {
  let arr = [9, 6, 9, 11, 35];
  let total = [];
  arr.forEach((ar, idx) => {
    let result;
    for (let i = idx + 1; i < arr.length; i++) {
      if (ar + arr[i] === 46) {
        result = ar + arr[i];
        total.push(result);
      }
    }
  });
  return total;
};
console.log(arrSum3());
