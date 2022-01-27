//  ===  Promise === //

// Exercise 1
function promiseFunction(a, b) {
  const myPromise = new Promise((myResolve, myReject) => {
    setTimeout(function () {
      myResolve("Web Developer " + "junior has to Work smart and hard as well");
    }, 5000);
  });

  return myPromise;
}

promiseFunction(1, 2).then((result) => {
  console.log("okay let see", result);
});

function sumAsync(x, y) {
  const p = new Promise((resolve, reject) => {
    // this resolves the promise we just created with the output of x+y
    resolve(x + y);
  });

  // This returns the promise, not the value
  return p;
}

// let's use the function now
sumAsync(5, 7).then((result) => {
  console.log("The result of the addition is:", result);
});

// Exercise 2

// In a synchronous flow, if we want to tell the user that something went wrong so he can catch an exception, we throw an exception using the throw argument. When using promises, we need to trigger the reject function instead.
// Let's say we want to write the same function, but with a rejection if a value is negative:

function sumAsync(x, y) {
  return new Promise((resolve, reject) => {
    // run this in 500ms from now
    setTimeout(() => {
      if (x < 0 || y < 0) {
        reject("Negative values received");
      } else {
        resolve(x + y);
      }
    }, 500);

    // we don't need to return anything
  });
}

sumAsync(-5, 7)
  .then((result) => {
    console.log("The result of the addition is:", result);
  })
  .catch((error) => {
    console.log("Error received:", error);
  });

// Exercise 3
const ArrowFunction = (a, b) => {
  console.log("1. What's the outcome first wait and see");

  const arrowA = new Promise((solve, ject) => {
    setTimeout(() => {
      console.log("4. Start moving as fast as you can move");
      solve(a * b);
    }, 600);

    console.log("2. first Async promise initial move");
  });
  console.log("3. Async promise on moving");

  return arrowA;
};

ArrowFunction(5, 10).then((outCome) => {
  console.log("5. The outCome is on moving now: ", outCome);
});

// Exercise 4

//When can this be very useful? When the calculation needs to happen indirectly, for example after waiting a while or when retrieving information from the server using the fetch command for example.
// Let's modify the example to resolve the solution only after a half a second:

function sumAsync(x, y) {
  console.log("1. sumAsync is executed");
  const p = new Promise((resolve, reject) => {
    // run this in 500ms from now
    setTimeout(() => {
      console.log(
        "4. Resolving sumAsync's Promise with the result after 500ms"
      );
      resolve(x + y);
    }, 500);

    // we don't need to return anything
    console.log("2. sumAsync Promise is initialized");
  });
  console.log("3. sumAsync has returned the Promise");
  return p;
}

// let's use the function now
sumAsync(5, 7).then((result) => {
  console.log("5. The result of the addition is:", result);
});
