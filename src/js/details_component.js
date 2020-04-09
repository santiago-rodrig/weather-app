import descriptionComponent from './description_component';
import temperatureComponent from './temperature_component';
import pressureComponent from './pressure_component';
import humidityComponent from './humidity_component';
import windComponent from './wind_component';

export default (() => {
  const column = document.createElement('div');

  column.classList.add('col-md-6');

  column.append(
    descriptionComponent,
    temperatureComponent,
    pressureComponent,
    humidityComponent,
    windComponent
  );

  return column;
})();
