//      ======  Default ====== //
// Example
const greeting = (name, greeting = "Hello") => {
  console.log(`${greeting} ${name}, welcome aboard!`);
};

greeting("Burak");
greeting("Veronika", "Привет");

const helloWorld = (country, greeting = "good Evenning") => {
  console.log(`${greeting} ${country} it sunny day`);
};

helloWorld("Nigeria");
helloWorld("Netherlands", "SwissLand");
