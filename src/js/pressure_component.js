export default (() => {
  const container = document.createElement('div');
  const heading = document.createElement('h3');
  const paragraph = document.createElement('p');

  heading.textContent = 'Pressure';
  paragraph.textContent = '???';
  paragraph.id = 'pressure';

  container.append(heading, paragraph);

  return container;
})();
