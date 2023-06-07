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
    //   // success code
    //   comicObj(data);
    //   // image tag and section title
    //   var sectionTitle = $('<h2>').text(comicObj.title); // Create a <h2> element with the title
    //   $('body').append(sectionTitle); // Add the section title to the webpage

    //   var imageTag = $('<img>').attr('src', comicObj.img); // Create an <img> element with the image URL
    //   //imageTag.attr('alt', comicObj.alt); // Set the alt attribute using the alt key from the object
    //  // imageTag.attr('title', comicObj.alt); // Set the title attribute using the alt key from the object
    //  // $('body').append(imageTag); // Add th
    },
    //if the request fails
    error: function (jqXHR, textStatus, errorThrown) {
      // your error code
      console.log("Error:" , textStatus, errorThrown);
    },
  });

