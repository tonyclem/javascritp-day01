const secondValue = (arr) => {
  return [...new Set(arr)].sort((a, b) => a - b);
};

console.log(secondValue([1]));
console.log(secondValue([2, 4]));
console.log(secondValue([-12, 50, 5, 1, 3, 8, 90]));

const secondValue1 = (arr) => {
  let value = [...new Set(arr)].sort((a, b) => a - b);
  if (value.length < 2) {
    return `${value[0]}`;
  } else if (value.length === 2) {
    return `${value[0]} ${value[1]}`;
  } else {
    return `${value[1]} ${value[value.length - 2]}`;
  }
};
console.log(secondValue1([1]));
console.log(secondValue1([2, 4, 5]));
console.log(secondValue1([-12, 50, 5, 1, 3, 8, 90]));
