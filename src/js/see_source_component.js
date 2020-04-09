export default (() => {
  const visitSource = document.createElement('a');

  visitSource.innerHTML = '<i class="fab fa-github"></i>';

  visitSource.classList.add('text-light');

  visitSource.id = 'source-icon';
  visitSource.href = 'https://github.com/santiago-rodrig/weather-app';
  visitSource.setAttribute('target', '_blank');

  return visitSource;
})();
