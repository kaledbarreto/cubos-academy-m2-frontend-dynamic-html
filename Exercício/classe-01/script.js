const input = document.querySelector('input');
const root = document.querySelector('.paises');
const urlBase = 'https://restcountries.com/v2/';

(async function () {
  function renderPais(country) {
    const div = document.createElement('div');
    div.classList.add('pais');

    const name = document.createElement('h2');
    name.textContent = country.name;

    const region = document.createElement('span');
    region.textContent = country.region;

    const capital = document.createElement('span');
    capital.textContent = country.capital;

    const population = document.createElement('p');
    population.textContent = country.population;

    const img = document.createElement('img');
    img.src = country.flags.png;

    div.append(name, region, capital, population, img);
    root.append(div);
  }

  async function callApi(url) {
    const resposta = await fetch(urlBase + url);
    return resposta.json();
  }

  const promiseBody = await callApi('all');
  promiseBody.forEach(renderPais);

  input.addEventListener('keydown', async function (event) {
    if (event.key !== 'Enter') {
      return;
    }

    if (input.value === '') {
      location.reload();
    }

    const promiseBody = await callApi(`name/${input.value}`);
    root.innerHTML = "";
    promiseBody.forEach(renderPais);
    input.value = "";
  });
})()

