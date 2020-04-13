export default (() => {
  const container = document.createElement('div');
  const heading = document.createElement('h3');
  const paragraph = document.createElement('p');

  heading.textContent = 'Clouds';
  paragraph.textContent = '???';
  paragraph.id = 'clouds';
  container.append(heading, paragraph);

  return container;
})();
