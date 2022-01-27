// The async and await keywords in JavaScript are used to make asynchronous programming easy, by introducing something called coroutines. A coroutine is a function which can pause its execution and return control to the main loop until some event occurs. It is an alternative approach for using callback functions, which makes it easier to write, understand and maintain.

// ============ Await ============ //

//The await keyword is a special command which tells JavaScript to stop the execution of the current function until a Promise resolves, and then return the promise's value. It can be seen as an endless loop which checks if the promise has been resolved, and returns the value of the resolved promise when it does.
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sumAsync(x, y) {
  // this code waits here for 500 milliseconds
  await sleep(500);
  // done waiting. let's calculate and return the value
  return x + y;
}

// sumAsync is an async function, which means it returns a Promise.
sumAsync(5, 7).then((result) => {
  console.log("The result of the addition is:", result);
});
