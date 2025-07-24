const modal = document.getElementById("modal-overlay")

export function showModal() {
    modal.classList.add("show")
    modal.classList.remove("hide")
}

export function hideModal() {
    modal.classList.add("hide")
    modal.classList.remove("show")
}