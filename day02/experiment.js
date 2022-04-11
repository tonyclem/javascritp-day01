const makeFunc = () => {
  let funcA = "Understand";
  const makeFunc2 = () => {
    console.log(funcA);
  };
  return makeFunc2;
};

let newMakeFunc = makeFunc();
newMakeFunc();
