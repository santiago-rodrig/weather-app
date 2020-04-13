export default (() => {
  const container = document.createElement('div');
  const heading = document.createElement('h3');
  const paragraph = document.createElement('p');

  heading.textContent = 'Description';
  paragraph.textContent = '???';
  paragraph.id = 'description';
  container.append(heading, paragraph);

  return container;
})();
