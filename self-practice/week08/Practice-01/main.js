const boxid = document.getElementById("box")

const addbutton = document.getElementById("add")
addbutton.addEventListener("click", () => {
    box.classList.add("bordered")
})

const rmbutton = document.getElementById("remove")
rmbutton.addEventListener("click", () => {
    box.classList.remove("bordered")
})

const togbutton = document.getElementById("toggle")
togbutton.addEventListener("click", () => {
    box.classList.toggle("bordered")
})