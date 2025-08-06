import { showModal, hideModal } from "./modal.js"
import { renderizarCatalogo } from "./gamecard.js"

renderizarCatalogo()

document.querySelectorAll(".info-button").forEach((botao) => {
    botao.addEventListener("click", showModal)
})

document.getElementById("modal-background").addEventListener("click", hideModal)    