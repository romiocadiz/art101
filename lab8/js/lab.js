// index.js - Lab 8 Anon Functions and Callbacks
// Author: Romi Ocadiz
// Date: May 8th, 2023

// Constants

// Variables
var outputEl = document.getElementById("output"); 
// Functions
function square(x){
   return x * x;
}

//test function
console.log("The square of 4 is" + square(4));
console.log("The square of 10 is" + square(10));

var numbers = [1, 2, 3, 4, 5];
console.log("My array is" + numbers);
outputEl.innerHTML = "Original array: [" + numbers + "]<br>";

var result = numbers.map(square);
// should return [1,4,9,14,25]
console.log("The squares of my array are" + result);
outputEl.innerHTML += "The squares of my array are: [" + result + "]<br>";

var result = numbers.map(function(x){
    return x + x;
});
// should return [2,4,6,8,10]
console.log("The doubles of my array are" + result);
outputEl.innerHTML += "The doubles of my array are: [" + result + "]<br>";