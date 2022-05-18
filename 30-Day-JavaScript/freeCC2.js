const myFunc = () => "value";
console.log(myFunc());

// one function
let magic = () => new Date();

// Example II
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { highToday, tomorrow } = HIGH_TEMPERATURES;
const{  today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;