//  ========= FUNCTIONS ============= //

//  ======    key     ====== //
// With the arrow function, it is important to remember that statements need to have curly braces. Once the curly braces are present, you always need to write return as well.

const myFunction = (a, z) => {
  const myFunctionInner = (c, y) => {
    return c + y;
  };
  console.log(myFunctionInner(5, 10));
  return a * z;
};
console.log(myFunction(5, 5));

// Example 2 Closure
const makeFunc = () => {
  let funcA = "Understand";
  const makeFunc2 = () => {
    console.log(funcA);
  };
  return makeFunc2;
};

let newMakeFunc = makeFunc();
newMakeFunc();

// Example 3 Closure anonoymous Functionc
const counter = (function () {
  let privacyCount = 0;
  const changeBy = (val) => {
    privacyCount += val;
  };
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privacyCount;
    },
  };
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());

const myFunction3 = (a, z) => {
  const myFunctionInner = (y) => {
    return y * y;
  };
  return myFunctionInner(a) + myFunctionInner(z);
};
console.log(myFunction3(5, 5));

// from FreeCode Camp
