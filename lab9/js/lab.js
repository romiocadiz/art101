// index.js - Javascript for the Web lab 9
// Author: Romi Ocadiz
// Date: May 10th, 2023

console.log("Lab 9 - JavaScript for  the Web");

// Get the output element
var outputEl = document.getElementById("output"); 

//create new elements
var new1El = document.createElement("h3");
new1El.innerHTML = "Thingy Majingy";

var new2El = document.createElement("h4");
new2El.innerHTML = "Something Else";

//Append new elements to the output
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//Task X -- Add a new element to the top of the output

var new3El = document.createElement("h5");
new3El = document.createElement ("h5");
new3El.innerHTML = "Top of the Output Div";
outputEl.prepend(new3El);