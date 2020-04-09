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

  return { weather, description, icon, temperature, pressure, humidity, wind };
}

function fahrenheitToCelsius(fahrenheit) {
  return (5 / 9 * (Number(fahrenheit) - 32)).toFixed(2);
}

function kelvinToFahrenheit(kelvin) {
  return ((Number(kelvin) - 273.15) * 9 / 5 + 32).toFixed(2);
}

function checkValid(data, type=null) {
  if (!type) {
    return data ? data : '???';
  } else {
    switch (type) {
      case 'temperature':
        return data ? kelvinToFahrenheit(data) + ' ºF' : '???';
        break;
      case 'pressure':
        return data ? data + ' hPa' : '???';
        break;
      case 'humidity':
        return data ? data + '%' : '???';
        break;
      case 'degrees':
        return data ? data + 'º' : '???';
        break;
      case 'speed':
        return data ? data + ' m/s' : '???';
        break;
      default:
        return '???';
        break;
    }
  }
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
  const windSpeed = document.getElementById('speed');
  const windDegrees = document.getElementById('degrees');

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
          temperatureAvg.textContent = checkValid(curated.temperature.avg, 'temperature');
          temperatureMin.textContent = checkValid(curated.temperature.min, 'temperature');
          temperatureMax.textContent = checkValid(curated.temperature.max, 'temperature');
          pressure.textContent = checkValid(curated.pressure, 'pressure');
          humidity.textContent = checkValid(curated.humidity, 'humidity');
          windSpeed.textContent = checkValid(curated.wind.speed, 'speed');
          windDegrees.textContent = checkValid(curated.wind.degrees, 'degrees');
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
