// Sometimes you need to manipulate the scopes of your JavaScript depending on what you’re looking to do. A simple demonstration of how to change the scope when looping:

//The .call() and .apply() methods are really sweet, they allows you to pass in a scope to a function, which binds the correct this value. Let’s manipulate the above function to make it so that our this value is each element in the array:

// var links = document.querySelectorAll('nav li');

let links = ["apple", "orange", "bananas", 5];
for (let i = 0; i < links.length; i++) {
  (function () {
    console.log(this);
  }.call(links[i]));
}
