let inputArray = [
  { id: 1, name: "name1", value: "value1" },
  { id: 2, name: "name2", value: "value2" },
];

let ids = inputArray.map((item) => item.id);
let names = inputArray.map((item) => item.name);
let values = inputArray.map((item) => item.value);

// console.log(ids);
// console.log(names);
// console.log(values);

console.log(`hello my ${ids} and ${names} and ${values}`);

// Example
objArray = [
  { foo: 1, bar: 2 },
  { foo: 3, bar: 4 },
  { foo: 5, bar: 6 },
];

function getFields(input, field) {
  var output = [];
  for (var i = 0; i < input.length; ++i) output.push(input[i][field]);
  return output;
}

var result = getFields(objArray, "foo");
console.log(result);
