export default (() => {
  const container = document.createElement('div');
  const image = document.createElement('img');

  image.classList.add('img-thumbnail');
  container.append(image);

  return container;
})();
