const mathSequence = (arr) => {
  let arith = [];
  let geo = [];

  for (let i = 1; i < arr.length; i++) {
    let num1 = arr[i] - arr[i - 1];
    arith.push(num1);

    let num2 = arr[i] / arr[i - 1];
    geo.push(num2);
  }
  console.log(arith);
  console.log(geo);
  return -1;
};

console.log(mathSequence([2, 4, 6, 8]));
console.log(mathSequence([3, 9, 36]));

const mathSequence2 = (arr) => {
  let arith = new Set();
  let geo = new Set();

  for (let i = 1; i < arr.length; i++) {
    let num1 = arr[i] - arr[i - 1];
    arith.add(num1);

    let num2 = arr[i] / arr[i - 1];
    geo.add(num2);
  }
  if (arith.size === 1) {
    return "Arithmetic";
  }
  if (geo.size === 1) {
    return "geometric";
  }
  return -1;
};

console.log(mathSequence2([2, 4, 6, 8]));
console.log(mathSequence2([4, 8, 16, 32]));
