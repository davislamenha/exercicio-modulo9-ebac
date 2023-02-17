let n = 0;

$('form').on('submit', (e) => {
  e.preventDefault();
  adicionarTarefa();
  ativarRemover();
});

function adicionarTarefa() {
  const tarefa = $('#tarefa-nome').val();
  const li = $(`<li id=tarefa-${n}></li>`);
  const spanTarefa = $(`<span class="tarefa">${tarefa}</span>`);
  const spanRemover = $(`<span class="remover" id="${n}"></span>`);
  spanTarefa.appendTo(li);
  spanRemover.appendTo(li);
  $(li).appendTo('.lista');
  setTimeout(() => {
    $(li).css('display', 'flex').hide().fadeIn(500);
    n++;
  }, 300);
}

function ativarRemover() {
  $('.remover').on('click', ({ target }) => {
    const id = target.id;
    $(`#tarefa-${id}`).fadeOut(500);
    setTimeout(() => {
      $(`#tarefa-${id}`).remove();
    }, 600);
  });
}
