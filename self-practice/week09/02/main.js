const data = document.getElementById("keyInput");
const log = document.getElementById("keyLog");

data.addEventListener("keydown", function (event) {
    const p = document.createElement("p");
    p.textContent = `You pressed : ${event.key}`
    if (event.key === "Enter") {
        p.style.color = "blue";
    }
    log.appendChild(p);
})