let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("#campo-busca");
let dados = [];

async function carregarDados() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
}

function iniciarBusca() {
    let termoBusca = campoBusca.value.toLowerCase();
    if (termoBusca.trim() === "") {
        renderizarCards(dados); // Mostra todos se a busca estiver vazia
        return;
    }

    let dadosFiltrados = dados.filter(dado => {
        return dado.nome.toLowerCase().includes(termoBusca);
    });

    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards antes de renderizar
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.ano}</p>
        <p>${dado.descrição}</p> 
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        cardContainer.appendChild(article);
    }
}

carregarDados(); // Carrega os dados assim que o script é executado