// index.js - Creating a Javascript file using jQuery
// Author: Romi Ocadiz-Cruz
// Date: May 17th, 2023

//challenge button
$('#challenge').append("<button id='a-button'>Button</button>");

//problem button
$('#problem').append("<button id='b-button'>Button</button>");

//regflection button
$('#reflection').append("<button id='c-button'>Button</button>");

//results button
$('#results').append("<button id='d-button'>Button</button>");

//testing

$("#a-button").click(function(){
  $(this).parent().toggleClass("special");
})

$("#b-button").click(function(){
  $(this).parent().toggleClass("special");
})

$("#c-button").click(function(){
  $(this).parent().toggleClass("special");
})

$("#d-button").click(function(){
  $(this).parent().toggleClass("special");
})