import defaultImage from '../images/default.png';
import alertify from 'alertifyjs/build/alertify';
import 'alertifyjs/build/css/alertify.min.css';
import loadingGif from '../images/loading.gif';

async function getGif(data) {
  const apiKey = 'QSBvewk9ZukYxP00X1KG3XKc2V68uWcG';
  const image = document.getElementById('main-gif');

  image.src = loadingGif;

  fetch(
    `http://api.giphy.com/v1/gifs/translate?s=${data}&api_key=${apiKey}`,
    { mode: 'cors' }
  ).then((response) => {
    response.json().then((gifData) => {
      image.src = gifData.data.images.fixed_width.url;
    });
  }).catch((error) => {
    alertify.error('Failed to fetch the gif from the server');
    image.src = defaultImage;
  });
}

async function curateData(data) {
  const weather = data.weather[0].main;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;

  const temperature = {
    avg: data.main.temp,
    min: data.main.temp_min,
    max: data.main.temp_max,
  };

  const pressure = data.main.pressure;

  return { weather, description, icon, temperature, pressure };
}

function farenheitToCelsius(fahrenheit) {
  return 5 / 9 * (Number(fahrenheit) - 32);
}

async function getData(place) {
  const api_key = '87575f6359049d58f9f54e4a9131f5dc';
  const image = document.querySelector('img');
  const mainPlace = document.getElementById('place-main');
  const mainWeather = document.getElementById('weather-main');
  const description = document.getElementById('description');
  const icon = document.createElement('img');
  const temperatureAvg = document.getElementById('avg');
  const temperatureMin = document.getElementById('min');
  const temperatureMax = document.getElementById('max');
  const pressure = document.getElementById('pressure');

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${api_key}`,
    { mode: 'cors' }
  ).then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        curateData(data).then((curated) => {
          alertify.success(`${place} fetched!`);
          mainPlace.textContent = place;
          mainWeather.textContent = curated.weather;
          getGif(curated.weather);
          icon.src = `http://openweathermap.org/img/w/${curated.icon}.png`;
          mainWeather.append(icon);
          description.textContent = curated.description;
          temperatureAvg.textContent = curated.temperature.avg + ' ºF';
          temperatureMin.textContent = curated.temperature.min + ' ºF';
          temperatureMax.textContent = curated.temperature.max + ' ºF';
          pressure.textContent = curated.pressure + ' hPa';
        });
      });
    } else {
      alertify.error('Unknown location');
      mainPlace.textContent = place;
      mainWeather.textContent = '???';
      description.textContent = '???';
      image.src = defaultImage;
    }
  }).catch((error) => {
    alertify.error('Failed fetching the data from the server');
    mainPlace.textContent = '???';
    mainWeather.textContent = '???';
    description.textContent = '???';
    image.src = defaultImage;
  });
}

export { getData };
