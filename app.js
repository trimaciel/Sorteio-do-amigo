//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }

    // Verifica se o nome já foi adicionado
    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    // Adiciona o nome ao array
    listaAmigos.push(nome);
    input.value = ""; // Limpa o campo de entrada

    // Atualiza a lista exibida na tela
    atualizarLista();
}

// Função para atualizar a exibição da lista de amigos
function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpa a lista antes de atualizar

    listaAmigos.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = nome;

        // Botão para remover um nome da lista
        let btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.classList.add("remove-button");
        btnRemover.onclick = function () {
            removerAmigo(index);
        };

        li.appendChild(btnRemover);
        ul.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let nomeSorteado = listaAmigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo Sorteado: <strong>${nomeSorteado}</strong> 🎊</li>`;
}