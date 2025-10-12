const form = document.querySelector('form');
const user = document.getElementById("username");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const conpass = document.getElementById("confirm-password");
const txt = document.querySelector("p");

form.addEventListener("submit", function (even) {
    even.preventDefault();

const uservalue = user.value.trim();
const emailvalue = email.value.trim();
const passvalue = pass.value.trim();
const conpassvalue = conpass.value.trim();

if (!uservalue || !emailvalue || !passvalue || !conpassvalue) {
    txt.textContent = "Missing some values, please try again!"
    txt.style.color = "red";
    return;
}

if (passvalue !== conpassvalue) {
    txt.textContent = "Password and confirm do not match, please check again"
    txt.style.color = "red";
    return;
}

txt.textContent = "Your data completed"
txt.style.color = "green";
});