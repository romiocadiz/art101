// index.js - Json and APIs Lab 16
// Author: Romi Ocadiz-Cruz
// Date: June 6th, 2023

//using ajax to get the data from the API
$.ajax({
  //url to the API
    url: "https://xkcd.com/info.0.json",
    //get request
    type: "GET",
    //the type of data expected from the server
    dataType: "json",
    //if the request is successful
    success: function (data) {
      console.log(data);

      // image tag and section title
      var sectionTitle = $('<h2>').text(data.title); // Create a <h2> element with the title
      $('body').append(sectionTitle); // Add the section title to the webpage

      var imageTag = $('<img>').attr('src', data.img); // Create an <img> element with the image URL
      imageTag.attr('alt', data.alt); // Set the alt attribute using the alt key from the object
     imageTag.attr('title', data.alt); // Set the title attribute using the alt key from the object
     $('body').append(imageTag); // Add the image to the webpage
    },
    //if the request fails
    error: function (jqXHR, textStatus, errorThrown) {
      // your error code
      console.log("Error:" , textStatus, errorThrown);
    },
  });

