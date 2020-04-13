
export default (() => {
  const container = document.createElement('div');
  const heading = document.createElement('h3');
  const list = document.createElement('ul');
  const speed = document.createElement('li');
  const degrees = document.createElement('li');

  heading.textContent = 'Wind';
  speed.innerHTML = '<strong>Speed</strong>: <span id="speed">???</span>';
  degrees.innerHTML = '<strong>Direction</strong>: <span id="degrees">???</span>';
  list.append(speed, degrees);
  container.append(heading, list);

  return container;
})();
