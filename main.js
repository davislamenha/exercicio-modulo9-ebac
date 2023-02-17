$('form').on('submit', (e) => {
  e.preventDefault();
  adicionarTarefa();
});

function adicionarTarefa() {
  const tarefa = $('#tarefa-nome').val();
  const li = $('<li></li>');
  const spanTarefa = $(`<span class="tarefa">${tarefa}</span>`);
  const spanRemover = $('<span class="remover"></span>');
  spanTarefa.appendTo(li);
  spanRemover.appendTo(li);
  $(li).appendTo('.lista');
}
