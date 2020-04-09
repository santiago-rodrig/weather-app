export default (() => {
  const container = document.createElement('div');
  const heading = document.createElement('h3');
  const list = document.createElement('ul');
  const avg = document.createElement('li');
  const min = document.createElement('li');
  const max = document.createElement('li');

  heading.textContent = 'Temperature';
  list.id = 'temperatures';
  avg.innerHTML = '<strong>Average</strong>: <span id="avg">???</span>';
  min.innerHTML = '<strong>Minimum</strong>: <span id="min">???</span>';
  max.innerHTML = '<strong>Maximum</strong>: <span id="max">???</span>';
  list.append(avg, min, max);
  container.append(heading, list);

  return container;
})();
