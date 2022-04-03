// Example I
async function testCodeAwait() {
  return 42;
}
const result = testCodeAwait();
console.log(result); // Promise { 42}

// Example II
async function testCodeAwait1() {
  return 42;
}
// const result1 = await testCodeAwait1();
// console.log(result); // 42

// Example III
async function testCodeAwait2() {
  return 42;
}

async function testCodeFun() {
  let result = await testCodeAwait2();
  console.log("line 42:", result);
}
testCodeFun();

// Example IV Error handling
async function testCodeAwait3() {
  throw new Error("oop Error", "Something went wrong");
}

async function testCodeFun1() {
  let result = await testCodeAwait3();
  console.log("line 33:", result);
}
// testCodeFun1();

// Example V
async function testCodeAwait4() {
  throw new Error("oop Error, Something went wrong");
}

async function testCodeFun2() {
  try {
    let result = await testCodeAwait4();
    console.log("line 33:", result);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
testCodeFun2();

// Example VI
function testCodeAwait5() {
  return new Promise((resolve, reject) => {
    throw new Error("oops Error, Something went wrong");
  });
}

async function testCodeFun3() {
  try {
    let result = await testCodeAwait5();
    console.log("line 33:", result);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
// testCodeAwait3(); // oops Error, Something went wrong
