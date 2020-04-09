import defaultImage from '../images/default.png';
import alertify from 'alertifyjs/build/alertify';
import 'alertifyjs/build/css/alertify.min.css';

async function getGif(data) {
  const apiKey = 'QSBvewk9ZukYxP00X1KG3XKc2V68uWcG';
  const response = await fetch(`http://api.giphy.com/v1/gifs/translate?s=${data + 'weather'}&api_key=${apiKey}`, { mode: 'cors' });
  const gifData = await response.json();

  return gifData.data.images.fixed_width.url;
}

async function curateData(data) {
  const weather = data.weather[0].main;
  const gif = await getGif(data);
  const description = data.weather[0].description;

  return { weather, gif, description };
}

async function getData(place) {
  const api_key = '87575f6359049d58f9f54e4a9131f5dc';
  const image = document.querySelector('img');
  const mainPlace = document.getElementById('place-main');
  const mainWeather = document.getElementById('weather-main');
  const description = document.getElementById('description');

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${api_key}`, { mode: 'cors' })
    .then((response) => {
      if (response.ok) {
        alertify.success(`${place} fetched!`);

        response.json().then((data) => {
          curateData(data).then((curated) => {
            mainPlace.textContent = place;
            mainWeather.textContent = curated.weather;
            description.textContent = curated.description;
            image.src = curated.gif;
          });
        });
      } else {
        alertify.error('Unknown location');
        mainPlace.textContent = place;
        mainWeather.textContent = '???';
        description.textContent = '???';
        image.src = defaultImage;
      }
    })
    .catch((error) => {
      alertify.error('Failed fetching the data from the server');
      mainPlace.textContent = '???';
      mainWeather.textContent = '???';
      description.textContent = '???';
      image.src = defaultImage;
    });
}

export { getData };
