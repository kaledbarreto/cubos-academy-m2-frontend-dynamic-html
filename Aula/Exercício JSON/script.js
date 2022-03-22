const root = document.querySelector('body');

fetch('http://jsonplaceholder.typicode.com/albuns/1/photos').then(function (resposta) {
  const promiseBody = resposta.json();

  promiseBody.then(function (body) {
    body.forEach(function (photo) {
      const div = document.createElement('div');
      div.classList.add('card');

      const img = document.createElement('img');
      img.src = photo.url;

      const title = document.createElement('h1');
      title.textContent = photo.title;

      div.append(img, title);
      root.append(div);
    });
  });
});

