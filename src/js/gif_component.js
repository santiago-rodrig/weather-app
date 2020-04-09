import defaultImage from '../images/default.png';

export default (() => {
  const container = document.createElement('div');
  const image = document.createElement('img');

  image.src = defaultImage;
  image.classList.add('img-thumbnail');
  container.append(image);

  return container;
})();
