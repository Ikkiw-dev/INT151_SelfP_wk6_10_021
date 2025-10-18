const submit = document.querySelector('div > button')
// console.log(submit)

// //1. add event with aninymous handler function
submit.addEventListener('click', () => {
    console.log('Submit button was clicked!')
})
// submit.removeEventListener('click', () => {
//     console.log("Submit button was clicked!")
// })

//2. add event with named function
// const handlerButton = () => {
//     console.log("Submit button was clicked!")
// }
// submit.addEventListener("click", handlerButton)
// submit.removeEventListener("click", handlerButton)


const divEle = document.querySelector("div")
divEle.addEventListener("click", (event) => {
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.eventPhase)
    console.log("Div was clicked!")
})

const bodyEle = document.body
bodyEle.addEventListener("click", (event) => {
    console.log(event.target)
    console.log(event.currentTarget) //node ที่เราไป add listener เอาไว้ ใน เส้นทาง
    console.log(event.eventPhase)
    console.log("Body was clicked!")
})
