// Write a function called binarySearch which accept a sorted array and a value and  return the index at which the value exists. otherwise, return -1

const binarySearch = (arr, arrS) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arrS) return i;
  }
  return -1;
};

console.log(
  binarySearch(
    [6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 95, 98, 99],
    95
  )
);

// Example II
const binarySearch2 = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
};

console.log(
  binarySearch2(
    [6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 95, 98, 99],
    95
  )
);
