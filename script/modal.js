import { availableGames } from "./games.js"

const modal = document.getElementById("modal-overlay")
const modal_container = document.getElementById("modal-container")

export function showModal(event) {
    const id = Number(event.target.dataset.key)
    const game = availableGames.find(jogo => jogo.id === id)

    modal_container.innerHTML = `<section id="modal-container">
                    <div class="modal-game-top">
                        <h1>${game.nome}</h1>
                        <div id="modal-img"><img src="imagens/${game.capa}" alt=""></div>
                    </div>
                    <div class="modal-game-info">
                        <h3 class="dev">Desenvolvedora: ${game.desenvolvedora}</h3>
                        <h3 class="genre">Gênero: ${game.genero}</h3>
                        <h3 class="game-desc">${game.descricao}</h3>
                        <h3 class="launch">Lançamento: ${game.lancamento}</h3>
                        <h3 class="ratio">Classificação: ${game.classificacao}</h3>
                        <h3 class="price"> Preço: R$${game.preco}</h3>
                    </div>
                    <button class="add-cart">Adicionar ao Carrinho</button>
                </section> `

    modal.classList.add("show")
    modal.classList.remove("hide")
}

export function hideModal() {
    modal.classList.add("hide")
    modal.classList.remove("show")
}
