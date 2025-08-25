import { availableGames } from "./games.js"

const cartMenu = document.getElementById("menu-carrinho")
const cartList = document.getElementById("lista-carrinho")
document.getElementById("cart-button").addEventListener("click", showCart)
document.getElementById("close-cart").addEventListener("click", hideCart)
cartList.addEventListener("click", event => {
    let removeBtn = event.target.closest(".remove-item")
    if (!removeBtn) return
    const id = removeBtn.dataset.key
    removeFromCart(id)
})
let cartGames = []

export function showCart() {
    cartMenu.classList.add("show-cart")
    cartMenu.classList.remove("hide-cart")
}

export function hideCart() {
    cartMenu.classList.add("hide-cart")
    cartMenu.classList.remove("show-cart")
}

export function addToCart(id) {
    const game = availableGames.find(jogo => jogo.id === id )

    if(cartGames.includes(game.id)) {
        return
    }

    cartGames.push(game.id)
    const cartProduct = `
    <div class="carrinho-item" data-key=${game.id}>
    <img src="imagens/${game.capa}" alt="Capa do jogo ${game.nome}">
    <div class="info">
    <h4>${game.nome}</h4>
    <p>R$ ${game.preco}</p>
    </div>
    <i data-key=${game.id} class="fa-solid fa-trash remove-item"></i>
    </div>`
    
    cartList.innerHTML += cartProduct
}

function removeFromCart(id) {
    cartGames = cartGames.filter(gameId => gameId !== id)
    const selector = `.carrinho-item[data-key=${id}]`
    const el = cartList.querySelector(selector)
}