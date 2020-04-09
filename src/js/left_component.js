import descriptionComponent from './description_component';

export default (() => {
  const column = document.createElement('div');

  column.classList.add('col-lg-4');

  column.append(descriptionComponent);

  return column;
})();
