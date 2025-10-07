//q1
const res1 = document.getElementById("output").textContent;
console.log(res1);

//q2
document.getElementById("colorTitle").style.color = "red";

//q3
document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("msg").textContent = "Button have clicked;";
});

//q4
document.getElementById("bgBtn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

//q5
document.getElementById("showBtn").addEventListener("click", function () {
  const n = document.getElementById("nameInput").value;
  document.getElementById("display").textContent = "Hello, " + n + "!";
});

//q6
let ct = 0;
document.getElementById("countBtn").addEventListener("click", function () {
  ct++;
  document.getElementById("counter").textContent = `Clicked ${ct} round`;
});

// //q7
// const items = document.querySelectorAll('.item');
// items.forEach(item => {
//     item.addEventListener('mouseover', () => item.style.backgroundColor = 'lightblue');
//     item.addEventListener('mouseover', () => item.style.backgroundColor = '');
// })

//q8
document.querySelectorAll(".delBtn").forEach((button) => {
  button.addEventListener("click", function () {
    this.parentElement.remove();
  });
});

//q9
// document.getElementbyId("addBtn").addEventListener("click", function () {
//   const txt = document.getElementById("newItem").value.trim();
//   if (txt !== "") {
//     const li = document.createElement("li");
//     li.textContent = txt;
//     document.getElementById("todo").appendChild(li);
//     documen.getElementById("newItem").value = "";
//   }
// });


//q10
// document.getElementById('myForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const email = document.getElementById('email').value;
//     const result = document.getElementById('result');
//     if (email.includes('@')) {
//       result.textContent = 'Valid email!';
//       result.style.color = 'green';
//     } else {
//       result.textContent = 'Invalid email!';
//       result.style.color = 'red';
//     }
//   });