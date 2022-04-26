// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // When you open a new tab at the end
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
  };
  
  // When you close a tab
  Window.prototype.tabClose = function(index) {
  
    // Only change code below this line

    this.tabs.splice(index, 1);
    return this;
    };
    // const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    // const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab
  
    // this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  
    // // Only change code above this line
  
    // return this;
//    };
  
  // Let's create three browser windows
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
  const socialWindow = new Window(['FB', 'Git', 'Reddit', 'Twitter', 'Medium']); // Social sites
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
  
  // Now perform the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
//   console.log(finalTabs.tabs);

//  Exercise 8

let fixedValue = 4;
function incrementer() {
    return fixedValue += 1;
}
// console.log(incrementer());

// The global variable
const bookList = ["The Hound of the Baskerville", "On The Electrodynamics of Moving Bodies", "Philosophic Naturalism Principal Mathematical", "Disquisitions Arithmetical"];

function add(bookName) {
    bookList.push(bookName);
    return bookList;

}
console.log(add("A Brief History of Time"));

function remove(bookName) {
    const index = bookList.indexOf(bookName);
    if (index > -1) {
        bookList.splice(index, 1);
    }
}
console.log(remove("The Hound of the Baskerville"));


// Exercise 9
/* This function should add a book to the list and return the list */
// New parameters should come before bookName

function add1(list, bookName) {
  return [...list, bookName];
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

function remove1(list, bookName) {
  return list.filter(book => book !== bookName);
}

let newBookList = add1(bookList, 'A Brief History of Time');
let newerBookList = remove1(bookList, 'On The Electrodynamics of Moving Bodies');
let newestBookList = remove1(add1(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

// Exercise 10
function add2(arr, bookName) {
    let newArr = [...arr]; // Copy the bookList array to a new array.
    newArr.push(bookName); // Add bookName parameter to the end of the new array.
    return newArr; // Return the new array.
  }
  
  /* This function should remove a book from the list and return the list */
  // New parameters should come before the bookName one
  
  // Add your code below this line
  function remove2(arr, bookName) {
    let newArr = [...arr]; // Copy the bookList array to a new array.
    if (newArr.indexOf(bookName) >= 0) {
      // Check whether the bookName parameter is in new array.
      newArr.splice(newArr.indexOf(bookName), 1); // Remove the given parameter from the new array.
      return newArr; // Return the new array.
    }
  }