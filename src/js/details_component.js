import descriptionComponent from './description_component';
import temperatureComponent from './temperature_component';
import pressureComponent from './pressure_component';

export default (() => {
  const column = document.createElement('div');

  column.classList.add('col-md-6');
  column.append(descriptionComponent, temperatureComponent, pressureComponent);

  return column;
})();
