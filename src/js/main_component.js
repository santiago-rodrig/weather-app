import overviewComponent from './overview_component';
import detailsComponent from './details_component';

export default (() => {
  const container = document.createElement('main');

  container.classList.add('container');
  container.id = 'main-container';

  const row = document.createElement('div');

  row.classList.add('row');
  row.append(overviewComponent, detailsComponent);

  container.append(row);

  return container;
})();
