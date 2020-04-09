import gif from './gif_component';

export default (() => {
  const container = document.createElement('div');
  const heading = document.createElement('h1');

  heading.classList.add('text-center');
  heading.id = 'weather-main';

  container.append(gif, heading);

  return container;
})();
