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
  const humidity = data.main.humidity;

  const wind = {
    speed : data.wind.speed,
    degrees: data.wind.deg,
  }

  const clouds = data.clouds.all;

  return { weather, description, icon, temperature, pressure, humidity, wind, clouds };
}

function checkValid(data, type, imperial) {
  if (!imperial) {
    switch (type) {
      case 'temperature':
        return data ? data + ' ºC' : '???';
        break;
      case 'pressure':
        return data ? data + ' hPa' : '???';
        break;
      case 'humidity':
      case 'cloudiness':
        return data ? data + '%' : '???';
        break;
      case 'degrees':
        return data ? data + 'º' : '???';
        break;
      case 'speed':
        return data ? data + ' meter/sec' : '???';
        break;
      default:
        return '???';
        break;
    }
  } else {
    switch (type) {
      case 'temperature':
        return data ? data + ' ºF' : '???';
        break;
      case 'pressure':
        return data ? data + ' hPa' : '???';
        break;
      case 'humidity':
      case 'cloudiness':
        return data ? data + '%' : '???';
        break;
      case 'degrees':
        return data ? data + 'º' : '???';
        break;
      case 'speed':
        return data ? data + ' miles/hour' : '???';
        break;
      default:
        return '???';
        break;
    }
  }
}

async function getData(place, imperial) {
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
  const windSpeed = document.getElementById('speed');
  const windDegrees = document.getElementById('degrees');
  const clouds = document.getElementById('clouds');
  const mode = imperial ? 'imperial' : 'metric';

  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${place}&units=${mode}&appid=${api_key}`,
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
          temperatureAvg.textContent = checkValid(curated.temperature.avg, 'temperature', imperial);
          temperatureMin.textContent = checkValid(curated.temperature.min, 'temperature', imperial);
          temperatureMax.textContent = checkValid(curated.temperature.max, 'temperature', imperial);
          pressure.textContent = checkValid(curated.pressure, 'pressure', imperial);
          humidity.textContent = checkValid(curated.humidity, 'humidity', imperial);
          windSpeed.textContent = checkValid(curated.wind.speed, 'speed', imperial);
          windDegrees.textContent = checkValid(curated.wind.degrees, 'degrees', imperial);
          clouds.textContent = checkValid(curated.clouds, 'cloudiness', imperial);
        });
      });
    } else {
      alertify.error('Unknown location');
      mainPlace.textContent = place;
      mainWeather.textContent = '???';
      description.textContent = '???';
      image.src = defaultImage;
      temperatureAvg.textContent = '???';
      temperatureMin.textContent = '???';
      temperatureMax.textContent = '???';
      pressure.textContent = '???';
      humidity.textContent = '???';
      windSpeed.textContent = '???';
      windDegrees.textContent = '???';
    }
  }).catch((error) => {
    alertify.error('Failed fetching the data from the server');
    mainPlace.textContent = '???';
    mainWeather.textContent = '???';
    description.textContent = '???';
    image.src = defaultImage;
    temperatureAvg.textContent = '???';
    temperatureMin.textContent = '???';
    temperatureMax.textContent = '???';
    pressure.textContent = '???';
    humidity.textContent = '???';
    windSpeed.textContent = '???';
    windDegrees.textContent = '???';
  });
}

export { getData };
