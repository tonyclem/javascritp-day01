const jsonString = '{"name":"John","age":30}';

const jsonObject = JSON.parse(jsonString);
console.log(typeof jsonObject);
console.log(jsonObject);

// Example II
const jsonString2 = { name: "clement", age: 30 };
const jsonObject2 = JSON.stringify(jsonString2, null, 8);
console.log(typeof jsonString2);
console.log(typeof jsonObject2);
console.log(jsonObject2);
