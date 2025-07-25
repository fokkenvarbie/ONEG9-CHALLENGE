const nomes = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (!nome) {
    alert("Digite um nome válido.");
    return;
  }

  if (nomes.length >= 10) {
    alert("Você só pode adicionar até dez nomes.");
    return;
  }

  nomes.push(nome);
  input.value = "";
  input.focus();
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  nomes.forEach((nome, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${nome}`;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (nomes.length === 0) {
    alert("Adicione pelo menos um nome para sortear.");
    return;
  }

  const sorteado = nomes[Math.floor(Math.random() * nomes.length)];

  const li = document.createElement("li");
  li.textContent = `Sorteado: ${sorteado}!`;
  resultado.appendChild(li);
}

document.getElementById("amigo").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    adicionarAmigo();
  }
});

window.adicionarAmigo = adicionarAmigo;
window.sortearAmigo = sortearAmigo;
