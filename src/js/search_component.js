/* eslint-disable import/no-unresolved */
import alertify from 'alertifyjs/build/alertify';
/* eslint-enable import/no-unresolved */
import getData from './weather';

export default (() => {
  const form = document.createElement('form');
  const formRow = document.createElement('div');
  const searchInputCol = document.createElement('div');
  const searchInput = document.createElement('input');
  const submitButtonCol = document.createElement('div');
  const submitButton = document.createElement('button');
  const temperatureModeBox = document.createElement('div');
  const temperatureModeInput = document.createElement('input');
  const temperatureModeLabel = document.createElement('label');
  const temperatureModeCol = document.createElement('div');

  temperatureModeCol.classList.add('col-12', 'mt-3');
  temperatureModeBox.classList.add('custom-control', 'custom-switch');
  temperatureModeInput.classList.add('custom-control-input');
  temperatureModeInput.setAttribute('type', 'checkbox');
  temperatureModeInput.id = 'temperature-mode';
  temperatureModeLabel.classList.add('custom-control-label');
  temperatureModeLabel.setAttribute('for', 'temperature-mode');
  temperatureModeLabel.textContent = 'Use imperial units?';
  temperatureModeBox.append(temperatureModeInput, temperatureModeLabel);
  temperatureModeCol.append(temperatureModeBox);

  function searchData(e) {
    e.preventDefault();

    const form = document.getElementById('search-form');
    const input = form.querySelector('input[type="text"]');
    const checkBox = form.querySelector('input[type="checkbox"]');
    const place = input.value;
    const regex = /^([a-zA-Z]+|\s)+,[a-z]{2}/;

    if (regex.test(place)) {
      getData(place, checkBox.checked);
    } else {
      alertify.error('Invalid input');
    }
  }

  // Add event listeners
  form.addEventListener('submit', searchData);

  // Set classes
  form.classList.add('bg-white', 'px-3', 'py-3');
  formRow.classList.add('form-row');
  searchInputCol.classList.add('col-10');
  searchInput.classList.add('form-control');
  submitButtonCol.classList.add('col');
  submitButton.classList.add('btn', 'btn-primary', 'mx-auto', 'd-block');

  // Set ids
  form.id = 'search-form';

  // Set attributes
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('placeholder', 'London,uk');
  searchInput.setAttribute('required', 'required');

  // Set text
  submitButton.innerHTML = '<i class="fas fa-search"></i>';

  // Append elements
  submitButtonCol.append(submitButton);
  searchInputCol.append(searchInput);
  formRow.append(searchInputCol, submitButtonCol, temperatureModeCol);
  form.append(formRow);

  return form;
})();
