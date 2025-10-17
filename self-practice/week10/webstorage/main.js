//sessionstorage

// let like = sessionStorage.getItem("like")
// if (sessionStorage.getItem("like") === null) {
//     sessionStorage.setItem("like", like)
// }
// else sessionStorage.setItem("like", ++like)
// alert(sessionStorage.getItem("like"))

//localstorage
let like = localStorage.getItem('like')
if (localStorage.getItem('like') === null)
    localStorage.setItem('like', like)
else localStorage.setItem('like', ++like)
alert(localStorage.getItem("like"))

