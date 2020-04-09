import gif from './gif_component';

export default (() => {
  const container = document.createElement('div');
  const place = document.createElement('h2');
  const weather = document.createElement('h3');

  place.classList.add('text-center');
  place.textContent = '???';
  place.id = 'place-main';
  weather.classList.add('text-center');
  weather.id = 'weather-main';
  weather.textContent = '???';
  container.classList.add('col-md-6');

  container.append(place, gif, weather);

  return container;
})();
