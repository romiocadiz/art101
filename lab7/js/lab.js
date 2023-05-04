// index.js - Lab 7: Function
// Author: Romi Ocadiz
// Date: May 3rd, 2023

// Constants

// Functions
function sortUserName() {
  var userName = window.prompt("Hi! Please tell me your name so I can fix it.")
  console.log("userName =", userName);
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log ("nameSorted =", nameSorted);
  return nameSorted;
}
//Output
document.writeln("Here is your sorted name: ",
  sortUserName(), "</br>");
document.writeln("And oh hey, I fixed your name. <br> Your new one is above.")
// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
