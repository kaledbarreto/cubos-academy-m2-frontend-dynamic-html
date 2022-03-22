const input = document.querySelector('input');
const tarefas = document.querySelector('ul');

input.addEventListener('keydown', function (event) {
  if (event.key !== 'Enter' || input.value === '') {
    return;
  }

  const tarefa = document.createElement('li');
  const descricao = document.createElement('span');
  descricao.textContent = input.value;

  const button = document.createElement('button');
  button.textContent = 'X';

  tarefa.addEventListener('click', function () {
    descricao.classList.toggle('completa');
  });

  button.addEventListener('click', function () {
    tarefa.remove();
    button.remove();
  });

  tarefa.append(descricao, button)
  tarefas.append(tarefa);

  input.value = "";
});