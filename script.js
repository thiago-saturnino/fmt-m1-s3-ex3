let tarefas = [
  "acordar",
  "lever filho na escola",
  "ir na academia",
  "trabalhar",
];

//1
function tarefaExiste(tarefaParamentro) {
  let tarefaExistente = tarefas.find((tarefa) => {
    return tarefa === tarefaParamentro;
  });
  console.log(tarefaExistente);
}

//2
function alteraItem(posicao, tarefaAdicionada) {
  tarefas.splice(posicao, 1, tarefaAdicionada);
  console.log(tarefas);
}

//3
function removeItem(posicaoItem) {
  console.log(`o item removido foi : ${tarefas.splice(posicaoItem, 1)}`); //
}

//4
function adicionaItem(item) {
  tarefas.splice(1, 0, item);
  console.log(tarefas);
}

//chamadas das funções
adicionaItem("estudar");
tarefaExiste("ir na academia");
alteraItem(0, "dormir");
removeItem(1);
console.log(tarefas);
