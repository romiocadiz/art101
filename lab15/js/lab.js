// index.js - The purpose of this lab is to practice using AJAX.
// Author: Romi Ocadiz
// Date: May 31st, 2023

function fetchDogImage() {
  // Make a GET request to the Dog API endpoint
  fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
          // Display the fetched image on the HTML page
          const resultElement = document.getElementById('result');
          resultElement.innerHTML = `<img src="${data.message}" alt="Random Dog Image">`;
      })
      .catch(error => {
          console.log('Error:', error);
      });
}

const dogButton = document.getElementById('dogButton');


