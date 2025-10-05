const getBoxEl = document.getElementById("box")
const buttons = Array.from(document.querySelectorAll("button[data-color]"))

for (const button of buttons) {
    button.addEventListener("click", () => {
        getBoxEl.style.backgroundColor = button.dataset.color
    })
}