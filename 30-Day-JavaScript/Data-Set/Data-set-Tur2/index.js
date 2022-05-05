const myDiv = document.getElementById("myDiv");
myDiv.innerHTML = "Hello World";
myDiv.style.color = "red";
myDiv.style.backgroundColor = "blue";
myDiv.style.fontSize = "30px";

myDiv.dataset.name = "John";
myDiv.dataset.age = "20";
console.log(myDiv.dataset);
