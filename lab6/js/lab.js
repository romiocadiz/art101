// index.js - Lab 6- Arrays and Objects
// Author: Romi Ocadiz-Cruz
// Date: May 1st, 2023

// Constants
// Define Variables
var myTransport = [" Mazda v3", " bike", " bus", " Uber", " and rides from friends"];

// Create an object for my main ride
var myMainRide = {
  make: "Mazda",
  model: "v3",
  color: "Dark Blue",
  year: 2008,
  age: function() {
      return 2023 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport,"</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
// Functions

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
