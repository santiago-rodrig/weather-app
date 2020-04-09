export default (() => {
  const container = document.createElement('div');
  const heading = document.createElement('h3');
  const paragraph = document.createElement('p');

  heading.textContent = 'Humidity';
  paragraph.textContent = '???';
  paragraph.id = 'humidity';

  container.append(heading, paragraph);

  return container;
})();
