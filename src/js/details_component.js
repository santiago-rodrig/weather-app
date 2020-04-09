import descriptionComponent from './description_component';
import temperatureComponent from './temperature_component';
import pressureComponent from './pressure_component';
import humidityComponent from './humidity_component';
import windComponent from './wind_component';

export default (() => {
  const column = document.createElement('div');
  const leftColumn = document.createElement('div');
  const rightColumn = document.createElement('div');
  const row = document.createElement('div');

  row.classList.add('row', 'mt-5');
  column.classList.add('col-12', 'col-md-6');
  leftColumn.classList.add('col-6');
  rightColumn.classList.add('col-6');
  leftColumn.append(descriptionComponent, temperatureComponent);
  rightColumn.append(pressureComponent, humidityComponent, windComponent);
  row.append(leftColumn, rightColumn);
  column.append(row);

  return column;
})();
