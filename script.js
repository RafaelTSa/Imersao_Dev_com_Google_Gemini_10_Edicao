let cardContainer = document.querySelector(".card-container");
let dados = [];

async function iniciarBusca() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
}

function renderizarCards(dados) {
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>JavaScript</h2>
        <p>1995</p>
        <p>JavaScript é uma linguagem de programação</p>
        <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank">Saiba mais</a>    
        `;
        cardContainer.appendChild(article);
    }
}