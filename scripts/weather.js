const weatherIcon = document.querySelector('#weather-icon');
const loc = document.querySelector('#location');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const humid = document.querySelector('.humid');
const winds = document.querySelector('.winds');

const api = '3c0753c1209baf3191cdba1b65417830';

window.addEventListener('load', () => {
  let id = "4861719";

      const base = `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${api}&units=imperial`;

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { temp } = data.main;
          const place = data.name;
          const { description, icon } = data.weather[0];
          const { humidity } = data.main;
          const { speed } = data.wind;

          const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

          // Interacting with DOM to show data
          weatherIcon.src = iconUrl;
          loc.textContent = `${place}`;
          desc.textContent = `${description}`;
          tempF.textContent = `${temp} °F`;
          humid.textContent = `${humidity}%`;
          winds.textContent = `${speed} mph`;
        });
  
});