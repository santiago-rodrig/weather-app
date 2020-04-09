import { getData } from './weather';

export default (() => {
  const form = document.createElement('form');
  const formRow = document.createElement('div');
  const searchInputCol = document.createElement('div');
  const searchInput = document.createElement('input');
  const submitButtonCol = document.createElement('div');
  const submitButton = document.createElement('button');

  function searchData(e) {
    e.preventDefault();

    const form = document.getElementById('search-form');
    const input = form.querySelector('input');
    const place = input.value;

    getData(place);
  }

  function handleEnter(e) {
    e.preventDefault();

    if (e.code === 'Enter') {
      const button = document.querySelector('#search-form button');

      button.click();
    }
  }

  // Add event listeners
  form.addEventListener('submit', searchData);
  // form.addEventListener('keypress', handleEnter);

  // Set classes
  form.classList.add('bg-white', 'px-3', 'py-2', 'rounded-top');
  formRow.classList.add('form-row');
  searchInputCol.classList.add('col-10');
  searchInput.classList.add('form-control');
  submitButtonCol.classList.add('col-2');
  submitButton.classList.add('btn', 'btn-primary');

  // Set ids
  form.id = 'search-form';

  // Set attributes
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('placeholder', 'London,uk');
  searchInput.setAttribute('required', 'required');
  searchInput.setAttribute('pattern', '^[A-Z][a-z]+,[a-z]{2}$');

  // Set text
  submitButton.innerHTML = '<i class="fas fa-search"></i>';

  // Append elements
  submitButtonCol.append(submitButton);
  searchInputCol.append(searchInput);
  formRow.append(searchInputCol, submitButtonCol)
  form.append(formRow);

  return form;
})();
