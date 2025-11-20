let cardContainer = document.querySelector(".card-container");
let dados = [];

async function iniciarBusca() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
}

function renderizarCards(dados) {
    for (let dado of dados)
}