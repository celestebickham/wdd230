
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


window.addEventListener('load', () => {

const api = '3c0753c1209baf3191cdba1b65417830';
let q = "Trier, 276"

//let id = "6554291";  this is the direct location to the city

const url = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${api}&units=imperial`;

 // Using fetch to get data
 fetch(url)
 .then((response) => {
   return response.json();
 })
 .then((data) => {
   const { temp } = data.main;
   const { description, icon } = data.weather[0];

   const iconsrc = `http://openweathermap.org/img/w/${icon}.png`;

   // Interacting with DOM to show data
   weatherIcon.src = iconsrc;
   weatherIcon.alt = `${description}`;
   captionDesc.textContent = `${description}`;
   currentTemp.innerHTML = `${temp}&#176; F`;
 });

//below is not needed as it isn't called, but wanted in the requirements
function displayResults(data) {
    currentTemp.innerHTML = `${data.main}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${icon}png`;
    weatherIcon.alt = `${description}`;
    captionDesc.textContent = `${description}`;
}

});