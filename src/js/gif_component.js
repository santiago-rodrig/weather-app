import defaultImage from '../images/default.png';

export default (() => {
  const container = document.createElement('div');
  const image = document.createElement('img');

  image.src = defaultImage;
  image.classList.add('img-fluid');
  image.id = 'main-gif';
  container.id = 'main-gif-container';
  container.append(image);
  container.classList.add('mx-auto', 'rounded', 'p-2', 'bg-light');
  container.style.width = '200px';

  return container;
})();
