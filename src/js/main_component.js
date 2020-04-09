import centralComponent from './central_component';
import leftComponent from './left_component';

export default (() => {
  const container = document.createElement('div');

  container.classList.add('container');

  const row = document.createElement('div');

  row.classList.add('row');
  row.append(leftComponent, centralComponent);

  container.append(row);

  return container;
})();
