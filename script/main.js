import { availableGames } from "./games.js"
import { showModal, hideModal } from "./modal.js"

document.querySelector(".info-button").addEventListener("click", showModal)
document.getElementById("modal-background").addEventListener("click", hideModal)