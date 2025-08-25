import { showModal, hideModal } from "./modal.js"
import { renderizarCatalogo } from "./gamecard.js"
import { showCart, hideCart, addToCart } from "./carrinho.js"

renderizarCatalogo()

document.querySelectorAll(".info-button").forEach((botao) => {
    botao.addEventListener("click", showModal)
})

document.getElementById("modal-background").addEventListener("click", hideModal)    

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-cart")) {
        const id = Number(event.target.dataset.key)
        addToCart(id)
    }
})