const addFun = (arr) => {
  let num = 40;
  let arrFun = arr.reduce((acc, idx) => acc + idx, 0);
  return (num += arrFun);
};

console.log(addFun(10));
