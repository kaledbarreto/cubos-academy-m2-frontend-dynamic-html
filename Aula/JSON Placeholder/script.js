const root = document.querySelector('body');

fetch('http://jsonplaceholder.typicode.com/users').then(function (resposta) {
  const promiseBody = resposta.json();

  promiseBody.then(function (body) {
    body.forEach(function (user) {
      const div = document.createElement('div');
      div.classList.add('user');

      const name = document.createElement('h1');
      name.textContent = user.name;

      const username = document.createElement('p');
      username.textContent = user.username;

      const email = document.createElement('p');
      email.textContent = user.email;

      div.append(name, username, email);
      root.append(div);
    });
  });
});

