export default (() => {
  const visitSource = document.createElement('a');

  visitSource.innerHTML = 'Take a look at the source code! <i class="fab fa-github" id="source-link"></i>';

  visitSource.classList.add('text-light', 'text-center', 'my-5');

  visitSource.id = 'source-icon';
  visitSource.href = 'https://github.com/santiago-rodrig/weather-app';
  visitSource.setAttribute('target', '_blank');

  return visitSource;
})();
