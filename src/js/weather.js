async function getGif(data) {
  const apiKey = 'QSBvewk9ZukYxP00X1KG3XKc2V68uWcG';
  const response = await fetch(`http://api.giphy.com/v1/gifs/translate?s=${data + 'weather'}&api_key=${apiKey}`, { mode: 'cors' });
  const gifData = await response.json();

  return gifData.data.images.fixed_width.url;
}

async function curateData(data) {
  const weather = data.weather[0].main.toLowerCase();
  const gif = await getGif(data);

  return { weather, gif };
}

async function getData(place) {
  const api_key = '87575f6359049d58f9f54e4a9131f5dc';
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${api_key}`, { mode: 'cors' })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      curateData(data).then((curated) => {
        const image = document.querySelector('img');
        const heading = document.querySelector('h1');

        heading.textContent = curated.weather;
        image.src = curated.gif;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

export { getData };
