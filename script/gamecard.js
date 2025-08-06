import { availableGames } from "./games.js";

export function renderizarCatalogo() {
    for (const game of availableGames) {
        const gameCard = `<div class="game-card">
                <img src="imagens/${game.capa}" alt="Capa do Jogo">
                    <div>
                        <h2>${game.nome}</h2>
                        <h3>${game.desenvolvedora}</h3>
                        <h4>${game.genero}</h4>
                        <button class="info-button" data-key=${game.id}>Saiba Mais</button>
                    </div>
            </div>`

        document.getElementById("cards-catalog").innerHTML += gameCard
    }
}